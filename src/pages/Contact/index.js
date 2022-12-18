import React from 'react';

import CONTENT from '../../assets/content/ContactComponent/index.js'

// import pro from '../../assets/content/ContactComponent/images/pro.jpeg'

import ProImage from './../components/ProImage'
import Banner from './../components/Banner'
import ContactButton from './contactbutton.js'

class Contact extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="">
                <div class="container py-md-5 py-4 mx-auto">
                    <Banner content={CONTENT}></Banner>
                    <div class="row p-auto">
                        <div class="col-lg-2 col-md-0"></div>
                        <div class="col-md-4 my-auto">
                            {/* <img src={pro} class="mx-auto d-block anImage" alt="..."/> */}
                            <ProImage></ProImage>
                        </div>
                        <div class="col-lg-4 col-md-8 px-md-5 my-3">
                            <ContactButton content={CONTENT}></ContactButton>
                        </div>
                        <div class="col-lg-2 col-md-0"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact