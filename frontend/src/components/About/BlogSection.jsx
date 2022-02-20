const BlogSection = () => {
  return (
    <section className="partners-section2">
      <div className="text-dark fo-30 p-5 text-center fw-700">
        THEIR LATEST BLOGS
      </div>
      <div className="row m-0 mt-3" id="displayAllBlogs">
        <div className="col-6 col-sm-4 mb-4">
          <img
            src="https://media.self.com/photos/61b3a6beeaf2efbd51e0619c/4:3/w_426/AdobeStock_426612372.jpeg"
            className="w-100"
            alt="About_Alan"
          ></img>
          <div className="partners_latest_blogs_title fo-20 fw-600 text-center mfo-14">
            8 Ways to Make Exercising During the Holidays About Joy—Not Guilt
          </div>
          <div className="partners_latest_blogs_subtitle fo-14 fw-400 text-center mfo-11">
            Here’s how you can protect your peace.
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-5" id="readmorebutton">
        <button
          className="btn website-button bg-dark text-white"
          onclick="getAllBlogs();"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
