import React from 'react';
import CONTENT from './../../assets/content/ProjectsComponent/index.js'
import Banner from './../components/Banner'
import WhichCard from './whichcard'

const C = CONTENT.projects
const keys = Object.keys(C)

class Projects extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="container py-md-5 py-4">
                <Banner content={CONTENT}></Banner>
                <div class="row justify-content-md-center g-5">
                    {C.map((proj) => (
                    <div class="col-md-4">
                        <WhichCard project={proj}></WhichCard>                           
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects