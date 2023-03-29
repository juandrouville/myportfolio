import React,{ useContext } from "react";
import './CardProyect.css';
import { Language } from "../../../context/languageContext";
import { Link } from "react-router-dom";
import Tools from "../Tools/Tools";

function CardProyect(props){
    const{ description ,icon , goSite , title} = props || 'em breve';
    const { language }= useContext(Language);
    
    return(
        <div className="conteinerCard">
            <div className="circle">
                <img src={icon} className="logo" />
                <h2>{title}</h2>
            </div>
            <div className="content">
                <div className="contentTitle">
                    <h2>{title}</h2>
                    <h3>Ferramentas</h3>
                </div>
                <Tools/>
                <Link to={goSite}  target="_blank" className='buttonLink'>GO SITE!</Link>
            </div>
            <div className="image"><img src={icon}/></div>
        </div>
    );
};

export default CardProyect;