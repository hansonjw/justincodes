import React from 'react';
import TECH from '../../assets/content/Tech/tech.js';


class TechStack extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="container">
                <div class="row">
                    <h6 class="text-muted">Tech stack</h6>
                </div>
                <div class="row">
                {this.props.content.map((t) => ( 
                    <div class="col d-inline-flex p-2">
                    {/* <TechStack techStr={t}></TechStack> */}
                        <a href={TECH[t].link} target="_blank">
                            <img src={TECH[t].icon} class="mx-auto d-block footIcon" alt="..."></img>
                        </a>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default TechStack