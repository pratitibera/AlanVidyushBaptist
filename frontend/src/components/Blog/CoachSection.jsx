const CoachSection = ({ coaches }) => {
  console.log(coaches);
  return (
    <div id="coaches">
      <div className="row m-0 p-300 mt-3">
        {coaches &&
          coaches.map((elem) => {
            return (
              <div className="col-sm-6 p-0">
                <img src={elem["image"]} alt={`${elem["name"]}`} />
                <div className="mt-3 fw-700 mfo-12">
                  {elem["designation"] === ""
                    ? `${elem["name"]}`
                    : `${elem["designation"]} : ${elem["name"]}`}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CoachSection;
