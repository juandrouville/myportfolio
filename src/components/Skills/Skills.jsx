import React, {useState} from "react";
import './Skills.css';
import Modal from '../Modal/Modal';
import DownloadCv from "../DownloadCv/DownloadCv";

function Skills(){
    const [openModal , setOpenModal]= useState(false);
    return(
        <div className="conteinerSkills">
            <div style={{textAlign:'left'}} onClick={()=>setOpenModal(true)}>
                <h3>DEVEL0PER</h3>
                <h3>DESENV0LVED0R</h3>
                <h3>PR0GRAMAD0R</h3>
            </div>
            <div style={{textAlign:'right'}} onClick={()=>setOpenModal(true)}>
                <h3>GRAPHIC DESIGNER</h3>
                <h3>DESING GRÁFIC0</h3>
                <h3>DISEÑAD0R GRÁFIC0</h3>
            </div>
            <Modal open={openModal} onClickClose={()=>setOpenModal(false)}>
                <DownloadCv/>
            </Modal>
        </div>
    );
};

export default Skills;