import { useState } from 'react'
import { Link } from "react-router-dom";

const BlogSection = ({ blogs }) => {
  const [selected, setSelected] = useState(3)
  const prevBlog = () => {
    setSelected(selected - 1 < 5 ? 5 : selected - 1)
  };

  const nextBlog = () => {
    setSelected(selected + 1 > 5 ? 1 : selected + 1)
  };

  const selectHandler = (id) => {
    setSelected(parseInt(id))
  }

  return (
    <div className="blog-section" id="blogs">
      <div className="fo-52 pt-3 fw-700 mfo-32  text-center text-white d-flex justify-content-center">
        Check out my
        <Link to="/blogs" className="pulsating_text ml-3 ">
          Blogs
        </Link>
      </div>
      <hr />
      <div className="pr-lg-4 pl-lg-4">
        {" "}
        <div className="pr-lg-4 pl-lg-4">
          <div
            className="container-fluid pr-0 pl-0 pl-lg-5 pr-lg-5"
            id="blogSlider"
          >
            <input type="radio" name="blogSlider" id="s1" value="1" checked={selected === 1}/>
            <input type="radio" name="blogSlider" id="s2" value="2" checked={selected === 2}/>
            <input type="radio" name="blogSlider" id="s3" value="3" checked={selected === 3}/>
            <input type="radio" name="blogSlider" id="s4" value="4" checked={selected === 4}/>
            <input type="radio" name="blogSlider" id="s5" value="5" checked={selected === 5}/>

            {/* Blogs */}

            {blogs &&
              blogs.length > 0 &&
              blogs.map((blog, index) => {
                if (index < 5)
                  return <BlogCard blog={blog} index={index + 1} key={index} selectHandler={selectHandler}/>;
              })}

            <div className="text-center blogs-handler-icons">
              <i
                className="fas fa-long-arrow-alt-left mr-1 text-white fw-800 fo-20 cursorPointer"
                onClick={prevBlog}
              ></i>
              <i
                className="fas fa-long-arrow-alt-right ml-1 text-white fw-800 fo-20 cursorPointer"
                onClick={nextBlog}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

const BlogCard = ({ index, blog, selectHandler }) => {
  const clickHandler = () => selectHandler(index)
  return (
    <label htmlFor={`s${index}`} id={`slide${index}`} onClick={clickHandler}> 
      <div className="blogcardimage">
        <Link to={"/blog/" + blog["_id"]}>
          <img
            src={`${blog["headerImage"][0]["image"]}`}
            height="100%"
            width="100%"
            alt={blog.slug}
          />
        </Link>
      </div>
      <div className="blog-body">
        <div className="fo-21 fw-700 mfo-12">{blog["title"]}</div>
        <div className="fo-14 txtco mt-3 fw-400 mfo-11 txtoverflowmultiple">
          {blog["summary"]}
        </div>
        <div className="mt-4">
          <Link
            to={"/blog/" + blog["slug"]}
            className="fo-12 fw-600 bco mfo-11"
          >
            READ MORE
          </Link>
        </div>
      </div>
      <div className="blog-footer fo-12 mfo-11">{blog["date"]}</div>
    </label>
  );
};
