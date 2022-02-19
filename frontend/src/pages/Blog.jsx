import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import urlSet from "../utils/urls";
import { Link } from "react-router-dom";
import $ from "jquery";
import BlogShareIcons from "../components/Blog/BlogShareIcons";
import BlogGallery from "../components/Blog/BlogGallery";
import CoachSection from "../components/Blog/CoachSection";

const Blog = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postUrl, setPostUrl] = useState("");
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(urlSet.get_blogApi.url + params.id);
        setPostUrl(
          `https://alanvidyushbaptist.com/blog.html?id=` + res.data["slug"]
        );
        setPostTitle(res.data["summary"]);
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
      {blog && !loading ? (
        <section className="blogAvailable">
          <div className="blogImageContainer">
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" id="blogImageContainer">
                {blog &&
                  blog.headerImage.map((elem) => (
                    <div
                      class="carousel-item active"
                      data-interval={blog["data_interval"]}
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
              <div className="col-sm-11">
                <div className="row m-0">
                  <div className="col-sm-8 mt-5 mt-sm-0">
                    <div id="blogContent">
                      {blog &&
                        blog.body.map((elem) => {
                          return (
                            <>
                              <div
                                class="blogContent fw-600 fo-30 mfo-18 mb-3"
                                id={`topic${elem["id"]}`}
                              >
                                {elem["heading"]}
                              </div>
                              <div
                                class="blogContent fo-17 mfo-15"
                                dangerouslySetInnerHTML={{
                                  __html: elem["paragraph"],
                                }}
                              ></div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                  <div className="col-sm-4 blogContents p-0 mt-4 mt-sm-0">
                    <div className="stickyContents sticky3" id="stickyContents">
                      <div id="accordion">
                        <div className="row m-0 p-2 pb-sm-3">
                          <div className="col-10 col-sm-10 p-0 fo-18 fw-700 mfo-22">
                            Contents
                          </div>
                          <div className="col-2 col-sm-2 text-center p-0 m-auto">
                            <Link
                              data-toggle="collapse"
                              to={{ hash: "collapseContents1" }}
                            >
                              <i
                                className="fas fa-chevron-down bco fo-24"
                                onClick="toggleContents(this)"
                                id="toggleDesktopContent"
                              ></i>
                            </Link>
                          </div>
                        </div>
                        <div
                          id="collapseContents1"
                          className="collapse"
                          // data-parent="#accordion"
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
                  <BlogGallery gallery={blog.gallery} />
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
    </main>
  );
};

export default Blog;
