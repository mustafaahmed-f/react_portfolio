import { useInView } from "react-intersection-observer";
import { useSectionContext } from "../../Hooks/useSection";
import { EducationData } from "./EducationData";
import Institute from "./Institute";
import { useEffect } from "react";

function Education() {
  const { setSection } = useSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setSection("Education");
  }, [inView, setSection]);

  return (
    <section
      ref={ref}
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
