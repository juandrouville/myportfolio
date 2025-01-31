import React, { useEffect } from "react";
import './Reveal.css';
import { gsap } from "gsap";

function Reveal() {
    useEffect(()=>{
        let tl = gsap.timeline();
        tl.to(".textReveal",{opacity:1,y:'-20%',ease:'power1.inOut',stagger:0.2,duration:0.5,delay:0.2});
        tl.to(".textReveal",{ delay:1, x:"45%",opacity:0,stagger:0.3,ease:'power1.inOut',duration:0.8});
        tl.to(".first",{width:0,height:0});
        tl.to(".block",{ width:0,x:'80%',ease:'power1.inOut',stagger:0.1,opacity:0,duration:0.8},"<");
        tl.to(".conteinerReveal",{width:0,height:0});
    },[])
    return (
        <div className="conteinerReveal">
            <div className="first">
                <h1 className= 'textReveal portfolio'>P0RTF0LI0 JUAN DR0UVILLE</h1>
                <h1 className = 'textReveal welcome'>WELCOME</h1>
                <h1 className= 'textReveal by'>BY JUAN DR0UVILLE</h1>
            </div>
            <div class="block block-1"></div>
            <div class="block block-2"></div>
            <div class="block block-3"></div>
            <div class="block block-4"></div>
            <div class="block block-5"></div>
            <div class="block block-6"></div>
            <div class="block block-7"></div>
            <div class="block block-8"></div>
            <div class="block block-9"></div>
            <div class="block block-10"></div>
            <div class="block block-11"></div>
            <div class="block block-12"></div>
            <div class="block block-13"></div>
            <div class="block block-14"></div>
            <div class="block block-15"></div>
            <div class="block block-16"></div>
            <div class="block block-17"></div>
            <div class="block block-18"></div>
            <div class="block block-19"></div>
            <div class="block block-20"></div>
        </div>
    );
};

export default Reveal;