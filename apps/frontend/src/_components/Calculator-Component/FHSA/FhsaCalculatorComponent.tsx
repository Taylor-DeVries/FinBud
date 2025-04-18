'use client';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';
import FHSAvars from './fhsaInterface';
import FhsaResultComponent from './FhsaResultComponent';

export default function FhsaCalculatorComponent() {
  const [AgeChecked, setAgeChecked] = React.useState(false);
  const [HouseChecked, setHouseChecked] = React.useState(false);
  const [AccountChecked, setAccountChecked] = React.useState(false);
  const input = new FHSAvars();
  const [OpenedInputFlag, setOpenedInputFlag] = React.useState(false);
  const [ContributedInputFlag, setContributedInputFlag] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [showCalculation, setShowCalculation] = React.useState(false);

  function OtherClick() {
    setShowResults(false);
    const element = document.getElementById('calculation')!;
    element.textContent = null;
  }

  function clearForm() {
    if (input.opened.textInput.current && input.contributed.textInput.current) {
      input.opened.textInput.current.value = null;
      input.contributed.textInput.current.value = null;
    }
    document.getElementById('openedError').textContent = null;
    document.getElementById('contributedError').textContent = null;
    setOpenedInputFlag(true);
    setContributedInputFlag(false);
  }
  const AgeSwitch = () => {
    return (
      <Form.Check
        type="checkbox"
        label="I am over 18."
        id="check18"
        checked={AgeChecked}
        onChange={() => {
          setAgeChecked(!AgeChecked);
          setHouseChecked(false);
          setAccountChecked(false);
          OtherClick();
          clearForm();
        }}
      ></Form.Check>
    );
  };

  const HouseSwitch = () => {
    return (
      <Form.Check
        type="checkbox"
        label="I do not currently own a home, nor have I owned or jointly owned a home within the last 4 years"
        id="checkHouse"
        checked={HouseChecked}
        onChange={() => {
          setHouseChecked(!HouseChecked);
          setAccountChecked(false);
          OtherClick();
          clearForm();
        }}
      ></Form.Check>
    );
  };
  const AccountSwitch = () => {
    return (
      <Form.Check
        type="checkbox"
        label="I have opened a FHSA already"
        id="checkAccount"
        checked={AccountChecked}
        onChange={() => {
          setAccountChecked(!AccountChecked);
          clearForm();
          if (AccountChecked) {
            setOpenedInputFlag(true);
          }
          OtherClick();
        }}
      ></Form.Check>
    );
  };

  const handleOpenedChange = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    input.opened.focusTextInput;
    const element = document.getElementById('openedError')!;
    if (input.opened.textInput.current) {
      if (
        Number(input.opened.textInput.current.value) <= 2025 &&
        Number(input.opened.textInput.current.value) >= 2023
      ) {
        setOpenedInputFlag(false);
        element.textContent = null;
        handleContributedChange();
        return;
      }
    }
    element.textContent =
      'error: your FHSA must be opened on a valid date. Please enter a valid date (2023-2025).';
    setOpenedInputFlag(true);
    resetContributed();
  };

  const resetContributed = () => {
    if (input.contributed.textInput.current) {
      console.log('resetContributed');
      document.getElementById('contributed')!.textContent = null;
      input.contributed.textInput.current.value = null;
    }
  };
  const handleContributedChange = () => {
    console.log(OpenedInputFlag);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    input.contributed.focusTextInput;
    const element = document.getElementById('contributed')!;
    if (input.opened.textInput.current && input.contributed.textInput.current) {
      const contributedVal = Math.floor(
        Number(input.contributed.textInput.current.value)
      );
      console.log(OpenedInputFlag);

      if (
        contributedVal <=
        (2026 - Math.floor(Number(input.opened.textInput.current.value))) * 8000
      ) {
        if (contributedVal >= 0) {
          element.textContent = null;
          setContributedInputFlag(false);
          return;
        } else {
          element.textContent =
            'Error: negative numbers are disallowed. Please enter a valid positive number';
          setContributedInputFlag(true);
          return;
        }
      }
    }

    element.textContent =
      'Error: valid is above contribution room. You will pay interest on this amount!';
    setContributedInputFlag(true);
    return;
  };

  const handleChange = () => {
    handleOpenedChange();
    if (!OpenedInputFlag) {
      handleContributedChange();
    }
  };

  const handleSubmit = () => {
    const errorMsg = document.getElementById('errorResult')!;
    if (!AgeChecked) {
      errorMsg.textContent =
        'You must be 18 to open and contribute to an FHSA.';
      setShowCalculation(false);
      return;
    }
    if (!HouseChecked) {
      errorMsg.textContent =
        'Since you have owned a home within the last 4 years, you are ineligible to contribute or open a TFSA';
      setShowCalculation(false);
      return;
    }
    if (!AccountChecked) {
      errorMsg.textContent = null;
      FhsaResultComponent([2025, 0]);
      setShowCalculation(true);
      return;
    }
    if (OpenedInputFlag || ContributedInputFlag) {
      errorMsg.textContent = 'Please submit a valid value into all fields';
      setShowCalculation(false);
      return;
    }
    errorMsg.textContent = null;
    FhsaResultComponent([
      Math.floor(Number(input.opened.textInput.current.value)),
      Math.floor(Number(input.contributed.textInput.current.value)),
    ]);
    setShowCalculation(true);
  };

  return (
    <div className="text-[#333] font-bold mt-10">
      <dialog id="FHSA_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold mb-3 text-lg" style={{ color: 'black' }}>
            FHSA Calculator
          </h3>

          <Form key="light" style={{ textAlign: 'left', color: 'black' }}>
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
              <Form.Label className={`${AccountChecked ? '' : 'hidden'}`}>
                What year did you open your FHSA account?
              </Form.Label>
              <Form.Control
                className={`${AccountChecked ? '' : 'hidden'}`}
                type="number"
                placeholder="XXXX"
                ref={input.opened.textInput}
                onClick={() => OtherClick()}
                onBlur={() => handleChange()}
              ></Form.Control>
              <Form.Text className="errorMessage" id="openedError" muted>
                {' '}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" id="birthYear">
              <Form.Label className={`${AccountChecked ? '' : 'hidden'}`}>
                How much have you contributed so far?
              </Form.Label>
              <Form.Control
                className={`${AccountChecked ? '' : 'hidden'}`}
                disabled={!OpenedInputFlag ? false : true}
                type="number"
                placeholder="0"
                ref={input.contributed.textInput}
                onClick={() => {
                  OtherClick();
                }}
                onBlur={() => handleChange()}
              ></Form.Control>
              <Form.Text
                className={`${
                  AccountChecked && !OpenedInputFlag ? '' : 'hidden'
                }`}
                id="contributed"
                muted
              ></Form.Text>
            </Form.Group>
          </Form>
          <Button
            className="btn"
            style={{ color: 'black' }}
            onClick={() => {
              setShowResults(!showResults);
              handleSubmit();
            }}
          >
            Submit
          </Button>

          <div
            className={`text-black mt-3 ${showResults ? '' : 'hidden'}`}
            id="ResultContainer"
          >
            <div id="errorResult"></div>{' '}
            <div className={`${showCalculation ? '' : 'hidden'}`}>
              <div id="results" className="search-results">
                Your contribution limit for this year is:
              </div>
              <div id="contributionRoom"></div>
              <div>
                Your total lifetime contribution room after this year is:
              </div>
              <div id="totalRemaining"></div>
            </div>{' '}
          </div>

          <div className="text-black mt-2" id="calculation"></div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn"
              style={{ color: 'black' }}
              onClick={() =>
                (
                  document.getElementById('FHSA_modal')! as HTMLDialogElement
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
