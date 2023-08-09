import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import "../App.css";

const EndScreen = () => {
  const {score, setScore,setGameState} = useContext(QuizContext);
  const restartgame = () => {
    setScore(0);
  
    setGameState("menu");
  }
  return (
    <div className='endScreen'>
      <h1>Quiz Finished</h1>
      <h3> {score} / {3}</h3>
      <button onClick={restartgame}> Restart Quiz</button>
    </div>
  )
}

export default EndScreen