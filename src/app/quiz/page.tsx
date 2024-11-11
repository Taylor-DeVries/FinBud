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
import { useRouter } from "next/navigation";

export default function QuizPage() {
    const router = useRouter();
    const [currentNode, setCurrentNode] = useState<Node>(testData);
    const [answers, setAnswers] = useState<string[]>([]);
    const [history, setHistory] = useState<Node[]>([]);
    const [loading, setLoading] = useState(true);

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
            router.push("/");
        }
    }
    return (
        // Parent Container

        <div
            className={`flex min-h-screen sm:mt-32 ${loading ? "hidden" : ""}`}
        >
            <div className="flex flex-col sm:flex-row sm:items-start items-center space-y-16 sm:space-y-0 mt-8 sm:mt-8 min-h-[50vh] w-full">
                {/* Text Area */}
                <div className="sm:w-2/3 text-left text-white rounded-xl">
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
                    <div className="w-full  rounded-xl bg-blue px-1 py-2 sm:hidden">
                        {/* Inner scrollable content */}

                        <div className="max-h-64 overflow-y-auto">
                            <Textbox secondaryLabel={currentNode?.question} />
                        </div>
                    </div>

                    {/* If screen is big */}
                    <div className="hidden sm:block">
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
                <div className="sm:w-1/3 flex fixed sm:static bottom-6 sm:bottom-0 sm:mt-64">
                    <Image
                        src="/images/Fin.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="w-[350px] h-[350px] sm:w-auto sm:h-auto sm:mt-32"
                        priority
                        unoptimized
                        onLoadingComplete={() => setLoading(false)}
                    />
                </div>
            </div>
        </div>
    );
}
