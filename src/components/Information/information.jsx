import React, {useEffect} from "react";
import './information.css';
import Skills from "../Skills/Skills";
import {gsap} from 'gsap';

function Information() {
    useEffect(()=>{
        let tl = gsap.timeline();
        gsap.to(".lineNames",{width:'100%',duration:2,ease:"power1.inOut",opacity:1,delay:3});
        tl.to(".name",{ opacity:1,letterSpacing:"0.02em",duration:1,ease:"power1.inOut",delay:3});
        tl.to(".lastname",{opacity:1,letterSpacing:"0.04em",duration:2,ease:"power1.inOut"},"<");
    })
    return (
        <div>
            <div className="containerNames">
                <h1 className="name">JUAN</h1>
                <h1 className="lastname">DROUVILLE</h1>
            </div>
            <div className="conteinerLine">
                <div className="lineNames"></div>
            </div>
            <Skills/>
        </div>
    );
};

export default Information;