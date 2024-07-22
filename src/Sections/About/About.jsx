import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-8 bg-[#1f1d36] text-white flex flex-col items-center overflow-hidden"
    >
      <h2 className="relative text-center text-3xl font-light my-8 inline-block">
        BIT MORE <span className="text-[#2960f7] font-medium">ABOUT</span> ME ?
        <div className="absolute top-1/2 -right-[105%] w-10 h-1 bg-white"></div>
        <div className="absolute top-1/2 -left-[105%] w-10 h-1 bg-white"></div>
      </h2>
      <div className="grid gap-6 p-4 lg:grid-cols-[1fr_1fr]">
        <div className="flex items-start justify-center">
          <img src="../profile 2.jpg" alt="profileImg" className="w-[60%]" />
        </div>
        <div className="inline-block py-5">
          <p className="text-lg mb-8">
            Hello! I’m Mustafa Ahmed. I'm a fresh graduated mern stack developer
            using reactJs & node.js . Capable of learning more about my field
            through my professional life in addition to learning new skills. I'm
            skilled in using HTML, CSS, JS, and creating RESTful applications in
            order to deliver an immersive and engaging user experience through
            efficient web development. - seeking a position in a stable company
            where I can use my skills to benefit the company.
          </p>

          <ul className="list-none relative pl-8 mb-8">
            <li className="text-2xl my-3 relative">
              <span className="font-semibold text-[#2960f7]">
                MERN stack developer:{" "}
              </span>
              ReactJs + Node.Js
              <div className="absolute left-[-27px] top-1/2 transform -translate-y-1/2 w-3 h-3 border-4 border-[#2960f7] bg-transparent rounded-full"></div>
            </li>
            <li className="text-2xl my-3 relative">
              <span className="font-semibold text-[#2960f7]">Location: </span>
              Haram, Giza, Egypt
              <div className="absolute left-[-27px] top-1/2 transform -translate-y-1/2 w-3 h-3 border-4 border-[#2960f7] bg-transparent rounded-full"></div>
            </li>
            <li className="text-2xl my-3 relative">
              <span className="font-semibold text-[#2960f7]">Age: </span>26
              <div className="absolute left-[-27px] top-1/2 transform -translate-y-1/2 w-3 h-3 border-4 border-[#2960f7] bg-transparent rounded-full"></div>
            </li>
          </ul>
          <div className="text-center">
            <button className="rounded-full py-2 px-6 text-lg cursor-pointer text-white bg-[#3760d1] border-transparent transition-all duration-500 hover:bg-[#0511f2]">
              <a href="#" className="text-white no-underline">
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
