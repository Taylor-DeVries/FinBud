import React from "react";
import styles from "../app/quiz/quiz.module.css";
import { Question as QuestionType, Answer } from "../types";

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: Answer) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <div className={styles["button-container"]}>
        {question.answers.map((answer, index) => (
          <button
            className={styles["grey-button width80"]}
            key={index}
            onClick={() => onAnswer(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
