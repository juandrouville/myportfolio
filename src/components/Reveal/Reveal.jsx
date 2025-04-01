import React, { useEffect } from "react";
import './Reveal.css';
import { gsap } from "gsap";

function Reveal() {
    useEffect(()=>{
        let tl = gsap.timeline();
        tl.to(".textReveal",{opacity:1,ease:'power1.inOut',stagger:0.2,duration:0.5,delay:0.2});  
        tl.to(".textReveal",{ x:'80%',delay:1,opacity:0,stagger:0.3,ease:'power1.inOut',duration:1.4});
        tl.to(".block",{ backgroundColor:'#d1331e',width:0,ease:'power1.inOut',stagger:0.1,duration:0.8},"<");
        tl.to(".containerReveal",{display:'none'});
    },[])

    return (
        <div className="containerReveal">
            <div className="intro">
                <h1 className = 'textReveal welcome'>WELCOME</h1>
                <h1 className= 'textReveal portfolio'>MY P0RTF0LI0</h1>
            </div>
            <div className="block block-1 "></div>
            <div className="block block-2 "></div>
            <div className="block block-3 "></div>
            <div className="block block-4 "></div>
            <div className="block block-5 "></div>
            <div className="block block-6 "></div>
            <div className="block block-7 "></div>
            <div className="block block-8 "></div>
            <div className="block block-9 "></div>
            <div className="block block-10 "></div>
            <div className="block block-11 "></div>
            <div className="block block-12 "></div>
            <div className="block block-13 "></div>
            <div className="block block-14 "></div>
            <div className="block block-15 "></div>
            <div className="block block-16 "></div>
            <div className="block block-17 "></div>
            <div className="block block-18 "></div>
            <div className="block block-19 "></div>
            <div className="block block-20 "></div>
        </div>
    );
};

export default Reveal;