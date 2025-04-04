import React, {useContext} from "react";
import './DownloadCv.css';
import cvPor from '../../curriculo-juanDrouville-por.pdf';
import cvEsp from '../../curriculo-juanDrouville-esp.pdf';
import { Language } from "../../context/languageContext";
import { MdOutlineFileDownload } from "react-icons/md";

function DownloadCv() {
    const { language } = useContext(Language);
    var languageTitle = '';
    language === 'por'? languageTitle = 'CURRÍCULO' : languageTitle = 'CURRICULUM';
    return (
        <div className="conteinerDownload">
            <h1 className="titleModalDownload" >{`DOWNLOAD ${languageTitle}`}</h1>
            <div className="conteinerOptions">
                <a  href={cvPor} target="_blank" rel="noopener noreferrer"  download='curriculo-juanDrouville-por.pdf'className="downloadLink">
                    <h2> PDF | VERSÃO PORTUGUÊS </h2>  
                    <MdOutlineFileDownload color='#e1dfba' size={'clamp(1.8em,2.5vw,3em)'}/>
                </a>
                <div className='conteinerBottomLine'>
                    <div className="lineBottomOptions"></div>
                </div>
            </div>
            <div className="conteinerOptions">
                <a  href={cvEsp} target="_blank" rel="noopener noreferrer"  download='curriculo-juanDrouville-esp.pdf'className="downloadLink">
                    <h2> PDF | VERSION ESPAÑOL</h2>
                    <MdOutlineFileDownload color='#e1dfba'size={'clamp(1.8em,2.5vw,3em)'}/> 
                </a>
                <div className='conteinerBottomLine'>
                    <div className="lineBottomOptions"></div>
                </div>
            </div>
        </div>
    );
};

export default DownloadCv;