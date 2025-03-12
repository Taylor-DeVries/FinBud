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
    const input = new FHSAvars();
    const [OpenedInputFlag, setOpenedInputFlag] = React.useState(false);
      const [ContributedInputFlag, setContributedInputFlag] = React.useState(false);
    const [showResults, setShowResults] = React.useState(false);
    
    function OtherClick() {
      setShowResults(false);
      const element = document.getElementById("calculation")!;
      element.textContent = null;
    }


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
            label="I currently own a home, or I have owned or jointly owned a home within the last 4 years"
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
                <div>
                      <Form.Label>What year did you open your FHSA account?</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="XXXX"
                        ref={input.opened.textInput}
                        onClick={() => OtherClick()}
                        onBlur={() => handleOpenedChange()}
                      />
                </div>      
            );
    }

    const ContributedField = () => {
        return (
              <div>
                  <Form.Label>How much have you contributed so far?</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    ref={input.contributed.textInput}
                    onClick={() => OtherClick()}
                    //onBlur={handleChange}
                  />
              </div>
        );
    }

    const handleOpenedChange = () => {
      input.opened.focusTextInput;
      const element = document.getElementById("openedError")!;
      if (input.opened.textInput.current) {
        if (Number(input.opened.textInput.current.value) <= 2025 && 
            Number(input.opened.textInput.current.value) >= 2023) {
          setOpenedInputFlag(false);
          element.textContent = null;
  
          return;
        }
        if (AccountChecked == false) {
          setOpenedInputFlag(false);
          element.textContent = null;
        }
      }
      element.textContent =
        "Oops! Your response cannot be a year before you were born or in the future!";
      setOpenedInputFlag(true);
      let num: number = 0;
    };
    
    const Results = () => {
      return (
        <div id="results" className="search-results">
          Your TFSA contribution limit is:
        </div>
      );
    };

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
            <Form.Group as={Row} className="mb-3" id="birthYear">
            {AccountChecked ? <OpenedField /> : null}
            <Form.Text className="errorMessage" id="openedError" muted>
                        {" "}
                      </Form.Text>
                    </Form.Group>

            <Form.Group as={Row} className="mb-3" id="birthYear">
            {AccountChecked ? <ContributedField /> : null}
            <Form.Text className="errorMessage" id="contributedError" muted>
                    {" "}
                  </Form.Text>
                </Form.Group>
            <Button
              className="btn"
              style={{ color: "black" }}
              onClick={() => {setShowResults(!showResults);
                console.log(input.opened.textInput.current.value);
              }}
            >
              Submit
            </Button>

            </Form>
            <div className="text-black mt-3">
            {" "}
            {showResults ? <Results /> : null}{" "}
          </div>

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