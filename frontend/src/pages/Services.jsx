import { useEffect, useState } from "react";
import { useParams } from "react-router";
import urlSet from "../utils/urls";
import ServiceCard from "../components/Services/ServiceCard";
import ServicesBanner from "../img/banners/services_banner.png";
import Footer from "../components/Layout/Footer";
import Loader from "../components/Loader";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const params = useParams();

  console.log(params);
  useEffect(() => {
    var mainServicesData;

    function getServices() {
      var request = new XMLHttpRequest();
      setLoading(true)
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
        setLoading(false)
      };
    }
    getServices();
  }, [params]);

  return (
    <div>
      <div className="partners-cover text-center">
        <img src={ServicesBanner} className="w-100" alt="Services Banner"></img>
      </div>

      <section className="services-list">
        <div className="service-grid" id="mainServices_section">
          {isLoading && (
            <Loader />
          )}
          {services &&
            services.map((service) => <ServiceCard service={service} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
