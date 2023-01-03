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
                
                    {/* Carousel of images and experience */}
                
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
                            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-25 mx-5 px-3 rounded">
                                <h5 class="font-monospace">{this.props.content.images[key]['title']}</h5>
                                {this.props.content.images[key]['words'].map((w)=>(
                                    <p class="font-monospace text-start">{w}</p>
                                ))}
                                <a href={this.props.content.images[key].link} class="btn btn-outline-light px-auto" target="_blank">link</a>
                            </div>
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

            </div>
        )
    }
}

export default Experience