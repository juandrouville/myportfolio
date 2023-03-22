import React from "react";
import './SubNav.css';
import Lenguajes from "../Lenguajes/Lenguajes";
import { Link } from "react-router-dom";

function SubNav(){
    return(
        <div className="conteinerSubNav">
            <Link to={'/'} style={{textDecoration:"none"}}>
                <div className="conteinerPortfolio">
                    <h1>PORTFOLIO</h1>
                </div>
            </Link>
            <div className="conteinerLinks">
                <Link to = {'/developer'} className = "linksNav">DEVELOPER</Link>
                <Link to = {'/designer'} className = "linksNav">DESIGNER</Link>
            </div>
            <Lenguajes/>
        </div>
    );
};

export default SubNav;
                