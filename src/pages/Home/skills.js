import React from 'react';
import CONTENT from './../../assets/content/HomeComponent/index.js'

import Banner from './../components/Banner'

const C = CONTENT.skills;
const keys = Object.keys(C.images);

class Skills extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="container py-md-5">
                <Banner content={this.props.content}></Banner>
                <div class="row row-cols-3 row-cols-md-5 g-4">
                    {keys.map((k) => (
                        <div class="col my-4">
                            <div class="row my-auto">
                                <div class="col-md-3 col-12">
                                    <a href={C.images[k].link} target="_blank">
                                        <img src={C.images[k].icon} class="m-auto d-block skillIcon" alt="..."/>
                                    </a>
                                </div>
                                <div class="col-md-9 col-0 my-auto">
                                    <a href={C.images[k].link} class="card-link d-md-block d-none" target="_blank">
                                        <h6 class="py-auto font-monospace fst-lighter">{C.images[k].name}</h6>
                                    </a>                                        
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Skills