import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import urlSet from "../utils/urls";
import { Link } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(urlSet.get_blogApi.url + params.id);
        setBlog(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    if (params.id) fetchBlog();
  }, [params]);
  return (
    <main className="min-height">
      <div id="notification-area"></div>

      {blog && !loading ? (
        <section className="blogAvailable">
          <div className="blogImageContainer">
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" id="blogImageContainer"></div>
            </div>
          </div>
          <div className="blogWriter">
            <div id="blogWriter">
              {blog &&
                blog.body.map((elem) => (
                  <>
                    <div
                      className="blogContent fw-600 fo-30 mfo-18 mb-3"
                      id={elem["id"]}
                    >
                      {elem["heading"]}
                    </div>
                    <div className="blogContent fo-17 mfo-15">
                      {elem["paragraph"].replaceAll("<br>", "")}
                    </div>
                  </>
                ))}
            </div>
            <div id="coaches"></div>
            <div className="text-center fw-700 mfo-12 mt-5" id="brands"></div>
          </div>
          <div className="blogHeading text-center mt-5" id="blogHeading"></div>
          <hr className="blogBorder" />
          <div className="fo-13 mt-5 text-center blogDate" id="blogdate"></div>
          <div className="blogContentContainer">
            <div className="row m-0 flex-sm-row-reverse">
              <div className="col-sm-11">
                <div className="row m-0">
                  <div className="col-sm-8 mt-5 mt-sm-0">
                    <div id="blogContent"></div>
                  </div>
                  <div className="col-sm-4 blogContents p-0 mt-4 mt-sm-0">
                    <div className="stickyContents sticky3" id="stickyContents">
                      <div id="accordion">
                        <div className="row m-0 p-2 pb-sm-3">
                          <div className="col-10 col-sm-10 p-0 fo-18 fw-700 mfo-22">
                            Contents
                          </div>
                          <div className="col-2 col-sm-2 text-center p-0 m-auto">
                            <a dataToggle="collapse" href="#collapseContents1">
                              <i
                                className="fas fa-chevron-down bco fo-24"
                                onclick="toggleContents(this)"
                                id="toggleDesktopContent"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseContents1"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="pt-2">
                            <ul className="pl-2" id="contentList2">
                              {blog &&
                                blog.content.map((elem) => {
                                  return (
                                    <li class="fo-16">
                                      <Link to={{ hash: elem["id"] }}>
                                        <i class="fas fa-circle fo-6 mr-2 bco fw-600"></i>
                                        {elem["title"]}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div
                      className="owl-carousel mt-sm-5"
                      id="blogsSection"
                    ></div>
                    <div className="owl-navigation">
                      <span className="owl-nav-prev mr-2">
                        <i className="fas fa-long-arrow-alt-left"></i>
                      </span>
                      <span className="owl-nav-next ml-2">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1">
                <div className="sticky blogShareIcons" id="sticky">
                  <div className="d-block d-sm-none text-center fo-20 fw-700 mt-5">
                    Share this inspiring story!
                  </div>
                  <hr className="shareBorder d-block d-sm-none" />
                  <div
                    className="row d-flex d-sm-block mt-5 mt-sm-0"
                    id="shareBlog"
                  ></div>
                </div>
              </div>
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
            <a href="index.html" className="bco fw-600">
              {" "}
              Go back to Home.
            </a>
          </div>
        </section>
      )}
    </main>
  );
};

export default Blog;
