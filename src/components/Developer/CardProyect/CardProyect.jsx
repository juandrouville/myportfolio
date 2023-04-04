import React,{ useContext } from "react";
import './CardProyect.css';
import { Language } from "../../../context/languageContext";
import { Link } from "react-router-dom";
import Tools from "../Tools/Tools";

function CardProyect(props){
    const{ description, icon, goSite, title, tools} = props;
    const { language }= useContext(Language);

    return(
        <div className="conteinerCard">
            <div className="circle">
                <img src={icon} className="logo" />
                <h2>{title}</h2>
            </div>
            <div className="content">
                <div className="contentText">
                    <h2>{title}</h2>
                    <p>{description&&description[language]}</p>
                </div>
                <Tools tools = {tools} />
                { goSite ? (
                    <Link to={goSite}  target="_blank" className='buttonLink'>GO SITE!</Link>
                    ):null
                }

            </div>
            <div className="image"><img src={icon}/></div>
        </div>
    );
};

export default CardProyect;