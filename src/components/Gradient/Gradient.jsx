import React,{useEffect} from "react";
import './Gradient.css'
import { gsap } from "gsap";

function Gradient(){
    useEffect(()=>{
        let tl = gsap.timeline();
        tl.to(".gradient",{ x:0,opacity:0.8,duration:2,ease:'power1.inOut',delay:1});
        tl.to(".gradient",{ opacity:1,ease:'power1.inOut'});
        tl.to(".gradient",{width:'50%',duration:1,ease:'power1.inOut'});
    },[]);
    return(
        <div className="conteinerGradient">
            <div className="gradient"></div>
        </div>
    )
};

export default Gradient;