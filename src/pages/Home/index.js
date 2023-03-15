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
                {/* <a class="btn btn-jyellow">This One Justin</a>
                <a class="btn btn-jyellow">Some big long phrase</a>
                <a class="btn btn-jred">Some big long phrase</a>
                <a class="btn btn-jltgray">Some big long phrase</a>
                <a class="btn btn-jcyan">Some big long phrase</a>
                <a class="btn btn-jmdcyan">Some big long phrase</a>
                <a class="btn btn-jorangge">Some big long phrase</a>
                <a class="btn btn-jblue">Some big long phrase</a>
                <a class="btn btn-jltblue">Some big long phrase</a>
                <a class="btn btn-jmdgray">Some big long phrase</a> */}
            </div>
        )
    }
}

export default Home;