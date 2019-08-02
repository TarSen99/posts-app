import React from 'react'
import { NavLink } from "react-router-dom";

import MENU_ITEMS from './menu_config'

const Menu = ({ removeArrows }) => (
  <nav>
    <ul className="header__menu">
      {
        MENU_ITEMS.map(item => {
          return (
            <li className="header__menu-item" key={item.link}>
              <NavLink to={item.link} exact activeClassName="header__menu-item_selected">
                {item.title}
              </NavLink>
              {!removeArrows && <span className="header__menu-item__arrow"></span>}
            </li>
          )
        })
      }
    </ul>
  </nav>
);

export default Menu