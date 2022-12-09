import React from 'react';

import Intro from './intro.js'
import Learning from './learning.js'
import Skills from './skills.js'

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Intro></Intro>
                <Skills></Skills>
                <Learning></Learning>
            </div>
        )
    }
}

export default Home