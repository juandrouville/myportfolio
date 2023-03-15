import React, { useContext } from "react";
import "./Lenguajes.css";
import { Language } from '../../context/languageContext';

function Lenguajes(){
    const { setLanguage } = useContext(Language);
    const changeLanguage= (event) => {
        var language = event.target.id;
        setLanguage(language);
    }
    return(
        <div className="conteinerLenguajes">
            <h1 id='esp' onClick={changeLanguage}>ESP </h1>
            <h1 style={{ marginRight:'10px',marginLeft:'10px'}}>|</h1>
            <h1 id='por' onClick={changeLanguage}>POR </h1>
            <h1 style={{ marginRight:'10px',marginLeft:'10px'}}>|</h1>
            <h1 id='ing' onClick={changeLanguage}>ING </h1>
        </div>
    );
};

export default Lenguajes;