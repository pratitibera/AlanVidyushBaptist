import React, { useEffect } from "react";
import urlSet from "../utils/urls";

const Mainservices = () => {
  useEffect(() => {
    var mainServicesData, i;
    function displayServices() {
      var mainServices_section = document.getElementById(
        "mainServices_section"
      );
      for (i = 0; i < mainServicesData.length; i++) {
        var service = mainServicesData[i]["service"].replaceAll(" ", "_");
        mainServices_section.innerHTML += `<div class="col-sm-4">
                   <div class="single-service-item" id="service_${i}" onclick="mainServiceDetails(this.id);">
                      <div class="img-holder">
                         <figure class="swap-on-hover">
                            <img class="swap-on-hover__front-image" src="${mainServicesData[i]["service_image"][0]}">
                            <img class="swap-on-hover__back-image" src="${mainServicesData[i]["service_image"][1]}">
                         </figure>
                         <div class="text-holder text-center">
                            <h3>${mainServicesData[i]["service"]}</h3>
                            <p>${mainServicesData[i]["description"]}</p>
                            <div class="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3">Read More</div> 
                         </div>
                      </div>
                   </div>
                </div>`;
      }
    }

    function getMainServices() {
      var request = new XMLHttpRequest();
      request.open(
        urlSet.getMainServiceApi.method,
        urlSet.getMainServiceApi.url + "?level=0",
        true
      );
      request.setRequestHeader("Content-Type", "application/json");
      request.send();
      request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        mainServicesData = data;
        displayServices();
      };
    }

    getMainServices();
  });

  return (
    <div>
      {/* <body onload="getMainServices();"> */}

      <section class="services-banner">
        <h1>Services</h1>
      </section>

      <section class="services-list">
        <div class="row m-0" id="mainServices_section">
          <div class="col-sm-4">
            <div class="single-service-item" id="" onclick="">
              <div class="img-holder">
                <figure class="swap-on-hover">
                  <img
                    class="swap-on-hover__front-image"
                    src="https://www.nmami.in/wp-content/uploads/2019/05/Service-Thumbnail1_vector-1.png"
                  />
                  <img
                    class="swap-on-hover__back-image"
                    src="https://www.nmami.in/wp-content/uploads/2019/05/Service-Thumbnail1_Images-min.png"
                  />
                </figure>
                <div class="text-holder text-center">
                  <h3>Weight Loss</h3>
                  <p>
                    Nutritional coaching to normalise BMI healthily without any
                    side effects.
                  </p>
                  <div class="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainservices;
