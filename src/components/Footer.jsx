import React from 'react';
import logo from '../assets/logo.svg';
import { FaXTwitter } from "react-icons/fa6";
import classNames from 'classnames';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const eGuides = [
    'App Monetization Strategies: How to Make Money From an App?',
    'Electric Vehicle Software Development - A Comprehensive Guide',
    'How to Enhance the UX of a Mobile App with Design Thinking: A Comprehensive Guide',
    'Artificial Intelligence (AI) - The Next Big Thing in Logistics',
    'Mastering Cloud-Based Mobile App Development: An Insider\'s Guide',
    'Cloud Gaming - The Beginning of the New Gaming Era'
];

const services = [
    'Mobile App Development',
    'UX/UI Designing',
    'Web App Development',
    'Digital Marketing',
    'Offshore Outsourcing',
    'On Demand App Development',
    'Cryptocurrency App Development',
    'Hire Developer',
    'Become a Partner',
    'Microsoft Consulting Services',
];

const expertise = [
    'Ecommerce App Development',
    'Blockchain App Development',
    'Metaverse App Development',
    'AR / VR App Development',
    'NFT Marketplace Development',
    'Fitness App Development',
    'Wallet App Development',
    'Healthcare App Development',
];

const socialLinks = [
    { icon: FaXTwitter, hoverColor: 'bg-[#42c0fb]' },
    { icon: FaFacebookF, hoverColor: 'bg-[#3a589b]' },
    { icon: FaLinkedinIn, hoverColor: 'bg-[#007ab9]' },
    { icon: FaYoutube, hoverColor: 'bg-[#c00000]' },
    { icon: FaInstagram, hoverColor: 'bg-gradient-to-r from-[#8541a8] to-[#f89739] via-[#e2336a]' }
];

const footerLinks = [
    "© 2024 Apptunix. All Rights Reserved",
    "Privacy Policy",
    "Terms & Conditions",
    "Terms of Service"
];
const Footer = () => {
    return (
        <div className='lst-ftr bg-[#002033]'>
            <div className='w-[90%] lg:max-w-[1140px] 2xl:max-w-[1390px] mx-auto text-center lg:text-left '>
                <div className='footer  pt-10 mt-10 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-5 '>
                    <div className='text-[#fff]'>
                        <img className='mx-auto lg:mx-0' src={logo} alt="kya hal hai" />
                        <p className='font-normal text-sm mt-3'>Ready to transform your business digitally?</p>
                        <button className=' bg-[#00649e] py-2 px-4 text-sm mt-5 rounded-3xl font-semibold'>Contact now!</button>
                        <ul className='mt-5'>
                            <li>
                                <b className='underline'>Apptunix Technologies PVT LTD</b>
                            </li>
                            <li className='mt-2'>Address: C-127, 4th Floor, Phase 8, Mohali (160058)</li>
                        </ul>
                    </div>
                    <div className='ftrtezt text-white hidden lg:block'>
                        <h3 className='font-bold text-[22px] mb-4 '>Recent e-guides</h3>
                        <ul>
                            {eGuides.map((guide, i) => (
                                <li className='text-sm font-normal mb-4 hover:text-[#00649e] ease-in-out duration-500 cursor-pointer' key={i}>{guide}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='ftrtezt text-white hidden lg:block'>
                        <h3 className='font-bold text-[22px] mb-4 '>Services</h3>
                        <ul>
                            {services.map((service, i) => (
                                <li className='text-sm font-normal mb-4 hover:text-[#00649e] ease-in-out duration-500 cursor-pointer' key={i}>{service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='ftrtezt text-white'>
                        <h3 className='font-bold text-[22px] mb-4 '>Expertise</h3>
                        <ul>
                            {expertise.map((item, i) => (
                                <li className='text-sm font-normal mb-4 hover:text-[#00649e] ease-in-out duration-500 cursor-pointer' key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='ftrtezt text-white'>
                        <h3 className='font-bold text-[22px] mb-4 '>Subscribe US</h3>
                        <ul>
                            <li className='text-sm font-normal mb-4'>Make the right business move.</li>
                            <div className='bg-white text-black pl-2 rounded-lg flex items-center'>
                                <input className='outline-none rounded-lg flex-grow' type="email" placeholder='Email address' />
                                <button className='bg-[#00649e] p-[7px] rounded-r-lg text-white font-semibold'>Send</button>
                            </div>

                            <ul className="socialLinks flex mt-4 justify-between w-full">
                                {socialLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className={classNames(
                                            'bg-white text-black p-2 rounded-full cursor-pointer transition-colors duration-300',
                                            {
                                                'hover:bg-[#42c0fb]': link.icon === FaXTwitter,
                                                'hover:bg-[#3a589b]': link.icon === FaFacebookF,
                                                'hover:bg-[#007ab9]': link.icon === FaLinkedinIn,
                                                'hover:bg-[#c00000]': link.icon === FaYoutube,
                                                'hover:bg-gradient-to-r from-[#8541a8] to-[#f89739] via-[#e2336a]': link.icon === FaInstagram
                                            }
                                        )}
                                    >
                                        {React.createElement(link.icon)}
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className='border-t mt-10'>
                    <ul className='text-white mt-7 pb-10   block md:flex  justify-between text-sm font-normal  w-7/12 text-center mx-auto'>
                        {footerLinks.map((link, index) => (
                            <li className='mt-4' key={index}>{link}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
