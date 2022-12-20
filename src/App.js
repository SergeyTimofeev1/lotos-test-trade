import './App.css';
import Header from './components/header/Header';
import Users from './components/users/Users';



function App() {

  return (
    <div className="App">
      <Header/>
      <div className="trade-content">
        <Users/>
      </div>
    </div>
  );
}

export default App;
