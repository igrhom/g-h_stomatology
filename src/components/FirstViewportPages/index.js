import React, {Component} from "react";
import { MenuButton } from "..";
import { NavigateMenu } from "..";
import { MainFraimText } from "..";
import Styles from "./styles.module.css";
import pictureFF from "../../pictures/LandingFF.png"
import logo from "../../pictures/Logo.svg"
import { SignUpButton } from "../SignUpButton";


export const FirstViewportPages = () => {
    return(
        <div className = {Styles.mainCont}>
            <div className = {Styles.firstViewportText}>
                <div className = {Styles.imjLine}/>
                <div className = {Styles.mainText}>Першокласний стоматолог України</div>
                <div className = {Styles.secongText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper risus tellus ut amet condimentum auctor elementum convallis id. Egestas et est interdum ut. </div>
            </div>
            <img src={logo} className = {Styles.logoStyle}/>
            <img src={pictureFF} className = {Styles.pictureStyle} />
            <div className = {Styles.menuStyle}>
                <NavigateMenu/>
            </div>
            <div className = {Styles.rightLine}></div>
            <SignUpButton/>
        </div>
        
    )
}