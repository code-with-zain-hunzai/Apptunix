import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style.css';

const App = () => {
    const logoswipe = [
        {
            id: 1,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/namshi.svg'
        },
        {
            id: 2,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/expoeats.svg'
        },
        {
            id: 3,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/nunu.svg'
        },
        {
            id: 4,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/cure.svg'
        },
        {
            id: 5,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/anoukin.svg'
        },
        {
            id: 6,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/thinkme.svg'
        },
        {
            id: 7,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/gettaxi.svg'
        },
        {
            id: 8,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/animl.svg'
        },
        {
            id: 9,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/cycl.svg'
        },
        {
            id: 10,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/mcd.svg'
        },
        {
            id: 11,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/chommiebite.svg'
        },
        {
            id: 12,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/arro.svg'
        },
    ];

    const secSwiper = [
        {
            id: 1,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/dash.svg'
        },
        {
            id: 2,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/vrbo.svg'
        },
        {
            id: 3,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/tadataxi.svg'
        },
        {
            id: 4,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/rakuten.svg'
        },
        {
            id: 5,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/wingmen.svg'
        },
        {
            id: 6,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/aiyle.svg'
        },
        {
            id: 7,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/leave.svg'
        },
        {
            id: 8,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/asana.svg'
        },
        {
            id: 9,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/viago.svg'
        },
        {
            id: 10,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/mot2-1.svg'
        },
        {
            id: 11,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/mealroom-1.svg'
        },
        {
            id: 12,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/binge.svg'
        },
    ];

    const thirdSwiper = [
        {
            id:1,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_12.svg'
        },
        {
            id:2,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_1.svg'
        },
        {
            id:3,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_2.svg'
        },
        {
            id:4,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_3.svg'
        },
        {
            id:5,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_4.svg'
        },
        {
            id:6,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_5.svg'
        },
        {
            id:7,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_8.svg'
        },
        {
            id:8,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_6.svg'
        },
        {
            id:9,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_7.svg'
        },
        {
            id:10,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_9.svg'
        },
        {
            id:11,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_10.svg'
        },
        {
            id:12,
            image:'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-0c04fc7/www.apptunix.com/wp-content/uploads/2023/09/3rd_11.svg'
        },
    ]

    const settings = {
        infinite: true,
        speed: 8000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
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
    const settings1 = {
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
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


    return (
        <div className='w-[98%] mx-auto mt-20 overflow-hidden'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold'>Our Partners</h3>
                <p className='text-xl font-normal mt-3'>
                    Apptunix partnered up with top leading brands to provide a scalable
                    <span className='block'>gateway for business growth.</span>
                </p>
            </div>
            <div className='logoswiper mt-10'>
                <Slider {...settings}>
                    {logoswipe.map(logo => (
                        <div key={logo.id} className='p-4'>
                            <figure className='flex justify-center items-center bg-[#f2f8fc] rounded-lg logo-figure '>
                                <img src={logo.image} alt={`Partner ${logo.id}`} className='max-w-full max-h-full overflow-hidden' />
                            </figure>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='logoswiper'>
                <Slider {...settings1}>
                    {secSwiper.map(logo => (
                        <div key={logo.id} className='p-4'>
                            <figure className='flex justify-center items-center bg-[#f2f8fc] rounded-lg logo-figure'>
                                <img src={logo.image} alt={`Partner ${logo.id}`} className='overflow-hidden' />
                            </figure>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='thirdSwiper'>
                <Slider {...settings}>
                    {thirdSwiper.map(logo => (
                        <div key={logo.id} className='p-4'>
                            <figure className='flex justify-center items-center bg-[#f2f8fc] rounded-lg logo-figure'>
                                <img src={logo.image} alt={`Partner ${logo.id}`} className='overflow-hidden' />
                            </figure>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default App;
