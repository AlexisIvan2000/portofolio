import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Hello!! Je suis Alexis Moungang</h2>
        <h2>Développeur Python Full-Stack</h2>
        <p>Découvrez qui je suis et ce que je fais.Let's go!</p>
        <button className="cta-button" onClick={handleNavigation}>
          A propos de moi
        </button>
      </div>
      
      <div className="projects-teaser">
        <h3>Projets récents</h3>
        <ProjectCard/>
      </div>

      <div className="contact-links">
        <h3>
          Je suis disponible pour tout projet nécessitant de la programmation
          tant que cela reste dans mes compétences. Vous pouvez me contacter via mes réseaux ci-dessous.
        </h3>
        <h3>Mes réseaux</h3>
        <a
          href="https://www.linkedin.com/in/alexis-moungang-396104371"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AlexisIvan2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
        <Footer />
    </section>
  );
}
