import axios from "axios";
import { useState, useEffect } from "react";
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
    image: require("../img/icons/Fitness Modelling White.png"),
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
    image: require("../img/icons/Taxation White.png"),
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
  const limit = 10;
  const startIndex = 0;
  const [page, setPage] = useState(0);

  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const partnerQuery = searchParams.get("partner");

  const navigate = useNavigate();
  const isSubCategory = params.category;

  const blogsRoot =
    Object.keys(params).length === 0 &&
    partnerQuery === null &&
    searchQuery === null;

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
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = urlSet.get_blogApi.url;

        if (partnerQuery) {
          url = urlSet.get_AuthorblogApi.url + partnerQuery;
        } else if (searchQuery) url = url + "?searchQuery=" + searchQuery;
        else if (params.category && params.subcategory)
          url =
            url +
            `?category=${params.category}&subcategory=${params.subcategory}`;
        else if (params.category) url = url + `?category=${params.category}`;
        console.log(url);
        const res = await axios.get(encodeURI(url));
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (params.category) {
      setCategories(blogCatandSub[params.category]);
    } else {
      setCategories(rootCategories);
    }
    setPage(0);
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

  return (
    <main>
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
              Blogs
            </div>
            <div className="text-center fo-20 fw-600">
              <i className="fas fa-dumbbell bco"></i>
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
            />
          </div>
        )}

        <div className="position-relative" id="blog_page_cover">
          {(blogsRoot || partnerQuery != null) && blogs && blogs.length > 1 && (
            <div class="position-relative" id="blog_page_cover">
              <img
                src={blogs && blogs[0].headerImage[0].image}
                class="w-100"
                alt={blogs && blogs[0].headerImage[0].name}
              />

              <div class="imageOverlay">
                <div class="fo-52 fw-600 text-center mfo-20">
                  {blogs && blogs[0].title}
                </div>
                <div class="text-center mt-3 mt-md-5">
                  <a href="blog.html?id=How_Ismail_Achieved_12_Body_Fat">
                    <a
                      class="btn website-button bg-dark text-white"
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
            Blogs {partnerQuery && "by " + partnerQuery}
          </div>

          <div className="row m-0 mt-3" id="displayAllBlogs">
            {blogs.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </div>
          {blogs && blogs.length > 0 ? (
            <>
              <div className="text-center mt-5 mb-5" id="readmorebutton">
                {limit * page < blogs.length && (
                  <button
                    className="btn website-button bg-dark text-white"
                    onClick={getNextBlogs}
                  >
                    READ MORE
                  </button>
                )}
              </div>
            </>
          ) : (
            <h3 className="text-center">No blogs found.</h3>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blogs;

const CategoryBar = ({ categories, onClick, resetHandler, selected }) => {
  console.log(require(`../img/about.jpg`));
  return (
    <div
      className="collapse navbar-collapse d-sm-block w-100"
      id="collapsibleBlogCategories"
    >
      <div className="row m-0 d-block d-sm-flex">
        <div id="category_0" className="active d-none d-sm-block">
          TOPICS
        </div>
        <div id="category_1" className="mo-active" onClick={resetHandler}>
          <i className="fas fa-dumbbell mr-2"></i>ALL
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
                    src={category.image}
                    alt={category.name + "_icon"}
                    className="mr-2"
                    height="20px"
                    width="20px"
                  />
                )}

                {category.name}
              </div>
            );
          })}
      </div>

      <Footer />

    </div>
  );
};
