import TechStack from './techstack.js'

function ProjDone(props){
    
    return<div class="card border-0">
        <img src={props.project.images} class="card-img-top mx-auto py-2 d-block projectIcon" alt="..."/>
        <div class="card-body">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header px-4" id="flush-headingOne">
                        <button class="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target={'#'+props.project.title.replace(/\s+/g, '')} aria-expanded="false" aria-controls="flush-collapseOne">
                            {props.project.title}
                        </button>
                    </h2>
                    <div id={props.project.title.replace(/\s+/g, '')} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            {props.project.words.map((w) => (
                                <p class="card-text fw-lighter py-1">{w}</p>
                            ))}
                            <TechStack techlist={props.project.techlist}></TechStack>
                            <div class="d-grid gap-2 col-12 mx-auto py-2">
                                <a href={props.project.link} class="btn btn-light px-auto" target="_blank">link</a>
                                <a href={props.project.github} class="btn btn-light px-auto" target="_blank">github</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default ProjDone