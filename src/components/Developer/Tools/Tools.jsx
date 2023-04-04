import React from "react";
import './Tools.css';
import { objTools } from "./infoTools";

function Tools(props){
    
    const propsTools = props.tools;
    const proyectTools = objTools.filter((tool)=>{
        if( propsTools.includes(tool.tool)){
            return tool;
        };
    });

    const mapTools = () => {
        return (
            proyectTools.map((tool) => {
                return (
                    <div className="iconText">
                        <img src={tool.icon}></img>
                        <h3>{tool.tool}</h3>
                    </div>
                );
            })
        )
    };

    return (
        <div className="conteinerTools">
            { mapTools() }
        </div>
    );
};

export default Tools;
    