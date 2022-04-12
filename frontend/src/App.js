import { useEffect, useLayoutEffect, useRef } from "react";
import AOS from "aos";
import $ from "jquery";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  function loadScript() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
        console.log("Loaded Razorpay")
    };
    script.onerror = () => {
      console.log("Failed to Load Razorpay")
    };
    document.body.appendChild(script);
  }

  loadScript()
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
    window.addEventListener("popstate", () => console.log("Asd"));
  }, []);

  return (
    <Wrapper>
      <div className="whatsapp_icon row">
        <div className="fo-16 bg-gray text-white">
          Talk to Us <span className="borde-gray"></span>
        </div>
        <a
          href="https://wa.me/919836143134?text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make."
          className="position-relative"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" />
          <span className="whatsapp_icon_span">1</span>
        </a>
      </div>
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
          <Route path="/blogs/:category/:subcategory" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />

          <Route path="/services/:serviceId/pricing" element={<Pricing />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/services" element={<Mainservices />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
