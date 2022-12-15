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
                    <a href={this.props.content.link} class="card-link" target="_blank">link</a>
                    <a href={this.props.content.github} class="card-link" target="_blank">github</a>
                </div>
                <div class="card-footer">
                    <TechStack content={this.props.content.techlist}></TechStack>
                </div>
            </div>
        )
    }
}

export default ProjCard