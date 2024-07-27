import { useState } from "react";
import { allProjects } from "./AllProjects";
import CategoryBtnComponent from "./categoryBtn";
import Project from "./Project";

function Projects() {
  const [category, setCategory] = useState("All");
  const categories = ["All", "React", "Node", "Vanilla Js", "Others"];
  const projectsArray =
    category === "All"
      ? allProjects
      : allProjects.filter((item) => item.category === category);

  return (
    <section
      id="Projects"
      className="flex flex-col items-center w-full gap-5 px-3 py-16 bg-aboutSec sm:gap-6 sm:px-12"
    >
      <h2 className="sectionTitle">
        <div className="leftLine"></div>
        Projects
        <div className="rightLine"></div>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-3 p-1 my-4 rounded-full bg-darkBorder">
        {categories.map((categoryItem, i) => (
          <CategoryBtnComponent
            fn={() => setCategory(categoryItem)}
            category={categoryItem}
            key={i}
            currentCategory={category}
          />
        ))}
      </div>
      <div className="grid gap-3 grid-cols-projectsXS sm:grid-cols-projectsSM md:grid-cols-projectsMD sm:gap-4">
        {projectsArray.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
