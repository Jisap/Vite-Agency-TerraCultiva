import About from "./components/sections/About";
import CaseStudy from "./components/sections/CaseStudy";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Navigation from "./components/utils/Navigation";

const App = () => {
  return <div className="minh-screen bg-white text-zinc-800">
    {/* Header */}
    <Navigation />

    {/* Main: Dynamic Part */}
    <main id="main-content" className="max-w-8xl mx-auto">
      <Hero />
      <About />
      <Services />
      <CaseStudy />
    </main>


    {/* Footer */}
  </div>;
};

export default App;
