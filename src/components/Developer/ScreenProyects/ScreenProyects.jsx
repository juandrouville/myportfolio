import React, {useState} from "react";
import './ScreenProyects.css';
import CardProyect from "../CardProyect/CardProyect";
import Modal from "../../Modal/Modal";
import { proyects } from './proyects';

function ScreenProyects(){
    console.log('objDog',proyects);
    const [selectedProyect, setSelectedProyect] = useState(null);

    const handleProyectClick = (proyect) => { setSelectedProyect(proyect) };
    const handleCloseModal = () => { setSelectedProyect(null) };

    return (
        <div className="conteinerProyects">
            <h1 className="titleScreenProyects">PROJETOS</h1>
            <div className="proyectsList">
                {proyects.map(( obj, index )=>{
                    return(
                        <div key={index} className="cardProyect" onClick={()=>handleProyectClick(obj)}>
                            <h1 className="titleCardProyect">{obj.title}</h1>
                            <h1 className="subTitleCardProyect">{obj.subTitle}</h1>
                        </div> 
                    )
                })}
                {selectedProyect && (
                    <Modal open={!!selectedProyect} onClickClose={handleCloseModal}>
                        <CardProyect {...selectedProyect} />
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default ScreenProyects;