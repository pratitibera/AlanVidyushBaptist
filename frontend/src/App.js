import { useEffect, useLayoutEffect, useRef, lazy, Suspense } from "react";
import AOS from "aos";
import $ from "jquery";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//Layout
import Navbar from "./components/Layout/Navbar";

// Pages
// const Home = lazy(() => import("./pages/Home"))

import Sidebar from './components/Layout/Sidebar'

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Partners = lazy(() => import("./pages/Partners"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Blog = lazy(() => import("./pages/Blog"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Mainservices = lazy(() => import("./pages/Mainservices"));
const Services = lazy(() => import("./pages/Services"));
const Columnists = lazy(() => import("./pages/Columnists"));

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

        <Route path="/" element={<Lazyload element={<Home />}/>} />
        <Route path="/about" element={<Lazyload element={<About />}/>} />
        <Route path="/partners" element={<Lazyload element={<Partners />}/>} />
        <Route path="/columnists" element={<Lazyload element={<Columnists />}/>} />
        <Route path="/portfolio" element={<Lazyload element={<Portfolio />}/>} />

        <Route path="/blogs" element={<Lazyload element={<Blogs />}/>} />
        <Route path="/blogs/search" element={<Lazyload element={<Blogs />}/>} />
        <Route path="/blogs/:category" element={<Lazyload element={<Blogs />}/>} />
        <Route path="/blogs/:category/:subcategory" element={<Lazyload element={<Blogs />}/>} />
        <Route path="/blog/:id" element={<Lazyload element={<Blog />}/>} />

        <Route path="/services/:serviceId/pricing" element={<Lazyload element={<Pricing />}/>} />
        <Route path="/services/:serviceId" element={<Lazyload element={<Services />}/>} />
        <Route path="/services" element={<Lazyload element={<Mainservices />}/>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Wrapper>
  );
}

export default App;



const Lazyload = ({ element }) => {
  return(
      <Suspense fallback={<>...</>}>
        {element}
      </Suspense>
  )
} 
