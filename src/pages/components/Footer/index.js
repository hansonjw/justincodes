import React from 'react';
import CONTENT from '../../../assets/content/FooterComponent/foottech.js'
// import ReactDOM from 'react-dom/client';

const KEYS = Object.keys(CONTENT);


class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div class="container py-5 text-center">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <p class="text-muted fw-lighter font-monospace fst-italic">The tech-stack for this website is...</p>
                        </div>
                        <div class="col-md-4">
                            {KEYS.map((k) => (
                            <div class="d-inline-flex p-2 text-center">
                                <a href={CONTENT[k].link} target="_blank">
                                    <img src={CONTENT[k].icon} class="mx-auto d-block footIcon" alt=""></img>
                                </a>
                            </div>
                            ))}
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer