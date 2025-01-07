import React, { useState } from "react";

export const ElementaryMath = () => {
  const [digit, setDigit] = useState(2);
  const [operator, setOperator] = useState("Addition");
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);

  const generateQuestions = () => {
    const newQuestions = [];
    for (let i = 0; i < questionCount; i++) {
      let num1 = Math.floor(Math.random() * Math.pow(10, digit));
      let num2;
      if (operator === "Division") {
        do {
          num2 = Math.floor(Math.random() * 9) + 1; // 2 to 9
        } while (num2 === 1);
      } else if (operator === "Multiplication") {
        do {
          num2 = Math.floor(Math.random() * Math.pow(10, digit));
        } while (num2 === 1);
      } else {
        do {
          num1 = Math.floor(Math.random() * Math.pow(10, digit));
        } while (num1 === 0);
        do {
          num2 = Math.floor(Math.random() * Math.pow(10, digit));
        } while (num2 === 0);
        if (operator === "Subtraction" && num1 < num2) {
          [num1, num2] = [num2, num1];
        }
      }
      newQuestions.push({ num1, num2, operator });
    }
    setQuestions(newQuestions);
    setAnswers(new Array(questionCount).fill(""));
    setResults([]);
  };

  const handleAnswerChange = (index, value, isRemainder = false) => {
    const newAnswers = [...answers];
    if (operator === "Division") {
      if (isRemainder) {
        const [quotient] = newAnswers[index].split(" R ");
        newAnswers[index] = `${quotient || ""} R ${value}`;
      } else {
        const [, remainder] = newAnswers[index].split(" R ");
        newAnswers[index] = `${value} R ${remainder || ""}`;
      }
    } else {
      newAnswers[index] = value;
    }
    console.log("newAnswers", newAnswers);
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const newResults = questions.map((q, index) => {
      let correctAnswer;
      if (q.operator === "Division") {
        const quotient = Math.floor(q.num1 / q.num2);
        const remainder = q.num1 % q.num2;
        correctAnswer = `${quotient} R ${remainder}`;
      } else if (q.operator === "Addition") {
        correctAnswer = q.num1 + q.num2;
      } else if (q.operator === "Subtraction") {
        correctAnswer = q.num1 - q.num2;
      } else if (q.operator === "Multiplication") {
        correctAnswer = q.num1 * q.num2;
      }
      console.log("correctAnswer", correctAnswer, "answers[index]", answers[index]);
      return "" + correctAnswer === answers[index] ? "Correct" : "Incorrect";
    });
    setResults(newResults);
  };

  const correctCount = results.filter((result) => result === "Correct").length;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Elementary Math</h1>
      <div style={{ border: "1px solid black", marginBottom: "20px", padding: "10px", fontSize: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
          <label>
            Digits:
            <select value={digit} onChange={(e) => setDigit(Number(e.target.value))} style={{ marginLeft: "10px", fontSize: "20px" }}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>
          <label>
            Operator:
            <select value={operator} onChange={(e) => setOperator(e.target.value)} style={{ marginLeft: "10px", fontSize: "20px" }}>
              <option value="Addition">Addition</option>
              <option value="Subtraction">Subtraction</option>
              <option value="Multiplication">Multiplication</option>
              <option value="Division">Division</option>
            </select>
          </label>
          <label>
            Number of Questions:
            <input type="number" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))} style={{ marginLeft: "10px", fontSize: "20px" }} />
          </label>
        </div>
        <button onClick={generateQuestions}>Generate</button>
      </div>
      <div>
        {questions.map((q, index) => (
          <div key={index} style={{ marginBottom: "10px", fontSize: "20px" }}>
            <span>
              {q.num1} {q.operator === "Addition" ? "+" : q.operator === "Subtraction" ? "-" : q.operator === "Multiplication" ? "*" : "/"} {q.num2} ={" "}
            </span>
            {q.operator === "Division" ? (
              <>
                <input type="text" value={answers[index].split(" R ")[0] || ""} onChange={(e) => handleAnswerChange(index, e.target.value)} /> R{" "}
                <input type="text" value={answers[index].split(" R ")[1] || ""} onChange={(e) => handleAnswerChange(index, e.target.value, true)} />
              </>
            ) : (
              <input type="text" value={answers[index]} onChange={(e) => handleAnswerChange(index, e.target.value)} />
            )}
            {results[index] && <span style={{ color: results[index] === "Correct" ? "green" : "red", marginLeft: "20px" }}>{results[index]}</span>}
          </div>
        ))}
      </div>
      <button onClick={checkAnswers} style={{ marginTop: "20px" }}>
        Check Answers
      </button>
      {results.length > 0 && (
        <div>
          {correctCount} / {questions.length}
        </div>
      )}
    </div>
  );
};
