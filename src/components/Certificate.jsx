import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import '../style.css';

const App = () => {
    const [hovered, setHovered] = useState(null);
    const [hasEmptyFields, setHasEmptyFields] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');
    const [textareaError, setTextareaError] = useState('');
    const [inputs, setInputs] = useState([
        { id: 1, value: '', type: 'name', placeholder: 'Full name', message: '' },
        { id: 2, value: '', type: 'email', placeholder: 'Business Email', message: '' },
        { id: 3, value: '', type: 'number', placeholder: 'Phone number', message: '', countryCode: 'in' },
        { id: 4, value: '', type: 'name', placeholder: 'When do you want to launch a solution?', message: '' },
    ]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countryData = response.data.map(country => ({
                    code: country.idd?.root + (country.idd?.suffixes ? country.idd.suffixes[0] : ''),
                    name: country.name.common,
                    flag: country.flags.svg
                }));
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };
        fetchCountries();
    }, []);

    const award = [
        {
            id: 1,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/artc.png',
            heading: 'AWS',
            para: "Solutions Architect Associate",
        },
        {
            id: 2,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/security-1.png',
            heading: 'AWS',
            para: "Security, Speciality"
        },
        {
            id: 3,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/dynamics365-1.png',
            heading: 'Microsoft',
            para: "Dynamics 365 Fundamentals",
        },
        {
            id: 5,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/associate-1.png',
            heading: 'Microsoft',
            para: "Associate",
        },
        {
            id: 6,
            image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2022/09/developer-1.png',
            heading: 'AWS',
            para: "Developer Associate",
        },
    ];

    const contactItems = [
        {
            href: '',
            imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/www.apptunix.com/wp-content/uploads/2023/01/email.svg',
            alt: 'Email Icon',
            text: 'sales@apptunix.com',
        },
        {
            href: '',
            imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/www.apptunix.com/wp-content/uploads/2023/01/USA-Flag.svg',
            alt: ' Icon',
            text: '+1 (512) 8723364',
        },
        {
            href: '',
            imgSrc: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/www.apptunix.com/wp-content/uploads/2023/02/united-arab-emirates_2.svg',
            alt: ' Icon',
            text: ' +971 (0) 507821690 ',
        },
    ];

    const contactInfo = [
        {
            imgSrc: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/05/18135109/india.png",
            country: "INDIA",
            address: "C-127, 4th Floor, Phase 8, Mohali (160058), IN"
        },
        {
            imgSrc: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/05/18135123/usa.png",
            country: "UNITED STATES",
            address: "Suite #304, 11200 Manchaca, Austin, Texas, US, 78748"
        },
        {
            imgSrc: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-09b5fb0/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/05/18135151/dubai.png",
            country: "UNITED ARAB EMIRATES",
            address: "#2011, Floor 20, Burjuman Business Tower, Dubai."
        },

    ];

    const handleInputChange = (id, event) => {
        const newValue = event.target.value;

        setInputs(inputs.map(input => {
            if (input.id === id) {
                let message = '';
                if (!newValue.trim()) {
                    message = 'This field is required.';
                } else if (input.type === 'name' && (newValue.length < 3 || /@/.test(newValue))) {
                    message = newValue.length < 3
                        ? 'Please enter at least 3 characters.'
                        : 'Name should not contain @.';
                } else if (input.type === 'email' && !/\S+@\S+\.\S+/.test(newValue)) {
                    message = 'Please enter a valid email address';
                }
                return { ...input, value: newValue, message };
            }
            return input;
        }));
    };

    const handlePhoneChange = (id, phone) => {
        setInputs(inputs.map(input => {
            if (input.id === id) {
                return { ...input, value: phone };
            }
            return input;
        }));
    };

    const processInputValues = () => {
        let hasEmpty = false;
        const updatedInputs = inputs.map(input => {
            let message = input.message;
            if (!input.value.trim() || (input.type === 'number' && !input.value)) {
                message = 'This field is required.';
                hasEmpty = true;
            }
            return { ...input, message };
        });

        setInputs(updatedInputs);
        setHasEmptyFields(hasEmpty);

        if (!textareaValue.trim()) {
            setTextareaError('This field is required.');
            hasEmpty = true;
        } else if (textareaValue.trim().length < 15) {
            setTextareaError('Please enter at least 15 characters.');
            hasEmpty = true;
        } else {
            setTextareaError('');
        }

        if (!hasEmpty) {
            const processedValues = inputs.map(input => input.value.toUpperCase());
            console.log(processedValues);
            console.log(textareaValue);
        }
    };


    return (
        <div className='w-[90%] max-w-[1140px] mx-auto mt-10'>
            <section
                data-aos="fade-right" >
                <h2 className='text-5xl font-bold text-center'>
                    Certifications
                </h2>
                <p className='text-xl font-normal text-center mt-5'>
                    We keep deepening our expertise to meet your highest expectations and
                    <span className='block'>build even more innovative products.</span>
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-10'>
                    {award.map(cert => (
                        <div
                            key={cert.id}
                            className={`text-center items-center p-9 mx-auto bg-[#e8f5ff] rounded-lg shadow-lg transition-opacity duration-300 ${hovered !== null && hovered !== cert.id ? 'opacity-35 filter-grayscale' : 'opacity-100'}`}
                            onMouseEnter={() => setHovered(cert.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <img src={cert.image} alt={cert.heading} className='object-contain' />
                            <h3 className='text-2xl font-bold mt-4'>{cert.heading}</h3>
                            <p className='text-sm mt-2 text-center'>{cert.para}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}

            <section className='form mt-20'
                data-aos="fade-right" >
                <div className='lg:flex justify-between'>
                    <div className='w-full text-center lg:text-left lg:w-2/6'>
                        <div>
                            <h4 className='text-[40px] font-medium'>Get in Touch with</h4>
                            <h2 className='text-[#00649e] text-8xl font-bold'>Our Experts</h2>
                            <p className='font-normal text-base mt-10'>Want to find out how Apptunix can help your organization? We’d love to hear from you</p>
                        </div>
                        <div className='integrate'>
                            <h3 className='text-3xl font-semibold mt-3'>Integrate Towards Innovation</h3>
                            <p className='mt-3 font-normal text-base'>Become an Apptunix Partner to Launch, Run and Grow Your Business Globally.</p>
                            <button
                                className="mt-3 text-[#3f3f3f] justify-center lg:mx-0 mx-auto flex items-center p-2 bg-white font-bold relative hover:text-[#00649e]"
                                data-toggle="modal"
                                data-target="#mobile_get_in_touch_popup"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Become a partner
                                <span className="custom-gradient"></span>
                                <IoIosArrowRoundForward className="text-white text-4xl custom-gradient rounded-full ml-2" />
                            </button>
                        </div>
                        <div className='cont mt-4'>
                            <h3 className='text-3xl font-semibold'>Contact Info:</h3>
                            <ul className='flex flex-col items-center lg:items-start'>
                                {contactItems.map((item, index) => (
                                    <li key={index} className='text-center my-2'>
                                        <a className='text-[#3f3f3f] font-light flex items-center' href={item.href}>
                                            <figure className='mr-2'>
                                                <img src={item.imgSrc} alt={item.alt} />
                                            </figure>
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* R.H.S */}
                    <div className='lg:w-3/5 mt-10 lg:mt-0 p-6 shadow-lg rounded-3xl bg-[#f9fafb]'>
                        <h3 className='mt-2 text-[40px] font-semibold'>Let’s Get to know you</h3>
                        <div>
                            {inputs.map(input => (
                                <div key={input.id} className='mb-5'>
                                    {input.type === 'number' ? (
                                        <div className='flex items-center border px-5 p-2 rounded-full bg-[#fff] custom-phone-input'>
                                            <PhoneInput
                                                country={input.countryCode}
                                                value={input.value}
                                                onChange={(phone) => handlePhoneChange(input.id, phone)}
                                                containerClass='flex w-full items-center'
                                                inputStyle={{ border: 'none', boxShadow: 'none', width: '100%' }}
                                                placeholder="Phone number"
                                                dropdownClass="custom-dropdown"
                                            />
                                        </div>
                                    ) : input.id === 4 ? (
                                        <div>
                                            <select
                                                className={`border py-3 px-5 rounded-full w-full mt-2 outline-none ${input.message === 'This field is required.' ? 'border-red-500' : ''}`}
                                                value={input.value}
                                                onChange={(e) => handleInputChange(input.id, e)}
                                            >
                                                <option value="" disabled>When do you want to launch a solution?</option>
                                                <option value="option1">Immediately</option>
                                                <option value="option2">2-3 months</option>
                                                <option value="option3">4-6 months</option>
                                                <option value="option4">After 6 months</option>
                                            </select>
                                            {input.message && <p className="text-red-500 text-xs ml-2 mt-1">{input.message}</p>}
                                        </div>
                                    ) : (
                                        <div>
                                            <input
                                                className={`border p-3 rounded-full w-full mt-3 outline-none ${input.message === 'This field is required.' ? 'border-red-500' : ''}`}
                                                type="text"
                                                placeholder={input.placeholder}
                                                value={input.value}
                                                onChange={(e) => handleInputChange(input.id, e)}
                                            />
                                            {input.message && <p className="text-red-500 text-xs ml-2 mt-1">{input.message}</p>}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div>
                                <textarea
                                    className={`w-full outline-none h-[210px] border rounded-3xl p-3 mt-3 ${textareaError ? 'border-red-500' : ''}`}
                                    name="Any project"
                                    placeholder='About project'
                                    value={textareaValue}
                                    onChange={(e) => setTextareaValue(e.target.value)}
                                    style={{ resize: 'none' }}
                                />
                                {textareaError && <p className="text-red-500 text-xs ml-2 mt-1">{textareaError}</p>}
                            </div>
                            <button onClick={processInputValues}
                                className="mt-3 text-[#fff] justify-center lg:mx-0 mx-auto flex rounded-full items-center p-3 font-bold relative custom-gradient"
                                data-toggle="modal"
                                data-target="#mobile_get_in_touch_popup"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Submit
                                <span className="bg-white"></span>
                                <IoIosArrowRoundForward className="text-black text-4xl bg-[#fff] rounded-full ml-6" />
                            </button>
                        </div>

                    </div>
                </div>
                <div className='mt-20'>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center lg:text-left'>
                        {contactInfo.map((item, index) => (
                            <li key={index} className='my-2 md:flex lg:border-r last:border-r-0'>
                                <figure className='mt-auto flex justify-center md:justify-start'>
                                    <img className='ml-2' src={item.imgSrc} alt={item.country} />
                                </figure>
                                <div className='ml-5'>
                                    <h3 className='text-xl font-semibold'>{item.country}</h3>
                                    <p className='text-sm'>{item.address}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default App;
