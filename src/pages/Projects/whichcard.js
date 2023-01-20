import React from 'react';
import TechStack from './techstack'

import ProjDone from './projDone'
import ProjNotDone from './projNotDone'

function WhichCard (props){

    if (props.project.status === 'done') {
        return <div>
            <ProjDone project={props.project}/>
        </div>
    } else {
    return <div>
        <ProjNotDone project={props.project}/>
    </div>}
}

export default WhichCard