import React, { useState, useEffect } from 'react';
import UserService from '../../service/UserService';
import Timer from '../timer/Timer';
import MainButton from '../UI/mainButton/MainButton';
import User from '../user/User';
import './Users.css'

const Users = () => {

  const [usersData, setUsersData] = useState([]) // Подгруженные с сервера пользователи
  const [showUsers, setShowUsers] = useState(false)

  async function fetchUsers() {
    const response = await UserService.getUsers()
    setUsersData([...usersData, ...response.data])
  }

  const addUsers = () => {
    setShowUsers(true)
  }

  const filterUsers = (user) => {
    setUsersData(usersData.filter(u => u.id !== user.id))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <Timer />
      <MainButton
        style={{ 'margin': '2rem auto', 'width': '30%' }}
        onClick={addUsers}
        disabled={showUsers ? 'disabled' : ''}
      >
        Пригласить пользователей
      </MainButton>
      <div className="trade-winodw">
        <div className="trade-window__info">
          <h3 className="user__name">Имя:</h3>
          <hr />
          <p className="user__username">Логин:</p>
          <hr />
          <p className="user__email">Почтовый адрес:</p>
          <hr />
        </div>
        <div className="trade-users">
          {
            showUsers
              ?
              usersData.map(user =>
                <User
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  username={user.username}
                  key={user.id}
                  user={user}
                  remove={filterUsers}
                />
              )
              :
              <h2 className="trade-users__title">Никто из пользователей не присоеденился к торгам</h2>
          }
        </div>
      </div>
    </>
  );
}

export default Users;
