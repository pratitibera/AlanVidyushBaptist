import { Link } from "react-router-dom";

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

export default BlogCard;
