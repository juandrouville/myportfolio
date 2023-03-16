import React from "react";
import './Nav.css';
import Modal from '../Modal/Modal';
import Contact from '../Contact/Contact';

function Nav(){
    const [openModal , setOpenModal]= React.useState(false);
    
    return(
        <div className="conteiner">
            <h1 className="title">JUAN DROUVILLE</h1>
            <button className="button" onClick={()=>setOpenModal(true)}>CONTACTO</button>
            <Modal open = {openModal} onClickClose={()=>setOpenModal(false)}>
                <Contact/>
            </Modal>
        </div>
    );
};

export default Nav;