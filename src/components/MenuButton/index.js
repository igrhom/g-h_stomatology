import React, {Component} from "react";
import Styles from "./styles.module.css";


export const MenuButton = ({ children } ) => { 
    return(
        <div className = {Styles.mainStyles} >
            <div className = {Styles.buttonStyle}>
                {children}
            </div>
        </div>
    )
}

