import React from 'react';
// import ReactDOM from 'react-dom/client';


class SECTION extends React.Component{

    render() {
        return(
            <div className="row">
                <div className="col">
                    <div className="card border-0">
                        <div className="row m-2">
                            <h2>{this.props.content.title}</h2>
                            <div className="col-md-6 my-4">
                                <p>{this.props.content.textlist.map((t, index) => <span key={index}>{t}<br/></span>)}</p>
                                {this.props.content.link && <p><a href={this.props.content.link} target="_blank" rel="noreferrer">link</a></p>}
                            </div>
                            <div className="col-md-6">
                                {this.props.content.map &&
                                    <div className="wedding-map">
                                        <iframe src={this.props.content.map} title={this.props.content.maptitle} className="wedding-iframe" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                }
                                {this.props.content.image &&
                                    <div className="wedding-image-container">
                                        <img src={this.props.content.image} className="card-img-top" alt=""/>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SECTION