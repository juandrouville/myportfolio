import React from "react";
import "./Presentation.css";
import img from '../../portfolio.jpg';

function Presentation(){
    return(
        <div className="conteinerPresentation">
            <div className="conteinerText">
                <h1 className="profession">DESIGNER</h1>
                <h1 className="profession">DEVELOPER</h1>
                <p>
                    Bienvenidos a mi portfolio, soy Juan Drouville.
                    Aquí muestro cada experiencia y herramienta que fui adquiriendo y que puedo ofrecer.
                    Siempre sentí la necesidad de no quedarme cómodo y de buscar mi lugar. 
                    Ahora encontré mi lugar, como programador y diseñador, y es donde me quiero desarrollar y seguir aprendiendo,crecer profesionalmente y completar este portfolio con grandes proyectos y buenos resultados.    
                </p>
            </div>
            <div className="conteinerImg">
                <img src={img} alt='My photo portfolio'/>
            </div>
        </div>
    );
};

export default Presentation;
  
