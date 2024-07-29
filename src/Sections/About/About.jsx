import { useInView } from "react-intersection-observer";
import { useSectionContext } from "../../Hooks/useSection";
import { useEffect } from "react";

function About() {
  const { setSection } = useSectionContext();
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setSection("About");
  }, [inView, setSection]);

  return (
    <section
      id="About"
      className="flex flex-col items-center px-3 py-8 overflow-hidden text-white bg-aboutSec"
      ref={ref}
    >
      <h2 className="sectionTitle">
        <div className="leftLine"></div>
        <p>
          BIT MORE <span className="font-medium text-mainColor">ABOUT</span> ME
          ?
        </p>
        <div className="rightLine"></div>
      </h2>
      <div className="grid gap-6 p-4 lg:grid-cols-[1fr_1fr]">
        <div className="flex items-start justify-center">
          <img src="../profile 2.jpg" alt="profileImg" className="w-[60%]" />
        </div>
        <div className="inline-block py-5">
          <p className="mb-8 text-lg">
            Hello! I&apos;m Mustafa Ahmed. I&apos;m a fresh graduated mern stack
            developer using reactJs & node.js . Capable of learning more about
            my field through my professional life in addition to learning new
            skills. I&apos;m skilled in using HTML, CSS, JS, and creating
            RESTful applications in order to deliver an immersive and engaging
            user experience through efficient web development. - seeking a
            position in a stable company where I can use my skills to benefit
            the company.
          </p>

          <ul className="relative pl-8 mb-8 list-none">
            <li className="relative my-3 text-xl sm:text-2xl">
              <span className="font-semibold text-mainColor">
                MERN stack developer:{" "}
              </span>
              ReactJs + Node.Js
              <div className="absolute left-[-27px] top-1/2 transform -translate-y-1/2 w-3 h-3 border-4 border-mainColor bg-transparent rounded-full"></div>
            </li>
            <li className="relative my-3 text-xl sm:text-2xl">
              <span className="font-semibold text-mainColor">Location: </span>
              Haram, Giza, Egypt
              <div className="absolute left-[-27px] top-1/2 transform -translate-y-1/2 w-3 h-3 border-4 border-mainColor bg-transparent rounded-full"></div>
            </li>
            <li className="relative my-3 text-xl sm:text-2xl">
              <span className="font-semibold text-mainColor">Age: </span>27
              <div className="absolute left-[-27px] top-1/2 transform -translate-y-1/2 w-3 h-3 border-4 border-mainColor bg-transparent rounded-full"></div>
            </li>
          </ul>
          <div className="flex items-center justify-start">
            <button className="px-6 py-2 text-lg text-white transition-all duration-500 border-transparent rounded-full cursor-pointer bg-secondaryColor hover:bg-hoverBtn">
              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1xaohxGfDxo28UR9CWhTNWJtpw3E35PPO&export=download"
                className="text-white no-underline"
                download={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
