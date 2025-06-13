import React from "react";
import { useLocation } from 'react-router-dom';
import './Home.css';
import Information from "../Information/information";
import Reveal from "../Reveal/Reveal";

function Home(){
    const location = useLocation();

    return (
        <div className="containerHome">
            { location.key === "default" && <Reveal/> }
            <Information/>
        </div>
    );
};

export default Home;