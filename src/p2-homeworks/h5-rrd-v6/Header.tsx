import React from "react"
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css";

function Header() {
    return (
        <div>
            <NavLink className={({isActive}) => isActive ? s.activeNavLink : s.navLinkItem} to={PATH.PRE_JUNIOR}>Pre
                Junior</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeNavLink : s.navLinkItem}
                     to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeNavLink : s.navLinkItem}
                     to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
        </div>
    )
}

export default Header
