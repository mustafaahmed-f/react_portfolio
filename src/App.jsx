import Navbar from "./Components/NavBar/Navbar";
import Main from "./Sections/Home/Main";
import About from "./Sections/About/About";
import Education from "./Sections/Education/Education";
import Skills from "./Sections/Skills/Skills";
import Experience from "./Sections/Experience/Experience";
import Projects from "./Sections/Projects/Projects";

function App() {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <Navbar />
      <Main />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
