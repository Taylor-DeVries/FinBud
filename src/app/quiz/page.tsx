"use client";
import testData from "../../data/easier.json";
import { useEffect, useState } from "react";
import {
    findNode,
    Node,
    NodeType,
    updateAnswers,
} from "./../../quiz-logic/quiz-functions";
import Image from "next/image";
import Button from "@/components/Button";
import Textbox from "@/components/Textbox";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function QuizPage() {
    const [currentNode, setCurrentNode] = useState<Node>(testData);
    const [answers, setAnswers] = useState<string[]>([]);
    const [history, setHistory] = useState<Node[]>([]);

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
        setHistory([...history, currentNode]);
        setCurrentNode(currentNode.answers[answer]);
    }

    function goBack() {
        if (history.length > 0) {
            const previousNode = history[history.length - 1]; // Get the last node from history
            setHistory(history.slice(0, -1)); // Remove the last node from history
            setCurrentNode(previousNode); // Set the current node to the previous one
        } else {
            window.location.href = "/";
        }
    }
    return (
        // Parent Container

        <div className="flex min-h-screen">
            <div className="flex flex-col lg:flex-row justify-between lg:justify-center  space-y-16 lg:space-y-0 mt-8 lg:mt-16 min-h-[50vh] w-full">
                {/* Text Area */}
                <div className="lg:w-2/3 text-left text-white rounded-xl ">
                    {/* Back button */}
                    <div className="mb-2">
                        <div className="rounded-xl bg-light_blue p-2 inline-block bg-opacity-10">
                            <IoIosArrowRoundBack
                                onClick={goBack}
                                className="text-blue h-8 w-8 hover:cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* If screen is mobile */}
                    <div className="w-full rounded-xl bg-blue px-1 py-2 lg:hidden">
                        {/* Inner scrollable content */}

                        <div className="max-h-[150px] sm:max-h-[256px] md:max-h-[512px] lg:max-h-[640px] xl:max-h-[780px] overflow-y-auto ">
                            <Textbox secondaryLabel={currentNode?.question} />
                        </div>
                    </div>

                    {/* If screen is big */}
                    <div className="hidden lg:block">
                        <Textbox secondaryLabel={currentNode?.question} />
                    </div>

                    {/* Buttons for the answers */}
                    <div className="mt-4">
                        <div className="flex flex-col space-y-2 ">
                            {answers.map((answer, index) => (
                                <Button
                                    key={index}
                                    onClick={() => nextAnswer(answer)}
                                    label={answer}
                                />
                            ))}
                        </div>
                    </div>

                    {/* <CalculatorComponent /> */}
                </div>

                {/* Fin Image */}
                <div className="lg:w-1/3 flex lg:justify-start justify-center">
                    <Image
                        src="/images/Fin.png"
                        alt="Logo"
                        width={0} // placeholder
                        height={0} // placeholder
                        className="w-[225px] h-[225px] sm:w-[500px] sm:h-[500px] lg:w-auto lg:auto object-contain "
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    );
}
