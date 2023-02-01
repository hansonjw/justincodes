import * as React from "react";
import { NavLink } from "react-router-dom";
// import ReactDOM from 'react-dom/client';


function Nav(props){

    let activeYesStr = "nav-item nav-link active"
    let activeNoStr = "nav-item nav-link"

    return(<div class="bg-light pt-md-3 pb-md-0 py-2 fixed-top">
        {/* // Nav shown only in Medium size screens and obove...hidden for mobile */}
        <ul class="nav nav-tabs nav-fill d-none d-md-flex">
            <li class="nav-item"></li>
            <li class="nav-item"></li>
            {props.navOptions.map((o) => (
                <NavLink to={o.to} className={({ isActive }) => isActive ? activeYesStr : activeNoStr}>{o.text}</NavLink>
            ))}
            <li class="nav-item"></li>
            <li class="nav-item"></li>
            {/* <NavLink to="/"><a>text</a></NavLink> */}
        </ul>
        <Burger navOptions={props.navOptions}></Burger>
    </div>)
}


function Burger(props){
    let activeYesStr = "dropdown-item active"
    let activeNoStr = "dropdown-item"

    return(<nav class="navbar py-0 d-md-none">
        <div class="px-3">Justin Codes</div>

        <div class="">
            <button class="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end px-1">
                {props.navOptions.map((o) => (
                    <li><NavLink to={o.to} className={({ isActive }) => isActive ? activeYesStr : activeNoStr}>{o.text}</NavLink></li>
                ))}
            </ul>
        </div>

    </nav>)
}


export default Nav;