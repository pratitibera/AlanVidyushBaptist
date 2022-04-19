import { useEffect, useState } from "react";
import urlSet from "../utils/urls";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";
import OfferCard from "../components/Services/OfferCard";
import Footer from "../components/Layout/Footer";
import PricingBanner from "../img/banners/pricing_banner.png";


import TImage1 from '../img/testimonials/1.png'
import TImage2 from '../img/testimonials/2.png'
import TImage3 from '../img/testimonials/3.png'
import TImage4 from '../img/testimonials/4.png'





const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <i
      className="fas fa-long-arrow-alt-right"
      onClick={onClick}
      style={{
        bottom: "-30px",
        position: "absolute",
        right: "47%",
        fontSize: "26px",
      }}
    />
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className="fas fa-long-arrow-alt-left"
      style={{
        ...style,
        bottom: "-30px",
        position: "absolute",
        right: "53%",
        fontSize: "26px",
      }}
      onClick={() => console.log("Hello")}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const testimonialsSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  // arrows: true,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Pricing = () => {
  const [service, setService] = useState(null);
  const [ isLoading, setLoading ] = useState(false)
  const params = useParams();
  useEffect(() => {
    const getPlans = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          urlSet.viewServicesApi.url + params.serviceId.replaceAll("_", " ")
        );
        setService(res.data);
        setLoading(false)
        console.log(res.data);
      } catch (err) {
        console.log(err);
        setLoading(false)
      }
    };
    getPlans();
  }, [params.serviceId]);
  return (
    <div>
              {isLoading && (
            <div id="preloader">
              <div class="loader" id="loader"></div>
            </div>
          )}
      {/* <body onload="getPlans();"> */}
      <div id="notification-area"></div>
      <section>
        <div className="partners-cover text-center">
          <img src={PricingBanner} className="w-100"></img>
        </div>
      </section>
      <section className="pricing-section pt-4">
        <div
          className="d-block pricing-section-container"
          id="pricing-section-container"
        >
          <h2 className="fo-40 fw-700 text-center pt-3 pr-1 pl-1 mfo-25">
            {service && "We've Got Plans for " + service.service}
          </h2>
          <hr className="mb-5" />
          {service && service.offers.length <= 0 && (
            <h4 className="mb-4 mt-4 text-center">No Offers Currently</h4>
          )}
          <Slider {...settings}>
            {service &&
              service.offers.map((offer, index) => {
                return (
                  <OfferCard dark={index % 2 === 0} offer={offer} key={index} />
                );
              })}
          </Slider>
        </div>
      </section>
      {/* <!-- Pricing section ends ---> */}
      {/* <!--- Testimonials start --> */}
      <div className="fo-34 text-dark text-center fw-700 p-4 mfo-24 mt-sm-3 testimonials-heading pb-2">
        Testimonials
      </div>
      <hr style={{ borderBottom: "3px solid #FFE972", maxWidth: "100px" }} />

<div>
      <Slider {...testimonialsSettings}>

        <div className="p-4">
          <img
            src={TImage1}
            className="w-100 copyright_img no-outline"
            alt={"image_1"}
          />
        </div>
        <div className="p-4">
          <img
            src={TImage2}
            className="w-100 copyright_img no-outline"
            alt={"image_2"}
          />
        </div>
        <div className="p-4">
          <img
            src={TImage3}
            className="w-100 copyright_img no-outline"
            alt={"image_3"}
          />
        </div>
        <div className="p-4">
          <img
            src={TImage4}
            className="w-100 copyright_img no-outline"
            alt={"image_4"}
          />
        </div>

      </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
