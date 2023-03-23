import React from "react";
import './Tools.css';

import iconCss from '../css.svg';
import iconExpress from '../express.svg';
import iconHtml from '../html.svg';
import iconJavascript from '../javascript.svg';
import iconPostgres from '../postgress.svg';
import iconReact from '../react.svg';
import iconRedux from '../redux.svg';

function Tools(){
    return (
        <div className="conteinerTools">
            <div className="iconText">
                <img src={iconHtml}/>
                <h3>Html</h3>
            </div>
            <div className="iconText">
                <img src={iconCss}/>
                <h3>Css</h3>
            </div>
            <div className="iconText">
                <img src={iconJavascript}/>
                <h3>JavaScript</h3>
            </div>
            <div className="iconText">
                <img src={iconReact}/>
                <h3>React</h3>
            </div>
            <div className="iconText">
                <img src={iconRedux}/>
                <h3>Redux</h3>
            </div>
            <div className="iconText">
                <img src={iconPostgres}/>
                <h3>Postgres</h3>
            </div>
        </div>
    );
};

export default Tools;