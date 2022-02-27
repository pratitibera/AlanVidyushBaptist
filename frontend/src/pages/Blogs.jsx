import axios from "axios";
import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  Link,
} from "react-router-dom";
import urlSet from "../utils/urls";

var blogCatandSub = {
  Fitness: [
    {
      name: "Weight Loss",
      image: require("../img/icons/Weight Loss Yellow.png"),
    },
    {
      name: "Muscle Gain",
      image: require("../img/icons/Muscle Gain Yellow.png"),
    },
    {
      name: "Body Recomposition",
      image: require("../img/icons/Body Recomposition Yellow.png"),
    },
    {
      name: "Sports Performance",
      image: require("../img/icons/Sports Performance Yellow.png"),
    },
    {
      name: "Fitness Modelling",
      image: require("../img/icons/Fitness Modelling Yellow.png"),
    },
    {
      name: "Fitness Myths",
      image: require("../img/icons/Fitness Myths Yellow.png"),
    },
  ],
  Nutrition: [
    {
      name: "Weight Loss",
      image: require("../img/icons/Weight Loss Yellow.png"),
    },
    {
      name: "Weight Gain",
      image: require("../img/icons/Weight Gain Yellow.png"),
    },
    {
      name: "Nutrition Concepts",
      image: require("../img/icons/Nutrition Concepts Yellow.png"),
    },
    {
      name: "Recipes",
      image: require("../img/icons/Recipes Yellow.png"),
    },
    {
      name: "Nutrition Myths",
      image: require("../img/icons/Nutrition Myths Yellow.png"),
    },
  ],
  Education: [
    {
      name: "Career",
      image: require("../img/icons/Career Yellow.png"),
    },
    {
      name: "Skills",
      image: require("../img/icons/Skills Yellow.png"),
    },
  ],
  Psychology: [
    {
      name: "Sex",
      image: require("../img/icons/Sex Yellow.png"),
    },
    {
      name: "Relationships",
      image: require("../img/icons/Relationships Yellow.png"),
    },
    {
      name: "Communication",
      image: require("../img/icons/Communication Yellow.png"),
    },
    {
      name: "Psychology Concepts",
      image: require("../img/icons/Psychology Concepts Yellow.png"),
    },
    {
      name: "Philosophy",
      image: require("../img/icons/Philosophy Yellow.png"),
    },
    {
      name: "Spirituality",
      image: require("../img/icons/Spirituality Yellow.png"),
    },
  ],
  Finance: [
    {
      name: "Taxation",
      image: require("../img/icons/Taxation Yellow.png"),
    },
    {
      name: "Investment",
      image: require("../img/icons/Investment Yellow.png"),
    },
    {
      name: "Business",
      image: require("../img/icons/Business Yellow.png"),
    },
    {
      name: "Commerce",
      image: require("../img/icons/Commerce Yellow.png"),
    },
    {
      name: "Economics",
      image: require("../img/icons/Economics Yellow.png"),
    },
  ],
};

const Blogs = () => {
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

  console.log(searchQuery, partnerQuery);
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
      setCategories([
        {
          name: "Fitness",
          image: require("../img/icons/Fitness Modelling Yellow.png"),
        },
        {
          name: "Nutrition",
          image: require("../img/icons/Nutrition Concepts Yellow.png"),
        },
        {
          name: "Education",
          image: require("../img/icons/Education Yellow.png"),
        },
        {
          name: "Psychology",
          image: require("../img/icons/Psychology Concepts Yellow.png"),
        },
        {
          name: "Finance",
          image: require("../img/icons/Taxation Yellow.png"),
        },
      ]);
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

  return (
    <main>
      <div
        id="contextMenu"
        className="context-menu"
        style={{ display: "none" }}
      >
        This photo is Copyright ©️ 2022 Alan Baptist. All rights reserved.
      </div>

      <div id="notification-area"></div>
      {/* <-- All blogs section starts --> */}

      <section className="allBlogsSection">
        <div className="text-center fo-40 fw-800 mfo-32" id="blogPage_heading">
          Blogs
        </div>
        <div className="text-center fo-20 fw-600">
          <i className="fas fa-dumbbell bco"></i>
        </div>
        <div className="text-center fo-15 txtco mfo-13">Ready, Sweat, go!</div>
        {/* <-- All blogs section starts --> */}
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
        <div className="position-relative" id="blog_page_cover">
          {blogsRoot && <h1>This is the Root Blogs</h1>}
        </div>
        <div className="partners-section2">
          <div
            className="text-dark fo-30 p-5 text-center fw-700 mfo-24"
            id="category_heading"
          >
            BLOGS
          </div>

          <div className="row m-0 mt-3" id="displayAllBlogs">
            {blogs.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </div>
          <div className="text-center mt-5 mb-5" id="readmorebutton">
            <button
              className="btn website-button bg-dark text-white"
              onclick="getAllBlogs();"
            >
              READ MORE
            </button>
          </div>
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
            console.log(category);
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
    </div>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <div className="col-6 col-sm-4 mb-4">
      <Link to={"/blog/" + blog.slug}>
        <img
          src={blog.headerImage[0].image}
          className="w-100"
          alt={blog.title}
        />
      </Link>
      <Link to={"/blog/" + blog.slug}>
        <div className="partners_latest_blogs_title fo-20 fw-600 text-center mfo-14">
          {blog.title}
        </div>
      </Link>

      <div className="partners_latest_blogs_subtitle fo-14 fw-400 text-center mfo-11">
        {blog.summary}
      </div>
    </div>
  );
};
