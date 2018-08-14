import React from 'react';
import './NavbarToggler.css';

const NavbarToggler = props => (
          <button className="toggle-button" onClick={props.click}>
            <span className="toggle-bar" id="top-bar"/>
            <span className="toggle-bar" id="middle-bar"/>
            <span className="toggle-bar" id="bottom-bar"/>
          </button>
      );
export default NavbarToggler;
