import React, {useState,useEffect} from "react";
import './Skills.css';
import { Link } from "react-router-dom";
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
            <Link to={'/developer'} className="subLineMenu">
                <div className="skill">{"[ DEVEL0PER ] <--"}</div>
            </Link>
            <a  className="subLineMenu" href="https://www.behance.net/jadrouvillaa0e/" target={"_blank"} rel="noreferrer" style={{textAlign:'right'}}>
                <div className="skill"> {"--> [ DESIGNER ] "}</div>
            </a>
            <Modal open={openModal} onClickClose={()=>setOpenModal(false)}>
                <DownloadCv/>
            </Modal>
        </div>
    );
};

export default Skills;