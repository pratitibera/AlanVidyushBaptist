import { useEffect, useState } from "react";
import ServiceCard from "../components/Services/ServiceCard";
import urlSet from "../utils/urls";

import ServicesBanner from "../img/banners/services_banner.png";

const Mainservices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    function getMainServices() {
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
      };
    }

    getMainServices();
  }, []);

  return (
    <div>
      <section>
      <div className="partners-cover text-center">
        <img src={ServicesBanner} className="w-100" alt="Services Banner"></img>
      </div>
    </section>

      <section className="services-list">
        <div className="row m-0" id="mainServices_section">
          {services &&
            services.map((service) => <ServiceCard service={service} />)}
        </div>
      </section>
    </div>
  );
};

export default Mainservices;
