import React from 'react';
import './Navbar.css';
import NavbarToggler from '../SideBar/NavbarToggler.js';

const Navbar = props => (
      <header className="header">
        <div className="logo">Joe O&#39;Brien</div>
        <div className="spacer"/>
        <nav className="navbar">
          <ul className="navbarList">
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">About Me</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </nav>
        <div>
          <NavbarToggler />
        </div>
      </header>
    //  <div onClick={() => this.scrollTo()}>Click Me</div>
    );

export default Navbar;
