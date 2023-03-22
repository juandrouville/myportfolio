import React from "react";
import './ScreenProyects.css';
import Nav from '../../Nav/Nav';
import SubNav from '../../SubNav/SubNav';
import CardProyect from "../CardProyect/CardProyect";
import computer from '../macbook.png';
import phone from '../phone.png';

function ScreenProyects(){
    const objProyect1 = {
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis placeat voluptatibus. Voluptate mollitia vel voluptates." ,
        title: 'MY DOG APP', 
        goSite:'https://mydog-app.web.app/',
        icon: computer,
    };
    const objProyect2 = {
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis placeat voluptatibus. Voluptate mollitia vel voluptates.",
        icon: computer,
        goSite:"https://pf-vinos-ecommerce.vercel.app/",
        title: 'WINE APP',
    }
    return (
        <div className="conteinerProyects">
            <Nav/>
            <SubNav/>
            <div className="proyectsList">
                <CardProyect {...objProyect1}/>
                <CardProyect {...objProyect2}/>
                <CardProyect  icon={phone} title={"SATURNO"}/>
            </div>
        </div>
    );
};

export default ScreenProyects;