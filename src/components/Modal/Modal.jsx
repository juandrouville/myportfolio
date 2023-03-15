import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const Portal = document.getElementById("portal");

const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <div className="conteinerOverley">
            <div className="conteinerModal">
                <div className="toClose"> X </div>
                <div> {children} </div>
            </div>
        </div>,
        Portal,
    );
};

export default Modal;