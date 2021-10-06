import React, {Component} from "react";
import Styles from "./styles.module.css";


export const MainFraimText = ( { children } ) => { 
    return(
        <div className = {Styles.mainStyles} >
            {children}
        </div>
    )
}

