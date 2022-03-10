const OfferCard = ({ dark, offer }) => {
  const addToCart = () => {
    var shopcart = JSON.parse(sessionStorage.getItem("cart"));

    if (shopcart.length > 0) {
      for (let y = 0; y < shopcart.length; y++) {
        if (shopcart[y]["id"] === offer["id"]) {
          notify("Service already added to cart");
        } else {
          shopcart.push(offer);
          notify("Service added to cart");
          sessionStorage.setItem("cart", JSON.stringify(shopcart));

          shopcart = JSON.parse(sessionStorage.getItem("cart"));
          document.getElementById("cart_count_mobile").innerHTML =
            shopcart.length;
          document.getElementById("cart_count_desktop").innerHTML =
            shopcart.length;
        }
      }
    } else {
      shopcart.push(offer);
      notify("Service added to cart");
      sessionStorage.setItem("cart", JSON.stringify(shopcart));

      shopcart = JSON.parse(sessionStorage.getItem("cart"));
      document.getElementById("cart_count_mobile").innerHTML = shopcart.length;
      document.getElementById("cart_count_desktop").innerHTML = shopcart.length;
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

  return (
    <div
      className={dark ? "bg-dark pt-5 pb-5 dark-pricing" : "bg-white pt-5 pb-5"}
    >
      <div className="pri_offer_heading fw-600 pco text-center">
        {offer.duration}
      </div>
      <div className="pco fo-20 fw-600 text-center recommend"></div>

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
            onclick={addToCart}
            id="Salary_+_House_Property_Plan"
            disabled={!offer.in_stock}
          >
            {offer.in_stock ? "CHOOSE PLAN" : "SLOTS FULL"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
