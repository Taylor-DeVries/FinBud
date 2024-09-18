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

  
  const handleSwitchChange = () => {
    setChecked(!checked);
  };
  
  const handleBornChange = () => {
    input.born.focusTextInput;
    const element = document.getElementById("bornError")!;
    if(input.born.textInput.current){
        const temp = Number(input.born.textInput.current.value);
        if(temp >= 1900 && temp < 2025) {
          element.textContent = null;
          if(temp == 2006){
              setShowSwitch(true);
          } else setShowSwitch(false);
          badInputFlag[0] = false;
          return;
        }
    }
    badInputFlag[0] = true;
    element.textContent = "Oops! Please enter a number between 1900-2024";
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
  const radio = 0;
    
  
  function displayVals(theClass: TFSAvars, contributionRoom: number){
    
    let temp = theClass.getTFSAProps(theClass);
    contributionRoom = tfsaMath(temp);
    console.log(contributionRoom);
    console.log(checked.toString());
    setShowResults(true);
    const element = document.getElementById("calculation")!;
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
            <Form.Control type="number" placeholder="XXXX" ref={input.resident.textInput} onChange={input.resident.focusTextInput} />
            
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaContributed">
            <Form.Label>How much have you contributed to your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.contributed.textInput} onChange={input.contributed.focusTextInput}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaWithdrawn">
            <Form.Label>How much have you withdrawn from your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.withdrawn.textInput} onChange={input.withdrawn.focusTextInput} />
          </Form.Group>



          <Button variant="dark" type="button" onClick={() => displayVals(input, contributionRoom)}>
            Submit
          </Button>

        </Form>
        <div> { showResults ? <Results /> : null } </div>
        <div id="calculation"></div>
      </Card.Body>
    </Card>
  );

  
}
  
