import { useEffect } from "react";
import AOS from 'aos'
import $ from "jquery"
import { Routes, Route } from "react-router-dom" 

//Layout
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Partners from "./pages/Partners"
import Portfolio from "./pages/Portfolio"
import Sidebar from "./components/Layout/Sidebar";

function App() {
  useEffect(() => {
      $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="App">
        <Navbar />
        <Sidebar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
          <Route path="portfolio"  element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
