import React from 'react';
import TECH from '../../assets/content/Tech/tech.js';


class TechStack extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <a href={TECH[this.props.techStr].link} target="_blank">
                    <img src={TECH[this.props.techStr].icon} class="img-thumbnail" alt="..."></img>
                </a>
            </div>
        )
    }
}

export default TechStack