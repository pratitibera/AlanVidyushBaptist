import { useNavigate } from "react-router";
import styles from './ServiceCard.module.css'

const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  const mainServiceDetails = () => {
    if (service["subservices"].length === 0) {
      navigate("/services/" + service["_id"].replaceAll(" ", "_") + "/pricing");
    } else {
      navigate("/services/" + service["_id"].replaceAll(" ", "_"));
    }
  };


  return (
    <div className={`${styles.cardContainer}`}>
      <div className={styles.cardBackground}>
        <img
          className={`${styles.backgroundImage} ${styles.firstImage}`}
          src={service["service_image"][1]}
          alt="service_image_2"
        />
        <img
          className={`${styles.backgroundImage} ${styles.secondImage}`}
          src={service["service_image"][0]}
          alt="service_image_1"
        />

      </div>
      <div className={styles.messageBox}>
        <h5>{service["service"]}</h5>
        <p>{service["description"]}</p>
        <div
          className="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3 cursorPointer"
          id={`service_${service.id}`}
          onClick={mainServiceDetails}
        >
          Read More
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;