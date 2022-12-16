import React from 'react';
import Timer from '../timer/Timer';
import './User.css'

const Participant = (props) => {
  return (
    <div className="participant">
      <Timer />
      <h2 className="participant__title">{props.name}</h2>
    </div>
  );
}

export default Participant;
