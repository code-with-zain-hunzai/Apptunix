import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import '../App.css';

const Job = () => {
    const [isHovered, setIsHovered] = useState(null);

    const teams = [
        {
            title: "Dedicated",
            subtitle: "Development Team",
            description:
                "Fast team building, flexible collaboration, & engineers with proven expertise to give your project new superpowers.",
            bg: '#edeffe'
        },
        {
            title: "End-To-End",
            subtitle: "Software Development",
            description:
                "Outstanding and user-centric UI/UX, full coverage of the development cycle and highly customized solutions.",
            bg: '#fffbeb'
        },
        {
            title: "POC/MVP",
            subtitle: "Development",
            description:
                "Quick head start, detailed market research with MVP, and comprehensive product demonstration.",
            bg: '#f2f9ff'
        },
    ];

    return (
        <div className='w-full relative overflow-hidden'>
            <div className='w-[90%] mx-auto pt-12 relative max-w-[1140px]' data-aos="fade-up">
                <div className="dev-team w-full rounded-xl bg-white py-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 px-4">
                        {teams.map((team, index) => (
                            <div
                                key={index}
                                className={`team-dev w-full p-4 rounded-lg shadow-lg group`}
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                                style={{
                                    backgroundColor: team.bg,
                                    opacity: isHovered !== null && isHovered !== index ? 0.5 : 1,
                                    transition: 'opacity 0.5s, transform 0.3s',
                                }}
                            >
                                <div className="flex justify-between mb-1">
                                    <div className="text-lg font-semibold">
                                        <h2>{team.title}</h2>
                                        <span>{team.subtitle}</span>
                                    </div>
                                    <div className={`arrow-button ${isHovered === index ? 'rotate' : ''}`}>
                                        <button>
                                            <IoIosArrowRoundForward className="text-white text-2xl" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-base font-normal">{team.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='home-abt max-w-[1140px] w-[90%] mx-auto md:mt-0'>
                <div className='flex-wrap md:flex justify-between mt-0 md:mt-10 pb-10'>
                    <div className='block mt-8'>
                        <h2 className='font-semibold text-xl lg:text-3xl text-white text-center lg:text-left'>
                            <p className='font-semibold text-base pb-1 lg:justify-start justify-center'>Trusted by</p> <br />
                            2000+ Successful Brands, We Take <br />
                            <p className='pt-4'>Charge of 12+ Services in 9+ Industries</p>
                        </h2>
                    </div>
                    <div className='lg:border-l mt-14 lg:mt-0'>
                        <img className='mx-auto lg:mx-0' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f82f839/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/06/30190414/hm_awrd_img-new.png" alt="Award" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job;
