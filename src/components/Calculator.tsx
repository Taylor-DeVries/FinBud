"use client";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import TFSAvars from "./tfsaInterface";
import  tfsaMath  from "./tfsaMath";
import Overlay from "react-bootstrap/Overlay";
import render from 'react-dom'


 function CalculatorComponent() {
  const input = new TFSAvars();
  const [checked, setChecked] = React.useState(false);
  var myChecked:boolean = true;
  const [showResults, setShowResults] = React.useState(false);
  var badInputFlag: boolean[] = [false, false, false, false];
  const [showSwitch, setShowSwitch] = React.useState(false);
  const [bornFlag, setBornFlag] = React.useState(false);
  
  function residentClick() {
    setBornFlag(true);
    setShowResults(false);
    const element = document.getElementById("calculation")!;
    element.textContent = null;
  }

  function OtherClick() {
    setShowResults(false);
    const element = document.getElementById("calculation")!;
    element.textContent = null;
  }
  
  const handleChange = () => {
    handleBornChange();
    if (badInputFlag[0]) return;
    handleResidentChange();
    if(badInputFlag[1]) return; 
    //console.log(inputFlag.toString());
    handleContributionChange();
    if (badInputFlag[2]) return;
    handleWithdrawalChange();
    return;
  }

  const handleSwitchChange = () => {
    setChecked(!checked);
    myChecked = checked;
    console.log(checked.toString());
    let num:number = 0;
    OtherClick();
    for(let i = 0; i < badInputFlag.length; i++) {
      console.log(badInputFlag[i].toString());
    }
  };
  function handleBornChange() {
    input.born.focusTextInput;
    const element = document.getElementById("bornError")!;
    if(input.born.textInput.current && input.resident.textInput.current && input.contributed.textInput.current){
        const temp = Number(input.born.textInput.current.value);
        if(temp >= 1900 && temp < 2025) {
          element.textContent = null;
          if(temp == 2006){
              setShowSwitch(true);
          } else setShowSwitch(false);
          badInputFlag[0] = false;
          element.textContent = null;
          let num:number = 0;
          return;
        }
        badInputFlag[0] = true;
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
        
        return;
      }
      if(temp == 0 && !bornFlag) {
        badInputFlag[1] = true;
        element.textContent = null;
        return;
      }
    }
    element.textContent = "Oops! Your response cannot be a year before you were born or in the future!"
    badInputFlag[1] = true;
    let num:number = 0;
   
  }
  const handleWithdrawalChange = () => {
    input.withdrawn.focusTextInput;
    const element = document.getElementById("withdrawnError")!;
    const num: number = 0;
    if(input.withdrawn.textInput.current && input.contributed.textInput.current) {
      if(Math.floor(Number(input.withdrawn.textInput.current.value)) <= Math.floor(Number(input.contributed.textInput.current.value)) && Math.floor(Number(input.withdrawn.textInput.current.value)) >= 0) {
        badInputFlag[3] = false;
        element.textContent = null;
        
        return;
      }
    }
    badInputFlag[3] = true;
    element.textContent = "Oops! Value must be a non-negative number less then amount contributed. Please try again!";
  }
  const handleContributionChange = ()  => {
    input.contributed.focusTextInput;
    const element = document.getElementById("contributedError")!;
    let temparray = input.getTFSAProps(input);
    temparray[2] = "0";
    let maxRoom = tfsaMath(temparray);
    let num: number = 0;
    if(input.contributed.textInput.current && input.withdrawn.textInput.current) {
      
      if(Math.floor(Number(input.contributed.textInput.current.value)) <= maxRoom && Math.floor(Number(input.contributed.textInput.current.value)) >= 0) {
        badInputFlag[2] = false;
        element.textContent = null;
        
        return;
      }
      if(Math.floor(Number(input.contributed.textInput.current.value)) < 0) {
        badInputFlag[2] = true;
        element.textContent = "Oops! negative values for contribution are not allowed! Please enter a positive number";
        return;
      }
    }
    badInputFlag[2] = true;
    element.textContent = "Warning: The number you have entered is higher then your maximum contribution limit and withdrawal amount! You will pay interest with this amount";
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
  
  
  
  
  function displayVals(theClass: TFSAvars, contributionRoom: number){
    const element = document.getElementById("calculation")!;
    console.log(checked.toString());
    console.log(showSwitch.toString());
    for (let i =0; i < badInputFlag.length; i++) {
      console.log(badInputFlag[i].toString()) 
    }
    for (let i =0; i < badInputFlag.length; i++) {
        if(badInputFlag[i] == true) {
          element.textContent = "Please solve all above errors, or enter values for all fields, before submitting";
          return; 
        }
        if ((checked == false && showSwitch == true)){
          element.textContent = "You must be 18 to have a TFSA. If you are 18, please click on the switch above.";
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
    <>
        <Form className="mt-10"
        key="light"
        style={{ textAlign: "left", color: "black"}}>
        <Form.Group as={Row} className="mb-3" controlId="birthYear">
            <Form.Label>What year were you born?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" ref={input.born.textInput} onClick={() => OtherClick()} onBlur={handleChange} />
            <Form.Text className="errorMessage" id="bornError" muted> </Form.Text>
          </Form.Group>
          {
            <Form.Group className="mb-3" >
            {showSwitch ? < Switch /> : null }
            </Form.Group>
            
          }
          {
        }

          

          <Form.Group as={Row} className="mb-3" controlId="canadianResidentYear">
            <Form.Label>Since what year have you been a Canadian Resident?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" ref={input.resident.textInput} onClick={() => residentClick()} onBlur={handleChange} />
            <Form.Text className="errorMessage" id="residentError"  muted> </Form.Text>
            
            
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="tfsaContributed">
            <Form.Label>How much have you contributed to your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.contributed.textInput} onClick={() => OtherClick()} onBlur={handleChange}/>
            <Form.Text className="errorMessage" id="contributedError" muted></Form.Text>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="tfsaWithdrawn">
            <Form.Label>How much have you withdrawn from your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.withdrawn.textInput} onClick={() => OtherClick()} onBlur={handleChange} />
            <Form.Text className ="errorMessage" id="withdrawnError" muted></Form.Text>
          </Form.Group>

          <Button onClick={(() => displayVals(input, 0))}>Submit</Button>

        </Form>
        <div> { showResults ? <Results /> : null } </div>
        <div id="calculation"></div>
      
      
    
    </>
  );
  
  
}
export default CalculatorComponent;
  
