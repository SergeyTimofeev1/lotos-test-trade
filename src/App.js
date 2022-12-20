import './App.css';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Users from './components/users/Users';



function App() {

  return (
    <div className="App">
      <Header/>
      <div className="trade-content">
        {/* <Info/> */}
        <Users/>
      </div>
    </div>
  );
}

export default App;
