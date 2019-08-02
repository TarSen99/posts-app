import React from 'react'
import Menu from './Menu'
import './../style/header.scss'

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <div className="header__logo">
          Logo
        </div>

        <Menu removeArrows={true}/>
      </div>
    </div>
  </header>
);

export default Header;