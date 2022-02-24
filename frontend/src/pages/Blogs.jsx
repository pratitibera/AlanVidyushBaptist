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
    "Weight Loss",
    "Muscle Gain",
    "Body Recomposition",
    "Sports Performance",
    "Fitness Modelling",
    "Fitness Myths",
  ],
  Nutrition: [
    "Weight Loss",
    "Weight Gain",
    "Nutrition Concepts",
    "Recipes",
    "Nutrition Myths",
  ],
  Education: ["Career", "Skills"],
  Psychology: [
    "Sex",
    "Relationships",
    "Communication",
    "Psych Concepts",
    "Philosophy",
    "Spirituality",
  ],
  Finance: ["Taxation", "Investment", "Business", "Commerce", "Economics"],
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

  console.log();
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
        "Fitness",
        "Nutrition",
        "Education",
        "Psychology",
        "Finance",
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
        <div className="position-relative" id="blog_page_cover"></div>
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
                id={"category_" + category}
                key={index}
                onClick={() => onClick(category)}
                className={category === selected ? "active" : ""}
              >
                <i className="fas fa-dumbbell mr-2"></i>
                {category}
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
