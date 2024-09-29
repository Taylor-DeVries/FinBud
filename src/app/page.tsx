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
            <Row className="text-center justify-content-lg-center flex mt-12">
                <Col xxl={2} xl={3} lg={5} md={6} className="overlayContainer">
                    <img
                        src="/images/Fin.png"
                        alt="Logo"
                        className="overlayImage"
                    />
                </Col>
                <Col xxl={8} xl={8} lg={14}>
                    <div className="chat chat-start">
                        <div className="chat-bubble mt-20 text-white chat-bubble-primary">
                            <div className="font-bold text-3xl mt-8">
                                Hi!👋 I’m Fin, your Virtual Finance Buddy.
                            </div>
                            <div className="font-semibold text-xl m-8">
                                I’m here to guide you through every stage of
                                your personal finance journey.
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button
                            className="bg-[#5298b8] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary"
                            onClick={navigateToQuiz}
                        >
                            Start My Journey!
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;
