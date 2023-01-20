import TechStack from './techstack.js'

function ProjDone(props){
    
    return<div class="card border-0 bg-light">
        <img src={props.project.images} class="card-img-top mx-auto py-2 d-block projectIcon" alt="..."/>
        <div class="card-body">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button btn-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#'+props.project.title.replace(/\s+/g, '')} aria-expanded="false" aria-controls="flush-collapseOne">
                        {props.project.title}
                    </button>
                    </h2>
                    <div id={props.project.title.replace(/\s+/g, '')} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            {props.project.words.map((w) => (
                                <p class="card-text fw-lighter py-1">{w}</p>
                            ))}
                                <div class="d-grid gap-2 col-12 mx-auto py-2">
                                <a href={props.project.link} class="btn btn-light px-auto" target="_blank">link</a>
                                <a href={props.project.github} class="btn btn-light px-auto" target="_blank">github</a>
                            </div>
                            <TechStack techlist={props.project.techlist}></TechStack>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default ProjDone