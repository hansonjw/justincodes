import React from 'react';
import CONTENT from './../../assets/content/HomeComponent/index.js'

const C = CONTENT.skills;
const keys = Object.keys(C.images);

class Skills extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>{C.title}</div>
                <div>{C.quote}</div>
                {keys.map((k) => (
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={C.images[k].icon} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <a href={C.images[k].link} class="card-link" target="_blank">
                                <h5 class="card-title">{C.images[k].name}</h5>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}

export default Skills