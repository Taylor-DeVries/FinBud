import React from "react";
import styles from "../app/quiz/quiz.module.css";

interface AnswerProps {
  result: string;
}

const Answer: React.FC<AnswerProps> = ({ result }) => {
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
};

export default Answer;
