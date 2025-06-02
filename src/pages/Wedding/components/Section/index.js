import React from 'react';
// import ReactDOM from 'react-dom/client';


class SECTION extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="row">
                <div class="col">             
                    <div class="card border-0">
                        <h2>{this.props.content.title}</h2>
                        {this.props.content.textlist.map(t => <p>{t}</p>)}
                        {this.props.content.link && <p><a href={this.props.content.link} target="_blank">link</a></p>}
                        <img src={this.props.content.image} class="card-img-top" alt=""/>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SECTION