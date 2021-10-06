import React, {Component} from "react";
import {MenuButton} from "../../components";
import { NavigateMenu } from "../../components";
import { MainFraimText } from "../../components";
import Styles from "./styles.module.css";
import pictureFF from "../../pictures/LandingFF.png"
import logo from "../../pictures/Logo.svg"


export class Landing extends Component{
    render(){
        return(
            <div className = {Styles.mainCont}>
                <div>
                    <MainFraimText>Першокласний стоматолог України</MainFraimText>
                </div>
                <img src={logo} className = {Styles.logoStyle}/>
                <img src={pictureFF} className = {Styles.pictureStyle} />
                <div className = {Styles.menuStyle}>
                    <NavigateMenu></NavigateMenu>
                </div>
                <div className = {Styles.rightLine}></div>
                <div className = {Styles.imjLine}></div>
                <div className = {Styles.secongText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper risus tellus ut amet condimentum auctor elementum convallis id. Egestas et est interdum ut. </div>
            </div>
        )
    }
}