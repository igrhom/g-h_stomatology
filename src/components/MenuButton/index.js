import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Styles from "./styles.module.css";


export const MenuButton = ({ children, lin } ) => { 
    return(
        <div onClick={ () => console.log(lin)} className = {Styles.mainStyles} >
            <div className = {Styles.buttonStyle}>
                {children}
            </div>
        </div>
    )
}

