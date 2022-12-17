import React from 'react';
import TechStack from './techstack'


class ProjCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="card">
                <img src={this.props.content.images} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.content.title}</h5>
                    {this.props.content.words.map((w) => (
                    <div>
                        <p class="card-text">{w}</p>
                    </div>
                    ))}
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