import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import urlSet from "../utils/urls";
import { Link } from "react-router-dom";
import BlogShareIcons from "../components/Blog/BlogShareIcons";
import BlogGallery from "../components/Blog/BlogGallery";
import CoachSection from "../components/Blog/CoachSection";
import Accordian from "../components/Basic/Accordian/Accordian";
import Helmet from "react-helmet";
import Footer from "../components/Layout/Footer";

const Blog = () => {
  const params = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postTitle, setPostTitle] = useState(null);
  const [postSummary, setPostSummary] = useState(null);
  const [postUrl, setPostUrl] = useState("");

  const resizeHandler = () => {
    const navbar = document.getElementById("navbar");
    const contents = document.getElementById("stickyContents");
    if (!navbar) return;
    if (!contents) return;

    if (window.innerWidth <= 600) {
      // console.log(
      //   contents.parentElement.parentElement.getBoundingClientRect().top,
      //   window.pageYOffset
      // );
      if (
        contents.parentElement.parentElement.getBoundingClientRect().top + 50 <
        0
      ) {
        navbar.classList.remove("fixed-top");
        contents.classList.add("sticky2");
      } else {
        navbar.classList.add("fixed-top");
        contents.classList.remove("sticky2");
      }
    } else {
      navbar.classList.add("fixed-top");
      contents.classList.add("sticky3");
      contents.classList.remove("sticky2");
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(urlSet.get_blogApi.url + params.id);
        setPostUrl(window.location.href);
        setPostTitle(res.data["title"]);
        setPostSummary(res.data["summary"]);
        setBlog(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    if (params.id) fetchBlog();

    const setProgress = () => {
      let scrollPercentRounded = Math.round(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
      );
      document.getElementById("blogContentProgress").style.width =
        scrollPercentRounded + "%";
    };

    window.addEventListener("scroll", setProgress);

    return () => {
      window.removeEventListener("scroll", setProgress);

      if (document.getElementById("blogContentProgress")) {
        document.getElementById("blogContentProgress").style.width = "0%";
      }
      if (!document.getElementById("navbar").classList.contains("fixed-top")) {
        document.getElementById("navbar").classList.add("fixed-top");
      }
    };
  }, [params]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener("scroll", resizeHandler);
    return () => {
      window.removeEventListener("scroll", resizeHandler);
    };
  }, []);

  const routeToSection = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <main class="page-body">
      {blog && (
        <Helmet>
          <meta name="summary" content={blog.summary} />
          <meta name="title" content={blog.title} />
          <meta name="image" content={blog.headerImage[0].image} />
        </Helmet>
      )}

      <div
        id="blogContentProgress"
        style={{
          height: "5px",
          position: "fixed",
          top: "0px",
          width: "0%",
          background: "yellow",
          zIndex: "999999",
        }}
      ></div>
      <div style={{ flex: 1 }}>
        {blog && !loading ? (
          <section className="blogAvailable">
            <div className="blogImageContainer">
              <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" id="blogImageContainer">
                  {blog &&
                    blog.headerImage.map((elem, index) => (
                      <div
                        className="carousel-item active"
                        data-interval={blog["data_interval"]}
                        key={index}
                      >
                        <img
                          src={elem["image"]}
                          alt={elem["title"]}
                          width="1100"
                          height="500"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="blogWriter">
              <div id="blogWriter">
                {blog && blog.client && (
                  <div dangerouslySetInnerHTML={{ __html: blog.client }} />
                )}
              </div>

              <CoachSection coaches={blog.coach} />

              <div className="text-center fw-700 mfo-12 mt-5" id="brands">
                {blog && `BRANDS: ${blog.brands}`}
              </div>
            </div>
            <div className="blogHeading text-center mt-5" id="blogHeading">
              {blog && `${blog.title}`}
            </div>
            <hr className="blogBorder" />
            <div className="fo-13 mt-5 text-center blogDate" id="blogdate">
              {blog && `${blog.date}`}
            </div>
            <div className="blogContentContainer">
              <div className="row m-0 flex-sm-row-reverse">
                <div className="col-sm-11 p-0">
                  <div className="row m-0 flex-sm-row-reverse">
                    <div className="col-sm-4 blogContents p-0 mt-4 mt-sm-0">
                      <div
                        className="stickyContents sticky3"
                        id="stickyContents"
                      >
                        <Accordian title="Contents">
                          <div className="pt-2">
                            <ul className="pl-2" id="contentList2">
                              {blog &&
                                blog.content.map((elem, index) => {
                                  return (
                                    <li
                                      className="fo-16 cursor-pointer"
                                      onClick={() => routeToSection(elem.id)}
                                      key={index}
                                    >
                                      <i className="fas fa-circle fo-6 mr-2 bco fw-600"></i>
                                      {elem["title"]}
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </Accordian>
                      </div>
                    </div>

                    <div className="col-sm-8 mt-5 mt-sm-0">
                      <div id="blogContent">
                        {blog &&
                          blog.body.map((elem, index) => {
                            return (
                              <div key={index}>
                                <div
                                  className="blogContent fw-600 fo-30 mfo-18 mb-3"
                                  id={"topic" + elem["id"]}
                                >
                                  {elem["heading"]}
                                </div>
                                <div
                                  className="blogContent fo-17 mfo-15"
                                  dangerouslySetInnerHTML={{
                                    __html: elem["paragraph"],
                                  }}
                                ></div>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <BlogGallery>
                      {blog &&
                        blog.gallery.map((image, index) => {
                          return (
                            <div key={index} className="p-4">
                              <img
                                src={image["image"]}
                                height="300"
                                className="w-100 copyright_img"
                              />
                            </div>
                          );
                        })}
                    </BlogGallery>
                  </div>
                </div>
                <BlogShareIcons postTitle={postTitle} postUrl={postUrl} />
              </div>
            </div>
          </section>
        ) : (
          <section id="blogNotAvailable">
            <div className="text-center fw-600 fo-24 mb-4 mt-5">
              Sorry, this page isn't available.
            </div>
            <div className="text-center">
              The link you followed may be broken, or the page may have been
              removed.{" "}
              <Link to="/" className="bco fw-600">
                {" "}
                Go back to Home.
              </Link>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Blog;
