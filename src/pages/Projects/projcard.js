import React from 'react';
import TechStack from './techstack'


class ProjCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="card">
                <img src={this.props.content.images} class="card-img-top mx-auto py-2 d-block projectIcon" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-center">{this.props.content.title}</h5>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#'+this.props.content.title.replace(/\s+/g, '')} aria-expanded="false" aria-controls="flush-collapseOne">
                                Description
                            </button>
                            </h2>
                            <div id={this.props.content.title.replace(/\s+/g, '')} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    {this.props.content.words.map((w) => (
                                        <p class="card-text fw-lighter py-1">{w}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-grid gap-2 col-12 mx-auto py-2">
                        <a href={this.props.content.link} class="btn btn-light px-auto" target="_blank">link</a>
                        <a href={this.props.content.github} class="btn btn-light px-auto" target="_blank">github</a>
                    </div>
                </div>
                <div class="card-footer">
                    <TechStack content={this.props.content.techlist}></TechStack>
                </div>
            </div>
        )
    }
}

export default ProjCard