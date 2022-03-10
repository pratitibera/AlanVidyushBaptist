const BlogShareIcons = ({ postTitle, postUrl, postSummary }) => {
  return (
    <div className="col-sm-1">
      <div className="sticky blogShareIcons" id="sticky">
        <div className="d-block d-sm-none text-center fo-20 fw-700 mt-5">
          Share this inspiring story!
        </div>
        <hr className="shareBorder d-block d-sm-none" />
        <div className="row d-flex d-sm-block mt-5 mt-sm-0" id="shareBlog">
          <div className="col-1 d-block d-sm-none"></div>
          <div className="col-2 text-center mb-5">
            <a
              href={`https://www.facebook.com/sharer.php?u=${postUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook fw-600 fo-26 text-dark mfo-20"></i>
            </a>
          </div>
          <div className="col-2 text-center mb-5">
            <a
              href={`https://telegram.me/share/url?url=${postUrl}&text=${postTitle}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-telegram text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div className="col-2 text-center mb-5">
            <a
              href={`https://www.linkedin.com/shareArticle/?mini=true&url=${postUrl}&title=${postTitle}&summary=${postSummary}&source=${postUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div className="col-2 text-center mb-5">
            <a
              href={`https://twitter.com/intent/tweet?text=${postUrl} ${postSummary}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-twitter text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div className="col-2 text-center mb-5">
            <a
              href={`https://api.whatsapp.com/send?text=${postUrl} ${postSummary}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div className="col-1 d-block d-sm-none"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogShareIcons;
