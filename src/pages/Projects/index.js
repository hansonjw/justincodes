import React from 'react';
import CONTENT from './../../assets/content/ProjectsComponent/index.js'
import TechStack from './techstack.js'
import Banner from './../components/Banner'
import ProjCard from './projcard'

const C = CONTENT.projects
const keys = Object.keys(C)

class Projects extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="">
                <div class="container py-md-5 py-4">
                    <Banner content={CONTENT}></Banner>
                    <div class="row justify-content-md-center g-5">
                        {/* place holder */}
                        {/* <div class="col"></div> */}
                        {keys.map((key) => (
                        <div class="col-md-4">
                            <ProjCard content={C[key]}></ProjCard>                           
                        </div>
                        ))}
                        {/* place holder */}
                        {/* <div class="col"></div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects