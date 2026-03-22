import Navigation from "./components/utils/Navigation";

const App = () => {
  return <div className="minh-screen bg-white text-zinc-800">
    {/* Header */}
    <Navigation />

    {/* Main: Dynamic Part */}
    <main id="main-content" className="max-w-8xl mx-auto">

    </main>


    {/* Footer */}
  </div>;
};

export default App;
