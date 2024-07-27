import { useState } from "react";
import NavElement from "./NavElement";

function Navbar() {
  const [section, setSection] = useState("Home");
  const [showNav, setShowNav] = useState(true);
  const sections = [
    { section: "Home", icon: "🏠" },
    { section: "About", icon: "👨🏻‍💼" },
    { section: "Education", icon: "🎓" },
    { section: "Skills", icon: "🛠" },
    { section: "Experience", icon: "👨🏻‍💻" },
    { section: "Projects", icon: "📚" },
    { section: "Contact", icon: "📧" },
  ];

  return (
    <nav className="fixed bottom-9 left-0 right-0 flex items-center justify-center z-[9999999] gap-2 w-fit mx-auto">
      <div className="overflow-x-hidden ">
        <div className="bg-[rgba(21,20,46,0.6)] backdrop-blur-md flex items-center justify-center flex-wrap px-3 py-2 sm:p-4 rounded-3xl">
          {sections.map((el, i) => {
            return (
              <NavElement
                section={el.section}
                currentSection={section}
                key={i}
                icon={el.icon}
                fn={() => setSection(el.section)}
              />
            );
          })}
        </div>
      </div>
      <div className="show-nav-animation drop-shadow rounded-full p-[2px] sm:p-1 sm:w-10 sm:h-10 w-7 h-7 font-semibold text-white bg-mainColor cursor-pointer flex items-center justify-center">
        {"<"}
      </div>
    </nav>
  );
}

export default Navbar;
