import React from "react";
import './SubNav.css';
import Lenguajes from "../Lenguajes/Lenguajes";

function SubNav(){
    return(
        <div className="conteinerSubNav">
            <div className="conteinerPortfolio">
                PORTFOLIO
            </div>
            <Lenguajes/>
        </div>
    );
};

export default SubNav;