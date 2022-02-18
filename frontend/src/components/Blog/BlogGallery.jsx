/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";

const BlogGallery = ({ gallery }) => {
  console.log(gallery);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="col-12 col-sm-12">
      {gallery && (
        <div className="mt-sm-5">
          <Slider {...settings}>
            {gallery.map((image, index) => {
              return (
                <div key={index} className="p-4">
                  <img src={image["image"]} height="300" />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default BlogGallery;
