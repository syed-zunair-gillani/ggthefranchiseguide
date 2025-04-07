"use client"
import React from 'react'
import BackgroundImage from "../../public/images/reviews.jpg"
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Image from 'next/image';

const Reviews = () => {
    const slider = React.useRef(null);

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 md:gap-10 '>
            <div>
                <Image src={BackgroundImage.src} alt="" width={500} height={500} className='w-full '/>
            </div>
            <div className='p-10 md:p-20 relative'>
                <Slider {...settings} ref={slider}>
                    {
                        [1, 2, 2]?.map((item, idx) => (
                            <div className='font_caveat md:text-xl text-center font-light' key={idx}>
                                <p> My husband and I had a wonderful experience working with Giuseppe to find the perfect franchise for us! We had quite the list of “demands” in order to find the business that made the most sense and Giuseppe was able to bring forth a lot of options and ultimately guide us as we went through the discovery and signing process with our franchisor. I highly recommend Giuseppe if you are looking to start a business or you want to expand your current business portfolio. His extensive network and contacts definitely helped make the process as smooth as possible!					</p>
                                <p className='mt-7'>- Sarah L.</p>
                            </div>
                        ))
                    }
                </Slider>
                <button className="absolute text-blue-700 text-4xl top-1/2 left-2 md:left-5 -translate-y-1/2" onClick={() => slider?.current?.slickPrev()}><MdKeyboardArrowLeft/></button>
                <button className="absolute text-blue-700 text-4xl top-1/2 right-2 md:right-5 -translate-y-1/2" onClick={() => slider?.current?.slickNext()}><MdKeyboardArrowRight/></button>
            </div>
        </section>
    )
}

export default Reviews


var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
};