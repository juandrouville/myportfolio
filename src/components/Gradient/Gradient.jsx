import React,{useEffect} from "react";
import './Gradient.css'
import { gsap } from "gsap";

function Gradient(){
    useEffect(()=>{
         let tl = gsap.timeline();
         tl.to(".gradient",{ x:0,opacity:1,duration:2,ease:'power1.inOut',delay:1.5});
         tl.to(".gradient",{width:'55%',duration:0.8,ease:'power1.inOut'});
     },[]);
    return(
        <div className="conteinerGradient">
            <div className="gradient"></div>
        </div>
    )
};

export default Gradient;