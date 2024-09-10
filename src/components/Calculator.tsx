"use client";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import React from 'react';
import TFSAvars from "./tfsaInterface"

export default function CalculatorComponent() {
  const [radioValue, setRadioValue] = useState('0');
  

  const input = new TFSAvars();
  
  
  
  
  const radios = [
    { name: 'No', value: '0' },
    { name: 'Yes', value: '1' },
  ];
  
  function displayVals(theClass: TFSAvars){
    let temp = theClass.getTFSAProps(theClass);
    for (let i=0; i < temp.length; i++) {
      console.log(temp[i]);
    }
    
  }
  
  return (
    
    <Card
      bg="light"
      key="light"
      className="mb-2"
      style={{ textAlign: "left" }}>
      <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="canadianResidentYear">
            <Form.Label>Since what year have you been a Canadian Resident?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" ref={input.resident.textInput} onChange={input.resident.focusTextInput} />
            
          </Form.Group>
          {/*
          <Form.Group className="mb-3" controlId="over18">
            <Form.Label>Are you over 18?</Form.Label>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Yes"
            />
          </Form.Group>
          */}
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

          <Form.Group className="mb-3" controlId="birthYear">
            <Form.Label>What year were you born?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" ref={input.born.textInput} onChange={input.born.focusTextInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaContributed">
            <Form.Label>How much have you contributed to your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.contributed.textInput} onChange={input.contributed.focusTextInput}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaWithdrawn">
            <Form.Label>How much have you withdrawn from your TFSA so far?</Form.Label>
            <Form.Control type="number" ref={input.withdrawn.textInput} onChange={input.withdrawn.focusTextInput} />
          </Form.Group>



          <Button variant="dark" type="button" onClick={() => displayVals(input)}>
            Submit
          </Button>

        </Form>
      </Card.Body>
    </Card>
  );

  
}
  
