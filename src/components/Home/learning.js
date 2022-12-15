import React from 'react';
import CONTENT from './../../assets/content/HomeComponent/index.js'

const C = CONTENT.learning
const keys = Object.keys(C.images)

class Learning extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="">
                <div class="container py-5">
                    <h1 class="display-3">{C.title}</h1>
                    <figure class="text-end text-muted py-5">
                        <blockquote class="blockquote">
                            <p>{C.quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {C.quotesource}
                        </figcaption>
                    </figure>


                    <div class="row row-cols-1 row-cols-md-2">
                        {keys.map((key) => (
                        <div class="col">
                            <div class="card border-0">
                                <img src={C.images[key].image} class="mx-auto my-2 card-img-top learningIcon" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{C.images[key].title}</h5>
                                    {C.words[key].map((w) => (
                                        <div>
                                            <p>{w}</p>
                                        </div>
                                    ))}
                                    <a href={C.images[key].link} class="card-link" target="_blank">
                                        <h5 class="card-title">link</h5>
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

export default Learning