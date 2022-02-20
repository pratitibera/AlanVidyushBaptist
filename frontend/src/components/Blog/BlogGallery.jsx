/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";

const BlogGallery = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="col-12 col-sm-12 p-10 m-10">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default BlogGallery;

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <i
      className="fas fa-long-arrow-alt-right"
      onClick={onClick}
      style={{
        bottom: "-10px",
        position: "absolute",
        right: "47%",
        fontSize: "26px",
      }}
    />
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className="fas fa-long-arrow-alt-left"
      style={{
        ...style,
        bottom: "-10px",
        position: "absolute",
        right: "53%",
        fontSize: "26px",
      }}
      onClick={onClick}
    />
  );
}
