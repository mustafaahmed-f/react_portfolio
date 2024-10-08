// import React from "react";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "../../Hooks/useSection";
// import linkedIn from "../../../public/SVG/linkedIn";
import Links from "./Links";

function Home() {
  const { setSection } = useSectionContext();
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setSection("Home");
  }, [inView, setSection]);

  return (
    <section
      ref={ref}
      id="Home"
      className="w-full h-screen p-0 text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(../luca-bravo-XJXWbfSo2f0-unsplash.jpg)",
      }}
    >
      <header className="flex items-center justify-center w-full h-full bg-black bg-opacity-70">
        <div className="flex flex-col items-center justify-center opacity-1 animate-mainText-animation">
          <h4 className="my-2 text-2xl sm:text-3xl">Welcome</h4>
          <h1 className="my-2 text-6xl font-light text-center sm:text-9xl">
            I&apos;m <span className="font-medium text-mainColor">Mustafa</span>{" "}
            Ahmed
          </h1>
          <h2 className="text-mainColor font-semibold bg-[#363d56] px-6 py-2 rounded-full my-4">
            Mern stack developer
          </h2>
          <Links />
        </div>
      </header>
    </section>
  );
}

export default Home;
