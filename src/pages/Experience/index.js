// import modules
import React from 'react';

// import content and data
import CONTENT from '../../assets/content/Experience/index.js'

// import react components
import Banner from './../components/Banner'


function Experience(props){

    return <div class="container py-md-5 py-4 mx-auto">
        <Banner content={CONTENT}></Banner>

        <div class="d-none d-md-block">
            <div class="row"> 
                <div class="col-md-8 px-4">
                    <img src={CONTENT.emImage} class="img-fluid" alt="..."/>
                </div>


                <div class="col-md-4 px-4 py-md-0 my-auto py-4">
                    <div>
                        {CONTENT.emWords.map((w) => (
                            <div>
                                <p class="fw-lighter">{w}</p>
                            </div>
                        ))}
                        <div class="d-grid gap-2">
                            <a href={CONTENT.emLink} class="btn btn-jcyan" target="_blank">EIA - Where our oil comes from</a>
                        </div>
                    </div>
                </div>
            </div>

            {Object.keys(CONTENT.images).map((key)=>(
                (Object.keys(CONTENT.images).indexOf(key) % 2 == 0)
                ? <div class='row'>
                    <div class="col-md-4 px-4 py-md-0 my-auto py-4">
                        {CONTENT.images[key].words.map((w)=>(
                            <div>
                                <p class="fw-lighter">{w}</p>
                            </div>
                        ))}
                        <div class="d-grid gap-2">
                            <a href={CONTENT.images[key].link} class="btn btn-jcyan" target="_blank">link</a>
                        </div>
                    </div>
                    <div class='col-md-8 px-4'>
                        <img src={CONTENT.images[key].image} class="d-block w-100 bg-light" alt="..."/>
                    </div>
                </div>
                : <div class='row py-5'>
                    <div class='col-md-8 px-4'>
                        <img src={CONTENT.images[key].image} class="d-block w-100 bg-light" alt="..."/>
                    </div>
                    <div class="col-md-4 px-4 py-md-0 my-auto py-4">
                        {CONTENT.images[key].words.map((w)=>(
                            <div>
                                <p class="fw-lighter">{w}</p>
                            </div>
                        ))}
                        <div class="d-grid gap-2">
                            <a href={CONTENT.images[key].link} class="btn btn-jcyan" target="_blank">link</a>
                        </div>
                    </div>
                </div>
            ))}
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
                                        {CONTENT.emWords.map((w) => (
                                            <div>
                                                <p class="fw-light">{w}</p>
                                            </div>
                                        ))}
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <a href={CONTENT.emLink} class="btn btn-jcyan" target="_blank">EIA - Where our oil comes from</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="col-md-3"></div>

 
            <div id="carouselExampleCaptions" class="carousel slide" ride='false'>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 0"></button>
                </div>
                <div class="carousel-inner">

                    {Object.keys(CONTENT.images).map((key)=>(
                    <div class={(Object.keys(CONTENT.images).indexOf(key)===0) ? "carousel-item active" : "carousel-item"}>
                        <img src={CONTENT.images[key].image} class="d-block w-100 bg-secondary" alt="..."/>
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
            <img src={CONTENT.emImage} class="mx-auto my-2 card-img-top learningIcon" alt="..."/>
        </div>
    
    
    </div>
}

export default Experience