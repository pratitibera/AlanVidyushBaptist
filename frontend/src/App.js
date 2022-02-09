import { useEffect } from "react";
import AOS from 'aos'

//Layout
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"

// Pages
import Home from "./pages/Home"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
