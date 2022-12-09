import React from 'react';
// import ReactDOM from 'react-dom/client';


class Nav extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Justin Codes</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="nav nav-pills">
                                {this.props.navOptions.map((navOption) => (
                                    (this.props.currentOption === navOption.id)
                                        ? <li class="nav-item" key={navOption.id}><a class="nav-link active" onClick={() =>{this.props.changePage(navOption.id)}}>{navOption.text}</a></li>
                                        : <li class="nav-item" key={navOption.id}><a class="nav-link" onClick={() =>{this.props.changePage(navOption.id)}}>{navOption.text}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav