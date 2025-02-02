// pages/index.js (or wherever your main page is located)
import Navbar from "../common/NavBar";
import About from "../profile/About";
import Projects from "../profile/Projects";
import Skill from "../profile/Skill";
import Education from "../profile/Education";
import Experience from "../profile/Experience";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Projects />
    </div>
  );
}
