import React, { useContext, useEffect } from "react";
import "./Lenguajes.css";
import { Language } from '../../context/languageContext';
import { gsap } from 'gsap';

function Lenguajes(){
    const { setLanguage , language } = useContext(Language);

    const changeLanguage= (event) => {
        var language = event.target.id;
        setLanguage(language);
    };

    useEffect(()=>{
        gsap.to(".containerLenguajes",{opacity:1, y:'-2vh', delay:3.5, ease:'Power1.easeIn'});
    })
    return(
        <div className="containerLenguajes">
            { language === 'esp' ? 
                ( 
                    <h1 id='esp' onClick={changeLanguage} style={{color:"#d1331e",filter: 'drop-shadow(0 0 1px #d1331e)'}}>{'{ ESPAÑ0L }'}</h1>
                ):(
                <h1 id='esp' onClick={changeLanguage}>{'{ ESPANH0L }'}</h1>
                )
            }
            {
                language === 'por' ? 
                (
                    <h1 id='por' onClick={changeLanguage} style={{color:"#d1331e",filter: 'drop-shadow(0 0 1px #d1331e)'}}>{'{ P0RTUGUÊS }'}</h1>
                ) : (
                    <h1 id='por' onClick={changeLanguage}>{'{ P0RTUGUES }'} </h1> 
                )
            }
            
        </div>
    );
};

export default Lenguajes;
           