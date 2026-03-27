import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";
import CaseStudy from "./components/sections/CaseStudy";
import Events from "./components/sections/Events";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
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
      <Events />
      <Blogs />
      <WhyUs />
    </main>


    {/* Footer */}
  </div>;
};

export default App;
