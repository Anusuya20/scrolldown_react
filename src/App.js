// import logo from './logo.svg';
import './App.css';
import React from "react"
import mummy from "./images/mummy.jpg";
import Details from './details';
import './style.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Exercise1</h1>
        <img src={mummy} alt="logo"/>
        
        <Details />
        <br></br>
      </header>
    </div>
  );
}




  

export default App;
