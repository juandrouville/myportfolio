import React from "react";
import './PageWorking.css';
import Nav from "../Nav/Nav";
import SubNav from "../SubNav/SubNav";
import working from '../Developer/working.png'

function PageWorking(){
    return (
        <div className="pageWorking">
            <Nav/>
            <SubNav/>
            <div className="textWorking">
                <img src = {working}/>
                <h1>WORKING!</h1>
                <h1>COME BACK SOON!</h1>
            </div>
        </div>
    );
};

export default PageWorking;