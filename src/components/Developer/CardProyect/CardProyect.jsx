import React, { useContext } from "react";
import './CardProyect.css';
import { Language } from "../../../context/languageContext";
import { Link } from "react-router-dom";
import Tools from "../Tools/Tools";

function CardProyect(props) {
    const { description, goSite, title, tools } = props;
    const { language } = useContext(Language);

    return (
        <div className="conteinerCard">
            <div className="contentCardProyect">
                <div className="conteinerCardTitle">
                    <h2 className="cardTitle">{title}</h2>
                </div>
                <div className="conteinerDecoration">
                    <div className="squareDecoration"></div>
                    <div className="squareDecoration"></div>
                    <div className="squareDecoration"></div>
                    <div className="squareDecoration"></div>
                    <div className="squareDecoration"></div>
                    <div className="squareDecoration"></div>
                </div>
                <p className="descriptionText">{description && description[language]}</p>
                <div className="toolsArea">
                    <h1 className='toolsTitle'>FERRAMENTAS</h1>
                    <Tools tools={tools}/>
                </div>
            {goSite ? (
                <Link to={goSite} target="_blank" className='buttonLink'>G0 SITE!</Link>
            ) : null
            }
            </div>
        </div>
    );
};




export default CardProyect;
