import React,{ useContext } from "react";
import './CardProyect.css';
import { Language } from "../../../context/languageContext";
import { Link } from "react-router-dom";

function CardProyect(props){
    const{ description ,icon , goSite , mockUp} = props || 'em breve';
    const { language }= useContext(Language);
    const title = {
        esp:'PROYECTO WEB',
        por:'PROJETO WEB',
    }
    return(
        <div className="conteinerCard">
            <div className="circle">
                <img src={icon} className="logo" />
                <h2>{title[language]}</h2>
            </div>
            <div className="content">
                <h2>{title[language]}</h2>
                <p style={{fontFamily:'textFont'}}>{description}</p>
                <Link to={goSite}  target="_blank" className='buttonLink'>GO SITE!</Link>
            </div>
            <div className="image"><img src={mockUp}/></div>
        </div>
    );
};

export default CardProyect;