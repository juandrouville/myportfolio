import React,{ useState }from "react";
import Modal from '../../Modal/Modal';
import DownloadCv from "../DownloadCv";
import './ButtonDownload.css';
import { MdOutlineFileDownload } from "react-icons/md";

function ButtonDownload(){
    const [openModal , setOpenModal]= useState(false);
    return (
        <div className="buttonAbsolute" onClick={() => {setOpenModal(true);console.log('onClick')}}>
            <MdOutlineFileDownload color="#e1dfba" size={'0.8em'}/>
            <Modal open={openModal} onClickClose={()=>setOpenModal(false)}>
                <DownloadCv/>
            </Modal>
        </div>
    );
};

export default ButtonDownload;