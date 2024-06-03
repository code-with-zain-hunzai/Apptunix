import React from 'react'

const header = () => {
    return (
        <div>
            <div className='topnav bg-[#00649e]'>
                <div className='w-[90%] ml-[32px] xl:max-w-[1270px] 2xl:max-w-[1620px] mx-auto justify-end  flex items-center xl:justify-end 2xl:justify-end'>
                    <div className='flex p-2 text-[10px] sm:text-[10px] md:text-xs lg:text:sm xl:text-sm font-medium mr-0  '>
                        <div className='phone-icon-container w-7 h-7 mr-5'>
                            <svg className="icon-phone-active-3" viewBox="0 0 32 32">
                                <path className="path1" d="M18.317 23.228c-0.276-0.497-0.497-0.993-0.772-1.49-0.607-1.159-1.766-1.876-3.090-1.876h-1.655l-1.048-1.931-1.545-3.2 0.993-1.324c0.497-0.607 1.159-1.986 0.166-3.917l-1.324-2.593c-0.386-0.828-1.103-1.379-1.986-1.545-0.828-0.166-1.655 0.055-2.372 0.607-1.545 1.269-2.703 2.979-3.31 4.91-0.441 1.379-0.276 2.924 0.386 4.303l5.241 10.428c0.662 1.379 1.821 2.372 3.145 2.869 1.103 0.386 2.262 0.607 3.476 0.607 0.883 0 1.766-0.11 2.648-0.331 0.772-0.221 1.434-0.772 1.821-1.545 0.331-0.772 0.331-1.655-0.055-2.372-0.166-0.552-0.441-1.048-0.717-1.6zM17.159 26.262c-0.055 0.11-0.11 0.221-0.331 0.276-1.6 0.441-3.31 0.331-4.8-0.221-0.828-0.276-1.49-0.938-1.931-1.766l-5.297-10.372c-0.441-0.883-0.552-1.821-0.276-2.648 0.441-1.545 1.379-2.869 2.593-3.862 0.11-0.11 0.276-0.166 0.386-0.166 0.055 0 0.055 0 0.11 0 0.166 0.055 0.331 0.166 0.441 0.386l1.324 2.593c0.497 0.993 0.166 1.49 0.055 1.6l-1.379 1.876c-0.276 0.331-0.276 0.772-0.11 1.159l1.821 3.862c0 0 0 0.055 0.055 0.055l1.379 2.538c0.221 0.331 0.552 0.607 0.993 0.552l2.317-0.055c0.497 0 0.883 0.276 1.103 0.662 0.276 0.497 0.497 0.993 0.772 1.49s0.552 1.048 0.772 1.545c0.055 0.166 0.055 0.331 0 0.497z" fill="#fff"></path>
                                <path className="wave wave-sm" d="M16.607 10.152c-0.552-0.276-1.214-0.055-1.49 0.441-0.276 0.552-0.055 1.214 0.441 1.49 1.379 0.717 2.593 3.034 2.538 4.855 0 0.607 0.497 1.214 1.103 1.214 0 0 0 0 0 0 0.607 0 1.103-0.552 1.103-1.159 0.055-2.648-1.6-5.738-3.697-6.841z" fill="#fff"></path>
                                <path d="M19.531 6.676c-0.552-0.276-1.214-0.055-1.49 0.441-0.276 0.552-0.055 1.214 0.441 1.49 2.703 1.434 4.303 4.359 4.248 7.834 0 0.607 0.497 1.159 1.103 1.159 0 0 0 0 0 0 0.607 0 1.103-0.497 1.103-1.103 0.055-4.303-1.986-8-5.407-9.821z" fill="#fff" className="wave wave-md lazyloaded"></path>
                                <path className="wave wave-lg" d="M22.952 3.090c-0.552-0.276-1.214-0.11-1.49 0.441s-0.11 1.214 0.441 1.49c3.697 2.097 5.848 6.179 5.683 10.979 0 0.607 0.441 1.103 1.048 1.103 0 0 0 0 0.055 0 0.607 0 1.103-0.441 1.103-1.048 0.166-5.628-2.372-10.428-6.841-12.966z" fill="#fff"></path>
                            </svg>
                        </div>
                        <div className='flex items-center border-r-0 sm:border-r-0 md:border-r-0 lg:border-r-0  xl:border-r-2 2xl:border-r-2 pr-2 text-white'>
                            <img className='w-[22px] mr-2' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/04190457/logo_11.png" alt="" />
                            <span className='text[2px]'>1 (512) 872 3364</span>
                        </div>
                        <div className='flex items-center border-r-0 sm:border-r-0 md:border-r-0 lg:border-r-0  xl:border-r-2 2xl:border-r-2  pr-2 mr-2 text-white'>
                            <img className='w-[22px] mr-2 ml-2' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/02/08115328/united-arab-emirates.png" alt="" />
                            <p>+971 (0) 507821690</p>
                        </div>
                        <div className='hidden sm:block text-white'>
                            <div className='flex items-cente mt-1'>
                                <img className='w-[22px] mr-2' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-4956636/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/01/04190501/logo_13.png" alt="" />
                                <p>+44 (0203) 239 6794</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
