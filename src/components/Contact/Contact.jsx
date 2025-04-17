import React, { useContext } from "react";
import './Contact.css';
import { Language } from "../../context/languageContext";
import linkedin from '../../icons/LINKEDIN.png';
import whatsapp from '../../icons/WHATSAPP.png';
import github from '../../icons/GITHUB.png';
import gitlab from '../../icons/GITLAB.png';
import instagram from '../../icons/INSTAGRAM.png';
import email from '../../icons/EMAIL.png';



function Contact() {
    const { language } = useContext(Language);
    const title = {
        esp: 'CONTACTO',
        por: 'CONTATO',
    };

    return (
        <div className="conteinerContact">
            <h1>{title[language]}</h1>
            <div className="lineBottom"></div>
            <div className="conteinerIcons">
                <div className="links">
                    <a href="https://www.linkedin.com/in/juan-drouville/" target={"_blank"} rel="noreferrer">
                        <img src={linkedin} alt='icon' />
                    </a>
                    <h2>LINKEDIN</h2>
                </div>
                <div className="links">
                    <a href="https://github.com/juandrouville" target={"_blank"} rel="noreferrer">
                        <img src={github} alt='icon' />
                    </a>
                    <h2>GITHUB</h2>
                </div>
                <div className="links">
                    <a href="https://gitlab.com/achudev" target={"_blank"} rel="noreferrer">
                        <img src={gitlab} alt='icon' />
                    </a>
                    <h2>GITLAB</h2>
                </div>
                <div className="links">
                    <a href="https://jadrouville@gmail.com" target={"_blank"} rel="noreferrer" >
                        <img src={email} alt='icon' />
                    </a>
                    <h2>EMAIL</h2>
                </div>
                <div className="links">
                    <a href="https://api.whatsapp.com/send?phone=5548988488255&text=Hola%20Juan%20Drouville!" target={"_blank"} rel="noreferrer">
                        <img src={whatsapp} alt='icon' />
                    </a>
                    <h2>WHATSAPP</h2>
                </div>
                <div className="links">
                    <a href="https://www.instagram.com/juandrouville/" target={"_blank"} rel="noreferrer">
                        <img src={instagram} alt='icon' />
                    </a>
                    <h2>INSTAGRAM</h2>
                </div>
            </div>
        </div>
    );
};


export default Contact;



