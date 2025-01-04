import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { gsap } from 'gsap';

const Portal = document.getElementById("portal");

const Modal = (props) => {
    const { open, onClickClose, children } = props;

    useEffect(()=>{
        gsap.to(".conteinerOverlay",{opacity:1,ease:'power1.inOut'});
        gsap.to(".conteinerModal",{ease:'power1.inOut',delay:0.2,y:'0vh'});
    });

    async function dismount(){
        console.log("animateDismount");
        await gsap.to(".conteinerModal",{ease:'power1.inOut',y:'-100vh'});
        await gsap.to(".conteinerOverlay",{opacity:0,ease:'power1.inOut',duration:0.5});
        onClickClose();
    };

    if(!open){ return null };
        return ReactDOM.createPortal(
            <div className="conteinerOverlay" onClick={()=> dismount()}>
                <div className="conteinerModal">
                    <div className="borderModal">
                        <div className="toClose" onClick={()=> dismount() }><h1>X</h1></div>
                        <div className="conteinerChildren">
                            {children}
                        </div>
                    </div>
                </div>
            </div>,
            Portal,
        );
    
};
    
export default Modal;
