import React, { useState, useEffect } from "react"

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
      }, 100);

      if (delay === 0) {
        setTimeEnd(prev => !prev)
        clearInterval(timer)
      }

      return () => {
        clearInterval(timer)
      };
    }
  }, [timerHandler, delay]);

  // if (timeEnd) return null

  return (
    <div className="timer">
      <button onClick={startTimer}>Плей/пауза</button>
      <span>
        {minutes}м : {seconds}с
      </span>
    </div>
  );
};

export default Timer;
