import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import SideBar from './components/SideBar/SideBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "100%"}}>
      <Navbar />
      <SideBar />
        <main style={{marginTop: "64px"}}>
            <p>We are working on something...</p>
        </main>
      </div>
    );
  }
}

export default App;
