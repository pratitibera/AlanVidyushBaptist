/* eslint-disable jsx-a11y/alt-text */

import Sidebar from "../components/Layout/Sidebar";
import BlogSection from "../components/About/BlogSection";

import PartnerImage1 from "../img/partners/partner_1.png";
import PartnerImage2 from "../img/partners/partner_2.png";
import PartnerImage3 from "../img/partners/partner_3.png";
import PartnerImage4 from "../img/partners/partner_4.png";
import PartnerImage6 from "../img/partners/partner_6.png";

import { Link } from "react-router-dom";

import PartnersBanner from "../img/banners/partners_banner.png";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Partners = () => (
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

    <Sidebar />

    <div id="notification-area"></div>

    <section>
      <div className="partners-cover text-center">
        <img
          src="https://media.self.com/photos/5e385cdfb7ea8d0009212cdb/8:3/w_1280,c_limit/00_heros-contributors.jpg"
          className="w-100"
        ></img>
      </div>
    </section>

    <section className="partners-section">
      <div className="row m-0 d-flex flex-row-reverse">
        <div className="col-sm-8 p-0 bg-grey">
          <div className="row m-0 pl-sm-5 pr-sm-5 h-100">
            <div className="col-5 col-sm-5 m-auto text-right">
              <img src={PartnerImage1} className="w-70 mow-100"></img>
            </div>
            <div className="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
              <div className="mid-border"></div>
            </div>
            <div className="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
              <div className="fo-28 mfo-26 fw-800 text-center">
                Vivek Baptist
              </div>
              <div className="fo-15 mfo-20 fw-800 text-center">
                <Link to="achievements.html?partner=Vivek_Baptist">
                  <button className="btn website-button bg-dark mt-3 text-white">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-2 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
          <div className="m-auto">
            <Link to="/blogs?partner=Vivek_Baptist">
              <div className="fo-18 text-white fw-600">
                Pain Science Expert Consultant, Powerlifting Athlete, Gym Owner,
                Columnist
              </div>
            </Link>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-8 p-0 bg-grey">
          <div className="row m-0 pl-sm-5 pr-sm-5 h-100">
            <div className="col-5 col-sm-5 m-auto text-right">
              <a href="achievements.html">
                <img src={PartnerImage2} className="w-70 mow-100"></img>
              </a>
            </div>
            <div className="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
              <div className="mid-border"></div>
            </div>
            <div className="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
              <div className="fo-28 mfo-26 fw-800 text-center">
                Vinit Baptist
              </div>
              <div className="fo-15 mfo-20 fw-800 text-center">
                <a href="achievements.html?partner=Vinit_Baptist">
                  <button className="btn website-button bg-dark mt-3 text-white">
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-1 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
          <div className="m-auto">
            <a href="partners.html?partner=Vinit_Baptist">
              <div className="fo-18 text-white fw-600">
                Fitness Expert, Strength & Conditioning Coach, Athlete, Mega-Gym
                Owner
              </div>
            </a>
            <hr></hr>
          </div>
        </div>

        <div id="notification-area"></div>

        <section>
          <div class="partners-cover text-center">
            <img src={PartnersBanner} class="w-100"></img>
          </div>
        </section>

        <section class="partners-section mt-4">
          <div class="row m-0">
            <div class="col-sm-8 p-0 bg-grey">
              <div class="row m-0 pl-sm-5 pr-sm-5 h-100">
                <div class="col-5 col-sm-5 m-auto text-right">
                  <a href="achievements.html">
                    <img src={PartnerImage6} class="w-70 mow-100"></img>
                  </a>
                </div>
                <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                  <div class="mid-border"></div>
                </div>
                <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                  <div class="fo-28 mfo-26 fw-800 text-center">Neera</div>
                  <div class="fo-15 mfo-20 fw-800 text-center">
                    <a href="achievements.html?partner=Neera">
                      <button class="btn website-button bg-dark mt-3 text-white">
                        READ MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-1 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
              <div class="m-auto">
                <a href="partners.html?partner=Neera">
                  <div class="fo-18 text-white fw-600">
                    Marathon Running Coach, Certified Yoga Instructor, Strength
                    Coach, Fitness Model.
                  </div>
                </a>
                <hr></hr>
              </div>
            </div>
          </div>
          <div class="row m-0 d-flex flex-row-reverse">
            <div class="col-sm-8 p-0 bg-grey">
              <div class="row m-0 pl-sm-5 pr-sm-5 h-100">
                <div class="col-5 col-sm-5 m-auto text-right">
                  <img src={PartnerImage1} class="w-70 mow-100"></img>
                </div>
                <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                  <div class="mid-border"></div>
                </div>
                <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                  <div class="fo-28 mfo-26 fw-800 text-center">
                    Vivek Baptist
                  </div>
                  <div class="fo-15 mfo-20 fw-800 text-center">
                    <a href="achievements.html?partner=Vivek_Baptist">
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
                <a href="partnerBlogs.html?partner=Vivek_Baptist">
                  <div class="fo-18 text-white fw-600">
                    Pain Science Expert Consultant, Powerlifting Athlete, Gym
                    Owner, Columnist
                  </div>
                </a>
                <hr></hr>
              </div>
            </div>
          </div>
          <div class="row m-0">
            <div class="col-sm-8 p-0 bg-grey">
              <div class="row m-0 pl-sm-5 pr-sm-5 h-100">
                <div class="col-5 col-sm-5 m-auto text-right">
                  <a href="achievements.html">
                    <img src={PartnerImage2} class="w-70 mow-100"></img>
                  </a>
                </div>
                <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                  <div class="mid-border"></div>
                </div>
                <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                  <div class="fo-28 mfo-26 fw-800 text-center">
                    Vinit Baptist
                  </div>
                  <div class="fo-15 mfo-20 fw-800 text-center">
                    <a href="achievements.html?partner=Vinit_Baptist">
                      <button class="btn website-button bg-dark mt-3 text-white">
                        READ MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-1 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
              <div class="m-auto">
                <a href="partners.html?partner=Vinit_Baptist">
                  <div class="fo-18 text-white fw-600">
                    Fitness Expert, Strength & Conditioning Coach, Athlete,
                    Mega-Gym Owner
                  </div>
                </a>
                <hr></hr>
              </div>
            </div>
          </div>
          <div class="row m-0 d-flex flex-row-reverse">
            <div class="col-sm-8 p-0 bg-grey">
              <div class="row m-0 pl-sm-5 pr-sm-5 h-100">
                <div class="col-5 col-sm-5 m-auto text-right">
                  <img src={PartnerImage3} class="w-70 mow-100"></img>
                </div>
                <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                  <div class="mid-border"></div>
                </div>
                <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                  <div class="fo-28 mfo-26 fw-800 text-center">
                    Minhaj Akhtar Khan
                  </div>
                  <div class="fo-15 mfo-20 fw-800 text-center">
                    <a href="achievements.html?partner=Minhaj_Akhtar_Khan">
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
                <a href="partners.html?partner=Minhaj_Akhtar_Khan">
                  <div class="fo-18 text-white fw-600">
                    CFO, Financial Consultant, Tax Advisor, Qualified Accountant
                  </div>
                </a>
                <hr></hr>
              </div>
            </div>
          </div>
          <div class="row m-0">
            <div class="col-sm-8 p-0 bg-grey">
              <div class="row m-0 pl-sm-5 pr-sm-5 h-100">
                <div class="col-5 col-sm-5 m-auto text-right">
                  <a href="achievements.html">
                    <img src={PartnerImage4} class="w-70 mow-100"></img>
                  </a>
                </div>
                <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                  <div class="mid-border"></div>
                </div>
                <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                  <div class="fo-28 mfo-26 fw-800 text-center">
                    Rohan Kothari
                  </div>
                  <div class="fo-15 mfo-20 fw-800 text-center">
                    <a href="achievements.html?partner=Rohan_Kothari">
                      <button class="btn website-button bg-dark mt-3 text-white">
                        READ MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-1 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
              <div class="m-auto">
                <a href="partners.html?partner=Rohan_Kothari">
                  <div class="fo-18 text-white fw-600">
                    CEO, Entreprenuer, Lawyer & Business Coach
                  </div>
                </a>
                <hr></hr>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <BlogSection />
  </main>
);

export default Partners;
