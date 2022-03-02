/* eslint-disable jsx-a11y/alt-text */

import PartnerImage7 from "../img/partners/partner_7.png";

import ColumnistsBanner from "../img/banners/columnists_banner.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import urlSet from "../utils/urls";
import BlogCard from "../components/Blog/BlogCard";
import Footer from "../components/Layout/Footer";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Columnists = () => {
  const limit = 10;
  const startIndex = 0;
  const [page, setPage] = useState(0);
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

  const getNextBlogs = async () => {
    try {
      let url =
        urlSet.get_blogApi.url +
        "?index=" +
        page * startIndex +
        "&limit=" +
        limit;

      const res = await axios.get(encodeURI(url));
      if (page === 0) {
        setBlogs(res.data);
      } else {
        setBlogs([...blogs, ...res.data]);
      }

      setPage(page + 1);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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

      <section>
        <div className="partners-cover text-center">
          <img src={ColumnistsBanner} className="w-100"></img>
        </div>
      </section>

      <section className="partners-section mt-4">
        <div className="row m-0 d-flex flex-row-reverse">
          <div className="col-sm-8 p-0 bg-grey">
            <div className="row m-0 pl-sm-5 pr-sm-5 h-100">
              <div className="col-5 col-sm-5 m-auto text-right">
                <img src={PartnerImage7} className="w-70 mow-100"></img>
              </div>
              <div className="col-1 col-sm-2 pt-5 pb-5 p-sm-5 text-center m-auto">
                <div className="mid-border"></div>
              </div>
              <div className="col-6 col-sm-5 pl-0 pt-sm-5 pr-sm-0 m-auto">
                <div className="fo-28 mfo-26 fw-800 text-center">
                  Debasmita Das
                </div>
                <div className="fo-15 mfo-20 fw-800 text-center">
                  <a href="achievements.html?partner=Debasmita_Das">
                    <button className="btn website-button bg-dark mt-3 text-white">
                      READ MORE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 p-2 pt-4 pb-4 p-sm-5 text-center bg-dark d-flex">
            <Link to="/blogs?partner=Debasmita Das">
              <div className="m-auto">
                <div className="fo-18 text-white fw-600">
                  Chief Content Manager, Wellness Influencer
                </div>
                <hr></hr>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="text-dark fo-30 p-5 text-center fw-700">
        THE LATEST FROM OUR COLUMNISTS
      </div>
      <div className="row m-0 mt-3" id="displayAllBlogs">
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>

      {limit * page < blogs.length && (
        <div className="text-center mt-5 mb-5" id="readmorebutton">
          <button
            className="btn website-button bg-dark text-white"
            onClick={getNextBlogs}
          >
            READ MORE
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
};
export default Columnists;
