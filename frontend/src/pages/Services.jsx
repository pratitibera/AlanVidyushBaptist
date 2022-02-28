import { useEffect, useState } from "react";
import { useParams } from "react-router";
import urlSet from "../utils/urls";
import ServiceCard from "../components/Services/ServiceCard";
import ServicesBanner from "../img/banners/services_banner.png";

const Services = () => {
  const [services, setServices] = useState([]);
  const params = useParams();

  console.log(params);
  useEffect(() => {
    var mainServicesData;

    function getServices() {
      var request = new XMLHttpRequest();
      request.open(
        urlSet.viewServicesApi.method,
        urlSet.viewServicesApi.url + params.serviceId.replaceAll("_", " "),
        true
      );
      request.setRequestHeader("Content-Type", "application/json");
      request.send();
      request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        mainServicesData = data["subservices"];
        setServices(mainServicesData);
      };
    }
    getServices();
  }, [params]);

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
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" />
          <span className="whatsapp_icon_span">1</span>
        </a>
      </div>
      
      <div class="partners-cover text-center">
        <img src={ServicesBanner} className="w-100" alt="Services Banner"></img>
      </div>

      <section className="services-list">
        <div className="row m-0" id="mainServices_section">
          {services &&
            services.map((service) => <ServiceCard service={service} />)}
        </div>
      </section>
    </div>
  );
};

export default Services;
