import React, { useState } from 'react'
import ImageSlider from '../components/ImagesSlider';
import appunix from '../assets/appunix.svg'
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";
import './Navbar.css'
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [isServicesHovering, setIsServicesHovering] = useState(false);
    const [isIndustriesHovering, setIsIndustriesHovering] = useState(false);
    const [isInsightsHovering, setIsInsightsHovering] = useState(false);
    const [isAboutUsHovering, setIsAboutUsHovering] = useState(false);
    const [hoveredMainService, setHoveredMainService] = useState(null);
    const [hoveredMenuService, setHoveredMenuService] = useState(null);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);
    const [hoveredApp, setHoverApp] = useState(null);
    const [hoveredInsights, setHoveredInsights] = useState(null);
    const [hoveredAbout, setHoveredAbout] = useState(null);

    // const Links = [
    //     { id: 1, name: 'Services', link: '/' },
    //     { id: 2, name: 'Industries', link: '/' },
    //     { id: 3, name: 'Portfolio', link: '/' },
    //     { id: 4, name: `Blog's`, link: '/' },
    //     { id: 5, name: 'About us', link: '/' },
    // ];


    const handleMainServiceMouseEnter = (index) => setHoveredMainService(index);
    const handleMainServiceMouseLeave = () => setHoveredMainService(null);

    const handleMenuServiceMouseEnter = (index) => setHoveredMenuService(index);
    const handleMenuServiceMouseLeave = () => setHoveredMenuService(null);

    const handleServicesMouseEnter = () => setIsServicesHovering(true);
    const handleServicesMouseLeave = () => setIsServicesHovering(false);

    const handleIndustriesMouseEnter = () => setIsIndustriesHovering(true);
    const handleIndustriesMouseLeave = () => setIsIndustriesHovering(false);

    const handleInsightsMouseEnter = () => setIsInsightsHovering(true);
    const handleInsightsMouseLeave = () => setIsInsightsHovering(false);

    const handleAboutUsMouseEnter = () => setIsAboutUsHovering(true);
    const handleAboutUsMouseLeave = () => setIsAboutUsHovering(false);

    const services = [
        {
            name: 'Mobile App Development',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/06/30193051/Mobile-App-Development.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#e69f5b', marginTop: '1px' }}>➝</figure>
        },
        {
            name: 'Web App Development',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120954/Web-App-Development.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#6c77d2', marginTop: '1px' }}>➝</figure>
        },
        {
            name: 'Blockchain Development Company',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03122309/Blockchain.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#62b97e', marginTop: '1px' }}>➝</figure>
        },
        {
            name: 'Cryptocurrency Development ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2022/12/Cryptocurrency-Development.svg',
            arrow: <figure className="mnu_arow" style={{ color: ' #50abe8', marginTop: '1px' }}>➝</figure>
        },

        {
            name: 'UX/UI Designing ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03121051/ui-ux.jpg',
            arrow: <figure className="mnu_arow" style={{ color: ' #f27b16', marginTop: '1px' }}>➝</figure>
        },
        {
            name: 'Dedicated Development Team ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03122311/Dedicated.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#e79553 ', marginTop: '1px' }}>➝</figure>
        },
    ];

    const menuList = [
        {
            name: 'Enterprise Software Development',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03122313/Enterprise.jpg',
            arrow: <figure className="mnu" style={{ color: '#6272da', marginTop: '1px' }}>➝</figure>
        },
        {
            name: ' Digital Marketing ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2022/12/Digital-Marketing.svg',
            arrow: <figure className="mnu" style={{ color: '#c05652', marginTop: '2px' }}>➝</figure>
        },
        {
            name: ' MVP Development ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2022/12/MVP-Development.svg',
            arrow: <figure className="mnu" style={{ color: '#5bb3ad', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        }
    ]

    //  industries list are start from here...
    const industries = [
        {
            name: ' Education ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120810/education.jpg',
            arrow: <figure className="mnu" style={{ color: '#e69f5b', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Fitness ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120736/fitness.jpg',
            arrow: <figure className="mnu" style={{ color: '#6c77d2', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Healthcare ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120642/healthcare.jpg',
            arrow: <figure className="mnu" style={{ color: '#5bb3ad', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: '  Logistics  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120604/logistic.jpg',
            arrow: <figure className="mnu" style={{ color: '#c05652', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Dating App Development ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120510/Dating.jpg',
            arrow: <figure className="mnu" style={{ color: '#ff2626', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Social Networking  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120422/Social-Networking.jpg',
            arrow: <figure className="mnu" style={{ color: '5da3da', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Finance ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120321/Finance.jpg',
            arrow: <figure className="mnu" style={{ color: '#55a580', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Game Development  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120054/game.jpg',
            arrow: <figure className="mnu" style={{ color: '#cc3064', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Sports Betting  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120019/sports-betting.jpg',
            arrow: <figure className="mnu" style={{ color: '#6272da', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Real Estate ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2024/03/Real-Estate.svg',
            arrow: <figure className="mnu" style={{ color: '#04f', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' AR/VR  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2024/03/AR-VR.svg',
            arrow: <figure className="mnu" style={{ color: '#149a91', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Healthcare ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03120642/healthcare.jpg',
            arrow: <figure className="mnu" style={{ color: '#5bb3ad', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
    ]
    //  On Demand Apps list are start from here...
    const Apps = [
        {
            name: ' Food Delivery  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03113553/Food-delivery.jpg',
            arrow: <figure className="mnu" style={{ color: '#e98c3f', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Grocery Delivery ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03113520/Grocery-delivery.jpg',
            arrow: <figure className="mnu" style={{ color: '#7570b82', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: 'Pickup & Delivery   ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03113435/Pickup-Delivery.jpg',
            arrow: <figure className="mnu" style={{ color: '#7570b8', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Taxi Booking  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03113343/Taxi-Booking.jpg',
            arrow: <figure className="mnu" style={{ color: '#e3c000', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Home Services',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03113315/Home-Services.jpg',
            arrow: <figure className="mnu" style={{ color: '#7aa7d6', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Beauty & Salon Booking  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03113210/Beauty-salon.jpg',
            arrow: <figure className="mnu" style={{ color: '#5362cd', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Tool Delivery App  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03111455/Tool-Delivery-App.jpg',
            arrow: <figure className="mnu" style={{ color: '#599bde', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Ice Cream Delivery App  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03104243/Ice-Cream-Delivery-App.jpg',
            arrow: <figure className="mnu" style={{ color: '#f778db', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Laundry Service ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03104143/Laundry-Service.jpg',
            arrow: <figure className="mnu" style={{ color: '#009d54', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Restaurant management solution ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03104045/Restaurant.jpg',
            arrow: <figure className="mnu" style={{ color: '#7570b8', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: 'Carpooling Apps  ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03103849/Carpooling-Apps.jpg',
            arrow: <figure className="mnu" style={{ color: '#0093ef', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
        {
            name: ' Marketplace Solutions ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03103749/Marketplace-Solutions.jpg',
            arrow: <figure className="mnu" style={{ color: '#bb534e', marginTop: '1px', transitionDelay: '2s ease-' }}>➝</figure>
        },
    ];
    const images = [
        {
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/TopDevelopers.png',
            alt: 'Description 1',
            title: 'Top Developers',
            description: 'Top Mobile App',
            description1: <span style={{ marginLeft: "2rem" }}>Developers</span>
        },
        {
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/AppFutura-1.png', alt: 'Description 1',
            title: <p className='ml-5'>AppFutura</p>,
            description: <p className='ml-8'>Top App</p>,
            description1: 'Development Company'
        },
        {
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/GoodFirms.png', alt: 'Description 2',
            title: <p className='ml-5'>GoodFirms</p>,
            description: <p className='ml-2'>Top Mobile App</p>,
            description1: <p className='ml-5'>Developers UK</p>
        },
        {
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Clutch-1.png',
            title: <p className='ml-8'>Clutch</p>,
            description: <p className='ml-7'> Top 100</p>,
            description1: 'Companies 2022'
        },
        {
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/ITFirms-1.png',
            title: <p className='ml-8'>ITFirms</p>,
            description: `World’s Top Mobile App`,
            description1: 'Development companies'
        },
        {
            src: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/Clutch2.png',
            title: <p className='ml-8'>Clutch</p>,
            description: `Top Developers in `,
            description1: <p className='ml-8'>India 2022</p>
        },

    ];

    // Insights list here

    const Insights = [
        {
            name: 'Blogs',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03142202/Blogs.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#599bde', marginTop: '1px' }}>➝</figure>
        },
        {
            name: 'e-Guides',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03142342/e-Guides.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#e98c3f', marginTop: '1px' }}>➝</figure>
        },
        {
            name: 'Feature Listing ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03142436/Feature-list.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#e98c3f', marginTop: '1px' }}>➝</figure>
        },
        {
            name: ' Video Library ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/25180121/video-library-menu.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#ffd6eb', marginTop: '1px' }}>➝</figure>
        }
    ];

    // About us list here 
    const About = [
        {
            name: 'Career ',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03135705/Career.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#6c77d2', marginTop: '1px' }}>➝</figure>
        },
        {
            name: ' Partnership',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03135759/Partnership.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#f27b16', marginTop: '1px' }}>➝</figure>
        },
        {
            name: 'FAQs',
            imageUrl: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/03140009/FAQ.jpg',
            arrow: <figure className="mnu_arow" style={{ color: '#7aa7d6', marginTop: '1px' }}>➝</figure>
        }
    ];



    return (
        <div className='shadow-md w-full relative left-0 top-0  bg-white'>
            <div className='w-[90%] max-w-[1470px] mx-auto'>
                <div className='lg:flex items-center justify-between py-4 lg:px-10 px-7'>
                    <div className='w-36'>
                        <img src={appunix} alt="" />
                    </div>
                    <ul className={`mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 lg:flex md:items-centers lg:pb-0 pb-20 absolute lg:static bg-white z-10 left-0 w-full lg:pl-0 pl-12 lg:w-auto transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'bottom-[150px]'}`}>
                        <li
                            className='mr-5 min-h-full border-b lg:border-none pb-2'
                            onMouseEnter={handleServicesMouseEnter}
                            onMouseLeave={handleServicesMouseLeave}
                        >
                            <span className='flex relative hover:text-blue-500 justify-between'>
                                <a className=' hover:text-blue-500 flex text-[15px] font-medium' href="#">Services
                                </a>
                                <span> {isServicesHovering ? (
                                    <MdOutlineArrowDropUp className=' mt-1 ml-2  hover:text-blue-500' />
                                ) : (
                                    <IoMdArrowDropdown className='mt-1 ml-2' />
                                )}
                                </span>
                            </span>
                            {isServicesHovering && (
                                <div className="absolute max-w-[1370px] w-[90%] lg:w-[85%] rounded-b-lg z-10 bg-white mt-8 shadow-lg rounded -top-2 lg:top-7 right-4 lg:right-24 2xl:right-72" >
                                    <div className='grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 px-4'>
                                        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-6 mt-2'>
                                            {services.map((service, index) => (
                                                <li
                                                    key={index}
                                                    className="meg_mnu_inr flex  border-b md:border-none pb-1 md:pb-0"
                                                    onMouseEnter={() => handleMainServiceMouseEnter(index)}
                                                    onMouseLeave={handleMainServiceMouseLeave}
                                                >
                                                    <div className='flex'>
                                                        <figure className="mnu_icn mr-2">
                                                            <img alt={service.name} src={service.imageUrl} className="lazyloaded" decoding="async" />
                                                        </figure>
                                                        <span className="mr-1 text-[15px] font-medium">{service.name}</span>
                                                        {hoveredMainService === index && service.arrow}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='hidden xl:block 2xl:block'>
                                        <div className='flex ml-40 mt-4'>
                                            <div className='w-[25%]'>
                                                <img className='w-auto' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/www.apptunix.com/wp-content/uploads/2023/06/realistic_book_cover_mockup-1.png" alt="" />
                                            </div>
                                            <div className='ml-4'>
                                                <span className='text-[#00649e] font-semibold text-sm'> E Guide</span>
                                                <p className='font-semibold text-base '> App Monetization Strategies:  How to <br /> Make Money From an App? </p>
                                                <span className='text-[13px] font-normal pb-4'>Jun 22, 2023</span> <br />
                                                <button className='text-white mt-4 font-semibold py-2 px-[10px] bg-blue-800 rounded-xl'>Download now</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='w-full bg-blue-50 py-6 mt-6'>
                                        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full gap-6 mt-2 px-4'>
                                            {menuList.map((service, index) => (
                                                <li
                                                    key={index}
                                                    className="meg_mnu_inr flex gap-20  items-center border-b md:border-none pb-1 md:pb-0"
                                                    onMouseEnter={() => handleMenuServiceMouseEnter(index)}
                                                    onMouseLeave={handleMenuServiceMouseLeave}
                                                >
                                                    <div className='flex '>
                                                        <figure className="mnu_icn mr-2 font-medium text-[15px]">
                                                            <img alt={service.name} src={service.imageUrl} className="lazyloaded" decoding="async" />
                                                        </figure>
                                                        <span className="mr-1 text-[15px] font-medium">{service.name}</span>
                                                        {hoveredMenuService === index && service.arrow}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className='mr-5 mt-5 lg:mt-0 border-b lg:border-none pb-2'
                            onMouseEnter={handleIndustriesMouseEnter}
                            onMouseLeave={handleIndustriesMouseLeave}
                        >
                            <span className='flex relative hover:text-blue-500 justify-between'>
                                <a className=' hover:text-blue-500 flex text-[15px] font-medium' href="#">Industries
                                </a>
                                <span> {isServicesHovering ? (
                                    <MdOutlineArrowDropUp className=' mt-1 ml-2  hover:text-blue-500' />
                                ) : (
                                    <IoMdArrowDropdown className='mt-1 ml-2' />
                                )}
                                </span>
                            </span>
                            {isIndustriesHovering && (
                                <div className=" absolute z-10 max-w-[1370px]  w-[92%] lg:w-[85%] bg-white mt-8 shadow-xl rounded-xl  top-10 lg:top-7  right-3 lg:right-28 2xl:right-64 overflow-hidden">
                                    <div className='pageContainer flex justify-between'>
                                        <div className='ins-menu p-5'>
                                            <p className=' mt- font-semibold text-xl pb-[10px] inline-block text-[#1d1d1d] border-b-2'>Industries</p>
                                                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2'>
                                                    {industries.map((industry, index) => (
                                                        <li
                                                            key={index}
                                                            className="meg_mnu_inr flex items-center "
                                                            onMouseEnter={() => setHoveredIndustry(index)}
                                                            onMouseLeave={() => setHoveredIndustry(null)}
                                                        >
                                                            <div className='flex'>
                                                                <figure className="mnu_icn mr-2">
                                                                    <img alt={industry.name} src={industry.imageUrl} className="lazyloaded" decoding="async" />
                                                                </figure>
                                                                <span className="mr-1 text-[15px] font-medium">{industry.name}</span>
                                                                {hoveredIndustry === index && industry.arrow}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            <div className='mt-3'>
                                                <p className='text-[#1d1d1d] inline-block text-xl font-semibold pb-4 border-b-2'>On Demand Apps</p>
                                                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[700px] gap-4 mt-2'>
                                                    {Apps.map((industry, index) => (
                                                        <li
                                                            key={index}
                                                            className="meg_mnu_inr flex items-center"
                                                            onMouseEnter={() => setHoverApp(index)}
                                                            onMouseLeave={() => setHoverApp}
                                                        >
                                                            <div className='flex'>
                                                                <figure className="mnu_icn mr-2">
                                                                    <img alt={industry.name} src={industry.imageUrl} className="lazyloaded" decoding="async" />
                                                                </figure>
                                                                <span className="mr-1 text-[15px] font-medium">{industry.name}</span>
                                                                {hoveredApp === index && industry.arrow}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="slider hidden xl:block 2xl:block  bg-blue-100 w-[32%] mt-">
                                            <div className="App  mx-auto ">
                                                <ImageSlider images={images} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className='mr-5 flex relative mt-5 lg:mt-0 border-b lg:border-none pb-2 lg:pb-0'>
                            <a className=' hover:text-blue-500 flex text-[15px] font-medium' href="#">Portfolio </a>
                        </li>
                        <li className='mr-5 mt-5 lg:mt-0 border-b lg:border-none pb-2'
                            onMouseEnter={handleInsightsMouseEnter}
                            onMouseLeave={handleInsightsMouseLeave}
                        >
                           <span className='flex relative hover:text-blue-500 justify-between'>
                                <a className=' hover:text-blue-500 flex text-[15px] font-medium' href="#">Insights
                                </a>
                                <span> {isServicesHovering ? (
                                    <MdOutlineArrowDropUp className=' mt-1 ml-2  hover:text-blue-500' />
                                ) : (
                                    <IoMdArrowDropdown className='mt-1 ml-2' />
                                )}
                                </span>
                            </span>
                            {isInsightsHovering && (
                                <div className="absolute z-10 bg-white mt-8 shadow-xl rounded-b-xl rounded-bl-2xl rounded-br-2xl  w-[86%] lg:w-60 top-36 lg:top-6"
                                >
                                    <div className='ins-menu p-5'>
                                            <ul className='grid  gap-5 mt-2'>
                                                {Insights.map((insight, index) => (
                                                    <li
                                                        key={index}
                                                        className="meg_mnu_inr flex items-center border-b md:border-none pb-1 md:pb-0"
                                                        onMouseEnter={() => setHoveredInsights(index)}
                                                        onMouseLeave={() => setHoveredInsights(null)}
                                                    >
                                                        <div className='flex'>
                                                            <figure className="mnu_icn mr-2">
                                                                <img alt={insight.name} src={insight.imageUrl} className="lazyloaded" decoding="async" />
                                                            </figure>
                                                            <span className="mr-1 text-[15px] font-medium">{insight.name}</span>
                                                            {hoveredInsights === index && insight.arrow}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className='mr-5 mt-5 lg:mt-0 border-b lg:border-none pb-2'
                            onMouseEnter={handleAboutUsMouseEnter}
                            onMouseLeave={handleAboutUsMouseLeave}
                        >
                           <span className='flex relative hover:text-blue-500 justify-between'>
                                <a className=' hover:text-blue-500 flex text-[15px] font-medium' href="#">About us
                                </a>
                                <span> {isServicesHovering ? (
                                    <MdOutlineArrowDropUp className=' mt-1 ml-2  hover:text-blue-500' />
                                ) : (
                                    <IoMdArrowDropdown className='mt-1 ml-2' />
                                )}
                                </span>
                            </span>
                            {isAboutUsHovering && (
                                <div className="absolute z-10 bg-white mt-8 shadow-xl rounded-b-xl rounded-bl-2xl rounded-br-2xl lg:-bottom-44 top-48 lg:top-6 w-[86%] mr-8 lg:mr-0 lg:w-52 ">
                                    <div className='ins-menu p-5'>
                                        <div className='grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2'>
                                            <ul className='grid gap-5 mt-2 '>
                                                {About.map((About, index) => (
                                                    <li
                                                        key={index}
                                                        className="meg_mnu_inr flex items-center border-b md:border-none pb-1 md:pb-0"
                                                        onMouseEnter={() => setHoveredAbout(index)}
                                                        onMouseLeave={() => setHoveredAbout(null)}
                                                    >
                                                        <div className='flex'>
                                                            <figure className="mnu_icn mr-2">
                                                                <img alt={About.name} src={About.imageUrl} className="lazyloaded" decoding="async" />
                                                            </figure>
                                                            <span className="mr-1 text-[15px] font-medium">{About.name}</span>
                                                            {hoveredAbout === index && About.arrow}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className='hidden xl:block 2xl:block'>
                            <button className='touchBtn  text-white py-2 px-4 rounded-full font-semibold'>Get in Touch</button>
                        </li>
                        <li className='hidden xl:block 2xl:block'>
                            <div className='enterBtn border-t-2 border-b-2 ml-5 border-blue-600' data-aos="fade-up">
                                <p className='p-1  blinker' data-aos="fade-up">For Entrepreneurs</p>
                            </div>
                        </li>
                    </ul>
                    <div onClick={() => setOpen(!open)} className=' text-3xl p-1 bg-[#00649e] rounded-lg  absolute right-8 top-5 cursor-pointer lg:hidden'>
                        <IoMenu className='text-white' name={open ? 'close' : 'menu'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
