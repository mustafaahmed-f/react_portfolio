import { skillsData } from "./SkillsData";

function Skills() {
  return (
    <section
      id="Skills"
      className="flex flex-col items-center w-full gap-5 px-3 py-16 bg-skillsSec sm:gap-6 sm:px-12"
    >
      <h2 className="sectionTitle">
        <div className="leftLine"></div>
        <p>
          My <span className="font-medium text-mainColor">Skills</span>
        </p>
        <div className="rightLine"></div>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-16 sm:gap-24 mt-9">
        {skillsData.map((item, i) => (
          <div
            className="flex flex-col items-center justify-between gap-2 min-h-[90px]"
            key={i}
          >
            <img
              src={item.icon}
              alt={item.name}
              key={i}
              className="w-12 h-12 sm:w-14 sm:h-14"
              title={item.name}
            />
            <p className="text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
