import React from "react";
import './ScreenProyects.css';
import Nav from '../../Nav/Nav';
import SubNav from '../../SubNav/SubNav';
import CardProyect from "../CardProyect/CardProyect";
import { objSaturno, objWine, objDog } from './proyects';

function ScreenProyects(){
    return (
        <div className="conteinerProyects">
            <Nav/>
            <SubNav/>
            <div className="proyectsList">
                <CardProyect  {...objSaturno}/>
                <CardProyect {...objWine}/>
                <CardProyect {...objDog}/>
            </div>
        </div>
    );
};

export default ScreenProyects;