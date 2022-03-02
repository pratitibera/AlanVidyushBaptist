import { useEffect, useState } from "react";
import $ from "jquery";
import urlSet from "../../utils/urls";

const CheckoutModal = ({ classes }) => {
  const [shopCart, setShopCart] = useState([]);
  const [totalBill, setTotalBill] = useState([]);
  const [offers, setOffers] = useState([]);
  const [coupon_code, setCouponCode] = useState(null);
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    if (
      sessionStorage.getItem("cart") === null ||
      sessionStorage.getItem("cart") === undefined
    ) {
      setShopCart([]);
    } else {
      setShopCart(JSON.parse(sessionStorage.getItem("cart")));
    }
  }, []);

  const notify = (message) => {
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
          if (notifications[i].getAttribute("id") == id) {
            notifications[i].remove();
            break;
          }
        }
      }, 5000);
    })();
  };

  const emptyCart = () => {
    sessionStorage.clear();
    document.getElementById("cart_count_mobile").innerHTML = "";
    document.getElementById("cart_count_desktop").innerHTML = "";
  };

  const removeCoupon = () => {
    setCouponCode(null);
  };

  const fetchCart = () => {
    if (shopCart.length > 0) {
      var particulars = document.getElementById("particulars");
      particulars.innerHTML = "";
      let totalbill = 0;
      let offerIds = [];
      for (let i = 0; i < shopCart.length; i++) {
        offerIds.push(shopCart[i]["id"]);
        if (shopCart[i]["discount"] === "undefined") {
          particulars.innerHTML += `<div className="row m-0 mb-2">
	                        <div className="col-3 col-sm-2">
	                           <img src="https://images.unsplash.com/photo-1520877745935-616158eb7fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" className="w-100">
	                        </div>
	                        <div className="col-6 col-sm-6 p-0">
	                           <div className="fo-16 fw-600 mfo-14">${shopCart[i]["service"]}</div>
	                           <div className="fo-14 mfo-12">${shopCart[i]["duration"]}</div>
	                        </div>
	                        <div className="col-3 col-sm-4 p-0">
	                           <div className="fo-26 fw-700 text-right mfo-18">₹ ${shopCart[i]["price"]}</div>
	                        </div>
	                     </div>`;
          totalbill = totalbill + parseInt(shopCart[i]["price"]);
        } else {
          particulars.innerHTML += `<div className="row m-0 mb-2">
	                        <div className="col-3 col-sm-2">
	                           <img src="https://images.unsplash.com/photo-1520877745935-616158eb7fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" className="w-100">
	                        </div>
	                        <div className="col-6 col-sm-6 p-0">
	                           <div className="fo-16 fw-600 mfo-14">${shopCart[i]["service"]}</div>
	                           <div className="fo-14 mfo-12">${shopCart[i]["duration"]}</div>
	                        </div>
	                        <div className="col-3 col-sm-4 p-0">
	                           <div className="fo-26 fw-700 text-right mfo-18">₹ ${shopCart[i]["discount"]}</div>
	                           <div className="fo-16 text-right mfo-12" style="text-decoration: line-through" id="checkout_discount">₹ ${shopCart[i]["price"]}</div>
	                        </div>
	                     </div>`;
          totalbill = totalbill + parseInt(shopCart[i]["discount"]);
        }
      }
      setOffers(offerIds);
      document.getElementById("totalbill").innerHTML = "TOTAL: ₹ " + totalbill;
      $("#checkout").modal();
      console.log(shopCart);
    } else {
      alert("Cart is empty!");
    }
  };

  const applyCoupon = () => {
    const code = document.getElementById("coupon_code").value;
    var json = {
      offerIds: offers,
      couponCode: code,
    };
    console.log(json);
    var request = new XMLHttpRequest();
    request.open(urlSet.applyCouponApi.method, urlSet.applyCouponApi.url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(json));
    request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      if (data["error"] === "Coupon does not exist") {
        document.getElementById(
          "coupon_status"
        ).innerHTML = `<input type="text" placeholder="Coupon code" id="coupon_code">
        <div className="fo-16 text-dark fw-600">Invalid Coupon</div>`;
      } else {
        setCouponCode(code);
        setDiscount(data["discount"]);
        document.getElementById("coupon_button").innerHTML = "REMOVE COUPON";
        document
          .getElementById("coupon_button")
          .setAttribute("onClick", `removeCoupon()`);
        document.getElementById(
          "coupon_status"
        ).innerHTML = `<div className="fo-16 text-dark fw-600">${code} Coupon applied</div>
                              <div className="fo-13 text-dark">Discount: ₹ ${data["discount"]}</div>`;
        document.getElementById("totalbill").innerHTML =
          "TOTAL: ₹ " + data["discounted_price"];
      }
    };
  };

  const payInCash = () => {
    var customer_name = document.getElementById("customer_name").value;
    var customer_mobile = document.getElementById("customer_mobile").value;
    var customer_email = document.getElementById("customer_email").value;

    if (customer_name != "") {
      if (customer_mobile != "" && isPhoneNumber(customer_mobile) === true) {
        if (customer_email != "" && validEmail(customer_email) === true) {
          var json = {
            offerIds: offers,
            couponCode: coupon_code,
            name: customer_name,
            phone: customer_mobile,
            email: customer_email,
            type: "CASH",
          };
          console.log(json);
          var request = new XMLHttpRequest();
          request.open(urlSet.paymentApi.method, urlSet.paymentApi.url, true);
          request.setRequestHeader("Content-Type", "application/json");
          request.send(JSON.stringify(json));
          request.onload = function () {
            var data = JSON.parse(this.response);
            console.log(data);
            if (data["receipt_id"] !== "") {
              $("#checkout").modal("hide");
              notify("Order placed successfully");
              emptyCart();
            } else {
              notify("Payment unsuccessful");
            }
          };
        } else {
          notify("Please enter a valid email ID");
        }
      } else {
        notify("Please enter a valid phone number");
      }
    } else {
      notify("Please enter your name");
    }
  };

  const checkout = () => {
    var customer_name = document.getElementById("customer_name").value;
    var customer_mobile = document.getElementById("customer_mobile").value;
    var customer_email = document.getElementById("customer_email").value;

    if (customer_name != "") {
      if (customer_mobile != "" && isPhoneNumber(customer_mobile) === true) {
        if (customer_email != "" && validEmail(customer_email) === true) {
          var json = {
            offerIds: offers,
            couponCode: coupon_code,
            name: customer_name,
            phone: customer_mobile,
            email: customer_email,
            type: "ONLINE",
          };
          console.log(json);
          var request = new XMLHttpRequest();
          request.open(urlSet.paymentApi.method, urlSet.paymentApi.url, true);
          request.setRequestHeader("Content-Type", "application/json");
          request.send(JSON.stringify(json));
          request.onload = function () {
            var data = JSON.parse(this.response);
            console.log(data);
            if (data["receipt_id"] != "") {
              var options = {
                key: "rzp_test_I4CcsfzCypIJie",
                amount: data["amount"],
                currency: "INR",
                name: "ALAN VIDYUSH BAPTIST",
                description: "Pay For Your Service",
                image:
                  "https://alanvidyushbaptist.com/assets/logo/Optimal_Wellness_Logo.png",
                order_id: data["order_id"],
                handler: function (response) {
                  payNowResponse(
                    response.razorpay_payment_id,
                    response.razorpay_order_id,
                    response.razorpay_signature,
                    data["receipt_id"]
                  );
                  console.log(response);
                },
                prefill: {
                  name: customer_name,
                  email: customer_email,
                  contact: customer_mobile,
                },
                notes: {
                  address: "Give an address here",
                },
                theme: {
                  color: "#8b1ef1",
                },
              };
              var rzp1 = new window.Razorpay(options);
              rzp1.on("payment.failed", function (response) {
                notify("Sorry! Payment failed due to banks issue");
              });
              rzp1.open();
            } else {
              notify("Sorry! Could not process your request");
            }
          };
        } else {
          notify("Please enter a valid email ID");
        }
      } else {
        notify("Please enter a valid phone number");
      }
    } else {
      notify("Please enter your name");
    }
  };

  const payNowResponse = (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    receipt_id
  ) => {
    var json = {
      razorpay_order_id: razorpay_order_id,
      razorpay_signature: razorpay_signature,
      razorpay_payment_id: razorpay_payment_id,
      receipt_id: receipt_id,
    };
    console.log(json);
    var request = new XMLHttpRequest();
    request.open(
      urlSet.verifyPaymentApi.method,
      urlSet.verifyPaymentApi.url,
      true
    );
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(json));
    request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      if (data["message"] === "Order Valid and Successful") {
        notify("Payment successful");
        emptyCart();
      } else {
        notify("Payment unsuccessful");
      }
    };
  };

  return (
    <>
      <div className={"btn " + classes} onClick={fetchCart}>
        <i className="fa fa-shopping-cart fo-30 bco">
          <sup
            className="cart_count fo-24 bco fw-600"
            id="cart_count_mobile"
          ></sup>
        </i>
      </div>

      <div className="modal fade" id="checkout">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header bg-theme">
              <h4 className="text-dark fw-700 fo-20 mb-0">CHECKOUT</h4>
              <button
                type="button"
                className="close text-dark fw-800"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body pt-4">
              <div id="particulars"></div>
              <div className="mt-4 text-right">
                <div
                  className="fo-14 fw-600 cursorPointer"
                  onClick={emptyCart}
                  data-dismiss="modal"
                >
                  EMPTY CART
                </div>
              </div>
              <div className="input-data">
                <input type="text" required id="customer_name" />
                <div className="underline"></div>
                <label>Full Name</label>
              </div>
              <div className="input-data mt-5">
                <input type="text" required id="customer_email" />
                <div className="underline"></div>
                <label>Email</label>
              </div>
              <div className="input-data mt-5">
                <input type="text" required id="customer_mobile" />
                <div className="underline"></div>
                <label>Contact number</label>
              </div>
              <div className="row m-0 couponsection mt-3">
                <div className="col-6 col-sm-6 pl-0" id="coupon_status">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    id="coupon_code"
                  />
                </div>
                <div className="col-6 col-sm-6 pr-0">
                  <button
                    className="btn website-button bg-dark text-white w-100 mfo-12"
                    onClick={applyCoupon}
                    id="coupon_button"
                  >
                    APPLY COUPON
                  </button>
                </div>
                <div className="col-12 col-sm-12 text-center cash_option">
                  <div className="fo-16 fw-700" onClick={payInCash}>
                    PAY IN CASH
                  </div>
                </div>
              </div>
            </div>
            <div className="checkoutfooter row m-0">
              <button
                className="btn website-button w-50 bg-white text-dark fo-20 fw-800"
                id="totalbill"
              ></button>
              <button
                className="btn website-button w-50 bg-dark text-white"
                onClick={checkout}
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;

const isPhoneNumber = (mob) => {
  var numbers = /^\(?([6789][0-9]{9})$/;
  if (mob.match(numbers)) {
    return true;
  } else {
    return false;
  }
};

const validEmail = (mail) => {
  var pattern = /@gmail\.com/i;
  if (pattern.test(mail)) {
    return true;
  } else {
    return false;
  }
};
