import React from "react";
import './ScreenProyects.css';
import Nav from '../../Nav/Nav';
import SubNav from '../../SubNav/SubNav';
import CardProyect from "../CardProyect/CardProyect";
import computer from '../macbook.png';
import phone from '../phone.png';

function ScreenProyects(){
    const objDog = {
        description:{
            esp:"Aplicación Web, proyecto personal para curso fullstack de Soy Henry, utilice:",
            por:"Aplicativo Web, projeto pessoal para curso fullstack de Soy Henry, utilizei:",
        },
        title: 'MY DOG APP', 
        goSite:'https://mydog-app.web.app/',
        icon: computer,
        tools:["Html","JavaScript","NodeJS","Css","ReactJS","Redux","Postgress","Sequelize"],
    };
    const objWine = {
        description: {
         esp:"Aplicación Web, proyecto grupal para el curso fullstack de Soy Henry, utilice:",
         por:"Aplicativo Web, projeto de grupo para curso fullstack de Soy Henry, utilizei",
        },
        icon: computer,
        goSite:"https://pf-vinos-ecommerce.vercel.app/",
        title: 'WINE APP',
        tools:["Html","JavaScript","NodeJS","Css","ReactJS","Redux","Postgress","Sequelize"],
    };
    const objSaturno = {
        description : {
            esp:"Aplicación mobile para sistema de salud argentino, donde actue como front-end, utilice:",
            por:"Aplicativo mobile para o sitema de saúde argentino, onde atuei como front-end, utilizei:",
        },
        icon:phone,
        goSite:false,
        title:"SATURNO APP",
        tools:["JavaScript","NodeJS","React Native","Expo","Css"],
    }
            
    return (
        <div className="conteinerProyects">
            <Nav/>
            <SubNav/>
            <div className="proyectsList">
                <CardProyect  {...objSaturno}/>
                <CardProyect {...objDog}/>
                <CardProyect {...objWine}/>
            </div>
        </div>
    );
};

export default ScreenProyects;