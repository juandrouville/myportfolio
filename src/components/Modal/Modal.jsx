import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { gsap } from 'gsap';

const Portal = document.getElementById("portal");

const Modal = (props) => {
    const { open, onClickClose, children } = props;
    const overlayRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(()=>{
        if (open && overlayRef.current && modalRef.current) {
            gsap.to(overlayRef.current, { opacity: 1, ease: "power1.inOut", duration: 0.5 });
            gsap.to(modalRef.current, { ease: "power1.inOut", delay: 0.2, y: "0vh" });
    }
    },[open]);

    async function dismount(){
        if (modalRef.current && overlayRef.current) {
            await gsap.to(modalRef.current, { ease: "power1.inOut", y: "-100vh", duration: 0.5 });
            await gsap.to(overlayRef.current, { opacity: 0, ease: "power1.inOut", duration: 0.5 });
            onClickClose();
        }
    };

    if(!open){ return null };
        return ReactDOM.createPortal(
            <div className="containerOverlay"  ref={overlayRef} onClick={()=> dismount()}>
                <div className="containerModal" ref={modalRef} >
                    <div className="borderModal">
                        <div className="toClose" onClick={()=> dismount() }><h1>X</h1></div>
                        <div className="containerChildren">
                            {children}
                        </div>
                    </div>
                </div>
            </div>,
            Portal,
        );
    
};
    
export default Modal;
