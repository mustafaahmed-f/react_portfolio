import { useEffect, useState } from "react";
import { allProjects } from "./AllProjects";
import CategoryBtnComponent from "./categoryBtn";
import Project from "./Project";
import { useSectionContext } from "../../Hooks/useSection";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { container } from "./variants";

function Projects() {
  const [category, setCategory] = useState("Next.js");
  const categories = [
    // "All",
    "Next.js",
    "React",
    "Node",
    "Vanilla Js",
    "Others",
  ];
  const projectsArray =
    category === "All"
      ? allProjects
      : allProjects.filter((item) => item.category === category);

  const { setSection } = useSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSection("Projects");
    }
  }, [inView, setSection]);

  // console.log(inView);
  // if (!inView) return null;
  return (
    <section
      ref={ref}
      id="Projects"
      className="flex flex-col items-center w-full gap-5 px-3 py-16 bg-aboutSec sm:gap-6 sm:px-12"
      key={category}
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
      <motion.ul
        animate={inView ? "visible" : "hidden"}
        className="container grid gap-3 grid-cols-projectsXS sm:grid-cols-projectsSM md:grid-cols-projectsMD sm:gap-4 lg:gap-14"
        variants={container}
        initial="hidden"
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {projectsArray.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </motion.ul>
      {/* <ul className="grid gap-3 grid-cols-projectsXS sm:grid-cols-projectsSM md:grid-cols-projectsMD sm:gap-4 lg:gap-14">
        
      </ul> */}
    </section>
  );
}

export default Projects;
