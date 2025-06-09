import React from 'react';
// import ReactDOM from 'react-dom/client';


class SECTION extends React.Component{

    render() {
        return(
            <div class="row">
                <div class="col">   
                    <div class="card border-0">
                        <div class="row">
                            <h2>{this.props.content.title}</h2>
                            <div class="col-md-6">
                                <p>{this.props.content.textlist.map(t => <span>{t}<br/></span>)}</p>
                                {this.props.content.link && <p><a href={this.props.content.link} target="_blank" rel="noreferrer">link</a></p>}
                            </div>        
                            <div class="col-md-6">
                                    {this.props.content.map &&
                                    <div class="wedding-map">
                                        <iframe src={this.props.content.map} title={this.props.content.maptitle} class="wedding-iframe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                }
                                <img src={this.props.content.image} class="card-img-top wedding-image" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SECTION