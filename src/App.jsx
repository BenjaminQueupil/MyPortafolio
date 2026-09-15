import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* luego: <About />, <Skills />, <Projects />, <Contact /> */}
    </div>
  );
}

export default App;