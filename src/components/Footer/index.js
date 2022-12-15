import React from 'react';
import CONTENT from '../../assets/content/FooterComponent/foottech.js'
// import ReactDOM from 'react-dom/client';

const KEYS = Object.keys(CONTENT);


class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="text-end text-muted">This website was built with...</p>
                        </div>
                        <div class="col-md-6">
                            {KEYS.map((k) => (
                            <div class="d-inline-flex p-2">
                                <a href={CONTENT[k].link} target="_blank">
                                    <img src={CONTENT[k].icon} class="mx-auto d-block footIcon" alt=""></img>
                                </a>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer