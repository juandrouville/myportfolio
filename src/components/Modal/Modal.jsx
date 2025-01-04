import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { gsap } from 'gsap';

const Portal = document.getElementById("portal");

const Modal = (props) => {
    const { open, onClickClose, children } = props;

    useEffect(()=>{
        gsap.to(".conteinerOverley",{opacity:1,ease:'power1.inOut'});
        gsap.to(".conteinerModal",{ease:'power1.inOut',delay:0.2,y:'0vh'});
    })
    if(!open){ return null };
        return ReactDOM.createPortal(
            <div className="conteinerOverley">
                <div className="conteinerModal">
                    <div className="borderModal">
                        <div className="toClose" onClick={()=>onClickClose()}><h1>X</h1></div>
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
