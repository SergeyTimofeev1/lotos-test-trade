import React, { useState, useEffect } from 'react';
import UserService from '../../service/UserService';
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
    <div className="trade-info">
      <button
        onClick={addUsers}
        disabled={showUsers ? 'disabled' : ''}
      >
        Пригласить пользователей
      </button>
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
            <h2>Никто из пользователей не присоеденился к торгам</h2>
        }
      </div>
    </div>
  );
}

export default Users;
