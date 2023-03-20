import React , { useContext }from "react";
import { Language } from "../../context/languageContext";
import './Nav.css';
import Modal from '../Modal/Modal';
import Contact from '../Contact/Contact';

function Nav(){
    const [openModal , setOpenModal]= React.useState(false);
    const { language }= useContext(Language);
    const title = {
        esp:'CONTACTO',
        por:'CONTATO',
    };
    
    return(
        <div className="conteiner">
            <h1 className="title">JUAN DROUVILLE</h1>
            <button className="button" onClick={()=>setOpenModal(true)}>{title[language]}</button>
            <Modal open = {openModal} onClickClose={()=>setOpenModal(false)}>
                <Contact/>
            </Modal>
        </div>
    );
};

export default Nav;