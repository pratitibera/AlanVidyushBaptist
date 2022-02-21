import { useEffect, useState } from "react";
import ServiceCard from "../components/Services/ServiceCard";
import urlSet from "../utils/urls";

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
      <section className="services-banner">
        <h1>Services</h1>
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
