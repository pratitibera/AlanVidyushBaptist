import { useEffect, useState } from "react";
import { useParams } from "react-router";
import urlSet from "../utils/urls";
import Footer from "../components/Layout/Footer";
import ServiceCard from "../components/Services/ServiceCard";

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
      {/* <body onload="getServices();"> */}
      <section className="services-banner">
        <h1>Services</h1>
      </section>

      <section className="services-list">
        <div className="row m-0" id="mainServices_section">
          {services &&
            services.map((service) => <ServiceCard service={service} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
