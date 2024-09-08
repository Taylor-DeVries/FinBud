"use client";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from 'react';

export default function CalculatorComponent() {

  const [radioValue, setRadioValue] = useState('0');

  const radios = [
    { name: 'No', value: '0' },
    { name: 'Yes', value: '1' },
  ];

  return (
    <Card
      bg="light"
      key="light"
      className="mb-2"
      style={{ textAlign: "left" }}>
      <Card.Body >
        <Form>
          <Form.Group className="mb-3" controlId="canadianResidentYear">
            <Form.Label>Since what year have you been a Canadian Resident?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" />
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
          <Form.Group className="mb-3" controlId="over18">
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
          </Form.Group>

          <Form.Group className="mb-3" controlId="birthYear">
            <Form.Label>What year were you born?</Form.Label>
            <Form.Control type="number" placeholder="XXXX" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaContributed">
            <Form.Label>How much have you contributed to your TFSA so far?</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tfsaWithdrawn">
            <Form.Label>How much have you withdrawn from your TFSA so far?</Form.Label>
            <Form.Control type="number" />
          </Form.Group>



          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
