import AboutLogo from "../../img/icons/about.png"
import StoryLogo from "../../img/icons/story.png"
import BlogsLogo from "../../img/icons/blogs.png"
import ContactLogo from "../../img/icons/contact.png"



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md bg-dark fixed-top">
<div className="menu-btn navbar-toggler-icon d-sm-none" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <div className="menu-btn__burger"></div>
</div>
<a className="navbar-brand d-block d-md-none" href="index.html">ALAN BAPTIST</a>
<button className="btn d-sm-none" onclick="fetchCart();">
    <i className="fa fa-shopping-cart fo-30 bco">
        <sup className="cart_count fo-24 bco fw-600" id="cart_count_mobile"></sup>
    </i>
</button>
<div className="collapse navbar-collapse" id="collapsibleNavbar">
    <div className="row d-none d-sm-flex">
        <div className="col-sm-3 m-auto">
            <i className="fas fa-bars bco fo-30 cursorPointer" id="collapsibleSidebar"></i>
        </div>
        <div className="col-sm-6">
            <div className="owner-name text-center opensans">
                <a href="index.html" className="text-white">ALAN BAPTIST</a>
            </div>
        </div>
        <div className="col-sm-3 m-auto">
            <a href="mainservices.html">
                <button className="btn website-button float-right fo-17 header-consult pulsating">CONSULT</button>
            </a>
        </div>
    </div>
    <ul className="navbar-nav pt-5 pt-sm-0 header-nav" id="header-nav">
        <li className="nav-item ml-sm-auto header-nav-pl">
            <a className="nav-link exo" href="index.html#about">
                <img src={AboutLogo} className="w-8 mr-2" alt="About Logo"/>ABOUT ALAN
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link exo" href="index.html#success">
                <img src={StoryLogo} className="w-8 mr-2" alt="Story Logo"/>SUCCESS STORIES
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link exo" href="index.html#blogs">
                <img src={BlogsLogo} className="w-8 mr-2" alt="Blogs Logo"/>BLOGS
            </a>
        </li>
        <li className="nav-item mr-sm-auto header-nav-pr">
            <a className="nav-link exo" href="index.html#contact">
                <img src={ContactLogo} className="w-8 mr-2" alt="Contact Logo"/>CONTACT
            </a>
        </li>
        <li className="nav-item d-block d-sm-none text-center">
            <a href="mainservices.html">
                <button className="btn website-button mt-4 mb-1 ml-4 fo-17 pulsating">CONSULT</button>
            </a>
        </li>
        <li className="nav-item text-right pr-0 d-none d-sm-block">
            <button className="btn mr-2" onclick="fetchCart();">
                <i className="fa fa-shopping-cart fo-30 bco position-relative">
                    <sup className="cart_count fo-24 bco fw-600" id="cart_count_desktop"></sup>
                </i>
            </button>
        </li>
    </ul>
    <div className="navExtras d-block d-sm-none">
        <div className="pb-2">
            <a href="partners.html">Partners</a>
        </div>
        <div className="pb-2">
            <a href="columnist.html">Columnists</a>
        </div>
        <div className="pb-2">
            <a href="portfolio.html">Portfolio</a>
        </div>
    </div>
    <div className="searchbox d-flex d-sm-none">
        <i className="fa fa-search" id="mobileSearch" onclick="search(this.id);"></i>
        <input type="text" name="" placeholder="Search..." className="searches" id="mobileSearchi" />
    </div>
    <div className="row m-0 mt-5 justify-content-center mb-4 d-flex d-sm-none">
        <a href="https://www.facebook.com/alanvidyushandrew.baptist" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f text-white fw-600 m-2"></i>
        </a>
        <a href="https://www.instagram.com/alan_baptist/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram text-white fw-600 m-2"></i>
        </a>
        <a href="https://www.linkedin.com/in/alanvidyushbaptist" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in text-white fw-600 m-2"></i>
        </a>
        <a href="https://alan.optimumwellness@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope text-white fw-600 m-2"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=919836143134&text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make." target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp text-white fw-600 m-2"></i>
        </a>
    </div>
</div>
</nav>
    )
}

export default Navbar;