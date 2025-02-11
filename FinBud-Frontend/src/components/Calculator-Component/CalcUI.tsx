"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

 function CalcUI {


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
    )
 }