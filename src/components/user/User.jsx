import React from 'react';
import Timer from '../timer/Timer';
import MainButton from '../UI/mainButton/MainButton';
import './User.css'

const Participant = (props) => {

  const removeUser = () => {
    props.remove(props.user)
  }

  return (
    <div className="user">
      {/* <Timer /> */}
      <h3 className="user__name">{props.name}</h3>
      <hr />
      <p className="user__username">{props.username}</p>
      <hr />
      <p className="user__email">{props.email}</p>
      <hr />
      <MainButton onClick={removeUser} style={{ 'margin': '1rem auto', 'height': '2rem' }}>Исключить пользователя</MainButton>
    </div>
  );
}

export default Participant;
