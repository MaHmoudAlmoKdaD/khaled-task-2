import { useEffect } from "react";
import Slider from "react-slick";
import './sliderImage.scss'
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
    <div style={{width: '100%'}}>
      <Slider {...settings}>
        {images?.map((image, index) => {
          return (
            <div key={`image-${index}`}>
             
              <img src={image.image.src} alt="" className='imageSlider' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderImages;
