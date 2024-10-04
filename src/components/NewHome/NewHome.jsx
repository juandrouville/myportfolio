import React from "react";
import './NewHome.css'

function NewHome() {
    return (
        <div className="conteinerNewHome">
            <div className='headerNewHome'>
                <div className="square">
                    P0RTF0LI0
                </div>
                <div className="square">
                    C0NTACT0
                </div>
            </div>
            <div className="gradient"></div>
            <div className="conteinerNames">
                <div className="name">JUAN</div>
                <div className="lastname">DROUVILLE</div>
            </div>
            <div className="line"></div>
            <div className="conteinerSkills">
                <section style={{textAlign:"start"}}>
                    <h1 className="skill">GRAPHIC DESIGNER</h1>
                    <h1 className="skill">DESIGNER GRÁFIC0</h1>
                    <h1 className="skill">DISEÑAD0R GRÁFIC0</h1>
                </section>
                <section style={{textAlign:"end"}}>
                    <h1 className="skill">DEVEL0PER</h1>
                    <h1 className="skill">DESENV0LVED0R</h1>
                    <h1 className="skill">PR0GRAMAD0R</h1>                
                </section>
            </div>
            <div className="conteinerLenguage">
                <h3 className="lenguageEsp">{"{ ESPAÑ0L }"}</h3>
                <h3 className="lenguagePor">{"{ P0RTUGUES }"}</h3>
            </div>
        </div>
    );
};

export default NewHome;