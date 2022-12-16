import React from 'react';

import CONTENT from '../../assets/content/ContactComponent/index.js'
import pro from '../../assets/content/ContactComponent/images/pro.jpeg'

import Banner from './../components/Banner'
import ContactButton from './contactbutton.js'

class Contact extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="">
                <div class="container mx-auto my-5">
                    <Banner content={CONTENT}></Banner>
                    <div class="row p-auto">
                        <div class="col-lg-2 col-md-0"></div>
                        <div class="col-md-4 my-auto">
                            <img src={pro} class="mx-auto d-block anImage" alt="..."/>
                        </div>
                        <div class="col-lg-4 col-md-8 px-md-5 my-auto">
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