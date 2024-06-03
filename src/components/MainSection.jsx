import React, { useState } from 'react'
import './MainSection.css'
import { IoIosArrowRoundForward } from "react-icons/io";

const MainSection = () => {

    const [isHoveredBtn, setIsHoveredBtn] = useState(false)

    const image = [
        {
            id: 'img1',
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/08/25121352/Expo_City_Dubai_-_Logo.png'
        },
        {
            id: 'img2',
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2023/08/namshi-logo.svg'
        },
        {
            id: 'img3',
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2023/08/droob-logo.svg'
        },
        {
            id: 'img4',
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/03/12172743/government_logo.png'
        },
    ]
    return (
        <div className='w-full'
        data-aos="fade-right" >
        <div className='w-[90%] mx-auto pt-20 relative max-w-[1130px] '>
            <div className='lg:flex justify-center items-center lg:justify-between'>
                <div className='mainHeading relative '>
                    <h1 className='text-5xl font-black gap-3 text-center lg:text-left'>Drive Digitization to
                        <p className='py-3 '> Your Business with Our </p>
                        <span className='text-[#00649e]'>Digital Solutions</span>
                    </h1>
                    <div className='flex mx-auto justify-center lg:justify-start'>
                        <button
                            className="btn-first  ml-2 my-12 lg:mx-0 bg-transparent border flex p-2 rounded-full items-center justify-between text-lg font-bold relative"
                            data-toggle="modal"
                            data-target="#mobile_get_in_touch_popup"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            onMouseEnter={() => setIsHoveredBtn(true)}
                            onMouseLeave={() => setIsHoveredBtn(false)}
                        >
                            <span className={`button-fst px-4 ${isHoveredBtn ? 'hovered' : ''}`}>
                                Talk to an expert!
                            </span>
                            <IoIosArrowRoundForward
                                className={`btn-icon text-black text-4xl bg-slate-100 rounded-full ${isHoveredBtn ? 'hovered' : ''}`}
                            />
                        </button>
                    </div>
                    <div>
                        <h2 className='text-xl font-black text-center  lg:text-left'>We are Trusted by</h2>
                        <ul className='linksImg flex  items-center gap-8 mt-5 justify-center lg:justify-start'>
                            {image.map((img) => (
                                <li key={img.id}>
                                    <img src={img.image} alt={`Image for ${img.id}`} style={{ width: '100%', maxWidth: '60px' }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <lottie-player src="https://lottie.host/81402d86-0823-4672-bfe1-ae11a45250a3/dCucOwiiPV.json" background="transparent" speed="1" loop="" autoplay=""></lottie-player>
                    <ul className='list-count text-center  lg:mx-0 mx-auto grid grid-cols-2 md:grid-cols-4 mt-10 gap-4 lg"mt-0 xl:mt-0 lg:block lg:shadow-none'>
                        <li className='count-lst lg:shadow-none lg:w-full'>
                            <h3 className='text-[#00649e] font-black text-3xl mb-2'>10+</h3>
                            <p className='text-lg font-normal mb-2'>Years of Experience</p>
                        </li>
                        <li className='count-lst lg:shadow-none lg:w-full'>
                            <h3 className='text-[#00649e] font-black text-3xl mb-2'>25+</h3>
                            <p className='text-lg font-normal mb-2'>Countries Served</p>
                        </li>
                        <li className='count-lst lg:shadow-none lg:w-full'>
                            <h3 className='text-[#00649e] font-black text-3xl mb-2'>250+</h3>
                            <p className='text-lg font-normal mb-2'>Tech Enthusiast</p>
                        </li>
                        <li className='count-lst lg:shadow-none lg:w-full'>
                            <h3 className='text-[#00649e] font-black text-3xl mb-2'>1000+</h3>
                            <p className='text-lg font-normal'>Products Delivered</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    )
}

export default MainSection