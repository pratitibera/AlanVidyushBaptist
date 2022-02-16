import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import urlSet from "../utils/urls";

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
          <div className="col-sm-4">
            <div className="single-service-item">
              <div className="img-holder">
                <figure className="swap-on-hover">
                  <img
                    className="swap-on-hover__front-image"
                    src="https://www.nmami.in/wp-content/uploads/2019/05/Service-Thumbnail1_vector-1.png"
                  />
                  <img
                    className="swap-on-hover__back-image"
                    src="https://www.nmami.in/wp-content/uploads/2019/05/Service-Thumbnail1_Images-min.png"
                  />
                </figure>
                <div className="text-holder text-center">
                  <h3>Weight Loss</h3>
                  <p>
                    Nutritional coaching to normalise BMI healthily without any
                    side effects.
                  </p>
                  <div className="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>

          {services &&
            services.map((service) => <ServiceCard service={service} />)}
        </div>
      </section>
    </div>
  );
};

export default Services;

const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  const mainServiceDetails = () => {
    if (service["offers"].length > 0) {
      navigate(
        "/services/" + service["service"].replaceAll(" ", "_") + "/pricing"
      );
    } else {
      navigate("/services/" + service["service"].replaceAll(" ", "_"));
    }
  };
  return (
    <div className="col-sm-4">
      <div
        className="single-service-item"
        id={`service_${service.id}`}
        onClick={mainServiceDetails}
      >
        <div className="img-holder">
          <figure className="swap-on-hover">
            <img
              className="swap-on-hover__front-image"
              src={service["service_image"][0]}
            />
            <img
              className="swap-on-hover__back-image"
              src={service["service_image"][1]}
            />
          </figure>
          <div className="text-holder text-center">
            <h3>{service["service"]}</h3>
            <p>{service["description"]}</p>
            <div className="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
