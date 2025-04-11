import React, {useState} from "react";
import './ScreenProyects.css';
import CardProyect from "../CardProyect/CardProyect";
import Modal from "../../Modal/Modal";
import { objSaturno, objWine, objDog, objMyPortfolio } from './proyects';

function ScreenProyects(){
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="conteinerProyects">
            <h1>PROJETOS</h1>
            <div className="proyectsList" onClick={()=>setOpenModal(true)}>
                <CardProyect  {...objSaturno}/>
                {/* <CardProyect {...objWine}/>
                <CardProyect {...objDog}/>
                <CardProyect {...objMyPortfolio}/> */}
            </div>
            <Modal open={openModal} onClickClose={() => setOpenModal(false)}>
                <CardProyect  {...objSaturno}/>
            </Modal>
        </div>
    );
};

export default ScreenProyects;