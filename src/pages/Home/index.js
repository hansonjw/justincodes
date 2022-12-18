import React from 'react';

// Import Pages and Components
import Intro from './intro.js'
import Learning from './learning.js'
import Skills from './skills.js'


// Import page content
import CONTENT from '../../assets/content/HomeComponent/index.js'


class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Intro content={CONTENT.intro}></Intro>
                <Skills content={CONTENT.skills}></Skills>
                <Learning content={CONTENT.learning}></Learning>
            </div>
        )
    }
}

export default Home