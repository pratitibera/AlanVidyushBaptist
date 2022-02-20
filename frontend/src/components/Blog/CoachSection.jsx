const CoachSection = ({ coach }) => {
  return (
    <div id="coaches">
      {coach &&
        coach.map((elem) => {
          console.log(elem);
          return (
            <div className="row m-0 p-300 mt-3">
              <div className="col-6 col-sm-6 p-0">
                <img src={elem["image"]} alt={`${elem["name"]}`} />
                <div className="mt-3 fw-700 mfo-12">
                  {elem["designation"] === ""
                    ? `${elem["name"]}`
                    : `${elem["designation"]} : ${elem["name"]}`}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CoachSection;
