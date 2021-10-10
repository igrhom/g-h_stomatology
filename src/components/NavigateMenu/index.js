import React from "react";
import { NavLink } from "react-router-dom";
import { MenuButton } from "..";
import Styles from "./styles.module.css";

export const NavigateMenu = () => { 
    return(
        <div className = {Styles.mainStyles}>
            <NavLink to='/before_after'><MenuButton>До/після</MenuButton></NavLink>
            <NavLink to='/services'><MenuButton>Послуги</MenuButton></NavLink>
            <NavLink to='/'> <MenuButton>Головна</MenuButton></NavLink>
        </div>
    )
}