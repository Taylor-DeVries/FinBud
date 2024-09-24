"use client";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState, useRef } from 'react';
import React from 'react';
import TFSAvars from "./tfsaInterface";
import  tfsaMath  from "./tfsaMath";
import Overlay from "react-bootstrap/Overlay";

export default function CalculatorComponent() {
  const [radioValue, setRadioValue] = useState('0');
  const buttonRef = useRef(null);
  const contributionRoom: number = 0;
  const input = new TFSAvars();
  const [checked, setChecked] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const badInputFlag: boolean[] = [false, false, false, false]
  const [showSwitch, setShowSwitch] = React.useState(false);
  const [bornFlag, setBornFlag] = React.useState(false);
  
  const handleSwitchChange = () => {
    setChecked(!checked);
    console.log(checked.toString());
    let num:number = 0;
    displayVals(input, num);
  };
  const handleBornChange = () => {
    input.born.focusTextInput;
    const element = document.getElementById("bornError")!;
    if(input.born.textInput.current && input.resident.textInput.current && input.contributed.textInput.current){
        const temp = Number(input.born.textInput.current.value);
        if(temp >= 1900 && temp < 2025) {
          element.textContent = null;
          if(temp == 2006){
              setShowSwitch(true);
              handleSwitchChange();
          } else setShowSwitch(false);
          badInputFlag[0] = false;
          let num:number = 0;
          displayVals(input, num);
          handleResidentChange();
          handleContributionChange();
          return;
        }
    }
    badInputFlag[0] = true;
    for(let i = 0; i < badInputFlag.length; i++) {
      console.log(badInputFlag[i].toString());
    }
    element.textContent = "Oops! Please enter a number between 1900-2024";
    }

  const handleResidentChange = () => {
    input.resident.focusTextInput;
    const element = document.getElementById("residentError")!;
    if(input.resident.textInput.current && input.born.textInput.current){
      if(bornFlag == false) {
        element.textContent = null;
        return;
      }
      const temp = Number(input.resident.textInput.current.value);
      if(temp >= Number(input.born.textInput.current.value) && temp < 2025) {
        handleContributionChange();
        badInputFlag[1] = false;
        element.textContent = null;
        let num:number = 0;
        displayVals(input, num);
        return;
      }
    }
    element.textContent = "Oops! Your response cannot be a year before you were born or in the future!"
    badInputFlag[1] = true;
    let num:number = 0;
    displayVals(input,num);
  }
  
  const Switch = () => {
    return (
      <Form.Check type="switch" 
      label="I am over 18."
      id="check18"
      checked={checked}
      onChange={handleSwitchChange}
      >
      </Form.Check> )

  }

  const Results = () => {
    return (
    <div id="results" className="search-results">
    Your TFSA contribution limit is: 
    </div> );
  }
  
  const handleContributionChange = ()  => {
    input.contributed.focusTextInput;
    const element = document.getElementById("contributedError")!;
    let temparray = input.getTFSAProps(input);
    temparray[2] = "0";
    let maxRoom = tfsaMath(temparray);
    let num: number = 0;
    if(input.contributed.textInput.current && input.withdrawn.textInput.current) {
      if(contributeFlag == false) {
        element.textContent = null;
        return;
      }
      
      
      if(Math.floor(Number(input.contributed.textInput.current.value)) <= maxRoom && Math.floor(Number(input.contributed.textInput.current.value)) >= 0) {
        badInputFlag[2] = false;
        element.textContent = null;
        displayVals(input, num);
        if(badInputFlag[3] == true || Math.floor(Number(input.withdrawn.textInput.current.value)) > Math.floor(Number(input.contributed.textInput.current.value))) handleWithdrawalChange();
        return;
      }
      if(Math.floor(Number(input.contributed.textInput.current.value)) < 0) {
        badInputFlag[2] = true;
        element.textContent = "Oops! negative values for contribution are not allowed! Please enter a positive number";
        return;
      }
    }
    badInputFlag[2] = true;
    displayVals(input, num);
    element.textContent = "Warning: The number you have entered is higher then your maximum contribution limit and withdrawal amount! You will pay interest with this amount";
  }
  const handleWithdrawalChange = () => {
    input.withdrawn.focusTextInput;
    const element = document.getElementById("withdrawnError")!;
    const num: number = 0;
    if(input.withdrawn.textInput.current && input.contributed.textInput.current) {
      if(Math.floor(Number(input.withdrawn.textInput.current.value)) <= Math.floor(Number(input.contributed.textInput.current.value)) && Math.floor(Number(input.withdrawn.textInput.current.value)) >= 0) {
        badInputFlag[3] = false;
        element.textContent = null;
        displayVals(input, num);
        handleContributionChange();
        return;
      }
    }
    badInputFlag[3] = true;
    element.textContent = "Oops! Value must be a non-negative number less then amount contributed. Please try again!";
    displayVals(input, num);
  }
  
  function displayVals(theClass: TFSAvars, contributionRoom: number){
    const element = document.getElementById("calculation")!;
    for(let i = 0; i < 4; i++){
      if(badInputFlag[i] == true || (checked == true && showSwitch == true)) {
        let temp:Number = tfsaMath(["keyword","","",""]);
        element.textContent = temp.toString();
        setShowResults(true);
        return;
      }
    }
    let temp = theClass.getTFSAProps(theClass);
    contributionRoom = tfsaMath(temp);
    setShowResults(true);
    
    if(element ==null){
      alert("oops");
    }
    
    element.textContent = contributionRoom.toString();
  }
  
  return (
    
    <Card
      bg="light"
      key="light"
      className="mb-2"
      style={{ textAlign: "left" }}>
      <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="birthYear">
            <Form.Label>What year were you born?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" ref={input.born.textInput} onBlur={handleBornChange} />
            <Form.Text className="errorMessage" id="bornError" muted> </Form.Text>
          </Form.Group>
          {
            <Form.Group className="mb-3" >
            {showSwitch ? < Switch /> : null }
            </Form.Group>
            
          /*<Form.Group className="mb-3" controlId="over18">
            <Form.Label>Are you over 18?</Form.Label>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Yes"
            />
          </Form.Group>
          */
          }
          {/*<Form.Group className="mb-3" controlId="over18">
            <Form.Label>Are you over 18?</Form.Label>
            <br />
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={'outline-dark'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>*/
        }

          

          <Form.Group className="mb-3" controlId="canadianResidentYear">
            <Form.Label>Since what year have you been a Canadian Resident?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" ref={input.resident.textInput} onClick={() => setBornFlag(true)} onBlur={handleResidentChange} />
            <Form.Text className="errorMessage" id="residentError"  muted> </Form.Text>
            
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaContributed">
            <Form.Label>How much have you contributed to your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.contributed.textInput} onClick={() => setContributeFlag(true)} onBlur={handleContributionChange}/>
            <Form.Text className="errorMessage" id="contributedError" muted></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaWithdrawn">
            <Form.Label>How much have you withdrawn from your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.withdrawn.textInput} onBlur={handleWithdrawalChange} />
            <Form.Text className ="errorMessage" id="withdrawnError" muted></Form.Text>
          </Form.Group>

        </Form>
        <div> { showResults ? <Results /> : null } </div>
        <div id="calculation"></div>
      </Card.Body>
    </Card>
  );

  
}
  
