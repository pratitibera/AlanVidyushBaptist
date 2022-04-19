/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from 'react'
import BlogGallery from "../components/Blog/BlogGallery";

import PortfolioImage1 from "../img/portfolio/1.jpeg";
import PortfolioImage2 from "../img/portfolio/2.jpeg";
import PortfolioImage3 from "../img/portfolio/3.jpeg";
import PortfolioImage4 from "../img/portfolio/4.jpeg";
import PortfolioImage5 from "../img/portfolio/5.jpeg";
import PortfolioImage6 from "../img/portfolio/6.jpeg";
import PortfolioImage7 from "../img/portfolio/7.jpeg";
import PortfolioImage8 from "../img/portfolio/8.jpeg";
import PortfolioImage9 from "../img/portfolio/9.jpeg";
import PortfolioImage10 from "../img/portfolio/10.jpeg";
import PortfolioImage11 from "../img/portfolio/11.jpeg";
import PortfolioImage12 from "../img/portfolio/12.jpeg";

const images = [
  PortfolioImage1,
  PortfolioImage2,
  PortfolioImage3,
  PortfolioImage4,
  PortfolioImage5,
  PortfolioImage6,
  PortfolioImage7,
  PortfolioImage8,
  PortfolioImage9,
  PortfolioImage10,
  PortfolioImage11,
  PortfolioImage12,
];

/* eslint-disable jsx-a11y/anchor-is-valid */
const Portfolio = () => {

  function rightClick(e) {
    e.preventDefault();
    if (document.getElementById("contextMenu").style.display === "block")
      hideMenu();
    else {
      var menu = document.getElementById("contextMenu")
      menu.style.display = 'block';
      menu.style.left = e.pageX + "px";
      menu.style.top = e.pageY + "px";
    }
  }
  const hideMenu = () => {
    document.getElementById("contextMenu").style.display = "none"
  }
  useEffect(() => {
    document.onclick = hideMenu;
    for (let i = 0; i < document.querySelectorAll(".copyright_img").length; i++) {
      document.querySelectorAll(".copyright_img")[i].oncontextmenu = rightClick;
    }
  }, [])

  return (<main>
    <div id="contextMenu" class="context-menu" style={{ display: "none" }}>
      This photo is Copyright ©️ 2022 Alan Baptist. All rights reserved.
    </div>
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

    <section>
      <div
        onContextMenu={() => null}
        className="owl-carousel d-sm-none portfolioSection_mobile"
        id="portfolioSection"
      >
        <BlogGallery>
          {images.map((image, index) => {
            return (
              <div className="p-2" key={index}>
                <div className="card p-0 border-0">
                  <img src={image} className="w-100 copyright_img"></img>
                </div>
              </div>
            );
          })}
        </BlogGallery>
      </div>

      <div className="portfolioSection_desktop row d-none d-sm-flex">
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage1} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage2} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage3} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage4} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage5} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage6} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage7} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage8} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage9} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage10} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage11} className="w-100 copyright_img"></img>
          </div>
        </div>
        <div className="p-2">
          <div className="card p-0 border-0">
            <img src={PortfolioImage12} className="w-100 copyright_img"></img>
          </div>
        </div>
      </div>
    </section>

    <div className="disclaimer fo-14"><span className="fw-700">Disclaimer -</span> Kindly note that these pictures are representative of the physique I'd maintained during my brief career as a fitness model as per the industry standards in the early 2010's and is by no means an endorsement of a particular body type as an embodiment of holistic well-being. I firmly believe that fitness and wellness as a holistic concept encapsulates much more than maintaining a specific body composition ratio</div>
  </main>
  )
};

export default Portfolio;
