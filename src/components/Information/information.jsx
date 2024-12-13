import React, {useEffect} from "react";
import './information.css';
import Skills from "../Skills/Skills";
import {gsap} from 'gsap';

function Information() {
    useEffect(()=>{
        gsap.to(".lineNames",{width:'90vw',duration:3,delay:0.5,alignSelf: 'center',
            justifySelf: 'center'})
    })
    return (
        <div>
            <div className="containerNames">
                <h1 className="name">JUAN</h1>
                <h1 className="lastname">DROUVILLE</h1>
            </div>
            <div className="lineNames"></div>
            <Skills/>
        </div>
    );
};

export default Information;