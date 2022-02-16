import { useEffect } from "react";
import urlSet from "../utils/urls";
import $ from "jquery";

const Pricing = () => {
  useEffect(() => {
    function getPlans() {
      var mainService;
      var i, j, k;
      try {
        var url = document.location.href,
          params = url.split("?")[1].split("&"),
          data = {},
          tmp;
        for (var i = 0, l = params.length; i < l; i++) {
          tmp = params[i].split("=");
          data[tmp[0]] = tmp[1];
          mainService = data["service"].replaceAll("_", " ");
        }
      } catch {
        document.location.href = "mainservices";
      }

      var request = new XMLHttpRequest();
      request.open(
        urlSet.viewServicesApi.method,
        urlSet.viewServicesApi.url + mainService,
        true
      );
      request.setRequestHeader("Content-Type", "application/json");
      request.send();
      request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        document.getElementById("pricing_heading").innerHTML =
          "PRICING OF " + mainService.toUpperCase();
        var pricing_section_container = document.getElementById(
          "pricing-section-container"
        );
        pricing_section_container.innerHTML += `<h2 className="fo-40 fw-700 text-center pt-5 mfo-25">We've Got Plans for ${mainService}</h2><hr>`;

        var pricing_row = document.createElement("div");
        pricing_row.setAttribute("class", "owl-carousel mt-5");
        pricing_row.setAttribute("id", "pricingCarousel");

        for (j = 0; j < data["offers"].length; j++) {
          var card = document.createElement("div");
          if (j % 2 === 0) {
            card.setAttribute("class", "bg-white pt-5 pb-5");
          } else {
            card.setAttribute("class", "bg-dark pt-5 pb-5 dark-pricing");
          }

          var duration = document.createElement("div");
          duration.setAttribute("class", "fo-52 fw-600 pco text-center");
          duration.innerHTML = data["offers"][j]["duration"];
          card.append(duration);

          var recommend = document.createElement("div");
          recommend.setAttribute(
            "class",
            "pco fo-20 fw-600 text-center recommend"
          );

          if (data["offers"][j]["recommended"] === true) {
            recommend.innerHTML = "Recommended";
          }
          card.append(recommend);

          var price = document.createElement("div");
          price.setAttribute("class", "text-center fw-600 fo-52");
          if (data["offers"][j]["discounted_price"] !== undefined) {
            price.innerHTML = `<span className="fo-20" style="text-decoration: line-through">₹ ${data["offers"][j]["price"]}</span>
                            <span className="pco fo-36 fw-600">₹ </span>${data["offers"][j]["discounted_price"]}`;
          } else {
            price.innerHTML = `<span className="pco fo-36 fw-600">₹ </span>${data["offers"][j]["price"]}`;
          }
          card.append(price);

          var ul = document.createElement("ul");
          ul.setAttribute("class", "pricing-section-items pl-0 mt-3");
          for (k = 0; k < data["offers"][j]["features"].length; k++) {
            var li = document.createElement("li");
            li.append(data["offers"][j]["features"][k]);
            ul.append(li);
          }
          card.append(ul);

          var choose = document.createElement("div");
          var plan_id =
            data["offers"][j]["duration"].replaceAll(" ", "_") +
            "#" +
            data["offers"][j]["price"] +
            "#" +
            data["offers"][j]["discounted_price"] +
            "#" +
            data["offers"][j]["_id"] +
            "#" +
            data["offers"][j]["offer_name"];
          choose.innerHTML = `<div className="text-center mt-5">
                            <button className="btn" onClick="addToCart(this.id);" id=${plan_id}>CHOOSE PLAN</button>
                         </div>`;
          card.append(choose);

          pricing_row.append(card);
        }
        pricing_section_container.append(pricing_row);
        $("#pricingCarousel").owlCarousel({
          loop: false,
          autoplay: true,
          autoPlaySpeed: 1000,
          autoplayHoverPause: true,
          dots: false,
          nav: true,
          navText: [
            $(".owl-navigation .owl-nav-prev"),
            $(".owl-navigation .owl-nav-next"),
          ],
          responsive: {
            0: {
              items: 1,
            },
            556: {
              items: 3,
            },
          },
        });
      };
    }

    getPlans();
  });
  return (
    <div>
      {/* <body onload="getPlans();"> */}
      adasda
      <div id="notification-area"></div>
      {/* <!-- Pricing section starts ---> */}
      <section className="pricing-cover">
        <div className="pricing-landing-image"></div>
        <div className="w-100 pricing-landing">
          <div
            className="text-center text-white fo-40 fw-700 mfo-24"
            id="pricing_heading"
          ></div>
        </div>
      </section>
      <section className="pricing-section pt-4">
        <div
          className="d-block pricing-section-container"
          id="pricing-section-container"
        ></div>
      </section>
      {/* <!-- Pricing section ends ---> */}
      {/* <!--- Testimonials start --> */}
      <div className="fo-34 text-dark text-center fw-700 p-4 mfo-24 mt-sm-3 testimonials-heading pb-2">
        Testimonials
      </div>
      <hr style={{ borderBottom: "3px solid #FFE972", maxWidth: "100px" }} />
      <div className="row m-0 mt-5 testimonials">
        <div className="col-sm-4 mb-5">
          <div className="bg-grey p-4">
            <div className="text-center testimonialsImage">
              <img
                src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-30"
              />
            </div>
            <div className="text-center fo-24 fw-600">John Doe</div>
            <div className="fo-15">
              <span className="fo-22 fw-800">"</span>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
              <span className="fo-22 fw-800">"</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <div className="bg-grey p-4">
            <div className="text-center testimonialsImage">
              <img
                src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-30"
              />
            </div>
            <div className="text-center fo-24 fw-600">John Doe</div>
            <div className="fo-15">
              <span className="fo-22 fw-800">"</span>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
              <span className="fo-22 fw-800">"</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <div className="bg-grey p-4">
            <div className="text-center testimonialsImage">
              <img
                src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-30"
              />
            </div>
            <div className="text-center fo-24 fw-600">John Doe</div>
            <div className="fo-15">
              <span className="fo-22 fw-800">"</span>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
              <span className="fo-22 fw-800">"</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
