import { useState, useRef } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
const FeaturedSlider = () => {
    const [isHoveredPrev, setIsHoveredPrev] = useState(false);
    const [isHoveredNext, setIsHoveredNext] = useState(false);
    const swiperRef = useRef(null);

    const sliderFirst = [
        {
            figure: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/www.apptunix.com/wp-content/uploads/2022/03/droob-lg.png',
            title: 'Moving & Delivery app',
            description: 'A Kuwait-based on-demand pickup and delivery service that allows its users to schedule their pickup anytime and anywhere.',
            app: 'Download',
            country: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/03/kawat.png',
            countryName: 'kuwait',
            Platform: "Platform",
            PlatformDownload: "5k",
            AppDownloads: "IOS",
            tech: 'Technology ',
            techPara: 'Swift, Kotlin, Angular, Node, MongoDB',
            AppDownloadIN: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145523/Download_on_the_App_Store_Badge.png",
            rightImg: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/www.apptunix.com/wp-content/uploads/2022/03/Droob_home_nda.png",
            rightBoxStyle: {
                backgroundColor: '#fbb03a'
            }
        },
        {
            figure: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/www.apptunix.com/wp-content/uploads/2023/06/excpo-wht-lg.png',
            title: 'Food & Delivery app',
            description: 'A food delivery app tailored specifically for Expo City in Dubai, offering convenient and efficient food ordering and delivery services within the expo city grounds.',
            app: 'Download',
            country: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/03/04161123/uae_19.png',
            countryName: 'UAE',
            Platform: "Platform",
            PlatformDownload: "10k",
            AppDownloads: "IOS",
            Android: " Android,",
            tech: 'Technology ',
            techPara: 'Swift, Kotlin, Angular, Node, MongoDB',
            AppDownloadIN: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145530/Google_Play_Store_badge_EN.png",
            appApple: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145523/Download_on_the_App_Store_Badge.png",
            rightImg: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/www.apptunix.com/wp-content/uploads/2023/06/Expo-city-1.png",
            rightBoxColor: '#fbb03a',
            rightBoxStyle: {
                backgroundColor: '#f8f7f4'
            }
        },
        {
            figure: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/www.apptunix.com/wp-content/uploads/2022/03/namshi-lg.png',
            title: 'Shopping App',
            description: 'This shopping app is your no.1 fashion & beauty destination in Saudi Arabia, United Arab Emirates, Kuwait, Oman, Bahrain, Qatar & Iraq.',
            app: 'Download',
            country: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/03/04161123/uae_19.png',
            countryName: 'UAE',
            Platform: "Platform",
            PlatformDownload: "10M+",
            AppDownloads: "IOS",
            Android: " Android,",
            tech: 'Technology ',
            techPara: 'Swift, Kotlin, Angular, Node, MongoDB',
            AppDownloadIN: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145530/Google_Play_Store_badge_EN.png",
            appApple: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145523/Download_on_the_App_Store_Badge.png",
            rightImg: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/www.apptunix.com/wp-content/uploads/2022/03/Mask-Group-1064258-1.png",
            rightBoxStyle: {
                backgroundColor: '#5a73e9'
            },
        },
        {
            figure: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/www.apptunix.com/wp-content/uploads/2022/03/dinein-lg.png',
            title: 'Food Delivery App',
            description: 'A Bahrain-based on demand food ordering and delivering platform that enables safe and timely delivery to its customers.',
            app: 'Download',
            country: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/03/Bahrain.png',
            countryName: 'Bahrain',
            Platform: "Platform",
            PlatformDownload: "10k+",
            AppDownloads: "IOS",
            Android: " Android,",
            tech: 'Technology ',
            techPara: 'Swift, Kotlin, Angular, Node, MongoDB',
            AppDownloadIN: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145530/Google_Play_Store_badge_EN.png",
            appApple: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145523/Download_on_the_App_Store_Badge.png",
            rightImg: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/www.apptunix.com/wp-content/uploads/2022/03/Dinein_home_nda.png",
            rightBoxStyle: {
                backgroundColor: '#c8a44b'
            },
        },
        {
            figure: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/www.apptunix.com/wp-content/uploads/2022/03/Vrbo-1.png',
            title: 'Travelling App',
            description: 'This app is your travel partner whenever you need a place to stay, offering more than two million distinctive locations in 190 countries.',
            country: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/03/usa.png',
            countryName: 'USA',
            Platform: "Platform",
            PlatformDownload: "10M+",
            AppDownloads: "IOS",
            Android: " Android,",
            tech: 'Technology ',
            techPara: 'Swift, Kotlin, Angular, Node, MongoDB',
            AppDownloadIN: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0ab2807/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145530/Google_Play_Store_badge_EN.png",
            appApple: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06145523/Download_on_the_App_Store_Badge.png",
            rightImg: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/www.apptunix.com/wp-content/uploads/2022/03/4_Verbo.png",
            rightBoxStyle: {
                backgroundColor: '#245abc'
            },
        }
    ];

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='mt-10'>
            <h2 className='text-5xl font-bold text-center'>Featured Projects</h2>
            <p className='text-xl font-normal text-center mt-2'>Using the latest technology and industry expertise, we built top-end Android <br />
                and iOS-based applications that add value to the business and user <br />
                experience.</p>

            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                className="mySwiper"
                ref={swiperRef}
            >
                {sliderFirst.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex-wrap-reverse lg:flex pt-16 max-h-[80%]'>
                            <div className='bg-[#002033] lg:w-[50%] justify-center items-center flex'>
                                <button className='p-4 ml-2 text-black bg-white justify-center iteams-center rounded-full ' onClick={handlePrevSlide}>
                                    <GrLinkPrevious className="font-bold" />
                                </button>
                                <div className='w-[75%] max-w[340px] mx-auto pt-20 '>
                                    <div className='text-white'>
                                        <div >
                                            <img src={item.figure} alt={item.title} />
                                        </div>
                                        <h3 className='text-4xl font-bold mt-4'>{item.title}</h3>
                                        <p className='text-base mt-3'>{item.description}</p>
                                        <ul className='flex mt-3 w-[80%]' >
                                            <li>
                                                <span className='font-bold'>{item.PlatformDownload}</span>

                                            </li>
                                            <li className='ml-36'>
                                                <span>country</span>
                                                <h4 className='flex '>
                                                    <img className='mt-1 ' src={item.country} alt={item.countryName} />
                                                    <p className='ml-6 font-bold'>{item.countryName}</p>
                                                </h4>
                                            </li>

                                        </ul>
                                        <ul className='flex mt-2 ' >
                                            <li className=''>
                                                <h4>{item.Platform}</h4>
                                                <div className='flex'>
                                                    <span className=' font-bold'>{item.Android} </span>
                                                    <h4 className="font-bold ml-3">{item.AppDownloads}</h4>
                                                </div>
                                            </li>
                                            <li className='ml-20'>
                                                <span></span>
                                                <h4 className=''>
                                                    <span>{item.tech}</span>
                                                    <p className='font-bold'>{item.techPara}</p>
                                                </h4>
                                            </li>
                                        </ul>
                                        <figure className='flex mt-4'>
                                            <img className='' src={item.AppDownloadIN} alt="Download on the App Store" />
                                            <img className='ml-16' src={item.appApple} alt="" />
                                        </figure>

                                        <button
                                            className="btn ml-2 my-12 lg:mx-0 bg-transparent border flex p-2 rounded-full items-center justify-between text-lg font-bold relative"
                                            data-toggle="modal"
                                            data-target="#mobile_get_in_touch_popup"
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            onMouseEnter={() => setIsHoveredPrev(true)}
                                            onMouseLeave={() => setIsHoveredPrev(false)}
                                        >
                                            <span className={`button-text px-4 ${isHoveredPrev ? 'hovered' : ''}`}>
                                                View Case Study
                                            </span>
                                            <IoIosArrowRoundForward
                                                className={`btn-icon text-black text-4xl bg-slate-100 rounded-full ${isHoveredPrev ? 'hovered' : ''}`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div style={item.rightBoxStyle} className=" lg:w-[50%] flex items-center">
                                <figure className='mx-auto w-[65%]'>
                                    <img
                                        className={`xl:mt-5 2xl:mt-10 max-w-full `}
                                        src={item.rightImg}
                                        alt=""
                                    />
                                </figure>
                                <div className=''>
                                    <button className='p-4 mr-2 text-black bg-white justify-center iteams-center mx-auto rounded-full ml-4' onClick={handleNextSlide}>
                                        <GrLinkNext className="font-bold" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex justify-center items-center'>
                <button
                    className="btn-last my-12 lg:mx-0 bg-[#00649e] text-white border flex p-2 rounded-full items-center justify-between text-lg font-bold relative"
                    data-toggle="modal"
                    data-target="#mobile_get_in_touch_popup"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    onMouseEnter={() => setIsHoveredNext(true)}
                    onMouseLeave={() => setIsHoveredNext(false)}
                >
                    <span className={`button-icon px-4 ${isHoveredNext ? 'hovered' : ''}`}>
                        View More
                    </span>
                    <IoIosArrowRoundForward
                        className={`btn-icon text-black text-4xl bg-slate-100 rounded-full ${isHoveredNext ? 'hovered' : ''}`}
                    />
                </button>
            </div>
        </div>
    );
};

export default FeaturedSlider;
