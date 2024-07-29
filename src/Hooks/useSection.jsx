import { createContext, useContext, useState } from "react";

const sectionContext = createContext();

export function SectionProvider({ children }) {
  const [section, setSection] = useState("Home");

  const value = {
    section,
    setSection,
  };

  return (
    <sectionContext.Provider value={value}>{children}</sectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(sectionContext);
  if (context === undefined)
    throw new Error("Context should be used inside the authContext Provider");
  return context;
}
