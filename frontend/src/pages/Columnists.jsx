/* eslint-disable jsx-a11y/alt-text */

import BlogSection from "../components/About/BlogSection";

import PartnerImage7 from "../img/partners/partner_7.png";

import ColumnistsBanner from "../img/banners/columnists_banner.png";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Columnists = () => (
  <main>
    <div id="overlay"></div>
    <div id="contextMenu" className="context-menu" style={{ display: "none" }}>
      This photo is Copyright ©️ 2022 Alan Baptist. All rights reserved.
    </div>

    <div className="whatsapp_icon row">
      <div className="fo-16 bg-gray text-white">
        Talk to Us <span className="borde-gray"></span>
      </div>
      <a
        href="https://wa.me/919836143134?text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make."
        className="position-relative"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" />
        <span className="whatsapp_icon_span">1</span>
      </a>
    </div>

    <div id="notification-area"></div>

    <section>
      <div class="partners-cover text-center">
        <img src={ColumnistsBanner} class="w-100"></img>
      </div>
    </section>

    <section class="partners-section mt-4">
      <div class="row m-0 d-flex flex-row-reverse">
        <div class="col-sm-8 p-0 bg-grey">
          <div class="row m-0 pl-sm-5 pr-sm-5 h-100">
            <div class="col-5 col-sm-5 m-auto text-right">
              <img src={PartnerImage7} class="w-70 mow-100"></img>
            </div>
            <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
              <div class="mid-border"></div>
            </div>
            <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
              <div class="fo-28 mfo-26 fw-800 text-center">Debasmita Das</div>
              <div class="fo-15 mfo-20 fw-800 text-center">
                <a href="achievements.html?partner=Debasmita_Das">
                  <button class="btn website-button bg-dark mt-3 text-white">
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 p-2 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
          <div class="m-auto">
            <div class="fo-18 text-white fw-600">
              Chief Content Manager, Wellness Influencer
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </section>

    <BlogSection />
  </main>
);

export default Columnists;
