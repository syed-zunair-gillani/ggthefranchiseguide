"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Step2 = () => {
    return (
        <>
            <section className='container mx-auto px-4 py-10'>
                <div className='text-center'>
                    <h3 className="text-3xl md:text-[60px] font-[500] font_caveat text-[#0D73B0] italic">
                        Step 2
                    </h3>
                    <h2 className="text-3xl md:text-[40px] font-[700] font_montserrat  mt-8 leading-[56px] uppercase">
                        Identify Your Goals
                    </h2>
                    <p className='text-[#0D73B0] tracking-[10px] py-3 uppercase font-[700] text-[13px]'>Choose one of the options below</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
                    {/* card1///// */}
                    <div className="relative group">
                        <Image
                            src="/images/pexels-mohamed.webp"
                            alt="Image"
                            width={300}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <h3 className='font-[700] font_montserrat text-white text-2xl  '>I want to build wealth</h3>
                            <p className="text-white py-3">Achieve long-term wealth creation</p>
                            <Link href="#" className="uppercase bg-[--brand-blue] border-[--brand-blue] text-white py-[14px] hover:border-black hover:text-black hover:bg-transparent border px-8 font-semibold rounded-full">Learn more</Link>
                        </div>
                    </div>
                    {/* card2//// */}
                    <div className="relative group">
                        <Image
                            src="/images/pexels-agung-pandit-wiguna-1128318.jpg"
                            alt="Image"
                            width={300}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <h3 className='font-[700] font_montserrat text-white text-2xl  '>I want to control my time</h3>
                            <p className="text-white py-3">Find franchises that offer more freedom</p>
                            <Link href="#" className="uppercase bg-[--brand-blue] border-[--brand-blue] text-white py-[14px] hover:border-black hover:text-black hover:bg-transparent border px-8 font-semibold rounded-full">Learn more</Link>
                        </div>
                    </div>
                    {/* card3///// */}
                    <div className="relative group">
                        <Image
                            src="/images/pexels-fauxels-3184357.jpg"
                            alt="Image"
                            width={300}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <h3 className='font-[700] font_montserrat text-white text-2xl  '>I want to quit my 9-5</h3>
                            <p className="text-white py-3">Escape the rat race and start your journey</p>
                            <Link href="#" className="uppercase bg-[--brand-blue] border-[--brand-blue] text-white py-[14px] hover:border-black hover:text-black hover:bg-transparent border px-8 font-semibold rounded-full">Learn more</Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Step2;
