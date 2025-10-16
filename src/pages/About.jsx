import React from "react";
import profil from "../assets/profil.png";
import SkillBar from "../components/SkillBar";
export default function About() {
  return (
    <section className="about-section">
      <div className="about-header">
        <img src={profil} alt="Profil" className="profil-image" />
        <h3>Je me nomme Alexis Moungang.</h3>
        <p>
          Développeur <strong>Python FullStack</strong> | Spécialiste de la
          performance web.
        </p>
        <p>
          Passionné par le développement moderne, j’aime créer des applications
          performantes, accessibles et bien structurées. Mon objectif : combiner
          design, performance et expérience utilisateur optimale.
        </p>
      </div>
      <div className="skills-cta">
        <h2>Mon stack Technique</h2>
        <SkillBar/>
        
      </div>
    </section>
  );
}
