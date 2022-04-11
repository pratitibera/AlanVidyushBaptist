import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AboutLogo from "../../img/icons/about.png";
import StoryLogo from "../../img/icons/story.png";
import BlogsLogo from "../../img/icons/blogs.png";
import ContactLogo from "../../img/icons/contact.png";

/* eslint-disable jsx-a11y/alt-text */
const Sidebar = ({ overlay }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const closeCollapsibleSidebarHandler = () => {
    document.querySelector(".menuSidebar").classList.remove("navToggle");
    document.querySelector(".header-nav").classList.add("d-flex");
    document.querySelector(".header-nav").classList.remove("d-none");
    document.querySelector(".header-consult").classList.add("d-block");
    document.querySelector(".header-consult").classList.remove("d-none");
    document.getElementById("menuBtn-toggle").classList.remove("open");
    overlay.current.style.display = "none";
  };
  const routeToPage = () => {
    closeCollapsibleSidebarHandler();
    document
      .getElementById(window.location.hash.replace("#", ""))
      .scrollIntoView();
  };

  const searchHandler = () => {
    console.log("here", searchQuery);
    closeCollapsibleSidebarHandler();
    navigate("/blogs?search=" + searchQuery);
  };

  const searchQueryChangeHandler = (event) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const checkSidebar = () => {
      if (window.outerWidth > 1000) {
        closeCollapsibleSidebarHandler();
      }
    };

    closeCollapsibleSidebarHandler();
    window.addEventListener("resize", checkSidebar);

    return () => {
      window.addEventListener("resize", checkSidebar);
    };
  }, []);

  return (
    <div className="menuSidebar">
      <span className="close-menuSidebar">
        <i
          className="fa fa-times cursorPointer bco"
          id="close_collapsibleSidebar"
          onClick={closeCollapsibleSidebarHandler}
        >
          {" "}
        </i>
      </span>
      <ul className="navbar-nav pt-0" id="sidebar-nav">
        <li className="nav-item" onClick={() => routeToPage("about")}>
          <Link className="nav-link exo" to="/#about">
            <img src={AboutLogo} className="w-8 mr-2" alt="About Logo" />
            ABOUT ALAN
          </Link>
        </li>
        <li className="nav-item" onClick={() => routeToPage("success")}>
          <Link className="nav-link exo" to="/#success">
            <img src={StoryLogo} className="w-8 mr-2" alt="Story Logo" />
            SUCCESS STORIES
          </Link>
        </li>
        <li className="nav-item" onClick={() => routeToPage("blogs")}>
          <Link className="nav-link exo" to="/#blogs">
            <img src={BlogsLogo} className="w-8 mr-2" alt="Blogs Logo" />
            BLOGS
          </Link>
        </li>
        <li className="nav-item" onClick={() => routeToPage("contact")}>
          <Link className="nav-link exo" to="/#contact">
            <img src={ContactLogo} className="w-8 mr-2" alt="Contact Logo" />
            CONTACT
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link to="/services">
            <button className="btn website-button mt-4 mb-1 ml-4 fo-17 pulsating" onClick={closeCollapsibleSidebarHandler}>
              CONSULT
            </button>
          </Link>
        </li>
      </ul>
      <div className="navExtras">
        <div className="pt-2">
          <Link
            to="partners"
            className="text-white"
            onClick={closeCollapsibleSidebarHandler}
          >
            Partners
          </Link>
        </div>
        <div className="pt-1">
          <Link
            to="columnists"
            className="text-white"
            onClick={closeCollapsibleSidebarHandler}
          >
            Columnists
          </Link>
        </div>
        <div className="pt-1">
          <Link
            to="portfolio"
            className="text-white"
            onClick={closeCollapsibleSidebarHandler}
          >
            Portfolio
          </Link>
        </div>
      </div>
      <div className="searchbox mt-md-4">
        <i
          className="fa fa-search"
          id="desktopSearch"
          onClick={searchHandler}
        ></i>
        <input
          type="text"
          name=""
          value={searchQuery}
          placeholder="Search..."
          className="searches"
          onChange={searchQueryChangeHandler}
          id="desktopSearchi"
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              searchHandler();
            }
          }}
        />
      </div>
      <div className="row m-0 mt-4 justify-content-center mb-3">
        <a
          href="https://www.facebook.com/alanvidyushandrew.baptist"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f text-white fw-600 m-2"></i>
        </a>
        <a
          href="https://www.instagram.com/alan_baptist/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram text-white fw-600 m-2"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alanvidyushbaptist"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in text-white fw-600 m-2"></i>
        </a>
        <a
          href="https://alan.optimumwellness@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope text-white fw-600 m-2"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919836143134&text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make."
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp text-white fw-600 m-2"></i>
        </a>
      </div>
      <div className="mt-2 text-white fo-12 text-center">
        &copy; 2021 Alan Baptist | Website Design by{" "}
        <span className="bco">"Pratiti Bera"</span>
      </div>
      <div className="text-white fo-12 text-center">
        Front End Design Conceptualizer{" "}
        <span className="bco">"Hritavash Saha"</span>
      </div>
      <div className="text-white fo-12 text-center">
        Chief Website Asset Creator <span className="bco">"Rupsha Das"</span>
      </div>
      <div className="text-white fo-12 text-center">
        Chief Content Manager <span className="bco">"Debasmita Das"</span>
      </div>
    </div>
  );
};

export default Sidebar;
