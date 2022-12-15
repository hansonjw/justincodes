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
            <div class="">
                <div class="container py-5">
                    <h1 class="display-3">{C.title}</h1>
                    <figure class="text-end text-muted">
                        <blockquote class="blockquote">
                            <p>{C.quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {C.quotesource}
                        </figcaption>
                    </figure>

                    <div class="row row-cols-2 row-cols-md-4 g-4">
                        {keys.map((k) => (
                                <div class="col my-4">
                                    <div class="row my-auto">
                                        <div class="col-md-6 col-12">
                                            <a href={C.images[k].link} target="_blank">
                                                <img src={C.images[k].icon} class="m-auto d-block skillIcon" alt="..."/>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-0 my-auto">
                                            <a href={C.images[k].link} class="card-link d-md-block d-none" target="_blank">
                                                <h6 class="card-title py-auto">{C.images[k].name}</h6>
                                            </a>                                        
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills