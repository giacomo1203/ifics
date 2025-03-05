import React from 'react';
import Slider from 'react-slick';
import styles from './Slider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  slides: React.ReactNode[];
  slidesToShowMobile: number;
  slidesToShowTablet: number;
  slidesToShowDesktop: number;
}

const CustomSlider: React.FC<SliderProps> = ({
  slides,
  slidesToShowMobile,
  slidesToShowTablet,
  slidesToShowDesktop,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowDesktop,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShowTablet,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: slidesToShowMobile,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;