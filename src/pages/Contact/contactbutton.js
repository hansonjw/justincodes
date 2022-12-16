import React from 'react';



class ContactButton extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                {this.props.content.keys.map((k)=>(
                        <div class="d-grid gap-2 py-2">
                            <button class="btn btn-light" type="button">
                                <div class="row">  

                                    <div class="col-lg-4">
                                        <a href={this.props.content.links[k]} target="_blank">
                                            <img src={this.props.content.images[k]} class="anIcon" alt=""></img>
                                        </a>
                                    </div>
                                    <div class="col-lg-8 my-auto">
                                        <h6 class="my-auto d-sm-block d-none text-start fw-lighter font-monospace">
                                            <a class="align-middle" href={this.props.content.links[k]} target="_blank">
                                                {this.props.content.text[k]}
                                            </a>
                                        </h6>
                                    </div>
                                </div>
                            </button>
                        </div>
                ))}


            </div>
        )
    }

}

export default ContactButton

