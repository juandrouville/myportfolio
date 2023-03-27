import React from "react";
import './Home.css';
import Nav from "../Nav/Nav";
import SubNav from "../SubNav/SubNav";
import Presentation from "../Presentation/Presentation";
import pdf from '../../Curriculo-Juan-Drouville-por.pdf'

function Home(){
    return (
        <div className="conteinerHome">
            <Nav/>
            <SubNav/>
            <Presentation/>
            <a href={pdf} target='_blank'rel="noopener noreferrer" download="Curriculo-Juan-Drouville-por.pdf">
            Dowload    
            </a>
        </div>
    );
};

export default Home;