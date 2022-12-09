import React from 'react';
import CONTENT from './../../assets/content/HomeComponent/index.js'

const C = CONTENT.intro

class Intro extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>{C.title}</div>
                <div>{C.quote}</div>
                <img src={C.images.image}/>
                <p>{C.words}</p>
            </div>
        )
    }
}

export default Intro