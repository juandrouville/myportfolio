import React,{useEffect} from "react";
import './Gradient.css'
import { gsap } from "gsap";

function Gradient(){
    useEffect(()=>{
        let tl = gsap.timeline();
        tl.to(".gradient",{ x:0,duration:2,delay:0.3,ease:'power1.inOut'});
        tl.to(".gradient",{width:'50%',duration:1,ease:'power1.inOut'});
    },[]);
    return(
        <div className="gradient"></div>
    )
};

export default Gradient;