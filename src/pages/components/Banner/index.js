import React from 'react';
// import ReactDOM from 'react-dom/client';


class Banner extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="bg-info">
                <div class="row">
                    <h1 class="display-3">{this.props.content.title}</h1>
                    <figure class="text-end text-muted">
                        <blockquote class="blockquote">
                            <p>{this.props.content.quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {this.props.content.quotesource}
                        </figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}

export default Banner