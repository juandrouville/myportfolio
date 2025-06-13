import React, {useState,useEffect} from "react";
import './Skills.css';
import { Link } from "react-router-dom";
import Modal from '../Modal/Modal';
import DownloadCv from "../DownloadCv/DownloadCv";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

function Skills(){
    const [openModal , setOpenModal]= useState(false);
    const location = useLocation();

    let delay = location.key === 'default' ? 4 : 0.8;
    useEffect(()=>{
        let tl = gsap.timeline();
        tl.to(".skill",{delay:delay,opacity:1, y:-1});
    });
    return(
        <div className="conteinerSkills">
            <Link to={'/developer'} className="subLineMenu">
                <div className="skill">{"[ DEVEL0PER ]"}</div>
                <div className="skill arrow">{"\u00A0<--"}</div>
            </Link>
            <a  className="subLineMenu" href="https://www.behance.net/jadrouvillaa0e/" target={"_blank"} rel="noreferrer" style={{textAlign:'right'}}>
                <div className="skill arrow">{"-->\u00A0"}</div>
                <div className="skill"> {"[ DESIGNER ] "}</div>
            </a>
            <Modal open={openModal} onClickClose={()=>setOpenModal(false)}>
                <DownloadCv/>
            </Modal>
        </div>
    );
};

export default Skills;