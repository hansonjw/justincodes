import React from 'react';
import CONTENT from '../../assets/content/InterestsComponent/index.js'
import Banner from './../components/Banner'

class Interests extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="">
                <div class="container py-md-5 py-4">
                
                    <Banner content={CONTENT}></Banner>

                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        {CONTENT.keys.map((k) => (
                            <div class="col g-4">
                                
                                {/* <div>{console.log(k)}</div> */}
                                
                                <div class="card border-0">
                                    <img src={CONTENT.images[k]} class="card-img-top" alt=""/>

                                    
                                    <div class="card-body m-0 p-0">                                
                                        <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="{k}-Z">
                                                    <button class="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target={"#"+k} aria-expanded="true" aria-controls="{k}-Y">
                                                        {CONTENT.titles[k]}
                                                    </button>
                                                </h2>
                                                <div id={k} class="accordion-collapse collapse" aria-labelledby="{k}-Z">
                                                    <div class="accordion-body">
                                                        {CONTENT.words[k].map((w) => (
                                                            <p class="card-text fw-lighter">{w}</p>
                                                        ))}
                                                        <div class="d-grid gap-2">
                                                            <a class="btn btn-light" href={CONTENT.links[k]} role="button" target="_blank">link to map</a>
                                                        </div>  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Interests