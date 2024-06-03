import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom.css';

const App = () => {
    const [hoveredBtnIndex, setHoveredBtnIndex] = useState(null);
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerPadding: '10px',
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slides = [
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27142218/Sports-Betting.png",
            title: "Sports Betting",
            description: "Give your user a great experience and each minute updates from anywhere with our feature-rich app development."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27152145/Dating.png",
            title: "Dating",
            description: " We help you launch a tailor-made, engaging and interactive dating app that helps your customers find their love. "
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27152204/E-Commerce.png",
            title: "E-Commerce",
            description: " Skyrocket your e-commerce marketplace sales and reach the maximum audience with our user-friendly app solutions."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27142501/Logistics.png",
            title: "Logistics",
            description: " Logistics app development simplify your business processes & minimize functional hurdles to boost efficiency."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27152247/On-Demand-Services.png",
            title: "On Demand Services",
            description: " Choose the right tech partner to create your advanced application and add great value to your on-demand business."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27152226/Healthcare-Services.png",
            title: "Healthcare Services",
            description: "  Bringing innovation to fill the gap between medical professionals & patients with our state-of-art technology "
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27152311/Social-Networking.png",
            title: "Social Networking",
            description: " We empower your social networking approach with our strongly built digital solutions and complete tech stack."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27141907/Education.png",
            title: "Education",
            description: "Uplifting Edtech startups with a blend of comprehensive learning & educational mobility operations."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27142121/Video-Streaming.png",
            title: "Video Streaming",
            description: "Leverage our proficiency in delivering world-class entertaining platforms & build fantastic video streaming app."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27142134/Fitness.png",
            title: "Fitness",
            description: " Discover new growth opportunities with a customizable &amp; robust solution that serves every fitness business."
        },
        {
            img: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/27142152/Travel.png",
            title: "Travel",
            description: " Effortlessly integrate your travel business with high-powered management app & streamline business operations."
        },
    ];

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className='mt-20 w-full'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-[#1d1d1d]'>Industries we serve</h2>
                <p className='text-[#383838] text-xl font-normal mt-2'>
                    Catering to diverse business niches and objectives with our
                    <span className='block'>innovative, valuable digital solutions.</span>
                </p>
            </div>
            <div className=''>
                <Slider ref={sliderRef} {...settings} className='indusSlider overflow-hidden mt-10'>
                    {slides.map((slide, index) => (
                        <div key={index} className='slideIn '>
                            <div className='relative h-[550px] ml-5 shadow-lg rounded-xl pb-5'>
                                <img className='lg:w-[352px] lg:h-[319px] 2xl:w-[383px] 2xl:h-[347px]' src={slide.img} alt={slide.title} />
                                <div className='slideContent p-5'>
                                    <h2 className='text-2xl font-bold text-[#1d1d1d] mt-0'>{slide.title}</h2>
                                    <p className='text-[18px] text-[#1d1d1dd6] font-normal mt-3'>{slide.description}</p>
                                    <div className='mb-8'>
                                        <button
                                            className="text-mid ml-2 my-5 lg:mx-0 border flex p-2 rounded-full items-center justify-between text-lg font-bold relative"
                                            data-toggle="modal"
                                            data-target="#mobile_get_in_touch_popup"
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            onMouseEnter={() => setHoveredBtnIndex(index)}
                                            onMouseLeave={() => setHoveredBtnIndex(null)}
                                        >
                                            <span className={`slider-btn px-4 ${hoveredBtnIndex === index ? 'hovered' : ''}`}>
                                                Explore More
                                            </span>
                                            <IoIosArrowRoundForward
                                                className={`icon-btn text-white text-4xl rounded-full ${hoveredBtnIndex === index ? 'hovered' : ''}`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='btnNext justify-center text-center mt-2'>
                    <button className='p-2 border rounded-full ml-8' onClick={prevSlide}>
                        <IoIosArrowRoundBack className='text-4xl' />
                    </button>
                    <button className='p-2 border rounded-full ml-28' onClick={nextSlide}>
                        <IoIosArrowRoundForward className='text-4xl' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
