import React from "react";
import './Home.css';
import Nav from "../Nav/Nav";
import Information from "../Information/information";
import Lenguajes from "../Lenguajes/Lenguajes";
import Reveal from "../Reveal/Reveal";

function Home(){
    return (
        <div className="containerHome">
            <Nav/>
            <Reveal/>
            <Information/>
            <Lenguajes/>
        </div>
    );
};

export default Home;