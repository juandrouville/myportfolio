import React,{useEffect} from "react";
import './Gradient.css'
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

function Gradient(){
    const location = useLocation();

    useEffect(()=>{
        let delay = location.key === 'default' ? 1.5 : 0;
        let tl = gsap.timeline();
        tl.to(".gradient",{ x:0,opacity:1,duration:2,ease:'power1.inOut',delay:delay});
        tl.to(".gradient",{width:'55%',duration:0.8,ease:'power1.inOut'});
     },[]);
    return(
        <div className="conteinerGradient">
            <div className="gradient"></div>
        </div>
    )
};

export default Gradient;