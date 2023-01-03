import React from 'react';
// import CONTENT from '../../assets/content/HomeComponent/index.js'

import Banner from './../components/Banner'
import ProImage from './../components/ProImage'

// const C = CONTENT.intro

class Intro extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div class="container py-md-5 py-4">
                <Banner content={this.props.content}></Banner>
                <div class="row">
                    {/*buffer column */}
                    <div class="col-md-1"></div>
                    {/* words column */}
                    <div class="col-md px-4 py-md-0 my-auto py-4">
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
                    {/* picture of me on right */}
                    <div class="col-md px-4">
                        <ProImage></ProImage>
                    </div>
                    {/* buffer collumn */}
                    <div class="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Intro