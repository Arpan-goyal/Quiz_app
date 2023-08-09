import React, { useContext, useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";
import "../App.css";

const Quiz = () => {
  const {score, setScore, setGameState} = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(Math.floor(Math.random() * 20) + 1);
  const [optionChosen, setOptionChosen] = useState("");
  const[nofques, setnofques] = useState(0);

  const nextQuestion = () =>{
    if(Questions[currQuestion].answer === optionChosen){
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setnofques(nofques + 1);
    
  }

  const showscore = () => {
    // alert(`Ur Score is ${score}`);
    setGameState("endScreen");
  }
  return (
    <div className="quiz">
      <h1>{Questions[currQuestion].question}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optD}
        </button>
      </div>

      {
        (nofques === 2) ? (
          <button onClick={showscore}> Finish Quiz</button>
        )
        :(
        <button onClick={nextQuestion}> Next Question </button>
      )}
    </div>
  );
};

export default Quiz;
