import { useState } from "react";
import urlSet from "../../utils/urls";
import { Button, Modal } from 'react-bootstrap'
import { useEffect } from "react";

const CheckoutModal = ({ classes }) => {
  const [show, setShow] = useState(false)
  const [cartCount, setCartCount] = useState([]);
  const [totalBill, setTotalBill] = useState([]);
  const [coupon_code, setCouponCode] = useState(null);
  const [discount, setDiscount] = useState(null);

  const openHandler = () => setShow(true)
  const closeHandler = () => setShow(false)

  const shopCart = sessionStorage.getItem("cart") ? JSON.parse(sessionStorage.getItem("cart")) : [];


  useEffect(() => {
    setCartCount(shopCart.length > 0 ? shopCart.length : "")
    document.getElementById("cart_count_mobile").innerHTML = cartCount;
  }, [cartCount, shopCart.length])

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
          if (notifications[i].getAttribute("id") === id) {
            notifications[i].remove();
            break;
          }
        }
      }, 5000);
    })();
  };

  const emptyCart = () => {
    closeHandler()
    sessionStorage.clear();
    document.getElementById("cart_count_mobile").innerHTML = "";
  };

  const removeCoupon = () => {
    setCouponCode(null);
    setDiscount(null)
  };

  const fetchCart = () => {
    let cart = [];
    let offerIds = [];
    let billAmount = 0;
    if (
      sessionStorage.getItem("cart") === null ||
      sessionStorage.getItem("cart") === undefined
    ) {
      cart = [];
    } else {
      cart = JSON.parse(sessionStorage.getItem("cart"));
    }

    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        offerIds.push(cart[i]["id"]);
        if (cart[i]["discounted_price"]) {
          billAmount = billAmount + parseInt(cart[i]["discounted_price"]);
          console.log(billAmount)
        } else {
          billAmount = billAmount + parseInt(cart[i]["price"]);
        }
      }
      setTotalBill(billAmount)
      console.log(billAmount)
      openHandler();
    } else {
      alert("Cart is empty!");
    }
  };

  const applyCoupon = () => {
    const offers = shopCart.map(item => item['_id'])
    var json = {
      offerIds: offers,
      couponCode: coupon_code,
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
        <div style="font-weight: 600; font-size: 13px; margin-top: 4px">Invalid Coupon</div>`;
      } else {
        setDiscount(data["discount"]);
        setDiscount(data['discount']) // Shows Discounted Value
        setTotalBill(data["discounted_price"]) // Update Total Bill
      }
    };
  };

  const getOffers = () => shopCart.map(item => item['_id'])
  const isValid = () => {
    var customer_name = document.getElementById("customer_name").value;
    var customer_mobile = document.getElementById("customer_mobile").value;
    var customer_email = document.getElementById("customer_email").value;

    if (customer_name !== "") {
      if (customer_mobile !== "" && isPhoneNumber(customer_mobile) === true) {
        if (customer_email !== "" && validEmail(customer_email) === true) {
          return true;
        } else {
          notify("Please enter a valid email ID");
          return false;
        }
      } else {
        notify("Please enter a valid phone number");
        return false;
      }
    } else {
      notify("Please enter your name");
      return false;
    }
  }

  const payInCash = () => {
    if (isValid()) {
      const customer_name = document.getElementById("customer_name").value;
      const customer_mobile = document.getElementById("customer_mobile").value;
      const customer_email = document.getElementById("customer_email").value;


      const json = {
        offerIds: getOffers(),
        couponCode: coupon_code,
        name: customer_name,
        phone: customer_mobile,
        email: customer_email,
        type: "CASH",
      };
      console.log(json);
      const request = new XMLHttpRequest();
      request.open(urlSet.paymentApi.method, urlSet.paymentApi.url, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(json));
      request.onload = function () {
        const data = JSON.parse(this.response);
        console.log(data);
        if (data["receipt_id"] !== "") {
          notify("Order placed successfully");
          closeHandler()
          emptyCart();
        } else {
          notify("Payment unsuccessful");
        }
      };
    }
  };

  const checkout = () => {
    if (isValid()) {
      var customer_name = document.getElementById("customer_name").value;
      var customer_mobile = document.getElementById("customer_mobile").value;
      var customer_email = document.getElementById("customer_email").value;


      var json = {
        offerIds: getOffers(),
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
        if (data["receipt_id"] !== "") {
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
    }
  }

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
            className="fo-24 bco fw-600"
            id="cart_count_mobile"
          ></sup>
        </i>
      </div>

      <Modal show={show} onHide={closeHandler}>
        <Modal.Header>
          <Modal.Title>
            <h4 className="text-dark fw-700 fo-20 mb-0">CHECKOUT</h4>

          </Modal.Title>
          <button
            type="button"
            className="close fw-800"
            data-dismiss="modal"
            onClick={closeHandler}
          >
            &times;
          </button>
        </Modal.Header>
        <Modal.Body>
          <div id="particulars">
            {shopCart && shopCart.map(service => <ParticularCard service={service} key={service['_id']} />)}
          </div>
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
                onChange={(e) => setCouponCode(e.target.value)}
                value={coupon_code}
              />
              {discount && (<><div className="fo-16 text-dark fw-600">{coupon_code} Coupon applied</div>
                <div className="fo-13 text-dark">Discount: ₹ {discount}</div></>)}

            </div>
            <div className="col-6 col-sm-6 pr-0">
              <button
                className="btn website-button bg-dark text-white w-100 mfo-12"
                onClick={discount ? removeCoupon : applyCoupon}
                id="coupon_button"
              >
                {discount ? "REMOVE COUPON" : "APPLY COUPON"}

              </button>
            </div>
            <div className="col-12 col-sm-12 text-center cash_option">
              <div className="fo-16 fw-700" onClick={payInCash}>
                PAY IN CASH
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn website-button bg-white text-dark fo-20 fw-800"
            id="totalbill"
          >₹ {totalBill}</button>
          <button
            className="btn website-button bg-dark text-white"
            onClick={checkout}
          >
            PROCEED TO PAYMENT
          </button>
        </Modal.Footer>
      </Modal>
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

const ParticularCard = ({ service }) => {
  return !service.discounted_price ? (<div className="row m-0 mb-2">
    <div className="col-3 col-sm-2">
      <img src="https://pratitibera.github.io/Karan_Khanna_Fitness/img/barbell.png" className="w-100" />
    </div>
    <div className="col-6 col-sm-6 p-0">
      <div className="fo-16 fw-600 mfo-14">{service["service"]}</div>
      <div className="fo-14 mfo-12">{service["duration"]}</div>
    </div>
    <div className="col-3 col-sm-4 p-0">
      <div className="fo-26 fw-700 text-right mfo-18">₹ {service["price"]}</div>
    </div>
  </div>) : (<div className="row m-0 mb-2">
    <div className="col-3 col-sm-2">
      <img src="https://pratitibera.github.io/Karan_Khanna_Fitness/img/barbell.png" className="w-100" />
    </div>
    <div className="col-6 col-sm-6 p-0">
      <div className="fo-16 fw-600 mfo-14">{service["service"]}</div>
      <div className="fo-14 mfo-12">{service["duration"]}</div>
    </div>
    <div className="col-3 col-sm-4 p-0">
      <div className="fo-26 fw-700 text-right mfo-18">₹  {service["discounted_price"]}</div>
      <div className="fo-16 text-right mfo-12" style={{ textDecoration: "line-through" }} id="checkout_discount">₹ {service["price"]}</div>
    </div>
  </div>)
}