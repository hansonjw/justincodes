import React from 'react';
// import CONTENT from '../../assets/content/HomeComponent/index.js'

import Banner from './../components/Banner'

// const C = CONTENT.intro

class Intro extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div class="container py-5">
                <Banner content={this.props.content}></Banner>
                <div class="row">
                    <div class="col-md-6">
                        <img src={this.props.content.images.image} class="anImage" alt="..."/>
                    </div>
                    <div class="col-md-6">
                        <p>{this.props.content.words}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro