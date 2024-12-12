import React from "react";
import './Home.css';
import Nav from "../Nav/Nav";
import Gradient from "../Gradient/Gradient";
import SubNav from "../SubNav/SubNav";
import Presentation from "../Presentation/Presentation";
import Information from "../Information/information";
import Lenguajes from "../Lenguajes/Lenguajes";

function Home(){
    return (
        <div className="conteinerHome">
            <Nav/>
            <Gradient/>
            <Information/>
            <Lenguajes/>
        </div>
    );
};

export default Home;