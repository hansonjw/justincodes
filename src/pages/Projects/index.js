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
                <div class="container py-5">
                    <Banner content={CONTENT}></Banner>
                    <div class="row row-cols-1 row-cols-md-3">
                        {keys.map((key) => (      
                        <div class="col g-4">
                            <ProjCard content={C[key]}></ProjCard>                           
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects