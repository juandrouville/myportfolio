import React, {useState,useContext, useEffect} from "react";
import './ScreenProyects.css';
import { Language } from "../../../context/languageContext";
import CardProyect from "../CardProyect/CardProyect";
import Modal from "../../Modal/Modal";
import { proyects } from './proyects';
import { gsap } from "gsap";

function ScreenProyects(){

    useEffect(()=>{
        let tl = gsap.timeline();
        tl.to(".titleScreenProyects",{opacity:1, y:0, duration:1,ease:"power1.inOut"});
        tl.to(".lineTitle",{width:"90%",opacity:1,duration:0.8,ease:"power1.inOut"},"<");
        tl.to(".cardProyect",{opacity:1,y:0,duration:0.4,ease:"power1.inOut",stagger:0.2},"<");
        tl.to(".subTitleCardProyect",{width:"98%",duration:0.4,stagger:0.2});

    },[]);

    const { language } = useContext(Language);
    const title = {
        esp:'PROJECTOS',
        por:'PROJETOS',
    }
    
    const [selectedProyect, setSelectedProyect] = useState(null);

    const handleProyectClick = (proyect) => { setSelectedProyect(proyect) };
    const handleCloseModal = () => { setSelectedProyect(null) };

    return (
        <div className="conteinerProyects">
            <h1 className="titleScreenProyects">{title[language]}</h1>
            <div className="lineTitle"></div>
            <div className="proyectsList">
                {proyects.map(( obj, index )=>{
                    return(
                        <div key={index} className="cardProyect" onClick={()=>handleProyectClick(obj)}>
                            <h1 className="titleCardProyect">{obj.title}</h1>
                            <h1 className="subTitleCardProyect">{obj.subTitle}</h1>
                        </div> 
                    )
                })}
                {selectedProyect && (
                    <Modal open={!!selectedProyect} onClickClose={handleCloseModal}>
                        <CardProyect {...selectedProyect} />
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default ScreenProyects;