import React from "react";
import ProjectIteam from "../component/ProjectIteam";
import { projectList } from "../Helpers/ProjectList";
import "../Style/project.css"

function Project() {
  return (
    <div className="project">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project, idx) => {
          return (
            <ProjectIteam id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Project;