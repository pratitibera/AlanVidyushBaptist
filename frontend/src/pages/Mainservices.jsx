import { useEffect, useState } from "react";
import ServiceCard from "../components/Services/ServiceCard";
import urlSet from "../utils/urls";

import ServicesBanner from "../img/banners/services_banner.png";
import Footer from "../components/Layout/Footer";

const Mainservices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    function getMainServices() {
      setLoading(true)
      var request = new XMLHttpRequest();
      request.open(
        urlSet.getMainServiceApi.method,
        urlSet.getMainServiceApi.url + "?level=0",
        true
      );
      request.setRequestHeader("Content-Type", "application/json");
      request.send();
      request.onload = function () {
        var data = JSON.parse(this.response);
        setServices(data);
        setLoading(false);
      };
    }

    getMainServices();
  }, []);

  return (
    <div>
      <div className="whatsapp_icon row">
        <div className="fo-16 bg-gray text-white">
          Talk to Us <span className="borde-gray"></span>
        </div>
        <a
          href="https://wa.me/919836143134?text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make."
          className="position-relative"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="whatsapp_logo" />
          <span className="whatsapp_icon_span">1</span>
        </a>
      </div>
      <section>
        <div className="partners-cover text-center">
          <img
            src={ServicesBanner}
            className="w-100"
            alt="Services Banner"
          ></img>
        </div>
      </section>

      <section className="services-list">
        <div className="service-grid" id="mainServices_section">
          {isLoading && (
            <div id="preloader">
              <div class="loader" id="loader"></div>
            </div>
          )}
          {services &&
            services.map((service) => <ServiceCard service={service} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mainservices;
