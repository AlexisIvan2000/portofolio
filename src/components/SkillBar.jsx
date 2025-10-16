import React from "react";
import { skills } from "../data/skills";

export default function SkillBar() {
  return (
    <div className="skills-grid-container">
      {skills.map((group, index) => (
        <div key={index} className="skill-category-card">
          <h3 className="category-title">{group.category}</h3>
          <div className="skills-badges">
            {group.list.map((skill, i) => (
              <span key={i} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
