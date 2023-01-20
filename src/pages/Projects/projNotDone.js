

function ProjDone(props){
    
    return<div class="card border-0 bg-light">
        <img src={props.project.images} class="card-img-top mx-auto py-2 d-block projectIconUC" alt="..."/>
        <div class="card-body">
            <p class="fst-italic text-center text-secondary">{props.project.status}</p>
        </div>
    </div>
}

export default ProjDone