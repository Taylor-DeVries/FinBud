"use client"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React from "react";
import FHSAvars from "./fhsaInterface";
import tfsaMath from "./tfsaMath";

export default function FhsaCalculatorComponent() {
    const [AgeChecked, setAgeChecked] = React.useState(false);
    const [HouseChecked, setHouseChecked] = React.useState(false);
    const [AccountChecked, setAccountChecked] = React.useState(false);
    const inputs = new FHSAvars();
    
    const AgeSwitch = () => {
        return (
          <Form.Check
            type="switch"
            label="I am over 18."
            id="check18"
            checked={AgeChecked}
            onChange={() => {
                setAgeChecked(!AgeChecked);
                setHouseChecked(false);
                setAccountChecked(false);
            }}
          ></Form.Check>
        );
      };

      const HouseSwitch = () => {
        return (
          <Form.Check
            type="switch"
            label="I currently own a home, or I have owned a home in part within the last 4 years"
            id="checkHouse"
            checked={HouseChecked}
            onChange={() => {
                setHouseChecked(!HouseChecked);
                setAccountChecked(false);
            }}
          ></Form.Check>
        );
      };
      const AccountSwitch = () => {
        return (
          <Form.Check
            type="switch"
            label="I have opened a FHSA already"
            id="checkAccount"
            checked={AccountChecked}
            onChange={() => {setAccountChecked(!AccountChecked);}}
          ></Form.Check>
        );
      };

    const OpenedField = () => {
        return (
                <Form.Group as={Row} className="mb-3" id="birthYear">
                      <Form.Label>What year did you Open your FHSA account?</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="XXXX"
                        ref={inputs.opened.textInput}
                        //onClick={() => OtherClick()}
                        //onBlur={handleChange}
                      />
                      <Form.Text className="errorMessage" id="bornError" muted>
                        {" "}
                      </Form.Text>
                    </Form.Group>
            );
    }

    const ContributedField = () => {
        return (
            <Form.Group as={Row} className="mb-3" id="birthYear">
                  <Form.Label>How much have you contributed so far?</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    ref={inputs.contributed.textInput}
                    //onClick={() => OtherClick()}
                    //onBlur={handleChange}
                  />
                  <Form.Text className="errorMessage" id="bornError" muted>
                    {" "}
                  </Form.Text>
                </Form.Group>
        );
    }


    return (
        <div className="CalculatorForm -mt-10">
        <dialog id="FHSA_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold mb-3 text-lg" style={{ color: "black" }}>
              FHSA Calculator
            </h3>
  
            <Form key="light" style={{ textAlign: "left", color: "black" }}>
              
              {
                <Form.Group className="mb-3">
                  <AgeSwitch /> 
                </Form.Group>
              }
              {
                <Form.Group className="mb-3">
                {AgeChecked ? <HouseSwitch /> : null} 
              </Form.Group>
              }
              {
                <Form.Group className="mb-3">
                {HouseChecked ? <AccountSwitch /> : null} 
              </Form.Group>
              }

            {AccountChecked ? <OpenedField /> : null}

            {AccountChecked ? <ContributedField /> : null}
            
            <Button
              className="btn"
              style={{ color: "black" }}
              //onClick={() => displayVals(input, 0)}
            >
              Submit
            </Button>

            </Form>
            <div className="text-black mt-2" id="calculation"></div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn"
                style={{ color: "black" }}
                onClick={() =>
                  (
                    document.getElementById("FHSA_modal")! as HTMLDialogElement
                  ).close()
                }
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>

    );
}