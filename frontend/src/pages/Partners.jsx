/* eslint-disable jsx-a11y/alt-text */
import BlogSection from "../components/About/BlogSection";

import PartnerImage1 from "../img/partners/partner_1.png";
import PartnerImage2 from "../img/partners/partner_2.png";
import PartnerImage3 from "../img/partners/partner_3.png";
import PartnerImage4 from "../img/partners/partner_4.png";
import PartnerImage5 from "../img/partners/partner_5.png";
import PartnerImage6 from "../img/partners/partner_6.png";

import { Link } from "react-router-dom";

import PartnersBanner from "../img/banners/partners_banner.png";
import BlogCard from "../components/Blog/BlogCard";
import { useState, useEffect } from "react";
import axios from "axios";
import urlSet from "../utils/urls";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Partners = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = urlSet.get_blogApi.url;

        const res = await axios.get(encodeURI(url));
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <main>
      <div id="overlay"></div>
      <div
        id="contextMenu"
        className="context-menu"
        style={{ display: "none" }}
      >
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
          <img src={PartnersBanner} class="w-100"></img>
        </div>
      </section>

      <section class="partners-section mt-4">
        <div class="row m-0">
          <div class="col-sm-8 p-0 bg-grey">
            <div class="row m-0 pl-sm-5 pr-sm-5 h-100">
              <div class="col-5 col-sm-5 m-auto text-right">
                <a href="achievements.html">
                  <img src={PartnerImage1} class="w-70 mow-100"></img>
                </a>
              </div>
              <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                <div class="mid-border"></div>
              </div>
              <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                <div class="fo-28 mfo-26 fw-800 text-center">Neera Katwal</div>
                <div class="fo-15 mfo-20 fw-800 text-center">
                  <a href="achievements.html?partner=Neera_Katwal">
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
              <a href="/blogs?partner=Neera">
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
                <img src={PartnerImage2} class="w-70 mow-100"></img>
              </div>
              <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                <div class="mid-border"></div>
              </div>
              <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                <div class="fo-28 mfo-26 fw-800 text-center">Vivek Baptist</div>
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
              <a href="/blogs?partner=Vivek Baptist">
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
                  <img src={PartnerImage3} class="w-70 mow-100"></img>
                </a>
              </div>
              <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                <div class="mid-border"></div>
              </div>
              <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                <div class="fo-28 mfo-26 fw-800 text-center">Vinit Baptist</div>
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
              <a href="/blogs?partner=Vinit Baptist">
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
                <img src={PartnerImage4} class="w-70 mow-100"></img>
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
              <a href="/blogs?partner=Minhaj Akhtar Khan">
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
                  <img src={PartnerImage5} class="w-70 mow-100"></img>
                </a>
              </div>
              <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                <div class="mid-border"></div>
              </div>
              <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                <div class="fo-28 mfo-26 fw-800 text-center">Pankaj</div>
                <div class="fo-15 mfo-20 fw-800 text-center">
                  <a href="achievements.html?partner=Pankaj">
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
              <a href="/blogs?partner=Pankaj">
                <div class="fo-18 text-white fw-600">
                  Director, Financial Doctor, Tax Specialist
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
                <img src={PartnerImage6} class="w-70 mow-100"></img>
              </div>
              <div class="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                <div class="mid-border"></div>
              </div>
              <div class="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                <div class="fo-28 mfo-26 fw-800 text-center">Rohan Kothari</div>
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
          <div class="col-sm-4 p-2 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
            <div class="m-auto">
              <a href="/blogs?partner=Rohan Kothari">
                <div class="fo-18 text-white fw-600">
                  CEO, Entreprenuer, Lawyer & Business Coach
                </div>
              </a>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>
      <div class="text-dark fo-30 p-5 text-center fw-700">
        THE LATEST FROM OUR PARTNERS
      </div>
      <div className="row m-0 mt-3" id="displayAllBlogs">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </main>
  );
};

export default Partners;
