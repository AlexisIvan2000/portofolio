import React from "react";
import { projects } from "../data/projects";


export default function ProjectCard() {   
 return(
    <div className="project-card">
        {projects.map((project) => (
            <div key={project.id} className="card">
                <img src={project.image} alt={project.title} className="card-image" />  
                <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    <p className="card-technologies">{project.technologies.join(", ")}</p>
                    <a href={project.url} className="card-link">Voir le code source</a>
                </div>
            </div>
        ))}
    </div>
 )

}