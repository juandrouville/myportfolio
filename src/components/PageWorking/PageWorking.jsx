import React, { useContext } from "react";
import './PageWorking.css';
import Nav from "../Nav/Nav";
import SubNav from "../SubNav/SubNav";
import working from '../Developer/working.png'
import { title , subTitle } from "./textsWorking";
import { Language } from "../../context/languageContext";

function PageWorking(){
    const { language }= useContext(Language);
    return (
        <div className="pageWorking">
            <Nav/>
            <SubNav/>
            <div className="textWorking">
                <img src = {working}/>
                <h1>{title[language]}</h1>
                <h1>{subTitle[language]}</h1>
            </div>
        </div>
    );
};

export default PageWorking;