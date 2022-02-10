import { useEffect } from "react";
import AOS from 'aos'
import $ from "jquery"

//Layout
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"

// Pages
import Home from "./pages/Home"

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
      <Home />
    </div>
  );
}

export default App;
