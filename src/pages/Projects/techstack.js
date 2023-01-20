import React from 'react';
import TECH from '../../assets/content/Tech/tech.js';


function TechStack (props){
    return<div class="container">
        <div class="row">
            <h6 class="text-muted font-monospace fst-italic">tech-stack:</h6>
        </div>
        <div class="row">
        {props.techlist.map((t) => ( 
            <div class="row p-2">
            {/* <TechStack techStr={t}></TechStack> */}
                <a class="d-inline-flex" href={TECH[t].link} target="_blank">
                    <img src={TECH[t].icon} class="col-4 mx-auto d-flex footIcon" alt="..."></img>
                    <p class="col-8 font-monospace my-auto">{TECH[t].name}</p>
                </a>
            </div>
        ))}
        </div>
    </div>
}

export default TechStack