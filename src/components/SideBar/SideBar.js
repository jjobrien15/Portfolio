import React from 'react';
import './SideBar.css';

const SideBar = props => {
  let sideBarClasses = 'sideBar';
  if(props.show){
    sideBarClasses = 'sideBar open';
  }
  return(
      <nav className={sideBarClasses}>
        <ul>
          <li><a href="/">Item 1</a></li>
          <li><a href="/">Item 2</a></li>
          <li><a href="/">Item 3</a></li>
        </ul>
        <ul>
          <li className ="social-link">
            <a href="https://www.facebook.com/joe.obrien.37669" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
          </li>
          <li className ="social-link">
            <a href="https://twitter.com/Shmoebear" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
          </li>
          <li className ="social-link">
            <a href="https://github.com/jjobrien15" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
          </li>
        </ul>
      </nav>
    );
};
export default SideBar;
