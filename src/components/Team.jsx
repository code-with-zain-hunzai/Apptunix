import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style.css';

const testimonials = [
    {
        id: 1,
        name: 'Landon Battles',
        position: 'Co-Founder & CEO of Relief Play',
        image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/london.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/Mask-Group-901294@2x-150x150.png',
        feedback: 'Apptunix has shown commendable dedication to my project. The delivery got pushed back a bit due to COVID but they worked continuously in those circumstances. I appreciate all your efforts and hard work. Thanks!'
    },
    {
        id: 2,
        name: 'Saad Khan',
        position: 'Co-Founder & CEO of SK Tech',
        image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/saad.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/Mask-Group-901264-150x150.png',
        feedback: 'The teams are very responsive and understanding. They managed to understand my business idea well and I am highly satisfied with the quality of work they deliver. I appreciate all the assistance you guys have offered and I would definitely recommend Apptunix for transforming your business'
    },
    {
        id: 3,
        name: 'Wisam',
        position: 'CEO, Co-Founder',
        image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/wisam.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/Mask-Group-901265-1-150x150.png',
        feedback: 'Thank you so much for the efforts exerted in completing my project. Your follow-ups and feedback have played an important part in perfecting this application and we would definitely continue to be in touch regarding any modifications or whatever that might need to be fixed.'
    },
    {
        id: 4,
        name: 'Ahmed Tarig',
        position: 'Co-Founder &; CEO of MTGARGK',
        image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/ahmed.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/Mask-Group-901396-150x150.png',
        feedback: 'A big thanks to team Apptunix for their efforts and expertise towards our project. Their services have been excellent and outstanding. They have always impressed us with their precision and professionalism. HIghly recommend them for getting digital solutionss developed for other businesses'
    },
    {
        id: 5,
        name: 'Daniel Ohale',
        position: 'Founder &amp; CEO of HTH',
        image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/denial.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/08/Mask-Group-901251-150x150.png',
        feedback: 'I appreciate all the efforts of your team towards the project. Apptunix team has responded effortlessly to the changes I requested any time of the day. I would definitely recommend Apptunix for mobile app development services.'
    },
    {
        id: 6,
        name: 'Aleia Mims',
        position: 'Client',
        image: 'https://www.apptunix.com/wp-content/uploads/2017/03/alisaM.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2017/03/Group-903861.png',
        feedback: 'I have had an amazing experience with Apptunix, when I decided on building a website, I had a very vague vision, but the company understood my vision and gave me varied templates & designs to choose from.  my project much faster than it was anticipated and that too with complete precision.',
        video: 'https://www.youtube.com/embed/K9_ZLNtKp0A?autoplay=1&mute=1'
    },
    {
        id: 7,
        name: 'David Ams',
        position: 'Founder & CEO of Luxbubble',
        image: 'https://www.apptunix.com/wp-content/uploads/2022/11/david-1.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/11/Group-903801.png',
        feedback: 'I was impressed that I could raise any concerns directly with the CEO and receive prompt responses, follow-up and action. The project team were great to deal with and it often felt like we were one collaborative team. Delivery manager and QA lead were professional, diligent and highly competent.',
        video: 'https://www.youtube.com/embed/c-A00oIRleg?autoplay=1&amp;mute=1'
    },
    {
        id: 8,
        name: 'Jocelyn Pettitt',
        position: 'CEO of HiViibee',
        image: 'https://www.apptunix.com/wp-content/uploads/2023/05/JocelynPettitt.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/04/Jocelyn-Pettitt-150x150.png',
        feedback: 'We hired Apptunix to build an app for connecting our clients in this niche environment of healing and they provided us with more functionalities than we could have ever expected. We have been working with them for about a year now, they team is fantastic with testing and I would highly recommend their work',
        video: 'https://www.youtube.com/embed/Z9AbiY0aqDg?autoplay=1&amp;mute=1'
    },
    {
        id: 9,
        name: 'Abdul Basith',
        position: 'Founder & CEO of Riksho',
        image: 'https://www.apptunix.com/wp-content/uploads/2022/12/abdul-1-1.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/12/abdul.png',
        feedback: 'I am working with Apptunix since August 2021, the company has been very supportive from day one. They are well-equipped with their strategic approaches and planning and handled all my queries with precision and needful insights. Throughout the project, the team members were highly collaborative and I am highly contented with the firm.',
        video: 'https://www.youtube.com/embed/_Ee3OgIH17s?autoplay=1&amp;mute=1'
    },
    {
        id: 10,
        name: 'Kenneth Kammersgaad',
        position: 'Founder & CEO of BikeFit Challenge',
        image: 'https://www.apptunix.com/wp-content/uploads/2022/12/keeneth.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/12/kk.png',
        feedback: 'I have worked with more than 30 companies now and Apptunix turned out to be one of the best companies, with stable velocity. I was certain about the specifications and details of the project and the team delivered the solution by implementing all those specifications thoroughly. The team was very supportive and available for communicating whenever needed.',
        video: 'https://www.youtube.com/embed/7BAVrX9srJc?autoplay=1&amp;mute=1'
    },
    {
        id: 11,
        name: 'Reece Willamson',
        position: 'Founder & CEO of Willamon Fitness',
        image: 'https://www.apptunix.com/wp-content/uploads/2022/11/reece-1.jpg',
        avatar: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2022/11/Group-1072095.png',
        feedback: 'I would like to thank Apptunix for all their hard work. The team had a huge contribution to get everything completed on time. The team communication with the team has been very quick and transparent. Apptunix understood my project very clearly and worked according to that. I would recommend them for mobile app development services as they are the experts in the market.',
        video: 'https://www.youtube.com/embed/86i_oB6v5q0?autoplay=1&amp;mute=1'
    },
];

const App = () => {
    const mainSliderRef = useRef(null);
    const avatarSliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(null);

    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: avatarSliderRef.current,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const avatarSettings = {
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: mainSliderRef.current,
        focusOnSelect: true,
        centerMode: true,
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
        ],
    };

    const prevSlide = () => {
        avatarSliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        avatarSliderRef.current.slickNext();
    };

    const handleImageClick = (videoUrl) => {
        setCurrentVideo(videoUrl);
    };


    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const iframeStyles = {
        opacity: 1,
        width: width < 600 ? '100%' : '500px',
        borderRadius: '20px',
        height: '300px'
    };

    return (
        <div className='w-[90%] max-w-[1140px] mx-auto mt-16'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Let’s Hear What Our Clients Say</h2>
                <p className='mt-3 text-xl font-normal'>We transform clients’ ideas into reality. Let’s see what made them<span className='block'>love our work.</span></p>
            </div>
            <Slider {...settings} ref={mainSliderRef}>
                {testimonials.map((testimonial,) => (
                    <div key={testimonial.id}>
                        <div className='lg:flex justify-between'>
                            <figure className='team mt-32 overflow-hidden'>
                                {currentVideo === testimonial.video ? (
                                    <iframe
                                        key={testimonial.id}
                                        style={iframeStyles }
                                        loading="lazy"
                                        src={testimonial.video}
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="autoplay; encrypted-media; gyroscope;"
                                    ></iframe>
                                ) : (
                                    <img
                                        className='rounded-xl w-full lg:w-4/4 max-w-[541px]'
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        onClick={() => testimonial.video && handleImageClick(testimonial.video)}
                                    />
                                )}
                            </figure>
                            <div className='desTeam w-full lg:w-2/4 mt-10 md:mt-40 ml-0 lg:ml-20'>
                                <h3 className='font-bold text-3xl ml-5'>{testimonial.name}</h3>
                                <h4 className='mt-2 font-normal text-base ml-5'>{testimonial.position}</h4>
                                <p className='text-lg font-light m-5'>{testimonial.feedback}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <Slider {...avatarSettings} ref={avatarSliderRef} className='avatar-slider'>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className={index === currentSlide ? 'center-avatar' : 'filter grayscale'}>
                        <figure className={`p-2 order ${index === currentSlide ? 'border' : ''} rounded-full w-24 mt-20 mx-auto`}>
                            <img className='rounded-full' src={testimonial.avatar} alt={testimonial.name} />
                        </figure>
                    </div>
                ))}
            </Slider>
            <div className='btnNext justify-center text-center mt-10 '>
                <button className='p-2 border rounded-full mr-10' onClick={prevSlide}>
                    <IoIosArrowRoundBack className='text-3xl' />
                </button>
                <button className='p-2 border rounded-full' onClick={nextSlide}>
                    <IoIosArrowRoundForward className='text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default App;
