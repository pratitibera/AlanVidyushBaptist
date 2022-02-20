const BlogShareIcons = ({ postTitle, postUrl }) => {
  return (
    <div className="col-sm-1">
      <div className="sticky blogShareIcons" id="sticky">
        <div className="d-block d-sm-none text-center fo-20 fw-700 mt-5">
          Share this inspiring story!
        </div>
        <hr className="shareBorder d-block d-sm-none" />
        <div className="row d-flex d-sm-block mt-5 mt-sm-0" id="shareBlog">
          <div class="col-1 d-block d-sm-none"></div>
          <div class="col-2 text-center mb-5">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}"e=${postTitle} ${postUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook fw-600 fo-26 text-dark mfo-20"></i>
            </a>
          </div>
          <div class="col-2 text-center mb-5">
            <a
              href="https://www.instagram.com/alan_baptist/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div class="col-2 text-center mb-5">
            <a
              href={`https://www.linkedin.com/shareArticle/?mini=true&url=${postUrl}&title=${postTitle}?&source=${postUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div class="col-2 text-center mb-5">
            <a
              href={`https://mail.google.com/mail/u/0/?tf=cm&su=ALAN+BAPTIST&body=${postTitle}+${postUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <i class="fas fa-envelope text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div class="col-2 text-center mb-5">
            <a
              href={`https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-whatsapp text-dark fw-600 fo-26 mfo-20"></i>
            </a>
          </div>
          <div class="col-1 d-block d-sm-none"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogShareIcons;
