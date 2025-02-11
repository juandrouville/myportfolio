import React, {useEffect} from "react";
import './information.css';
import Skills from "../Skills/Skills";
import Gradient from "../Gradient/Gradient";
import {gsap} from 'gsap';
import imageJuan from '../../FOTO-CURRICULO.jpg';

function Information() {
    useEffect(()=>{
        let tl = gsap.timeline();
        gsap.to(".line",{width:'100%',duration:2,ease:"power1.inOut",opacity:1,delay:3});
        tl.to(".name",{ opacity:1,letterSpacing:"0.02em",duration:1,ease:"power1.inOut",delay:3});
        tl.to(".lastname",{opacity:1,letterSpacing:"0.04em",duration:2,ease:"power1.inOut"},"<");
        tl.to(".imageJuan",{ delay:0.2,opacity:1,ease:"power1.inOut",clipPath:'inset(0 0 0 0)'},"<");
    })
    return (
        <div className="containerInformation">
                <Gradient/>
                <img src={imageJuan} className="imageJuan"/>
            <div className="containerNames">
                <div className="name"><h1>JUAN</h1></div>
                <div className="lastname"><h1>DROUVILLE</h1></div>
                <div className="containerLine">
                    <div className="line"></div>
                </div>
                <Skills/>
            </div>
        </div>
    );
};

export default Information;