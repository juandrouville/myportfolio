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
            <h1>Contacto</h1>
            <div className="conteinerLinks">
                <div className="links">
                    <a href="https://api.whatsapp.com/send?phone=5491132751781&text=Hola%20Juan%20Drouville!" target={"_blank"}>
                        <img src = {whatsapp}/>
                    </a>
                    <h1>Whatsapp</h1>
                </div>
                <div className="links">
                    <a href="https://www.linkedin.com/in/juan-drouville/" target={"_blank"}>
                        <img src = {linkedin}/>
                    </a>
                    <h1>Linkedin</h1>
                </div>
                <div className="links">
                    <a href="https://github.com/juandrouville" target={"_blank"}>
                        <img src = {github}/>
                    </a>
                    <h1>GitHub</h1>
                </div>
                <div className="links">
                    <a href="https://jadrouville@gmail.com" target={"_blank"}>
                        <img src={email}/>
                    </a>
                    <h1>Email</h1>
                </div>
                <div className="links">
                    <a href="https://www.instagram.com/achu.fotos/" target={"_blank"}>
                        <img src = {instagram}/>
                    </a>
                    <h1>Instagram</h1>
                </div>
                <div className="links">
                    <a href="https://gitlab.com/achudev" target={"_blank"}>
                        <img src = {gitlab}/>
                    </a>
                    <h1>GitLab</h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;
