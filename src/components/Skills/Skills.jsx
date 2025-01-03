import React, {useState,useEffect} from "react";
import './Skills.css';
import Modal from '../Modal/Modal';
import DownloadCv from "../DownloadCv/DownloadCv";
import { gsap } from "gsap";

function Skills(){
    const [openModal , setOpenModal]= useState(false);
    useEffect(()=>{
        gsap.to(".left",{delay:4,opacity:1, y:-1,stagger:0.2});
        gsap.to(".right",{delay:4,opacity:1, y:-1,stagger:0.2});
    })
    return(
        <div className="conteinerSkills">
            <div style={{textAlign:"left"}} onClick={()=>setOpenModal(true)}>
                <div className="left skill"> DEVEL0PER</div>
                <div className="left skill"> DESENV0LVED0R</div>
                <div className="left skill"> PR0GRAMAD0R</div>
            </div>
            <div  style={{textAlign:"right"}}  onClick={()=>setOpenModal(true)}>
                <div className="right skill">GRAPHIC DESIGNER </div>
                <div className="right skill">DESING GRÁFIC0 </div>
                <div className="right skill">DISEÑAD0R GRÁFIC0 </div>
            </div>
            <Modal open={openModal} onClickClose={()=>setOpenModal(false)}>
                <DownloadCv/>
            </Modal>
        </div>
    );
};

export default Skills;