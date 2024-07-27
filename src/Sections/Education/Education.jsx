import { EducationData } from "./EducationData";
import Institute from "./Institute";

function Education() {
  return (
    <section
      id="Education"
      className="flex flex-col items-center w-full gap-5 px-2 py-16 bg-educationSec sm:gap-6"
    >
      <h2 className="sectionTitle">
        <div className="rightLine"></div>
        Education
        <div className="leftLine"></div>
      </h2>
      {EducationData.map((item) => (
        <Institute key={item.id} {...item} />
      ))}
    </section>
  );
}

export default Education;
