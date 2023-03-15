import React from 'react';



class ContactButton extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div class="text-center d-md-block d-flex">
                {this.props.content.keys.map((k)=>(
                    <div class="d-md-grid py-md-2">
                        <a class="btn btn-jyellow p-md-0 mx-1" href={this.props.content.links[k]} target="_blank">
                            <div class="row">  
                                <div class="col-lg-4 p-md-2">
                                    <img src={this.props.content.images[k]} class="rounded-circle contactIcon" alt=""></img>
                                </div>
                                <div class="col-lg-8 my-auto">
                                    <h6 class="my-auto d-sm-block d-none text-start fw-lighter font-monospace">
                                        {this.props.content.text[k]}
                                    </h6>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        )
    }

}

export default ContactButton

