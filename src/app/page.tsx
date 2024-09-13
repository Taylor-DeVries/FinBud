"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import "./homeStyles.css";

const HomePage: React.FC = () => {
  const navigateToQuiz = () => {
    window.location.href = "/quiz";
  };

  return (
    <div>
      <Row className="text-center justify-content-lg-center">
        <Col xxl={1} xl={0}></Col>
        <Col xxl={6} xl={6} lg={12}>
          <div className="blue_bubble">
            <h2>
              Hi! I’m Fin, your Virtual Finance Buddy. I’m here to guide you
              through every stage of your personal finance journey.
            </h2>
          </div>
          <button className="journey-button" onClick={navigateToQuiz}>
            <h2>Start My Journey!</h2>
          </button>
        </Col>
        <Col xxl={5} xl={6} lg={8} md={12} className="overlayContainer">
          <img src="/images/Fin.png" alt="Logo" className="overlayImage" />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
