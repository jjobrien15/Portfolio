import React from 'react';
import './NavbarToggler.css';

const NavbarToggler = props => (
        <button className="toggle-button" onClick={props.click}>
          <span className="toggle-bar"/>
          <span className="toggle-bar"/>
          <span className="toggle-bar"/>
        </button>
      );
export default NavbarToggler;
