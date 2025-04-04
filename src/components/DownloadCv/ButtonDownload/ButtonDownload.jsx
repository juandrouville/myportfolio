import React,{ useState, useEffect }from "react";
import Modal from '../../Modal/Modal';
import DownloadCv from "../DownloadCv";
import './ButtonDownload.css';
import { MdOutlineFileDownload } from "react-icons/md";
import gsap from "gsap";

function ButtonDownload(){
    const [openModal , setOpenModal]= useState(false);
    useEffect(()=>{
        gsap.to(".buttonAbsolute",{delay:2,duration:1.5,clipPath: 'inset(0 0 0 0)'});
    })
    return (
        <div className="buttonAbsolute" onClick={() => {setOpenModal(true)}}>
            <MdOutlineFileDownload color="#e1dfba" size={'clamp( 1em ,1vw, 1.1em)'}/>
            <Modal open={openModal} onClickClose={()=>setOpenModal(false)}>
                <DownloadCv/>
            </Modal>
        </div>
    );
};

export default ButtonDownload;