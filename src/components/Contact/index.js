import React from 'react';
import CONTENT from '../../assets/content/ContactComponent/index.js'
import pro from '../../assets/content/ContactComponent/images/pro.jpeg'

class Contact extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={pro} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{CONTENT.title}</h5>
                            <p class="card-text">{CONTENT.quote}</p>
                            {CONTENT.keys.map((k)=>(
                                <div>
                                    <img src={CONTENT.images[k]} alt=""></img>
                                    <a href={CONTENT.links[k]} class="card-link text-end" target="_blank">{CONTENT.links[k]}</a>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact