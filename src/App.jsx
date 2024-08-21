import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import StarsCanvas from "./components/StarsCanvas";
import Tech from "./components/Tech";
function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Tech />
      <Experience />
      <div className="relative z-0">
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default App;
