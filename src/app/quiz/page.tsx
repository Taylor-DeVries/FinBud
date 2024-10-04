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
import Image from "next/image";
// import CalculatorComponent from "@/components/Calculator";

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
            const newCurrentNode: Node = findNode(
                testData,
                currentNode.connect_id
            );

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
        // Parent Container
        <div className="sm:p-6 py-40 h-screen flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center space-y-0 mt-8 sm:mt-8 min-h-[50vh] w-full">
                {/* Text Box */}
                <div className="sm:w-2/3 text-left text-white rounded-[64px]">
                    <div className="blue_bubble">
                        <div className="font-bold sm:text-xl">
                            {currentNode?.question}
                            {currentNode?.answer}
                            {currentNode?.link !== undefined ? (
                                <a href={currentNode.link.link}>
                                    {currentNode.link.text}
                                </a>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className={styles["button-container"]}>
                        {answers.map((answer, index) => (
                            <button
                                className={styles["grey-button"]}
                                key={index}
                                onClick={() => nextAnswer(answer)}
                            >
                                <div className="font-bold">{answer}</div>
                            </button>
                        ))}
                    </div>
                    {/* <CalculatorComponent /> */}
                </div>

                {/* Fin Image */}
                <div className="sm:w-1/3 flex justify-center sm:justify-start sm:mt-64">
                    <Image
                        src="/images/Fin.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="sm:w-auto sm:h-auto "
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    );
}
