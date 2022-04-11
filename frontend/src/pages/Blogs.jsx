import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  useParams,
  useNavigate,
  useSearchParams,
  Link,
} from "react-router-dom";
import BlogCard from "../components/Blog/BlogCard";
import Footer from "../components/Layout/Footer";
import urlSet from "../utils/urls";

const rootCategories = [
  {
    name: "Fitness",
  },
  {
    name: "Nutrition",
    image: require("../img/icons/Nutrition Concepts White.png"),
  },
  {
    name: "Education",
    image: require("../img/icons/Education White.png"),
  },
  {
    name: "Psychology",
    image: require("../img/icons/Psychology Concepts White.png"),
  },
  {
    name: "Finance",
    image: require("../img/icons/Finance White.png"),
  },
];
const blogCatandSub = {
  Fitness: [
    {
      name: "Weight Loss",
      image: require("../img/icons/Weight Loss White.png"),
    },
    {
      name: "Muscle Gain",
      image: require("../img/icons/Muscle Gain White.png"),
    },
    {
      name: "Body Recomposition",
      image: require("../img/icons/Body Recomposition White.png"),
    },
    {
      name: "Sports Performance",
      image: require("../img/icons/Sports Performance White.png"),
    },
    {
      name: "Fitness Modelling",
      image: require("../img/icons/Fitness Modelling White.png"),
    },
    {
      name: "Fitness Myths",
      image: require("../img/icons/Fitness Myths White.png"),
    },
  ],
  Nutrition: [
    {
      name: "Weight Loss",
      image: require("../img/icons/Weight Loss White.png"),
    },
    {
      name: "Weight Gain",
      image: require("../img/icons/Weight Gain White.png"),
    },
    {
      name: "Nutrition Concepts",
      image: require("../img/icons/Nutrition Concepts White.png"),
    },
    {
      name: "Recipes",
      image: require("../img/icons/Recipes White.png"),
    },
    {
      name: "Nutrition Myths",
      image: require("../img/icons/Nutrition Myths White.png"),
    },
  ],
  Education: [
    {
      name: "Career",
      image: require("../img/icons/Career White.png"),
    },
    {
      name: "Skills",
      image: require("../img/icons/Skills White.png"),
    },
  ],
  Psychology: [
    {
      name: "Sex",
      image: require("../img/icons/Sex White.png"),
    },
    {
      name: "Relationships",
      image: require("../img/icons/Relationships White.png"),
    },
    {
      name: "Communication",
      image: require("../img/icons/Communication White.png"),
    },
    {
      name: "Psychology Concepts",
      image: require("../img/icons/Psychology Concepts White.png"),
    },
    {
      name: "Philosophy",
      image: require("../img/icons/Philosophy White.png"),
    },
    {
      name: "Spirituality",
      image: require("../img/icons/Spirituality White.png"),
    },
  ],
  Finance: [
    {
      name: "Taxation",
      image: require("../img/icons/Taxation White.png"),
    },
    {
      name: "Investment",
      image: require("../img/icons/Investment Yellow.png"),
    },
    {
      name: "Business",
      image: require("../img/icons/Business White.png"),
    },
    {
      name: "Commerce",
      image: require("../img/icons/Commerce White.png"),
    },
    {
      name: "Economics",
      image: require("../img/icons/Economics White.png"),
    },
  ],
};

const Blogs = () => {
  const limit = 6;
  const [page, setPage] = useState(0);

  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const partnerQuery = searchParams.get("partner");

  const navigate = useNavigate();
  const isSubCategory = params.category;

  const blogsRoot = partnerQuery === null && searchQuery === null;

  const getNextBlogs = async () => {
    try {
      let url =
        urlSet.get_blogApi.url + "?index=" + page * limit + "&limit=" + limit;
      setLoading(true);
      const res = await axios.get(encodeURI(url));
      if (page === 0) {
        setBlogs(res.data);
      } else {
        setBlogs([...blogs, ...res.data]);
      }

      setPage(page + 1);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  console.log(params);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = urlSet.get_blogApi.url + "?limit=6";
        if (partnerQuery) {
          url = urlSet.get_AuthorblogApi.url + partnerQuery;
        } else if (searchQuery) url = url + "&searchQuery=" + searchQuery;
        else if (params.category && params.subcategory) {
          url =
            url +
            `&category=${params.category}&subcategory=${params.subcategory}`;
        } else if (params.category) {
          url = url + `&category=${params.category}`;
        } else {
          console.log("asdakls", url);
        }

        setLoading(true);
        const res = await axios.get(encodeURI(url));
        setBlogs(res.data);
        setPage(1);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    if (params.category) {
      setCategories(blogCatandSub[params.category]);
    } else {
      setCategories(rootCategories);
    }

    fetchBlogs();
  }, [params, partnerQuery, searchQuery]);

  const categoryHandler = (id) => {
    if (isSubCategory) {
      navigate(`/blogs/${params.category}/${id}`);
    } else {
      navigate(`/blogs/${id}`);
    }
  };

  const categoryResetHandler = () => {
    navigate(`/blogs`);
  };

  const imageIconParse = (arr, name) => {
    const elem = arr.filter((elem) => elem.name === decodeURI(name));
    console.log(elem[0]);
    return elem[0].image;
  };

  return (
    <main className="page-body">
      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div
        id="contextMenu"
        className="context-menu"
        style={{ display: "none" }}
      >
        This photo is Copyright ©️ 2022 Alan Baptist. All rights reserved.
      </div>

      {/* <-- All blogs section starts --> */}

      <section className="allBlogsSection">
        {partnerQuery === null && searchQuery === null && (
          <>
            {" "}
            <div
              className="text-center fo-40 fw-800 mfo-32"
              id="blogPage_heading"
            >
              {params.category != null && params.subcategory != null
                ? params.subcategory
                : params.category != null
                ? params.category
                : "Blogs"}
            </div>
            <div className="text-center fo-20 fw-600">
              <img
                src={
                  params.category && params.subcategory
                    ? encodeURI(
                        `https://alanvidyushbaptist.com/img/icons/${params.subcategory} Yellow.png`
                      )
                    : params.category
                    ? encodeURI(
                        `https://alanvidyushbaptist.com/img/icons/${params.category} Yellow.png`
                      )
                    : `https://alanvidyushbaptist.com/img/icons/Blog_Yellow.png`
                }
                alt={"icon"}
                className="mr-2"
                height="60px"
                width="60px"
              />
            </div>
            <div className="text-center fo-15 txtco mfo-13">
              Ready, Sweat, go!
            </div>
          </>
        )}

        {/* <-- All blogs section starts --> */}

        {partnerQuery === null && searchQuery === null && (
          <div className="navbar navbar-expand-sm bg-dark navbar-dark mt-4 p-0">
            <div className="d-block d-sm-none text-white p-2 pl-4 fw-600 fo-20">
              TOPICS
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleBlogCategories"
            >
              <i
                className="fas fa-chevron-down fo-20 fw-600 pr-4 text-white"
                onclick="toggleContents(this);"
                id="handleBlogCategories"
              ></i>
            </button>

            {/* Categories */}
            <CategoryBar
              categories={categories}
              onClick={categoryHandler}
              resetHandler={categoryResetHandler}
              selected={params.subcategory || params.category}
            />
          </div>
        )}

        <div className="position-relative" id="blog_page_cover">
          {blogsRoot && blogs && blogs.length > 0 && (
            <div className="position-relative" id="blog_page_cover">
              <img
                src={blogs && blogs[0].headerImage[0].image}
                className="w-100"
                alt={blogs && blogs[0].headerImage[0].name}
              />

              <div className="imageOverlay">
                <div className="fo-52 fw-600 text-center mfo-20">
                  {blogs && blogs[0].title}
                </div>
                <div className="text-center mt-3 mt-md-5">
                  <a href="blog.html?id=How_Ismail_Achieved_12_Body_Fat">
                    <a
                      className="btn website-button bg-dark text-white"
                      target="_blank"
                      href={"/blog/" + blogs[0].slug}
                      rel="noreferrer"
                    >
                      READ MORE
                    </a>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="partners-section2">
          <div
            className="text-dark fo-30 p-5 text-center fw-700 mfo-24 text-uppercase"
            id="category_heading"
          >
            {partnerQuery && "by " + partnerQuery}
            {searchQuery && "Searched results of " + searchQuery}
          </div>

          <div className="row m-0 mt-3" id="displayAllBlogs">
            {blogs.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </div>
          {!loading && blogs && blogs.length > 0 && (
            <>
              <div className="text-center mt-5 mb-5" id="readmorebutton">
                {limit * page <= blogs.length ? (
                  <button
                    className="btn website-button bg-dark text-white"
                    onClick={getNextBlogs}
                  >
                    READ MORE
                  </button>
                ) : (
                  <div className="fo-20 fw-600 text-center">
                    <p>That's all we have</p>
                  </div>
                )}
              </div>
            </>
          )}

          {!loading && blogs && blogs.length <= 0 && (
            <h2 className="text-center">No Blogs Found</h2>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;

const CategoryBar = ({ categories, onClick, resetHandler, selected }) => {
  const params = useParams();
  console.log(selected);
  return (
    <div
      className="collapse navbar-collapse d-sm-block w-100"
      id="collapsibleBlogCategories"
    >
      <div className="row m-0 d-block d-sm-flex">
        <div
          id="category_0"
          className="active d-none d-sm-flex align-items-center"
        >
          TOPICS
        </div>
        <div id="category_1" className="mo-active" onClick={resetHandler}>
          <img
            src={
              params.category && params.subcategory
                ? encodeURI(
                    `https://alanvidyushbaptist.com/img/icons/${params.subcategory} White.png`
                  )
                : params.category
                ? encodeURI(
                    `https://alanvidyushbaptist.com/img/icons/${params.category} White.png`
                  )
                : `https://alanvidyushbaptist.com/img/icons/Blog_White.png`
            }
            alt={"All_Blogs"}
            className="mr-2"
            height="30px"
            width="30px"
          />
          {/* {params.category ? params.category : "All"} */}
          ALL
        </div>
        {categories &&
          categories.map((category, index) => {
            return (
              <div
                id={"category_" + category.name}
                key={index}
                onClick={() => onClick(category.name)}
                className={category.name === selected ? "active" : ""}
              >
                {category && (
                  <img
                    src={encodeURI(
                      `https://alanvidyushbaptist.com/img/icons/${category.name} White.png`
                    )}
                    alt={category.name + "_icon"}
                    className="mr-2"
                    height="30px"
                    width="30px"
                  />
                )}

                {category.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};
