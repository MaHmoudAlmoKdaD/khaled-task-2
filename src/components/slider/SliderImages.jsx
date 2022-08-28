import Slider from "react-slick";
const SliderImages = ({ images = [] }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div style={{width: '90vw'}}>
      <Slider {...settings}>
        {images?.map((image, index) => {
          return (
            <div key={`image-${index}`}>
              <img
                style={{width:'100%',  height: "450px" }}
                src={image.image.src}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderImages;
