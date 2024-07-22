import { useState } from "react";
import NavElement from "./NavElement";

function Navbar() {
  const [section, setSection] = useState("home");
  const sections = [
    { section: "Home", icon: "🏠" },
    { section: "About", icon: "👨🏻‍💼" },
    { section: "Eduction", icon: "🎓" },
    { section: "Skills", icon: "🛠" },
    { section: "Experience", icon: "👨🏻‍💻" },
    { section: "Projects", icon: "📚" },
    "Contact",
  ];

  return (
    <nav className="fixed bottom-9 left-0 right-0 flex items-center justify-center z-[9999999]">
      <div className="bg-[rgba(21,20,46,0.6)] backdrop-blur-md flex items-center justify-center flex-wrap p-4 rounded-3xl">
        {sections.map((el, i) => {
          return (
            <NavElement
              section={el.section}
              currentSection={section}
              key={i}
              icon={el.icon}
              fn={setSection(el.section)}
            />
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
