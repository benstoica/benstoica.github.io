// import Contact from "./components/Contact";
// import CustomCursor from "./components/CustomCursor";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import TechStack from "./components/TechStack";

import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;
