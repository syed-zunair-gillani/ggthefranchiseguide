"use client"
import React from 'react'
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GoogleReviewCard from "./GoogleReviewCard"
import Image from 'next/image';

const OurClients = () => {
    return (
        // <section className='bg-[#F2F2F2] px-3 -mt-1 z-[1] py-[130px]'>
        //     <div className='max-w-[1140px] bg-white p-8 mx-auto rounded-xl'>
        //         <h6 className='font-semibold'>What our clients say about us</h6>
        //         <div className='flex items-center gap-1.5 mt-1 text-[28px] font-semibold'>
        //             5.00
        //             <FaStar className='text-[#ffbc00] text-2xl' />
        //         </div>
        //         <div className='mt-5'>
        //             <Slider {...settings}>
        //                 {
        //                     [1, 2, 3, 4]?.map((item, idx) => (
        //                         <div className='px-2'>
        //                             <GoogleReviewCard key={idx}/>
        //                         </div>
        //                     ))
        //                 }
        //             </Slider>
        //         </div>
        //     </div>
        // </section>
        <section className='relative bg-[#F2F2F2] -mt-1'>
            <div className='max-w-[1140px] mx-auto w-full px-3 -mt-1 z-[1] pt-[130px] pb-[70px]'>
                <iframe
                    className="lc_reviews_widget"
                    src="https://reputationhub.site/reputation/widgets/review_widget/dM1MqqzI4rXk5bXCa2Y6"
                    frameBorder="0"
                    scrolling="no"
                    style={{ minWidth: '100%', width: '100%', height: '500px' }} // you can adjust height
                ></iframe>
            </div>
            <div className='bg-white'>
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full absolute bottom-0 scale-x-[-1]">
                    <path class="elementor-shape-fill" d="M737.9,94.7L0,0v100h1000V0L737.9,94.7z" fill='#fff'></path>
                </svg>            
            </div>
        </section>

    )
}

export default OurClients



var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
                slidesToScroll: 1
            }
        }
    ]
};