const CoachSection = ({ coaches }) => {
  console.log(coaches.length);
  const pStyle = coaches.length === 1 ? 'p-500' : coaches.length === 2 ? 'p-300' : ''; 
  const colDivision = 12 / coaches.length;
  return (
    <div id="coaches">
      <div className={`row m-0 ${pStyle} mt-3`}>
        {coaches &&
          coaches.map((elem, index) => {
            return (
              <div className={`col-sm-${colDivision} p-0`} key={index}>
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
