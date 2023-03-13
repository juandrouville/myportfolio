import React from "react";
import "./Presentation.css";
import img from '../../portfolio.jpg';

function Presentation(){
    return(
        <div className="conteinerPresentation">
            <div className="conteinerText">
                <h1 className="profession">DESIGNER</h1>
                <h1 className="profession">DEVELOPER</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias corrupti 
                    ducimus provident quidem eius est fugiat adipisci, aliquam quas nihil, omnis consequuntur 
                    commodi labore laboriosam doloribus odio asperiores a culpa.
                </p>
            </div>
            <div className="conteinerImg">
                <img src={img} alt='My photo portfolio'/>
            </div>
        </div>
    );
};

export default Presentation;