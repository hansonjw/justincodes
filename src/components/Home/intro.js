import React from 'react';
import CONTENT from './../../assets/content/HomeComponent/index.js'

const C = CONTENT.intro

class Intro extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="container py-5">
                <div class="row">
                    <h1 class="display-3">{C.title}</h1>
                    <figure class="text-end text-muted">
                        <blockquote class="blockquote">
                            <p>{C.quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {C.quotesource}
                        </figcaption>
                    </figure>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <img src={C.images.image} class="anImage"/>
                    </div>
                    <div class="col-md-6">
                        <p>{C.words}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro