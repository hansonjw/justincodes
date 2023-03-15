// import modules
import React from 'react';

// import react components
import Banner from './../components/Banner'


class Skills extends React.Component{
    constructor(props) {
        super(props);
    }
        
    render() {
        return(
            <div class="container py-md-5">
                <Banner content={this.props.content}></Banner>
                {this.props.content.categories.map((C) => (
                    <Category category={C} />
                ))}
            </div>
        )
    }
}


function Category(props){
    return <div class="bg-light rounded">
        <div class="row mt-3 p-2">
            <p class="font-monospace fst-italic text-secondary"><u>{props.category.category}</u></p>
        </div>
        <div class="row row-cols-3 row-cols-md-5 g-4 p-auto m-auto justify-content-center">
            {props.category.items.map((item) => (
                <Skill skill={item}/>
            ))}
        </div>
    </div>
}


function Skill(props){
    return <div class="col my-4">
        <div class="row my-auto">
            <div class="col-md-3 col-12">
                <a href={props.skill.link} target="_blank">
                    <img src={props.skill.icon} class="m-auto d-block skillIcon" alt="..."/>
                </a>
            </div>
            <div class="col-md-9 col-0 my-auto">
                <a href={props.skill.link} class="card-link d-md-block d-none" target="_blank">
                    <h6 class="py-auto font-monospace fst-lighter">{props.skill.name}</h6>
                </a>                                        
            </div>
        </div>
    </div>
}


export default Skills
