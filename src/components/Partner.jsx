import { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import '../style.css'

const app = () => {
    const [isHoveredNext, setIsHoveredNext] = useState(false);

    const technologies = [
        {
            category: 'Mobile Development',
            items: [
                {
                    type: 'Native',
                    technologies: [
                        { name: 'Swift', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Swift.png' },
                        { name: 'objC', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/objC.png' },
                        { name: 'Kotlin', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Kotlin.png' }
                    ]
                },
                {
                    type: 'Hybrid',
                    technologies: [
                        { name: 'Flutter', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Flutter.png' },
                        { name: 'React Native', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/React-Native.png' }
                    ]
                }
            ]
        },
        {
            category: 'Web Development',
            items: [
                {
                    type: 'Frontend',
                    technologies: [
                        { name: 'React Js', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/React-Native.png' },
                        { name: 'Angular', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-202d0db/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/04/05105849/angular.png' },
                        { name: 'Vue JS', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Vue.js_.png' },
                    ]
                },
                {
                    type: 'Backend',
                    technologies: [
                        {
                            name: 'Node Js', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/NodeJS.png'
                        },
                        {
                            name: 'Type Script', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/TypeScript.png'
                        },
                        {
                            name: '.Net', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/www.apptunix.com/wp-content/uploads/2022/11/dotnet.svg'
                        },
                        {
                            name: 'Python', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Python.png'
                        },
                        {
                            name: 'Java', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Java.png'
                        },
                        {
                            name: 'Php', imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-d8c721d/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/PHP.png'
                        },
                    ]
                }
            ],

        }
    ];

    return (
        <div className='w-[90%] max-w-[1140px] mx-auto'
        data-aos="fade-right" >
            <div className='lg:flex mt-20 '>
                <div className='lg:w-[46%] '>
                    <h4 className='w-fit text-2xl font-medium bg-[#bee7ff] py-[10px] text-center px-5  rounded-lg mx-auto lg:mx-0'>Become A Partner</h4>
                    <h3 className='text-4xl font-bold mt-5 text-center lg:text-left'>Alone We Are a Drop of Water; Together an Ocean</h3>
                    <p className='text-[#383838] font-normal text-xl mt-2 text-center lg:text-left'>Become an Apptunix partner to launch, run and grow your business globally. Kickstart your digital journey!</p>

                    <button
                        className="btn-last my-8 lg:mx-0 bg-[#00649e] text-white border flex p-2 rounded-full items-center justify-between text-lg font-bold relative mx-auto"
                        data-toggle="modal"
                        data-target="#mobile_get_in_touch_popup"
                        data-aos-delay="200"
                        onMouseEnter={() => setIsHoveredNext(true)}
                        onMouseLeave={() => setIsHoveredNext(false)}
                    >
                        <span className={`btn-part px-4 ${isHoveredNext ? 'hovered' : ''}`}>
                            Explore more
                        </span>
                        <IoIosArrowRoundForward
                            data-aos-anchor-placement="top-bottom"
                            className={`btn-icon fadeLeft text-black text-4xl bg-slate-100 rounded-full ${isHoveredNext ? 'hovered' : ''}`}
                        />
                    </button>
                </div>
                <div className=''>
                    <figure>
                        <img className='w-4/5 mx-auto' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/06/30185502/hm_ptnrimg-new.png" alt="" />
                    </figure>
                </div>
            </div>

            {/* tech */}

            <div className='mt-10'>
                <h2 className='text-5xl font-bold text-center'>Technology Stack</h2>
                <p className='text-[#383838] text-lg font-normal mt-2 text-center'>Our engineers apprehend your business requirements and help you choose the
                    <span className='block'>right technology for your solution.</span></p>

                <div className='mt-16 block  md:flex flex-wrap justify-between mx-auto'>
                    {technologies.map((techCategory, categoryIndex) => (
                        <div key={categoryIndex}
                            className='w-full lg:w-[30%]'>
                            <h3 className='text-3xl font-black text-[#1d1d1d]'>{techCategory.category}</h3>
                            <ul>
                                {techCategory.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <h3 className='Line border-b relative text-2xl font-normal py-4 text-center lg:text-left'>{item.type}</h3>
                                        <div
                                            className={`mt-4 gap-3 ${item.type === 'Backend' ? 'grid grid-cols-2 lg:grid-cols-3' : 'grid grid-cols-2 lg:grid-cols-3'}`}
                                            style={{ position: 'relative', overflow: 'hidden', }}
                                        >
                                            {item.technologies.map((tech, techIndex) => (
                                                <div
                                                    key={techIndex}
                                                    style={{ position: 'relative', overflow: 'hidden' }}
                                                    className="hover-zoom"
                                                >
                                                    <figure
                                                        style={{ transition: 'transform 0.3s' }}
                                                        className="m-0"
                                                    >
                                                        <img
                                                            className="p-5 border rounded-xl shadow-xl"
                                                            src={tech.imgSrc}
                                                            alt={tech.name}
                                                        />
                                                    </figure>
                                                    <h4 className="text-[#141324] text-base text-center mt-2">{tech.name}</h4>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default app
