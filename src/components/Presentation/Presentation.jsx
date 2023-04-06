import React,{ useContext } from "react";
import "./Presentation.css";
import img from '../../portfolio.png';
import { Language } from '../../context/languageContext';
import { Link } from 'react-router-dom';
import Modal from "../Modal/Modal";
import DownloadCv from "../DownloadCv/DownloadCv";
import { myText, download } from "./infoPresentation";

function Presentation(){
    const { language }= useContext(Language);
    const [openModal , setOpenModal]= React.useState(false);

    return(
        <div className="conteinerPresentation">
            <div className="conteinerImg">
                <img src={img} alt='My photo portfolio'/>
            </div>
            <div className="conteinerText">
                <Link to = "/designer" style={{ textDecoration: 'none' }}> 
                    <h1 className="professionTitle">DESIGNER</h1>
                </Link>    
                <Link to = "/developer" style={{ textDecoration: 'none' }}>
                    <h1 className="professionTitle">DEVELOPER</h1>
                </Link>
                <p className="textPresentation">{ myText[language] }</p>
                <button className="dowloadButton" onClick={()=>setOpenModal(true)}>{download[language]}</button>
                <Modal open = {openModal} onClickClose={()=>setOpenModal(false)}>
                    <DownloadCv/>
                </Modal>
            </div>
        </div>
    );
};

export default Presentation;