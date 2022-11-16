import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import Statistics from "./Components/Statistics/Statistics";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Statistics />
      <Project />
      <Contact />
    </div>
  );
}
export default App;