"use client";

import { ApiError } from "next/dist/server/api-utils";
import Link from "next/link";
import { useState } from "react";
import NextLevelTransition from "./NextLevelTransition";
export default function Quiz({
  question,
  questions,
  currentItem,
  showPopup,
  interactedItems,
  gameOver,
  currentQuestion,
  currentQuestionInde,
  setCurrentQuestion,
  setShowPopup,
  setGameOver,
  level,
  setLevel,
}) {
  // const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showOptions, setShowOptions] = useState(true);
  const [resultMessage, setResultMessage] = useState("");
  const [secretWord, setSecretWord] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [transition, setTransition] = useState(false);

  async function handleAnswer(isCorrect) {
    if (isCorrect && question?.type !== "message") {
      setResultMessage("correct!");
      setSecretWord(question?.resultMessage.correct);
      setScore(score + 1);
      if ((score + 1) % 5 === 0) {
        if (score + 1 < questions.length) {
          setTransition(true);
          setTimeout(() => {
            setLevel(level + 1);
            setTransition(false);
          }, 9000);
        } else {
          setGameOver(true);
          setGameOverMessage("Congratulations! You Win");
        }
      }
      setShowPopup(false);
    } else if (question.type === "message") {
      setShowPopup(false);
    } else {
      setResultMessage("wrong");
      console.log(10 == "10");
      setGameOver(true);
    }

    questions?.map((quest) => {
      if (quest.id === question.id) {
        question.isAnswered = true;
      }
    });
  }

  function handleHint() {
    setShowHint(!showHint);
  }

  return (
    <div>
      <div>
        {showPopup && (
          <div className="popup-container">
            <h2>{question?.message}</h2>
            <h3 className="popup-question">{question?.question}</h3>

            <div
              className="popup-options"
              style={{
                display: question.type !== "input" ? "flex" : "none",
              }}
            >
              {question?.options?.map((option, index) => (
                <button
                  type="submit"
                  key={index}
                  onClick={() => handleAnswer(option === question.answer)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => handleHint()}>
              Hint
            </button>
            {secretWord}
            <div
              style={{
                display: question.type === "input" ? "flex" : "none",
              }}
            >
              <form>
                <input
                  type="text"
                  placeholder="Type answer here"
                  value={inputAnswer}
                  onChange={(e) => {
                    setInputAnswer(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  onClick={() => handleAnswer(inputAnswer === question.answer)}
                >
                  submit
                </button>
                {/* <button type="button" onClick={() => handleHint()}>
                  Hint
                </button> */}
              </form>
            </div>
            {showHint && <div className="hint">Hint: {question?.hint}</div>}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          backgroundColor: "#F2F5FF",
          flexDirection: "row",
          gap: "100px",
          fontSize: "30px",
        }}
      >
        {resultMessage && <p className="result-message">{resultMessage}</p>}
        <h2>
          Score: <span style={{ color: "#2274a5" }}>{score}</span>
        </h2>
        <h2>
          Level: <span style={{ color: "#2274a5" }}>{level + 1}</span>
        </h2>
      </div>
      {transition && <NextLevelTransition />}
      {gameOver && <Link href={"/gameover"}></Link>}
    </div>
  );
}
