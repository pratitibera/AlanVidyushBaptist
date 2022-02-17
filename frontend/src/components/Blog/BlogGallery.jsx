import { useEffect } from "react";
import $ from "jquery";

const BlogGallery = ({ gallery }) => {
  console.log(window);
  useEffect(() => {
    $("#blogsSection").owlCarousel({
      loop: true,
      autoplay: true,
      autoWidth: true,
      autoPlaySpeed: 1000,
      autoplayHoverPause: true,
      dots: false,
      nav: true,
      navText: [
        $(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next"),
      ],
      responsive: {
        0: {
          items: 1,
          autoWidth: false,
        },
        960: {
          items: 4,
        },
      },
    });
  }, [gallery]);
  return (
    <div className="col-12 col-sm-12">
      <div className="owl-carousel mt-sm-5" id="blogsSection">
        {gallery &&
          gallery.map((image, index) => {
            return (
              <div class="p-2" key={index}>
                <div class="card p-0">
                  <img src={image["image"]} class="w-100" />
                </div>
              </div>
            );
          })}
      </div>
      <div className="owl-navigation">
        <span className="owl-nav-prev mr-2">
          <i className="fas fa-long-arrow-alt-left"></i>
        </span>
        <span className="owl-nav-next ml-2">
          <i className="fas fa-long-arrow-alt-right"></i>
        </span>
      </div>
    </div>
  );
};

export default BlogGallery;
