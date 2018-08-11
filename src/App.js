import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import SideBar from './components/SideBar/SideBar.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import './App.css';

class App extends Component {
  state = {
    sideBarOpen: false
  };

  sideBarTogglerClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideBarOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className="App" style={{height: "100%"}}>
      <Navbar sideBarClickHandler={this.sideBarTogglerClickHandler}/>
      <SideBar show={this.state.sideBarOpen}/>
      {backdrop}
        <main style={{margin: "64px"}}>
            <p>We are working on something...</p>
        </main>
      </div>
    );
  }
}

export default App;
