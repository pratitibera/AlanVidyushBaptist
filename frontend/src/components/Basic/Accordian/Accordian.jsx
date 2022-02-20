import { useState } from "react";
import styles from "./Accordian.module.css";
import classNames from "classnames";

const Accordian = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.accordian}>
      <div
        className={styles.accordianTitle}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="row m-0 p-2 pb-sm-3">
          <div className="col-10 col-sm-10 p-0 fo-18 fw-700 mfo-22">
            {title}
          </div>
          <div className="col-2 col-sm-2 text-center p-0 m-auto">
            <i
              className={classNames(
                "fas fa-chevron-down bco fo-24",
                styles.toggle
              )}
              aria-expanded={isActive}
            ></i>
          </div>
        </div>
      </div>
      <div className={styles.accordionContent} aria-expanded={isActive}>
        {children}
      </div>
    </div>
  );
};

export default Accordian;
