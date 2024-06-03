import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => { 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
         pauseOnHover: false,
    };
    return (
        <div>
            
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className='justify-center items-center translate-x-24 pt-16 overflow-hidden pb-24'>
                        <img src={img.src} alt={img.alt} style={{ width: "50%", height: "auto" }} />
                        <div className='ml-8 mt-1'>
                        <p className='text-xl  text-[#1d1d1d] font-semibold '>{img.title}</p>
                        <p className='text-base ml-2'>{img.description}</p>
                        <span>{img.description1}</span>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        description1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
      })
    ).isRequired,
  };

export default ImageSlider;

