import React from "react";
import './ScreenProyects.css';
import Nav from '../../Nav/Nav';
import CardProyect from "../CardProyect/CardProyect";
import { objSaturno, objWine, objDog } from './proyects';

function ScreenProyects(){
    return (
        <div className="conteinerProyects">
            <Nav/>
            <h1>PROJETOS</h1>
            <div className="proyectsList">
                <CardProyect  {...objSaturno}/>
                <CardProyect {...objWine}/>
                <CardProyect {...objDog}/>
            </div>
        </div>
    );
};

export default ScreenProyects;