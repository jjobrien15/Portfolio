import React from 'react';
import './SocialBar.css';

const SocialBar = props => {
  let socialbarClasses = 'social-bar open';
  if(props.show){
    socialbarClasses = 'social-bar';
  }
  return(
    <ul className={socialbarClasses}>
      <li className ="social-icon">
        <a href="https://www.facebook.com/joe.obrien.37669" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
      </li>
      <li className ="social-icon">
        <a href="https://twitter.com/Shmoebear" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
      </li>
      <li className ="social-icon">
        <a href="https://github.com/jjobrien15" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
      </li>
    </ul>
  )
};

export default SocialBar;
