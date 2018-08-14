import React from 'react';
import './Navbar.css';
import NavbarToggler from '../SideBar/NavbarToggler.js';

const Navbar = props => (
      <header className="header">
        <div className="logo">JOE O&#39;BRIEN</div>
        <div className="spacer"/>
          <div className ="social-icon">
            <i class="fab fa-facebook-square"></i>
          </div>
          <div className ="social-icon">
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className ="social-icon">
            <i class="fab fa-github-square"></i>
          </div>
        <div className="spacer"/>
        <nav className="navbar">
          <ul className="navbarList">
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">About Me</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </nav>
        <div>
          <NavbarToggler click={props.sideBarClickHandler}/>
        </div>
      </header>
    //  <div onClick={() => this.scrollTo()}>Click Me</div>
    );

export default Navbar;
