import React,{ useContext } from "react";
import "./Presentation.css";
import img from '../../portfolio.jpg';
import { Language } from '../../context/languageContext';
import { Link } from 'react-router-dom';
import Modal from "../Modal/Modal";
import DownloadCv from "../DownloadCv/DownloadCv";

function Presentation(){
    const { language }= useContext(Language);
    const myText = {
        esp:'Bienvenidos a mi portfolio, soy Juan Drouville. Aquí muestro cada experiencia y herramienta que fui adquiriendo y que puedo ofrecer. Siempre sentí la necesidad de no quedarme cómodo y de buscar mi lugar.  Ahora encontré mi lugar, como programador y diseñador, y es donde me quiero desarrollar y seguir aprendiendo,crecer profesionalmente y completar este portfolio con grandes proyectos y buenos resultados.',
        por:'Bem-vindo ao meu portfólio, sou Juan Drouville. Aqui mostro cada experiência e ferramenta que fui adquirindo e que posso oferecer. Sempre senti a necessidade de não ficar confortável e de encontrar o meu lugar. Agora encontrei meu lugar, como programador e designer, e é onde quero me desenvolver e continuar aprendendo, crescer profissionalmente e completar este portfólio com grandes projetos e bons resultados.',
    };
    const download = {
        esp:'DOWNLOAD CURRICULUM',
        por:'DOWNLOAD CURRÍCULO',
    };
    const [openModal , setOpenModal]= React.useState(false);
    return(
        <div className="conteinerPresentation">
            <div className="conteinerText">
                <h1 className="professionTitle">DESIGNER</h1>
                <Link to = "/developer" style={{ textDecoration: 'none' }}>
                    <h1 className="professionTitle">DEVELOPER</h1>
                </Link>
                <p className="textPresentation">{ myText[language] }</p>
                <button className="dowloadButton" onClick={()=>setOpenModal(true)}>{download[language]}</button>
                <Modal open = {openModal} onClickClose={()=>setOpenModal(false)}>
                    <DownloadCv/>
                </Modal>
            </div>
            <div className="conteinerImg">
                <img src={img} alt='My photo portfolio'/>
            </div>
        </div>
    );
};

export default Presentation;