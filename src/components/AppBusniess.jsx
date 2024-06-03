import { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import '../style.css'

const app = () => {
    const [isHoveredNext, setIsHoveredNext] = useState(false);

    const items = [
        {
            title: 'Quality',
            description: 'We aim to deliver high-quality products. Hence, we take care of everything at the granular level.',
        },
        {
            title: 'Reliability',
            description: 'Our teams are made up of highly-skilled and certified engineers with industry-specific domain knowledge.',
        },
        {
            title: 'Flexibility',
            description: 'Our team keeps the requirements of our clients on priority & the development process transparent.',
        },
        {
            title: 'Competence',
            description: 'Our team consists of expert developers who have knowledge of domain expertise for all business industries',
        },
    ];

    const blogPosts = [
        {
            id: 1,
            imageSrc: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/sites/3/2021/12/develop-an-on-demand-home-services-apps-min-1.jpg",
            category: "Blog",
            title: "Home Services Apps - The Future Of Tomorrow | App Development Guide",
            date: "Dec 23, 2021",
            bgColor: "bg-[#edeffe]",
        },
        {
            id: 2,
            imageSrc: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/sites/3/2021/12/Artboard_%E2%80%93_19-2.jpg",
            category: "Blog",
            title: "Complete Guide On Taxi Booking App Development - With Benefits And Features",
            date: "Dec 8, 2021",
            bgColor: "bg-[#fffbe6]",
        },
        {
            id: 3,
            imageSrc: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/06/realistic_book_cover_mockup-1.png",
            category: "E Guide",
            title: "App Monetization Strategies: How to Make Money From an App?",
            date: "June 22, 2023",
            bgColor: "bg-[#e5f5f0]",
        },
    ];

    return (
        <div className='w-[90%] mx-auto max-w-[1170px] mt-40'>
            <section className='rounded-3xl bg-[#1d1d1d] lg:pl-8 flex'>
                <div className='w-full lg:w-4/5 text-center lg:text-left'>
                    <h2 className='text-4xl font-semibold text-[#fff] pt-8'> Our Robust Mobile & Web App Development Solutions Stands Your Business at the Top!</h2>
                    <div className=''>
                        <button
                            className="btn-last my-8 lg:mx-0 text-white flex p-2 rounded-full items-center justify-between text-lg font-bold relative mx-auto"
                            data-toggle="modal"
                            data-target="#mobile_get_in_touch_popup"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            onMouseEnter={() => setIsHoveredNext(true)}
                            onMouseLeave={() => setIsHoveredNext(false)}
                        >
                            <span className={`btn-quote px-4 ${isHoveredNext ? 'hovered' : ''}`}>
                                Get a Quote
                            </span>
                            <IoIosArrowRoundForward
                                className={`btn-icon fadeLeft text-black text-4xl bg-slate-100 rounded-full ${isHoveredNext ? 'hovered' : ''}`}
                            />
                        </button>
                    </div>
                </div>
                <div>
                    <figure className='hidden lg:flex w-[321px]'>
                        <img src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/12/06150657/home_cta4.png" alt="" />
                    </figure>
                </div>
            </section>

            <section className='mt-20'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>
                        Why Choose Us
                    </h2>
                    <p className='text-xl font-normal mt-3'>
                        More the years, the better the solutions! We have been partnering
                        <span className='block'>
                            with brands and offering our expertise for more than a decade.</span></p>
                </div>

                <div className='flex mt-10'>
                    <figure className='max-w-[527px] max-h-[498px] hidden lg:flex'>
                        <img src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/06/30185457/hm_whychs-new.png" alt="" />
                    </figure>

                    <div className='ml-0 lg:ml-10'>
                        {items.map((item, index) => (
                            <li key={index} className='bg-[#fff] flex shadow-xl list-none py-3 px-5 rounded-xl transition duration-300 hover:bg-[#00649e] group mb-5'>
                                <button className='pb-10 transition duration-300'>
                                    <TiTick className='hidden lg:flex text-[#fff] text-4xl p-1 bg-[#00649e] rounded-full transition duration-300 group-hover:text-[#00649e] group-hover:bg-white' />
                                </button>
                                <div className='ml-4 mt-1'>
                                    <h3 className='text-center lg:text-left font-semibold text-2xl group-hover:text-white'>{item.title}</h3>
                                    <p className='text-[#383838] text-base transition duration-300 group-hover:text-white'>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </section>

            <section className='mt-20'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Featured Blog</h2>
                    <p className='font-normal mt-3 text-xl'>Check out our guides to stay updated with the market and economy.</p>
                </div>
                <div className='lg:flex mt-10 '>
                    <div className=' lg:w-3/5'>
                        {blogPosts.slice(0, 2).map((post) => (
                            <div key={post.id} className={`${post.bgColor} py-5 pl-5 pr-10 sm:flex  rounded-lg hover:rounded-2xl hover:shadow-xl mb-5 text-center lg:text-left`}>
                                <figure>
                                    <img className='rounded-xl h-[205px] lg:max-w-[265px]' src={post.imageSrc} alt={post.title} />
                                </figure>
                                <div className='ml-5'>
                                    <span className='text-[#00649e] font-bold text-base'>{post.category}</span>
                                    <h3 className='font-bold text-lg hover:text-[#00649e]'>{post.title}</h3>
                                    <p className='mt-3'>{post.date}</p>
                                    <button
                                        className="mx-auto lg:mx-0 mt-3 bg-[#fff] text-black border flex p-2 rounded-full items-center justify-between text-base font-bold relative"
                                        data-toggle="modal"
                                        data-target="#mobile_get_in_touch_popup"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <span className="hover:text-[#00649e]">
                                            Read more
                                        </span>
                                        <IoIosArrowRoundForward
                                            className={`text-white text-4xl bg-[#00649e] rounded-full ml-2`}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='hello me ml-0 lg:ml-10  lg:w-3/5'>
                        {blogPosts.slice(2).map((post) => (
                            <div key={post.id} className={`${post.bgColor} pt-5 pl-5    rounded-lg hover:rounded-2xl hover:shadow-xl mb-5`}>

                                <div className='post-container relative ml-5 overflow-hidden justify-center text-center lg:text-left'>
                                    <span className='text-[#00649e] font-bold text-base'>{post.category}</span>
                                    <h3 className='font-bold text-lg hover:text-[#00649e]'>{post.title}</h3>
                                    <p className='mt-3'>{post.date}</p>
                                    <button
                                        className="mt-3 justify-center lg:mx-0 mx-auto flex items-center p-2 bg-white text-black border rounded-full font-bold relative"
                                        data-toggle="modal"
                                        data-target="#mobile_get_in_touch_popup"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <span className="hover:text-[#00649e]">Read more</span>
                                        <IoIosArrowRoundForward className="text-white text-4xl bg-[#00649e] rounded-full ml-2" />
                                    </button>
                                    <figure className='pre-footer relative mt-3 pb-16 justify-center lg:justify-end'>
                                        <img className='rounded-xl h-[205px] max-w-[275px] object-cover mr-14 lg:mt-16 ' src={post.imageSrc} alt={post.title} />
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='flex justify-center'>
            <button
                    className="btn-last my-12 lg:mx-0 bg-[#00649e] text-white border flex p-2 rounded-full items-center justify-between text-lg font-bold relative"
                    data-toggle="modal"
                    data-target="#mobile_get_in_touch_popup"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    onMouseEnter={() => setIsHoveredNext(true)}
                    onMouseLeave={() => setIsHoveredNext(false)}
                >
                    <span className={`btn-view px-4 ${isHoveredNext ? 'hovered' : ''}`}>
                        View All
                    </span>
                    <IoIosArrowRoundForward
                        className={`btn-icon text-black text-4xl bg-slate-100 rounded-full ${isHoveredNext ? 'hovered' : ''}`}
                    />
                </button>
                </div>
        </div>
    )
}

export default app
