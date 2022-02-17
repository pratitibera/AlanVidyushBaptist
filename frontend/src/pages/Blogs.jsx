import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
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

  const navigate = useNavigate();
  const isSubCategory = params.category;

  console.log();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = urlSet.get_blogApi.url;

        if (searchQuery) url = url + "?searchQuery=" + searchQuery;
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
  }, [params, searchQuery]);

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
      <div id="contextMenu" class="context-menu" style={{ display: "none" }}>
        This photo is Copyright ©️ 2022 Alan Baptist. All rights reserved.
      </div>

      <div id="notification-area"></div>
      {/* <-- All blogs section starts --> */}
      <section class="allBlogsSection">
        <div class="text-center fo-40 fw-800 mfo-32" id="blogPage_heading">
          Blogs
        </div>
        <div class="text-center fo-20 fw-600">
          <i class="fas fa-dumbbell bco"></i>
        </div>
        <div class="text-center fo-15 txtco mfo-13">Ready, Sweat, go!</div>
        <div class="navbar navbar-expand-sm bg-dark navbar-dark mt-4 p-0">
          <div class="d-block d-sm-none text-white p-2 pl-4 fw-600 fo-20">
            TOPICS
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleBlogCategories"
          >
            <i
              class="fas fa-chevron-down fo-20 fw-600 pr-4 text-white"
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
        <div class="position-relative" id="blog_page_cover"></div>
        <div class="partners-section2">
          <div
            class="text-dark fo-30 p-5 text-center fw-700 mfo-24"
            id="category_heading"
          >
            BLOGS
          </div>

          <div class="row m-0 mt-3" id="displayAllBlogs">
            {blogs.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </div>
          <div class="text-center mt-5 mb-5" id="readmorebutton">
            <button
              class="btn website-button bg-dark text-white"
              onclick="getAllBlogs();"
            >
              READ MORE
            </button>
          </div>
        </div>
      </section>
      {/* <!-- All blogs section ends ---> */}
    </main>
  );
};

export default Blogs;

const CategoryBar = ({ categories, onClick, resetHandler, selected }) => {
  return (
    <div
      class="collapse navbar-collapse d-sm-block w-100"
      id="collapsibleBlogCategories"
    >
      <div class="row m-0 d-block d-sm-flex">
        <div id="category_0" class="active d-none d-sm-block">
          TOPICS
        </div>
        <div id="category_1" class="mo-active" onClick={resetHandler}>
          <i class="fas fa-dumbbell mr-2"></i>ALL
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
                <i class="fas fa-dumbbell mr-2"></i>
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
    <div class="col-6 col-sm-4 mb-4">
      <img src={blog.headerImage[0].image} class="w-100" alt={blog.title} />
      <div class="partners_latest_blogs_title fo-20 fw-600 text-center mfo-14">
        {blog.title}
      </div>
      <div class="partners_latest_blogs_subtitle fo-14 fw-400 text-center mfo-11">
        {blog.summary}
      </div>
    </div>
  );
};
