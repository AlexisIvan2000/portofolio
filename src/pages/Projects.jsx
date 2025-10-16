import React from "react";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-content">
                <h1>Mes Projets</h1>
                <p>Voici quelques-uns de mes projets récents.</p>
                <ProjectCard />
            </div>
        </section>
        
    );
}