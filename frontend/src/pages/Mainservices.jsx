import { useEffect, useState } from "react";
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
  });

  return (
    <div>
      <section class="services-banner">
        <h1>Services</h1>
      </section>

      <section class="services-list">
        <div class="row m-0" id="mainServices_section">
          <div class="col-sm-4">
            <div class="single-service-item" id="" onclick="">
              <div class="img-holder">
                <figure class="swap-on-hover">
                  <img
                    class="swap-on-hover__front-image"
                    src="https://www.nmami.in/wp-content/uploads/2019/05/Service-Thumbnail1_vector-1.png"
                  />
                  <img
                    class="swap-on-hover__back-image"
                    src="https://www.nmami.in/wp-content/uploads/2019/05/Service-Thumbnail1_Images-min.png"
                  />
                </figure>
                <div class="text-holder text-center">
                  <h3>Weight Loss</h3>
                  <p>
                    Nutritional coaching to normalise BMI healthily without any
                    side effects.
                  </p>
                  <div class="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3">
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

export default Mainservices;

const ServiceCard = ({ service, index }) => {
  const mainServiceDetails = () => {
    if (service["offers"].length > 0) {
      document.location.href =
        "pricing?service=" + service["service"].replaceAll(" ", "_");
    } else {
      document.location.href =
        "services/" + service["service"].replaceAll(" ", "_");
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
