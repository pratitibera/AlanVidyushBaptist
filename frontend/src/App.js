import { useEffect, useRef } from "react";
import AOS from "aos";
import $ from "jquery";
import { Routes, Route, Navigate } from "react-router-dom";

//Layout
import Navbar from "./components/Layout/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Portfolio from "./pages/Portfolio";
import Sidebar from "./components/Layout/Sidebar";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Mainservices from "./pages/Mainservices";
import Services from "./pages/Services";
import Columnists from "./pages/Columnists";
import Footer from "./components/Layout/Footer";

function App() {
  const overlay = useRef(null);

  const overlayHandler = () => {
    document.querySelector(".menuSidebar").classList.remove("navToggle");
    document.querySelector(".header-nav").classList.add("d-flex");
    document.querySelector(".header-nav").classList.remove("d-none");
    document.querySelector(".header-consult").classList.add("d-block");
    document.querySelector(".header-consult").classList.remove("d-none");
    overlay.current.style.display = "none";
  };
  useEffect(() => {
    $(".move-up span").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });

    AOS.init({
      duration: 2000,
    });

    window.addEventListener("locationchange", function () {
      console.log("location changed!");
    });
  }, []);

  return (
    <div>
      <div id="overlay" ref={overlay} onClick={overlayHandler}></div>
      <Navbar overlay={overlay} />
      <Sidebar overlay={overlay} />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
          <Route path="columnists" element={<Columnists />} />
          <Route path="portfolio" element={<Portfolio />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/search" element={<Blogs />} />
          <Route path="/blogs/:category" element={<Blogs />} />
          <Route path="/blogs/:category/:subcategory" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />

          <Route path="/services/:serviceId/pricing" element={<Pricing />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/services" element={<Mainservices />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
