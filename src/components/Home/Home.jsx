import React from "react";
import './Home.css';
import Nav from "../Nav/Nav";
import Gradient from "../Gradient/Gradient";
import SubNav from "../SubNav/SubNav";
import Presentation from "../Presentation/Presentation";

function Home(){
    return (
        <div className="conteinerHome">
            <Nav/>
            <Gradient/>
            {/* <SubNav/>
            <Presentation/> */}
        </div>
    );
};

export default Home;