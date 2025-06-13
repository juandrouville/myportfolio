import React,{useContext} from "react";
import { Language } from "../../context/languageContext";
import { myPresentationText } from './textPresentation';
import './information.css';
import Skills from "../Skills/Skills";
import Gradient from "../Gradient/Gradient";
import {gsap} from 'gsap';
import imageJuan from '../../FOTO-CURRICULO.jpg';
import { useGSAP } from '@gsap/react';
import ButtonDownload from "../DownloadCv/ButtonDownload/ButtonDownload";
import { useLocation } from 'react-router-dom';

function Information() {
    const { language } = useContext(Language);
    const location = useLocation();

    useGSAP(()=>{
        let delay = location.key === 'default' ? 3 : 0;
        let delayImage  = location.key === 'default' ? 0.5 : 1.8;
        let tl = gsap.timeline();
            gsap.to(".line",{width:'100%',duration:2,ease:"power1.inOut",opacity:1,delay:delay});
            tl.to(".name",{ opacity:1,letterSpacing:"0.02em",duration:1,ease:"power1.inOut",delay:delay});
            tl.to(".lastname",{opacity:1,letterSpacing:"0.04em",duration:2,ease:"power1.inOut"},"<");
            tl.to(".imageJuan",{ delay:delayImage,opacity:1,ease:"power1.inOut",clipPath:'inset(0 0 0 0)'},"<");
            tl.to(".textPresentation",{ opacity:1,ease:"power1.inOut",clipPath:'inset(0 0 0 0)'},"<");
    });
    
    return (
        <div className="containerInformation">
                <Gradient/>
                <img src={imageJuan} className="imageJuan"/>
            <div className="containerPresentation">
                <div className="name"><h1>JUAN</h1></div>
                <div className="lastname"><ButtonDownload/><h1>DROUVILLE</h1></div>
                <p className="textPresentation">{myPresentationText[language]}</p> 
                <div className="containerLine">
                    <div className="line"></div>
                </div>
                <Skills/>
            </div>
        </div>
    );
};

export default Information;