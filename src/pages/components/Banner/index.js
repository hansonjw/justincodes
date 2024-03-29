import React from 'react';
// import ReactDOM from 'react-dom/client';


class Banner extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="py-2">
                <h1 class="">{this.props.content.title}</h1>
                <hr></hr>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <figure class="text-center text-muted py-md-5 m-0">
                            <blockquote class="blockquote px-3 m-0">
                                <p class="quote-text fw-light">{this.props.content.quote}</p>
                            </blockquote>
                            <p class="source-text fw-light py-2">
                                <figcaption class="blockquote-footer my-auto">
                                    {this.props.content.quotesource}
                                </figcaption>
                            </p>
                        </figure>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Banner