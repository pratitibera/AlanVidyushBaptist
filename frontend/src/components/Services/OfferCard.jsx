const OfferCard = ({ dark, offer }) => {
  const addToCart = () => {
    let shopcart = JSON.parse(sessionStorage.getItem("cart"));
    if (!shopcart) {
      shopcart = [];
      sessionStorage.setItem("cart", JSON.stringify([]));
    }

    if (shopcart.length > 0) {
      const checkExist = (shopcart.filter(elem => elem['_id'] === offer['_id'])).length === 0
      if (!checkExist) {
        notify("Service already added to cart");
      } else {
        shopcart.push(offer);
        notify("Service added to cart");
        sessionStorage.setItem("cart", JSON.stringify(shopcart));

        shopcart = JSON.parse(sessionStorage.getItem("cart"));
        document.getElementById("cart_count_mobile").innerHTML =
          shopcart.length;
      }

    } else {
      shopcart.push(offer);
      notify("Service added to cart");
      sessionStorage.setItem("cart", JSON.stringify(shopcart));

      shopcart = JSON.parse(sessionStorage.getItem("cart"));
      document.getElementById("cart_count_mobile").innerHTML = shopcart.length;
    }
  };

  const notify = (message) =>
    (() => {
      let n = document.createElement("div");
      let id = "show_notification";
      n.setAttribute("id", id);
      n.classList.add("notification");
      n.append(message);
      document.getElementById("notification-area").appendChild(n);
      setTimeout(() => {
        var notifications = document
          .getElementById("notification-area")
          .getElementsByClassName("notification");
        for (let i = 0; i < notifications.length; i++) {
          if (notifications[i].getAttribute("id") === id) {
            notifications[i].remove();
            break;
          }
        }
      }, 5000);
    })();

  const slotsFullNotify = () => {
    notify("Unfortunately, no slots are currently available.")
  }

  return (
    <div
      className={dark ? "bg-dark pt-5 pb-5 dark-pricing" : "bg-white pt-5 pb-5"}
    >
      <div className="pri_offer_heading fw-600 pco text-center">
        {offer.duration}
      </div>
      {offer.recommended == true ? (
        <div className="pco fo-20 fw-600 text-center recommend">Recommended</div>
      ) : (
        <div className="pco fo-20 fw-600 text-center recommend"></div>
      )}

      {offer.discounted_price && offer.discounted_price > 0 ? (
        <div className="text-center fw-600 fo-22">
          <span
            className="fo-20 mr-2"
            style={{ textDecoration: "line-through" }}
          >
            ₹ {offer.price}
          </span>
          <span className="pco fo-26 fw-600">₹ </span>
          {offer.discounted_price}
        </div>
      ) : (
        <div className="text-center fw-600 fo-22">
          <span className="pco fo-26 fw-600">₹ </span>{offer.price}
        </div>
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
            onClick={offer.in_stock ? addToCart : slotsFullNotify}
            id="Salary_+_House_Property_Plan"
          // disabled={!offer.in_stock}
          >
            {offer.in_stock ? "CHOOSE PLAN" : "SLOTS FULL"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
