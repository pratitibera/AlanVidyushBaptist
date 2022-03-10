import { useNavigate } from "react-router";
import { useState } from "react";

const ServiceCard = ({ service, index }) => {
  const [hover, setHover] = useState(false);
  console.log(hover);
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

  const hoverHandler = () => {
    setHover(!hover);
  };

  return (
    <div className="col-sm-4">
      <div className="single-service-item">
        <div
          className="img-holder"
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
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
          <div
            className={
              "text-holder text-center service-card__description " +
              (hover ? "index_99999" : "index_0")
            }
          >
            <h3>{service["service"]}</h3>
            <p>{service["description"]}</p>
            <div
              className="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3"
              id={`service_${service.id}`}
              onClick={mainServiceDetails}
            >
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
