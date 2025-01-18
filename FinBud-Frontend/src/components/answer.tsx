import React from "react";

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
