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
            <div>
                <div>{C.title}</div>
                <div>{C.quote}</div>
                {keys.map((key) => (
                    <div>
                        <div class="card">
                            <img src={C.images[key].image} class="card-img-top" alt="..."/>
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
        )
    }
}

export default Learning