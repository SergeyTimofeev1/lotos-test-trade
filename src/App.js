import './App.css';
import User from './components/user/User';
import Header from './components/header/Header';
import { useRef, useState } from 'react';
import UserService from './service/UserService';
import { useEffect } from 'react';
import Timer from './components/timer/Timer';


function App() {

  const [usersData, setUsersData] = useState([]) // Подгруженные с сервера пользователи
  const [users, setUsers] = useState([]) 
  
  console.log({users: users, usersData: usersData});

  async function fetchUsers() {
    const response = await UserService.getUsers()
    setUsersData([...usersData, ...response.data])
  }

  const addUsers = (e) => {
    const newUser = usersData.shift()
    setUsers([...users, newUser])
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <Header/>
      <button 
        onClick={addUsers} 
        disabled={usersData.length === 0 ? 'disabled' : ''}
      >
        Добавить пользователя
      </button>
      <div className="trade-participants">
        {
          users.length !== 0
            ? 
              users.map(user => 
                <User
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  username={user.username}
                  key={user.id}
                />
              )
            : 
              <h2>Никто из пользователей не присоеденился к торгам</h2>
        }
      </div>
    </div>
  );
}

export default App;
