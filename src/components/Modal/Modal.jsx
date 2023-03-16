import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const Portal = document.getElementById("portal");

const Modal = (props) => {
    const { open, onClickClose, children } = props;
    if(!open){ return null };
        return ReactDOM.createPortal(
            <div className="conteinerOverley">
                <div className="conteinerModal">
                    <div className="toClose" onClick={()=>onClickClose()}><h1>X</h1></div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>,
            Portal,
        );
    
};
    
export default Modal;
