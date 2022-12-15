import React from 'react';
import CONTENT from '../../assets/content/ContactComponent/index.js'
import pro from '../../assets/content/ContactComponent/images/pro.jpeg'

class Contact extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="container mx-auto my-5">
                <div class="row">
                    <h1 class="display-3">{CONTENT.title}</h1>
                    <figure class="text-end text-muted">
                        <blockquote class="blockquote">
                            <p>{CONTENT.quote}</p>
                        </blockquote>
                    </figure>
                </div>
                <div class="row p-auto">
                    <div class="col-lg-2 col-md-0"></div>
                    <div class="col-md-4 my-auto">
                        <img src={pro} class="mx-auto d-block anImage" alt="..."/>
                    </div>
                    <div class="col-lg-4 col-md-8 px-5">
                        {CONTENT.keys.map((k)=>(
                        <div class="row py-2">     
                            <div class="col-lg-2 mx-auto">
                                <a href={CONTENT.links[k]} target="_blank">
                                    <img src={CONTENT.images[k]} class="mx-auto d-block anIcon" alt=""></img>
                                </a>
                            </div>
                            <div class="col-lg-10 my-auto">
                                <h6 class="my-auto d-sm-block d-none">
                                    <a href={CONTENT.links[k]} target="_blank">
                                        {CONTENT.text[k]}
                                    </a>
                                </h6>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div class="col-lg-2 col-md-0"></div>
                </div>
            </div>
        )
    }
}

export default Contact