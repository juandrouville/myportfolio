import React from "react";
import './DownloadCv.css';
import cvPor from '../../Curriculo-Juan-Drouville-por.pdf';
import cvEsp from '../../Cv-Juan-Drouville-esp.pdf';
import arrow from './arrow.png';

function DownloadCv() {
    return (
        <div className="conteinerDownload">
            <img className="arrow" src={arrow}/>
            <div className="rectangle"></div>
            <div className="conteinerOptions">
                <h1>PORTUGUES</h1>
                <h2> PDF | Currículo Juan Drouville </h2>
                <a  href={cvPor} 
                    target="_blank" 
                    rel="noopener noreferrer"  
                    download='Curriculo-Juan-Drouville-por.pdf'
                    className="downloadLink"> <h1> DOWNLOAD </h1> </a>
            </div>
            <div className="conteinerOptions">
                <h1>ESPANHOL</h1>
                <h2> PDF | Curriculum Juan Drouville</h2>
                <a  href={cvEsp} 
                    target="_blank" 
                    rel="noopener noreferrer"  
                    download='Cv-Juan-Drouville-esp.pdf'
                    className="downloadLink"> <h1> DOWNLOAD </h1> </a>
            </div>
        </div>
    );
};

export default DownloadCv;