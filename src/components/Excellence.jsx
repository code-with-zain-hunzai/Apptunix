import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import './custom.css'

const App = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [isHoveredBtn, setIsHoveredBtn] = useState(false)

    const expertise = [
        {
            title: "Tailored Solutions",
            description: "Our software development expertise customizes solutions for businesses based on their specific needs"
        },
        {
            title: "Cutting-Edge Services",
            description: "We offer a comprehensive range of services to help you leverage the full potential of digital technology."
        },
        {
            title: "Unique Approach",
            description: "Our solutions are highly adaptable to suit any business while enhancing their durability and reliability."
        },
        {
            title: "Customized Process",
            description: "Our objective is to offer personalized solutions that aid in the success of your business."
        },
    ]

    const circleImages = [
        {
            className: 'Four',
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/04/19152245/circl-4.png',
            alt: ''
        },
        {
            className: 'Three',
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/04/19152255/circl-3.png',
            alt: ''
        },
        {
            className: 'Two',
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/04/19152307/circl-2.png',
            alt: ''
        },
        {
            className: 'One',
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/04/19152235/circl-1.png',
            alt: ''
        },
        {
            className: 'app',
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/www.apptunix.com/wp-content/uploads/2023/06/short-logo.svg',
            alt: ''
        },

    ];

    const handleBoxHover = (index) => {
        setHoveredIndex(index);
    };

    return (
        <div className='w-[90%] mx-auto max-w-[1140px] mb-2'
        data-aos="fade-right" >
            <h2 className='font-bold text-5xl text-center'>Revolutionizing Businesses with Excellence & Expertise</h2>
            <div className='lg:flex mt-10'>
                <div className='hidden lg:block'>
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 border lg:w-3/4 2xl:w-4/5 shadow-xl rounded-xl mb-3 transition-all duration-300 ${hoveredIndex === index ? 'bg-[#00649e] text-white' : ''}`}
                            onMouseEnter={() => handleBoxHover(index)}
                            onMouseLeave={() => handleBoxHover(null)}
                        >
                            <h3 className='text-xl font-medium'>{item.title}</h3>
                            <p className={`mt-2 text-lg font-normal ${hoveredIndex === index ? 'text-white' : 'text-[#585858]'}`}>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className='whel-cntr w-3/5 items-center mx-auto pt-[650px] lg:pt-0'>
                    {circleImages.map((circle, index) => (
                        <div
                            key={index}
                            className={`cricle-img ${circle.className.toLowerCase()} ${circle.className === 'app' ? 'app-zoom-in-out' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                opacity: hoveredIndex !== null && hoveredIndex !== index && index !== circleImages.length - 1 ? 0.5 : 1
                            }}

                        >
                            <figure>
                                <img src={circle.src} alt={circle.alt} />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#dee0e5] px-10 pt-3 flex items-center mt-14 rounded-xl">
                <div className='text-center lg:text-start lg:w-3/5 w-full'>
                    <h2 className='text-5xl font-semibold'>
                        <span className="text-[#00649e]">Let’s Build </span>
                        the Future of Technology Together </h2>
                    <p className='text-[1d1d1d] text-[22px] font-normal mt-2'>Let our team provide you with a no-cost, no-commitment technical proposal for your next enterprise custom project. </p>

                    <button
                        className=" text-mid ml-2 my-5 lg:mx-0 border flex p-2 rounded-full items-center justify-between text-lg font-bold relative"
                        data-toggle="modal"
                        data-target="#mobile_get_in_touch_popup"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        onMouseEnter={() => setIsHoveredBtn(true)}
                        onMouseLeave={() => setIsHoveredBtn(false)}
                    >
                        <span className={`button-mid px-4 ${isHoveredBtn ? 'hovered' : ''}`}>
                            Our Engagement Model
                        </span>
                        <IoIosArrowRoundForward
                            className={`icon-btn text-white text-4xl  rounded-full ${isHoveredBtn ? 'hovered' : ''}`}
                        />
                    </button>
                </div>
                <div className='secPara relative hidden lg:block'>
                    <figure className=" w-3/6 mx-auto" >
                        <img className='' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/21174436/Layer-2.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default App
