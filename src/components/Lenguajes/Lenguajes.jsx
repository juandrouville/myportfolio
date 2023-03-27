import React, { useContext } from "react";
import "./Lenguajes.css";
import { Language } from '../../context/languageContext';

function Lenguajes(){
    const { setLanguage , language } = useContext(Language);
    console.log(language);
    const changeLanguage= (event) => {
        var language = event.target.id;
        setLanguage(language);
    }
    return(
        <div className="conteinerLenguajes">
            { language === 'esp' ? 
                ( 
                    <h1 id='esp' onClick={changeLanguage} style={{color:"#ff5613"}} >ESP </h1>
                ):(
                <h1 id='esp' onClick={changeLanguage}>ESP </h1>
                )
            }
            <h1 style={{ marginRight:'15px',marginLeft:'15px'}}>|</h1>
            {
                language === 'por' ? 
                (
                    <h1 id='por' onClick={changeLanguage} style={{color:"#ff5613"}} >POR </h1>
                ) : (
                    <h1 id='por' onClick={changeLanguage}> POR </h1> 
                )
            }
            
        </div>
    );
};

export default Lenguajes;
           