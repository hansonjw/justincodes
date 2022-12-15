import React from 'react';
import CONTENT from '../../assets/content/InterestsComponent/index.js'
// import ReactDOM from 'react-dom/client';


class Interests extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="container py-5">
                <div class="row">
                    <h1 class="display-3">{CONTENT.title}</h1>
                    <figure class="text-end text-muted">
                        <blockquote class="blockquote">
                            <p>{CONTENT.quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {CONTENT.quotesource}
                        </figcaption>
                    </figure>
                </div>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                    {CONTENT.keys.map((k) => (
                        <div class="col g-4">
                            <div class="card border-0">
                                <img src={CONTENT.images[k]} class="card-img-top" alt=""/>
                                <div class="card-body">
                                    <h5 class="card-title">{CONTENT.titles[k]}</h5>
                                    <p class="card-text">{CONTENT.words[k]}</p>
                                </div>
                                <div class="px-5 pb-2 text-end">
                                    <a class="card-link" href={CONTENT.links[k]} role="button" target="_blank">link to map</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Interests