import React from "react";

function Contact(){
    return (
        <div>
            Contacto
            <a href="https://api.whatsapp.com/send?phone=5491132751781&text=Hola%20Juan%20Drouville!" target={"_blank"}>
                <h1>Whatsapp</h1>
            </a>
            <a href="https://www.linkedin.com/in/juan-drouville/" target={"_blank"}>
                <h1>LinkedIn</h1>
            </a>
            <a href="https://github.com/juandrouville" target={"_blank"}>
                <h1>GitHub</h1>
            </a>
            <a href="https://jadrouville@gmail.com" target={"_blank"}>
                <h1>Email</h1>
            </a>
            <a href="https://www.instagram.com/achu.fotos/" target={"_blank"}>
                <h1>Instagram</h1>
            </a>
            <a href="https://gitlab.com/achudev" target={"_blank"}>
                <h1>GitLab</h1>
            </a>
        </div>
    );
};

export default Contact;
