import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    overlay.current.style.display = "none";
  };

  const searchHandler = () => {
    console.log("here", searchQuery);
    navigate("/blogs/search?" + searchQuery);
  };

  const searchQueryChangeHandler = (event) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };

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
      <ul className="navbar-nav pt-5 pt-sm-0" id="sidebar-nav">
        <li className="nav-item ml-sm-auto">
          <Link className="nav-link exo" to="#about">
            <img src="img/icons/about.png" className="w-8 mr-2" />
            ABOUT ALAN
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link exo" to="/#success">
            <img src="img/icons/story.png" className="w-8 mr-2" />
            SUCCESS STORIES
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link exo" to="/#blogs">
            <img src="img/icons/blogs.png" className="w-8 mr-2" />
            BLOGS
          </Link>
        </li>
        <li className="nav-item mr-sm-auto">
          <Link className="nav-link exo" to="/#contact">
            <img src="img/icons/contact.png" className="w-8 mr-2" />
            CONTACT
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link to="/services">
            <button className="btn website-button mt-4 mb-1 ml-4 fo-17 pulsating">
              CONSULT
            </button>
          </Link>
        </li>
      </ul>
      <div className="navExtras">
        <div className="pt-3 pl-5">
          <Link to="partners" className="text-white">
            Partners
          </Link>
        </div>
        <div className="pt-2 pl-5">
          <Link to="columnist" className="text-white">
            Columnists
          </Link>
        </div>
        <div className="pt-2 pl-5">
          <Link to="portfolio" className="text-white">
            Portfolio
          </Link>
        </div>
      </div>
      <div className="searchbox mt-4">
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
        />
      </div>
      <div className="row m-0 mt-4 justify-content-center mb-4">
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
        Chief Content Manager <span className="bco">"Debasmita Das"</span>
      </div>
    </div>
  );
};

export default Sidebar;
