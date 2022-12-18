import React from 'react';
// import ReactDOM from 'react-dom/client';

import pro from './../../../assets/content/Common/images/pro.jpeg'

class ProImage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img src={pro} class="mx-auto d-block anImage" alt="..."/>       
        )
    }
}

export default ProImage