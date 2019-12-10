import React from 'react'

import './header.styles.css'

const Header = () => {
  return (
    <div className="navigation-header">
      <div className="logo">React Flashcards</div>
      <div className="link-nav">
        <a href="/"> Home</a>
        <a href="/">About</a>
      </div>
    </div>
  );
}

export default Header;