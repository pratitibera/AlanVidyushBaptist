/* eslint-disable jsx-a11y/alt-text */

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
const Portfolio = () => (
  <main>
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
  </main>
);

export default Portfolio;
