"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Step2 = ({ data }) => {
    console.log("🚀 ~ Step2 ~ data:", data)
    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto px-4 py-16'>
                <div className='text-center'>
                    <h3 className="text-3xl md:text-[60px] font-[500] font_caveat text-[#0D73B0] italic">
                        Step 2
                    </h3>
                    <h2 className="text-3xl md:text-[40px] font-[700] font_montserrat  mt-8 leading-[56px] uppercase">
                        Identify Your Goals
                    </h2>
                    <p className='text-[#0D73B0] tracking-[10px] py-3 uppercase font-[700] text-[13px]'>Choose one of the options below</p>
                </div>
                <div className="grid max-w-[1080px] mx-auto grid-cols-1 md:grid-cols-3 mt-4">
                    {/* card1///// */}
                    {
                        data?.nodes?.map((item, index) => (
                            <div key={index} className="relative group">
                                <Image
                                    src={item?.featuredImage?.node?.mediaItemUrl || "/images/book.webp"}
                                    alt="Image"
                                    width={300}
                                    height={500}
                                    className="w-full h-[360px] object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                                    <h3 className='font-[700] font_montserrat text-white text-2xl mb-5 capitalize'>{item?.title}</h3>
                                    {/* <p className="text-white py-3">Achieve long-term wealth creation</p> */}
                                    <Link href={`/goal/${item?.slug}`|| "#"} className="uppercase bg-[--brand-blue] border-[--brand-blue] text-white py-[14px] hover:border-white hover:text-white hover:bg-transparent border px-8 font-semibold rounded-full">Learn more</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Step2;
