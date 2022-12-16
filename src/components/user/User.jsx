import React from 'react';
import Timer from '../timer/Timer';
import './User.css'

const Participant = (props) => {

  const removeUser = () => {
    props.remove(props.user)
  }

  return (
    <div className="user">
      {/* <Timer /> */}
      <h3 className="user__name">Name : {props.name}</h3>
      <p className="user__username">Login: {props.username}</p>
      <p className="user__email">Email {props.email}</p>
      <button onClick={removeUser} className="user__button">Исключить пользователя</button>
    </div>
  );
}

export default Participant;
