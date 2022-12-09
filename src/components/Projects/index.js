import React from 'react';
import CONTENT from './../../assets/content/ProjectsComponent/index.js'
import TechStack from './techstack.js'

const C = CONTENT.projects
const keys = Object.keys(C)

class Projects extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>{CONTENT.title}</div>
                <div>{CONTENT.quote}</div>
                {keys.map((key) => (
                    <div>
                        <div class="card">
                            <img src={C[key].images} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{C[key].title}</h5>
                                {C[key].words.map((w) => (
                                    <div>
                                        <p class="card-text">{w}</p>
                                    </div>
                                ))}
                                <a href={C[key].link} class="card-link" target="_blank">link</a>
                                <a href={C[key].github} class="card-link" target="_blank">github</a>
                            </div>
                            <div class="card-footer">
                                {C[key].techlist.map((t) => (
                                    <div>
                                        <TechStack techStr={t}></TechStack>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Projects