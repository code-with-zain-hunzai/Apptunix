import  { useState, } from 'react';

const Award = () => {

    const awards = [
        {
            id: "winner",
            image: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/source/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/05/08160703/TechBehemoths.png",
            title: "TechBehemoths",
            description: "Top Mobile App Development Company UAE 2023"
        },
        {
            id: "AppFutura",
            image: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/AppFutura-1.png",
            title: "AppFutura",
            description: "Top App Development Company "
        },
        {
            id: "GoodFirms",
            image: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/GoodFirms.png",
            title: "GoodFirms",
            description: "Top Mobile App Developers UK"
        },
        {
            id: "Clutch",
            image: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Clutch-1.png",
            title: "Clutch",
            description: "Top 100 Companies 2022"
        },
        {
            id: "ITFirms",
            image: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/ITFirms-1.png",
            title: "ITFirms",
            description: "World’s Top Mobile App Development Companies 2022"
        },
        {
            id: "Clutch",
            image: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-5377fa3/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Clutch2.png",
            title: "Clutch",
            description: "Top Developers in India 2022"
        },

    ];

    const [isHovered, setIsHovered] = useState(null)

    return (
        <div className='w-full'
        data-aos="fade-right">
            <div className='w-[90%] mx-auto max-w-[1140px]'>
                <div className='pt-20'>
                    <h2 className='text-5xl font-bold'>Awards & Recognition</h2>
                    <p className='text-lg mt-4'>We have been featured and certified by recognized authorities worldwide.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  mt-10 gap-6 '>
                    {awards.map((award, index) => (

                        <div key={award.id}
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}
                            style={{
                                opacity: isHovered !== null && isHovered !== index ? 0.4 : 1,
                                transition: 'opacity 0.5s' ,
                            }}
                            className='items-center justify-center bg-[#e8f5ff] shadow-lg rounded-lg w-full p-4 mb-5 '>
                            <img src={award.image} alt={award.title} className='w-32 h-auto mx-auto' />
                            <div className=''>
                                <h3 className='text-xl font-semibold text-center'>{award.title}</h3>
                                <p className='mt-1 text-sm text-center'>{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Award;