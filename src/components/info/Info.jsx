import React from 'react';
import Timer from '../timer/Timer';
import './Info.css'

const Info = () => {
  return (
    <div className="trade__info">
      <Timer />
      <div className="trade__aside">
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
      </div>
      <p className="trade__title">Ход</p>
    </div>
  );
}

export default Info;
