import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import '../style.css'; // Import the custom CSS file

const App = () => {

  const technologies = [
    {
      name: 'Blockchain',
      img: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/09/21155913/blochain.png'
    },

    {
      name: 'AR/VR',
      img: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/09/21155908/arvr-2.png'
    },

    {
      name: 'Metaverse',
      img: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/09/21155902/metaverse-2.png',
      span: 2
    },

    {
      name: 'Artificial Intelligence',
      img: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/09/21155855/artifical_intelligence-1.png',
      span: 2
    },

    {
      name: 'IoT',
      img: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/09/21155848/iot-2.png'
    },

    {
      name: 'NFT',
      img: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-f651c96/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/09/21155843/nft-1.png'
    }
  ];

  return (
    <div className="bg-[#141324] w-full mt-14  pb-40 lg:pb-10">
      <div className="w-[90%] max-w-[1140px] mx-auto">
        <h2 className="text-center text-5xl font-bold text-white pt-10">Our Expertise</h2>
        <p className="text-white text-xl font-normal mt-4 text-center">
          We build digital solutions with the latest technologies that line up
          <span className="block">with your business goals.</span>
        </p>

        <div className="flex items-center justify-center mt-20">
          <div className="flex flex-wrap ">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group ${index === 2 || index === 3 ? 'w-full lg:w-[47%] lg:h-40' : ' w-full lg:w-[26%] lg:h-48'} px-3 pb-0 lg:pb-72 mb-6 mx-auto`}
              >
                <div className="relative text-center rounded-lg overflow-hidden bg-gray-800 transform transition-transform hover:scale-105 custom-gradient-hover">
                  <img src={tech.img} alt={tech.name} className="w-full h-auto block" />
                  <div className="absolute bottom-0 w-full bg-[#f2f9ff] p-3 flex justify-between items-center">
                    <span className="font-semibold text-2xl text-[#002033]">{tech.name}</span>
                    <button className="text-black p-3 rounded-full border border-gary transition-colors duration-300 custom-gradient-button">
                      <IoIosArrowRoundForward className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
