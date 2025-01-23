"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React from "react";
import TFSAvars from "./tfsaInterface";
import tfsaMath from "./tfsaMath";

function CalculatorComponent() {
  const input = new TFSAvars();
  const [checked, setChecked] = React.useState(false);
  let myChecked: boolean = true;
  const [showResults, setShowResults] = React.useState(false);
  const [showSwitch, setShowSwitch] = React.useState(false);
  const [bornFlag, setBornFlag] = React.useState(false);
  const [showWithdrawnCurr, setWithdrawnCurr] = React.useState(false);
  const [BornInputFlag, setBornInputFlag] = React.useState(false);
  const [ResidentInputFlag, setResidentInputFlag] = React.useState(false);
  const [ContributedInputFlag, setContributedInputFlag] = React.useState(false);
  const [WithdrawInputFlag, setWithdrawInputFlag] = React.useState(false);
  const [WithdrawCurrInputFlag, setWithdrawCurrInputFlag] =
    React.useState(false);

  // Handle form field changes

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
    handleResidentChange();
    handleContributionChange();
    handleWithdrawalChange();
    handleCurrWithdrawChange();
    return;
  };

  const handleSwitchChange = () => {
    setChecked(!checked);
    myChecked = checked;
    let num: number = 0;
    OtherClick();
    handleChange();
  };
  function handleBornChange() {
    input.born.focusTextInput;
    const element = document.getElementById("bornError")!;
    if (
      input.born.textInput.current &&
      input.resident.textInput.current &&
      input.contributed.textInput.current
    ) {
      const temp = Number(input.born.textInput.current.value);
      if (temp >= 1900 && temp < 2026) {
        element.textContent = null;
        if (temp == 2007) {
          setShowSwitch(true);
        } else setShowSwitch(false);
        setBornInputFlag(false);
        element.textContent = null;
        let num: number = 0;
        return;
      }
      setBornInputFlag(true);
    }
    element.textContent = "Oops! Please enter a number between 1900-2025";
  }

  const handleResidentChange = () => {
    input.resident.focusTextInput;
    const element = document.getElementById("residentError")!;
    if (input.resident.textInput.current && input.born.textInput.current) {
      if (bornFlag == false) {
        element.textContent = null;
        return;
      }
      const temp = Number(input.resident.textInput.current.value);
      if (temp >= Number(input.born.textInput.current.value) && temp < 2026) {
        setResidentInputFlag(false);
        element.textContent = null;
        let num: number = 0;

        return;
      }
      if (temp == 0 && !bornFlag) {
        setResidentInputFlag(true);
        element.textContent = null;
        return;
      }
    }
    element.textContent =
      "Oops! Your response cannot be a year before you were born or in the future!";
    setResidentInputFlag(true);
    let num: number = 0;
  };
  const handleWithdrawalChange = () => {
    input.withdrawn.focusTextInput;
    const element = document.getElementById("withdrawnError")!;
    const num: number = 0;
    if (
      input.withdrawn.textInput.current &&
      input.contributed.textInput.current
    ) {
      if (
        Math.floor(Number(input.withdrawn.textInput.current.value)) <=
          Math.floor(Number(input.contributed.textInput.current.value)) &&
        Math.floor(Number(input.withdrawn.textInput.current.value)) >= 0
      ) {
        setWithdrawInputFlag(false);
        element.textContent = null;
        if (Math.floor(Number(input.withdrawn.textInput.current.value)) != 0) {
          setWithdrawnCurr(true);
          return;
        }
        setWithdrawnCurr(false);
        return;
      }
    }
    setWithdrawnCurr(false);
    setWithdrawInputFlag(true);
    element.textContent =
      "Oops! Value must be a non-negative number less then amount contributed. Please try again!";
  };

  const handleContributionChange = () => {
    input.contributed.focusTextInput;
    const element = document.getElementById("contributedError")!;
    let temparray = input.getTFSAProps(input);
    temparray[2] = "0";
    let maxRoom = tfsaMath(temparray);
    let num: number = 0;
    if (
      input.contributed.textInput.current &&
      input.withdrawn.textInput.current
    ) {
      if (
        Math.floor(Number(input.contributed.textInput.current.value)) <=
          maxRoom &&
        Math.floor(Number(input.contributed.textInput.current.value)) >= 0
      ) {
        setContributedInputFlag(false);
        element.textContent = null;

        return;
      }
      if (Math.floor(Number(input.contributed.textInput.current.value)) < 0) {
        setContributedInputFlag(true);
        element.textContent =
          "Oops! negative values for contribution are not allowed! Please enter a positive number";
        return;
      }
    }
    setContributedInputFlag(true);
    element.textContent =
      "Warning: The number you have entered is higher then your maximum contribution limit and withdrawal amount! You will pay interest with this amount";
  };

  const handleCurrWithdrawChange = () => {
    const element = document.getElementById("withdrawnCurrError")!;

    if (
      input.withdrawn.textInput.current &&
      input.withdrawnCurr.textInput.current
    ) {
      if (
        Math.floor(Number(input.withdrawnCurr.textInput.current.value)) <=
          Math.floor(Number(input.withdrawn.textInput.current.value)) &&
        Math.floor(Number(input.withdrawnCurr.textInput.current.value)) >= 0
      ) {
        setWithdrawCurrInputFlag(false);
        element.textContent = null;
        return;
      }
    }
    setWithdrawCurrInputFlag(true);
    element.textContent =
      "error! Withdrawal amount cannot exceed total withdrawal amount!";
    return;
  };

  const Switch = () => {
    return (
      <Form.Check
        type="switch"
        label="I am over 18."
        id="check18"
        checked={checked}
        onChange={handleSwitchChange}
      ></Form.Check>
    );
  };

  const Results = () => {
    return (
      <div id="results" className="search-results">
        Your TFSA contribution limit is:
      </div>
    );
  };

  function displayVals(theClass: TFSAvars, contributionRoom: number) {
    const element = document.getElementById("calculation")!;
    if (checked == false && showSwitch == true) {
      element.textContent =
        "You must be 18 to have a TFSA. If you are 18, please click on the switch above.";
      return;
    }

    if (
      BornInputFlag ||
      ResidentInputFlag ||
      ContributedInputFlag ||
      WithdrawInputFlag ||
      WithdrawCurrInputFlag
    ) {
      element.textContent =
        "Please solve all above errors, or enter values for all fields, before submitting";
      return;
    }

    let temp = theClass.getTFSAProps(theClass);

    contributionRoom = tfsaMath(temp);
    setShowResults(true);

    if (element == null) {
      alert("oops");
    }

    element.textContent = "$" + contributionRoom.toString();
  }

  return (
    <div className="CalculatorForm -mt-10">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold mb-3 text-lg" style={{ color: "black" }}>
            TFSA Calculator
          </h3>

          <Form key="light" style={{ textAlign: "left", color: "black" }}>
            <Form.Group as={Row} className="mb-3" id="birthYear">
              <Form.Label>What year were you born?</Form.Label>
              <Form.Control
                type="number"
                placeholder="XXXX"
                ref={input.born.textInput}
                onClick={() => OtherClick()}
                onBlur={handleChange}
              />
              <Form.Text className="errorMessage" id="bornError" muted>
                {" "}
              </Form.Text>
            </Form.Group>
            {
              <Form.Group className="mb-3">
                {showSwitch ? <Switch /> : null}
              </Form.Group>
            }
            {}

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="canadianResidentYear"
            >
              <Form.Label>
                Since what year have you been a Canadian Resident?
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="XXXX"
                ref={input.resident.textInput}
                onClick={() => residentClick()}
                onBlur={handleChange}
              />
              <Form.Text className="errorMessage" id="residentError" muted>
                {" "}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="tfsaContributed">
              <Form.Label>
                How much have you contributed to your TFSA so far?
              </Form.Label>
              <Form.Control
                type="number"
                ref={input.contributed.textInput}
                onClick={() => OtherClick()}
                onBlur={handleChange}
              />
              <Form.Text
                className="errorMessage"
                id="contributedError"
                muted
              ></Form.Text>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="tfsaWithdrawn">
              <Form.Label>
                How much have you withdrawn from your TFSA so far?
              </Form.Label>
              <Form.Control
                type="number"
                ref={input.withdrawn.textInput}
                onClick={() => OtherClick()}
                onBlur={handleChange}
              />
              <Form.Text
                className="errorMessage"
                id="withdrawnError"
                muted
              ></Form.Text>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="tfsaWithdrawnCurr">
              <Form.Label>
                How much of that amount have you withdrawn this year?
              </Form.Label>
              <Form.Control
                type="number"
                ref={input.withdrawnCurr.textInput}
                onClick={() => OtherClick()}
                onBlur={handleChange}
              />
              <Form.Text
                className="errorMessage"
                id="withdrawnCurrError"
                muted
              ></Form.Text>
            </Form.Group>

            <Button
              className="btn"
              style={{ color: "black" }}
              onClick={() => displayVals(input, 0)}
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
                  document.getElementById("my_modal_1")! as HTMLDialogElement
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
export default CalculatorComponent;
