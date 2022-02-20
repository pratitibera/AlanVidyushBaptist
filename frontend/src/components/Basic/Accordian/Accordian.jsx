import { useState } from "react";

const Accordian = ({ title, children }) => {
  console.log(children);
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="row m-0 p-2 pb-sm-3">
          <div className="col-10 col-sm-10 p-0 fo-18 fw-700 mfo-22">
            {title}
          </div>
          <div className="col-2 col-sm-2 text-center p-0 m-auto">
            <i className="fas fa-chevron-down bco fo-24"></i>
          </div>
        </div>
      </div>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default Accordian;
