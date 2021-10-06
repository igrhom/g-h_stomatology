import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { MenuButton } from "..";

export const NavigateMenu = () => { 
    return(
        <div style = {{ width:'100vw' }}>
            <NavLink to='/'> <MenuButton>Головна</MenuButton></NavLink>
            <NavLink to='/services'><MenuButton>Послуги</MenuButton></NavLink>
            <NavLink to='/before_after'><MenuButton>До/після</MenuButton></NavLink>
        </div>
    )
}