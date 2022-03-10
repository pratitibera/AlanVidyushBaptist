import { useEffect, useState } from "react";
import urlSet from "../utils/urls";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";
import OfferCard from "../components/Services/OfferCard";
import Footer from "../components/Layout/Footer";

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
      onClick={onClick}
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

const Pricing = () => {
  const [service, setService] = useState(null);
  const params = useParams();
  useEffect(() => {
    const getPlans = async () => {
      try {
        const res = await axios.get(
          urlSet.viewServicesApi.url + params.serviceId.replaceAll("_", " ")
        );
        setService(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPlans();
  }, [params.serviceId]);
  return (
    <div>
      {/* <body onload="getPlans();"> */}
      adasda
      <div id="notification-area"></div>
      <section className="pricing-cover">
        <div className="pricing-landing-image"></div>
        <div className="w-100 pricing-landing">
          <div
            className="text-center text-white fo-40 fw-700 mfo-24"
            id="pricing_heading"
          >
            {service && "Pricing for " + service.service}
          </div>
        </div>
      </section>
      <section className="pricing-section pt-4">
        <div
          className="d-block pricing-section-container"
          id="pricing-section-container"
        >
          <h2 className="fo-40 fw-700 text-center pt-5 mfo-25">
            {service && "We've Got Plans for " + service.service}
          </h2>
          <hr className="mb-5" />
          <Slider {...settings}>
            {service &&
              service.offers.map((offer, index) => {
                return <OfferCard dark={index % 2 === 0} offer={offer} />;
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
      <div className="row m-0 mt-5 testimonials">
        <div className="col-sm-4 mb-5">
          <div className="bg-grey p-4">
            <div className="text-center testimonialsImage">
              <img
                src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-30"
                alt="Testimonial_1"
              />
            </div>
            <div className="text-center fo-24 fw-600">John Doe</div>
            <div className="fo-15">
              <span className="fo-22 fw-800">"</span>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
              <span className="fo-22 fw-800">"</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <div className="bg-grey p-4">
            <div className="text-center testimonialsImage">
              <img
                src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-30"
                alt="Testimonial_2"
              />
            </div>
            <div className="text-center fo-24 fw-600">John Doe</div>
            <div className="fo-15">
              <span className="fo-22 fw-800">"</span>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
              <span className="fo-22 fw-800">"</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <div className="bg-grey p-4">
            <div className="text-center testimonialsImage">
              <img
                src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-30"
                alt="Testimonial_3"
              />
            </div>
            <div className="text-center fo-24 fw-600">John Doe</div>
            <div className="fo-15">
              <span className="fo-22 fw-800">"</span>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
              <span className="fo-22 fw-800">"</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
