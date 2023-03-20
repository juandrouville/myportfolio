import React from "react";
import './CardProyect.css';
import dogLogo from '../App-dog.png';
import png from '../png.png';
import { Link } from "react-router-dom";

function CardProyect(){
    return(
        <div className="conteinerCard">
            <div className="circle">
                <img src={dogLogo} className="logo" />
                <h2>Proyecto Web</h2>
            </div>
            <div className="content">
                <h2>Proyect Web</h2>
                <p style={{fontFamily:'textFont'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis placeat voluptatibus. Voluptate mollitia vel voluptates.</p>
                <Link to={'https://mydog-app.web.app/'}  target="_blank" className='buttonLink'>GO SITE!</Link>
            </div>
            <div className="image"><img src={png}/></div>
        </div>
    );
};

export default CardProyect;