import React, {useState,useEffect} from "react";
import './Skills.css';
import Modal from '../Modal/Modal';
import DownloadCv from "../DownloadCv/DownloadCv";
import { gsap } from "gsap";

function Skills(){
    const [openModal , setOpenModal]= useState(false);
    useEffect(()=>{
        gsap.to(".skill",{delay:4,opacity:1, y:-1,stagger:0.2});
    })
    return(
        <div className="conteinerSkills">
            <div style={{textAlign:'left'}} onClick={()=>setOpenModal(true)}>
                <h3 className="skill">DEVEL0PER</h3>
                <h3 className="skill">DESENV0LVED0R</h3>
                <h3 className="skill">PR0GRAMAD0R</h3>
            </div>
            <div style={{textAlign:'right'}} onClick={()=>setOpenModal(true)}>
                <h3 className="skill">GRAPHIC DESIGNER</h3>
                <h3 className="skill">DESING GRÁFIC0</h3>
                <h3 className="skill">DISEÑAD0R GRÁFIC0</h3>
            </div>
            <Modal open={openModal} onClickClose={()=>setOpenModal(false)}>
                <DownloadCv/>
            </Modal>
        </div>
    );
};

export default Skills;