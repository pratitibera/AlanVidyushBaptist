const OfferCard = ({ dark, offer }) => {
  console.log(offer);
  return (
    <div
      className={dark ? "bg-dark pt-5 pb-5 dark-pricing" : "bg-white pt-5 pb-5"}
    >
      <div className="fo-52 fw-600 pco text-center">{offer.duration}</div>
      <div className="pco fo-20 fw-600 text-center recommend"></div>

      {offer.discounted_price && offer.discounted_price > 0 ? (
        <div className="text-center fw-600 fo-52">
          <span className="fo-20" style={{ textDecoration: "line-through" }}>
            ₹ {offer.price}
          </span>
          <span className="pco fo-36 fw-600">₹ </span>
          {offer.discounted_price}
        </div>
      ) : (
        <span className="fo-20">₹ {offer.price}</span>
      )}

      <ul className="pricing-section-items pl-0 mt-3">
        {offer.features.map((feature) => {
          return <li key={feature}>{feature}</li>;
        })}
      </ul>
      <div>
        <div className="text-center mt-5">
          <button
            className="btn"
            onclick="addToCart(this.id);"
            id="Salary_+_House_Property_Plan"
            disabled={!offer.in_stock}
          >
            {offer.in_stock ? "CHOOSE PLAN" : "OUT OF STOCK"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
