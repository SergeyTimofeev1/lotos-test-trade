import React from 'react';
import Timer from '../timer/Timer';
import './Info.css'

const Info = () => {
  return (
    <div className="trade__info">
      <p className="trade__title">Ход</p>
      <Timer />
    </div>
  );
}

export default Info;
