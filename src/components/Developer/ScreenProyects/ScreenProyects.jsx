import React from "react";
import './ScreenProyects.css';
import Nav from '../../Nav/Nav';
import SubNav from '../../SubNav/SubNav';
import CardProyect from "../CardProyect/CardProyect";

function ScreenProyects(){
    return (
        <div className="conteinerProyects">
            <Nav/>
            <SubNav/>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                <CardProyect/>
                <CardProyect/>
            </div>
        </div>
    );
};

export default ScreenProyects;