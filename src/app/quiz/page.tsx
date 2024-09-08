"use client";
import { Row, Col } from "react-bootstrap";
import testData from "../../data/easier.json";
import { useEffect, useState } from "react";
import styles from "./quiz.module.css";
import {
  findNode,
  Node,
  NodeType,
  updateAnswers,
} from "./../../quiz-logic/quiz-functions";
import CalculatorComponent from "@/components/Calculator";

export default function QuizPage() {
  const [currentNode, setCurrentNode] = useState<Node>(testData);
  const [answers, setAnswers] = useState<string[]>([]);

  //Runs everytime currentJson changes
  useEffect(() => {
    setAnswers(updateAnswers(currentNode));

    if (
      currentNode.nodeType === NodeType.Link &&
      currentNode.connect_id !== undefined
    ) {
      const newCurrentNode: Node = findNode(testData, currentNode.connect_id);

      setCurrentNode(newCurrentNode);
    }
  }, [currentNode]);

  // Runs everytime a answer is pressed
  function nextAnswer(answer: string) {
    // Update json to where the answer leads
    if (currentNode.answers?.[answer] === undefined) {
      return;
    }
    setCurrentNode(currentNode.answers[answer]);
  }

  return (
    <>
      <Row className="text-center">
        <Col xs={10}>
          <h1 className={styles.textBox}>
            {currentNode?.question}
            {currentNode?.answer}
            {currentNode?.link !== undefined ? (
              <a href={currentNode.link.link}>{currentNode.link.text}</a>
            ) : (
              <></>
            )}
          </h1>

          <div className={styles["button-container"]}>
            {answers.map((answer, index) => (
              <button
                className={styles["grey-button"]}
                key={index}
                onClick={() => nextAnswer(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
          {/* <CalculatorComponent /> */}
        </Col>
        <Col xs={2} className={styles.overlayImage}>
          <img
            src="/images/Fin.png"
            alt="Logo"
            className={styles.overlayImage}
          />
        </Col>
      </Row>
    </>
  );
}
