import React from 'react';
import CONTENT from '../../assets/content/InterestsComponent/index.js'
// import ReactDOM from 'react-dom/client';


class Interests extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>{CONTENT.title}</div>
                <h2>{CONTENT.quote}</h2>
                {CONTENT.keys.map((k) => (
                    <div class="card w-50">
                        <img src={CONTENT.images[k]} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <p class="card-text">{CONTENT.words[k]}</p>
                        </div>
                        <a href={CONTENT.links[k]} class="card-link text-end" target="_blank">link</a>
                    </div>
                ))}
            </div>
        )
    }
}

export default Interests