import React from 'react';
// import ReactDOM from 'react-dom/client';


class Nav extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div class="">
            <div class="bg-light pt-md-3 pb-md-0 py-2 fixed-top">

                {/* // Nav shown only in Medium size screens and obove...hidden for mobile */}
                <ul class="nav nav-tabs nav-fill d-none d-md-flex">
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    {this.props.navOptions.map((navOption) => (
                        (this.props.currentOption === navOption.id)
                        ? <li class="nav-item" key={navOption.id}><a class="nav-link active" onClick={() =>{this.props.changePage(navOption.id)}}><h5>{navOption.text}</h5></a></li>
                        : <li class="nav-item" key={navOption.id}><a class="nav-link" onClick={() =>{this.props.changePage(navOption.id)}}><h5 class="">{navOption.text}</h5></a></li>
                    ))}
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                </ul>


                {/* // Dropdown 'burger' shown only in mobile, otherwise hidden */}
                <nav class="navbar py-0 d-md-none">
                    <div></div>
                    <button class="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" data-bs-auto-close="true" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            {this.props.navOptions.map((navOption) => (
                                (this.props.currentOption === navOption.id)
                                    ? <li class="nav-item dropdown text-end px-3" key={navOption.id}><a class="nav-link active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() =>{this.props.changePage(navOption.id)}}>{navOption.text}</a></li>
                                    : <li class="nav-item dropdown text-end px-3" key={navOption.id}><a class="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() =>{this.props.changePage(navOption.id)}}>{navOption.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
        )
    }
}


export default Nav