import React from "react";
import './DownloadCv.css';
import cvPor from '../../curriculo-juanDrouville-por.pdf';
import cvEsp from '../../curriculo-juanDrouville-esp.pdf';
import arrow from './arrow.png';

function DownloadCv() {
    return (
        <div className="conteinerDownload">
            <img className="arrow" src={arrow}/>
            <div className="rectangle"></div>
            <div className="conteinerOptions">
                <a  href={cvPor} target="_blank" rel="noopener noreferrer"  download='curriculo-juanDrouville-por.pdf'className="downloadLink">
                    <h1>P0RTUGUES</h1>
                    <h2> PDF | CURRÍCULO JUAN DROUVILLE </h2>  
                    <h1> D0WNL0AD </h1> 
                </a>
            </div>
            <div className="conteinerOptions">
                <a  href={cvEsp} target="_blank" rel="noopener noreferrer"  download='curriculo-juanDrouville-esp.pdf'className="downloadLink">
                    <h1>ESPANH0L</h1>
                    <h2> PDF | CURRICULUM JUAN DROUVILLE</h2>
                    <h1> D0WNL0AD </h1> 
                </a>
            </div>
        </div>
    );
};

export default DownloadCv;