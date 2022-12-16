import React, { useState, useEffect } from "react"
import './Timer.css'

const Timer = ({ delayResend = "120" }) => {

  const [delay, setDelay] = useState(+delayResend)
  const [timerHandler, setTimerHandler] = useState(true)
  const [timeEnd, setTimeEnd] = useState(false)

  const minutes = Math.floor(delay / 60)
  const seconds = Math.floor(delay % 60)

  const startTimer = () => {
    setTimerHandler(prev => !prev)
  }

  useEffect(() => {
    if (timerHandler) {
      const timer = setInterval(() => {
        setDelay(delay - 1);
      }, 1000);

      if (delay === 0) {
        setTimeEnd(prev => !prev)
        clearInterval(timer)
      }

      return () => {
        clearInterval(timer)
      };
    }
  }, [timerHandler, delay]);


  return (
    <div className="timer">
      <button className="timer__button" onClick={startTimer}>Приостановить / возобновить торги</button>
      <span>
        {minutes}м : {seconds}с
      </span>
    </div>
  );
};

export default Timer;
