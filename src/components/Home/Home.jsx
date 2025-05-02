import React from "react";
import './Home.css';
import Information from "../Information/information";
import Lenguajes from "../Lenguajes/Lenguajes";
import Reveal from "../Reveal/Reveal";

function Home(){
    return (
        <div className="containerHome">
            <Reveal/>
            <Information/>
        </div>
    );
};

export default Home;