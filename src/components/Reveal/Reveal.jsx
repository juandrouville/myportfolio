import React, { useEffect } from "react";
import './Reveal.css';
import { gsap } from "gsap";

function Reveal() {
    useEffect(()=>{
        gsap.to(".block",{ width:0,x:'-180%',ease:'power1.inOut',stagger:0.3,opacity:0,delay:8});
        gsap.to(".conteinerReveal",{x:"300%",ease:'power1.inOut',duration:3,delay:8});
    },[])
    return (
        <div className="conteinerReveal">
            <h1>Welcome!</h1>
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