import React from "react";
import './information.css';
import Skills from "../Skills/Skills";

function Information() {
    return (
        <div>
            <div className="containerNames">
                <h1 className="name">JUAN</h1>
                <h1 className="lastname">DROUVILLE</h1>
            </div>
            <div className="lineNames"></div>
            <Skills/>
        </div>
    );
};

export default Information;