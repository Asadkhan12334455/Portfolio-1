import About from "./About/page";
import Contact from "./Contact/page";
import Skills from "./Skills/page";
import Services from "./Services/page";
import HomePage from "./Home/page";
import Projects from "./Projects/page";
export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}

