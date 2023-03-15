import React from 'react';
import CONTENT from '../../assets/content/HomeComponent/index.js'

import Banner from './../components/Banner'

const C = CONTENT.learning
const keys = Object.keys(C.images)

class Learning extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="container py-md-5">
                <Banner content={this.props.content}></Banner>

                <div class="row row-cols-1 row-cols-md-12">
                    <div class='col-md-2'></div>
                    {keys.map((key)=>(
                    <div class="col-md-4 card border-0">
                        <img src={C.images[key].image} class="mx-auto my-2 card-img-top learningIcon" alt="..."/>
                        <div class="accordion accordion-flush d-block" id="accordionFlushExample">
                            <div class="accordion-item">      
                                <div>
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target={"#"+key} aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h5 class="card-title">{C.images[key].title}</h5>
                                        </button>
                                    </h2>
                                    <div id={key} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            {C.words[key].map((w) => (
                                                <div>
                                                    <p class="fw-light">{w}</p>
                                                </div>
                                            ))}
                                            <div class="d-grid gap-2">
                                                <a href={C.images[key].link} class="btn btn-light" role="button" target="_blank">link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    ))}
                    <div class='col-md-2'></div>
                </div>
            </div>
        )
    }
}

export default Learning