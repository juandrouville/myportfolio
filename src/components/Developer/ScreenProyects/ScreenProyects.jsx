import React from "react";
import './ScreenProyects.css';
import Nav from '../../Nav/Nav';
import SubNav from '../../SubNav/SubNav';
import CardProyect from "../CardProyect/CardProyect";
import iconDog from '../iconDogApp.png';
import computer from "../computer.png";
import mockUp from "../computerMock.png";

function ScreenProyects(){
    const objProyect1 = {
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis placeat voluptatibus. Voluptate mollitia vel voluptates." ,
        icon: iconDog , 
        goSite:'https://mydog-app.web.app/',
        mockUp:mockUp,
    };
    const objProyect2 = {
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis placeat voluptatibus. Voluptate mollitia vel voluptates.",
        icon: iconDog,
        goSite:"https://pf-vinos-ecommerce.vercel.app/",
        mockUp: mockUp,
    }
    return (
        <div className="conteinerProyects">
            <Nav/>
            <SubNav/>
            <div className="proyectsList">
                <CardProyect {...objProyect1}/>
                <CardProyect {...objProyect2}/>
                <CardProyect  icon={computer}/>
            </div>
        </div>
    );
};

export default ScreenProyects;