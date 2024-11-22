"use client";
import testData from "../../data/easier.json";
import { useEffect, useState } from "react";
import {
    findNode,
    Node,
    NodeType,
    updateAnswers,
} from "./../../quiz-logic/quiz-functions";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import CalculatorComponent from "@/components/Calculator";

import Image from "next/image";
import Button from "@/components/Button";
import Textbox from "@/components/Textbox";
import { IoIosArrowRoundBack } from "react-icons/io";
import CalculatorComponent from "@/components/Calculator";
import React from "react";

    

import { useRouter } from "next/navigation";

export default function QuizPage() {
    const router = useRouter();
    const [tip, setTip] = useState<number>(0);
    const [showNextTip, setShowNextTip] = useState<boolean>(false);
    const [showPrevTip, setShowPrevTip] = useState<boolean>(false);
    const [currentNode, setCurrentNode] = useState<Node>(testData);
    const [answers, setAnswers] = useState<string[]>([]);
    const [history, setHistory] = useState<Node[]>([]);
    const [loading, setLoading] = useState(true);
  const [showCalculator, setShowCalculator] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  function handleShow() {
    const element = document.getElementById("my_modal_1")! as HTMLDialogElement;
    element.showModal();
 } 

    


    //Runs everytime currentJson changes
    useEffect(() => {
        setAnswers(updateAnswers(currentNode));

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        setTip(0);

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
    if (currentNode.id == 6) {
      setShowCalculator(true);
    } else setShowCalculator(false);
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

    useEffect(() => {
        //Check if next tip exists
        if (currentNode?.moreInfo?.[tip - 1 + 1] !== undefined) {
            setShowNextTip(true);
        } else {
            setShowNextTip(false);
        }
        if (currentNode?.moreInfo?.[tip - 1] !== undefined) {
            setShowPrevTip(true);
        } else {
            setShowPrevTip(false);
        }
    }, [tip, currentNode]);

    function goBack() {
        if (history.length > 0) {
            const previousNode = history[history.length - 1]; // Get the last node from history
            setHistory(history.slice(0, -1)); // Remove the last node from history
            setCurrentNode(previousNode); // Set the current node to the previous one
        } else {
            router.push("/");
        }
    }

    //Move to next tooltip
    function nextTip(currentTip: number, increase: boolean) {
        if (increase) {
            setTip(currentTip + 1);
        } else {
            setTip(currentTip - 1);
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        //PARENT CONTAINER
        <div
            className={`flex sm:mt-32  ${loading ? "hidden" : ""}`}
        >
       

        <div className="flex  sm:mt-32">
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
                    <div className="sm:hidden relative w-full">
                        {tip === 0 ? (
                            <div className="w-full rounded-xl bg-blue px-1 py-2 sm:hidden relative">

                                <div className="max-h-64 overflow-y-auto">

                                    <Textbox
                                        secondaryLabel={currentNode?.question}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="w-full rounded-xl bg-blue px-1 py-2 sm:hidden relative">

                                <div className="max-h-64 overflow-y-auto">

                                    <Textbox
                                        secondaryLabel={
                                            currentNode?.moreInfo?.[tip - 1]
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        <div className="mb-2 flex justify-end mt-1">
                            {showPrevTip ? (
                                <div className="rounded-xl bg-light_blue p-2 mx-1 inline-block bg-opacity-10">
                                    <FaAngleLeft
                                        onClick={() => nextTip(tip, false)}
                                        className="text-blue h-6 w-6 hover:cursor-pointer"
                                    />
                                </div>
                            ) : null}

                            {showNextTip && showPrevTip ? (
                                <div className="rounded-xl bg-light_blue p-2 mx-1 inline-block bg-opacity-10">
                                    <FaAngleRight
                                        onClick={() => nextTip(tip, true)}
                                        className="text-blue h-6 w-6 hover:cursor-pointer"
                                    />
                                </div>
                            ) : null}

                            {showNextTip && !showPrevTip ? (
                                <div className="rounded-xl bg-light_blue p-2 mx-1 inline-block bg-opacity-10">
                                    <h1
                                        onClick={() => nextTip(tip, true)}
                                        className="text-blue text-3xl text-center h-6 w-6 hover:cursor-pointer leading-none"
                                    >...</h1>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {/* If screen is big */}
                    <div className="hidden sm:block relative">
                        {tip === 0 ? (
                            <Textbox
                                secondaryLabel={currentNode?.question + "\n"}
                            />
                        ) : (
                            <Textbox
                                secondaryLabel={
                                    currentNode?.moreInfo?.[tip - 1] + "\n"
                                }
                            />
                        )}

                        {/* MoreInfo Buttons */}
                        <div className="mb-2 flex justify-end mt-1">
                            {showPrevTip ? (
                                <div className="rounded-xl bg-light_blue p-2 mx-1 inline-block bg-opacity-10">
                                    <FaAngleLeft
                                        onClick={() => nextTip(tip, false)}
                                        className="text-blue h-7 w-7 hover:cursor-pointer"
                                    />
                                </div>
                            ) : null}

                            {showNextTip && showPrevTip ? (
                                <div className="rounded-xl bg-light_blue p-2 mx-1 inline-block bg-opacity-10">
                                    <FaAngleRight
                                        onClick={() => nextTip(tip, true)}
                                        className="text-blue h-7 w-7 hover:cursor-pointer"
                                    />
                                </div>
                            ) : null}

                            {showNextTip && !showPrevTip ? (
                                <div className="rounded-xl bg-light_blue p-2 mx-1 inline-block bg-opacity-10">
                                    <h1
                                        onClick={() => nextTip(tip, true)}
                                        className="text-blue text-3xl text-center h-7 w-7 hover:cursor-pointer leading-none"
                                    >...</h1>
                                </div>
                            ) : null}
                        </div>
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
                    {showCalculator ? <button className="btn" onClick={handleShow}>open modal</button> : null}
                    
                    <CalculatorComponent/>
                    </div>
                    
                {showCalculator ? <button className=" w-40 h-40 size-0  static shadow-none btn border-none text-blue bg-light_blue bg-opacity-0 " onClick={()=>(document.getElementById('my_modal_1')! as HTMLDialogElement).showModal()}> <Image className="absolute overflow-visible " width="100" height="100" alt="Calculatoricon" src="/images/calculator.png"></Image></button> : null}
                
                {/* Fin Image */}
                
                <div className=" justify-center fixed sm:w-1/3 break-before-all flex-none sm:static bottom-6 sm:bottom-0 sm:mt-64">
                
                    <Image
                        src="/images/Fin.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="w-[350px] h-[350px] sm:w-auto sm:h-auto sm:mt-32"
                        unoptimized
                        priority
                        onLoadingComplete={() => setLoading(false)}
                    />
               
            </div>
            </div>
            
        </div>
        </div>
       
        
    );
}

