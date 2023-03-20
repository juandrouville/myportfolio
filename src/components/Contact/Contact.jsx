import React from "react";
import './Contact.css';
import linkedin from '../../icons/LINKEDIN.png';
import whatsapp from '../../icons/WHATSAPP.png';
import github from '../../icons/GITHUB.png';
import gitlab from '../../icons/GITLAB.png';
import instagram from '../../icons/INSTAGRAM.png';
import email from '../../icons/EMAIL.png';



function Contact(){
    return (
        <div className="conteinerContact">
            <h1>CONTACTO</h1>
            <div className="conteinerIcons">
                <div className="divisionIcons">
                    <div className="links">
                        <a href="https://www.linkedin.com/in/juan-drouville/" target={"_blank"} rel="noreferrer">
                            <img src = {linkedin} alt='icon'/>
                        </a>
                        <h2>Linkedin</h2>
                    </div>
                    <div className="links">
                        <a href="https://github.com/juandrouville" target={"_blank"} rel="noreferrer">
                            <img src = {github} alt='icon'/>
                        </a>
                        <h2>GitHub</h2>
                    </div>
                    <div className="links">
                        <a href="https://gitlab.com/achudev" target={"_blank"} rel="noreferrer">
                            <img src = {gitlab} alt='icon' />
                        </a>
                        <h2>GitLab</h2>
                    </div>
                </div>
                <div className="divisionIcons">
                    <div className="links">
                        <a href="https://jadrouville@gmail.com" target={"_blank"} rel="noreferrer" >
                            <img src={email} alt='icon'/>
                        </a>
                        <h2>Email</h2>
                    </div>
                    <div className="links">
                        <a href="https://api.whatsapp.com/send?phone=5491132751781&text=Hola%20Juan%20Drouville!" target={"_blank"} rel="noreferrer">
                            <img src = {whatsapp} alt='icon'/>
                        </a>
                        <h2>Whatsapp</h2>
                    </div>
                    <div className="links">
                        <a href="https://www.instagram.com/achu.fotos/" target={"_blank"} rel="noreferrer">
                            <img src = {instagram} alt='icon'/>
                        </a>
                        <h2>Instagram</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
