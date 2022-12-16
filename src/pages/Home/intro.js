import React from 'react';
// import CONTENT from '../../assets/content/HomeComponent/index.js'

import Banner from './../components/Banner'

// const C = CONTENT.intro

class Intro extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div class="container py-md-5">
                <Banner content={this.props.content}></Banner>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md px-4">
                        <img src={this.props.content.images.image} class="anImage" alt="..."/>
                    </div>
                    <div class="col-md px-4 py-md-0 py-4">
                        <div class="d-none d-md-block">
                            {this.props.content.words.map((w) => (
                                <div>
                                    <p>{w}</p>
                                </div>
                            ))}
                        </div>


                        <div class="accordion accordion-flush d-block d-md-none" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    About Me
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        {this.props.content.words.map((w) => (
                                            <div>
                                                <p>{w}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Intro