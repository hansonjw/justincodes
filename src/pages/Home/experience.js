import React from 'react';
// import CONTENT from '../../assets/content/HomeComponent/index.js'

import Banner from './../components/Banner'

// const C = CONTENT.experience
// const keys = Object.keys(C.images)
// const keys = ["em"]

class Experience extends React.Component{
    constructor(props) {
        super(props);
        // this.keys = Object.keys(this.props.content.images);

    }

        render() {
        return(
            <div class="container py-md-5">
                <Banner content={this.props.content}></Banner>

                <div class="d-none d-md-block">
                    <div class="row"> 
                        {/* logo on left */}
                        <div class="col-md-8 px-4">
                            <img src={this.props.content.emImage} class="img-fluid" alt="..."/>
                        </div>

                        {/* words column w/accordian */}
                        <div class="col-md-4 px-4 py-md-0 my-auto py-4">
                            <div>
                                {this.props.content.emWords.map((w) => (
                                    <div>
                                        <p class="fw-lighter">{w}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Storyline pictures and text, hides on mobile, replaced by carousell */}
                    {Object.keys(this.props.content.images).map((key)=>(
                        (Object.keys(this.props.content.images).indexOf(key) % 2 == 0)
                        ? <div class='row'>
                            <div class="col-md-4 px-4 py-md-0 my-auto py-4">
                                {this.props.content.images[key].words.map((w)=>(
                                    <div>
                                        <p class="fw-lighter">{w}</p>
                                    </div>
                                ))}
                            </div>
                            <div class='col-md-8 px-4'>
                                <img src={this.props.content.images[key].image} class="d-block w-100 bg-light" alt="..."/>
                            </div>
                        </div>
                        : <div class='row py-5'>
                            <div class='col-md-8 px-4'>
                                <img src={this.props.content.images[key].image} class="d-block w-100 bg-light" alt="..."/>
                            </div>
                            <div class="col-md-4 px-4 py-md-0 my-auto py-4">
                                {this.props.content.images[key].words.map((w)=>(
                                    <div>
                                        <p class="fw-lighter">{w}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))};
                </div>


                <div class="row d-md-none">
                    <div class="col-md-3"></div>            
                        <div class="col card border-0">
                            <div class="accordion accordion-flush d-block" id="accordionFlushExample">
                                <div class="accordion-item">      
                                    <div>
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed px-5" type="button" data-bs-toggle="collapse" data-bs-target="#EM" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <h5 class="card-title">My Experience</h5>
                                            </button>
                                        </h2>
                                        <div id="EM" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                {this.props.content.emWords.map((w) => (
                                                    <div>
                                                        <p class="fw-light">{w}</p>
                                                    </div>
                                                ))}
                                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                    <a href={this.props.content.emLink} class="btn btn-light" target="_blank">EIA - Where our oil comes from</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="col-md-3"></div>

                    {/* Carousel of images and experience; hides on md and bigger */}
                    <div id="carouselExampleCaptions" class="carousel slide" ride='false'>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner">

                            {Object.keys(this.props.content.images).map((key)=>(
                            <div class={(Object.keys(this.props.content.images).indexOf(key)===0) ? "carousel-item active" : "carousel-item"}>
                                <img src={this.props.content.images[key].image} class="d-block w-100 bg-light" alt="..."/>
                            </div>
                            ))}

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon bg-dark bg-opacity-50 rounded" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon bg-dark bg-opacity-50 rounded" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <img src={this.props.content.emImage} class="mx-auto my-2 card-img-top learningIcon" alt="..."/>
                </div>
            </div>
        )
    }
}

export default Experience