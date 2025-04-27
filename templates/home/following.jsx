import Link from 'next/link';
import React from 'react'
import { FaCheck } from "react-icons/fa";

const Following = ({data}) => {
    return (
        <section className="bg-gray-100 pt-12 text-center">
            <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm  uppercase">what’s included</h5>
            <h2 className="text-2xl px-2 sm:text-[40px] mt-3 font-bold text-black mb-6 uppercase">{data?.title}</h2>

            <div className="flex max-w-[973px] mx-auto justify-center gap-10 md:gap-6 flex-wrap p-8 md:p-14 mt-20 bg-white">
                <ul className='grid md:grid-cols-2 gap-x-12'>
                    {
                        data?.list?.map((item,idx)=>(
                            <li key={idx} className='flex text-left gap-2 text-lg sm:text-xl md:text-2xl font_aleo font-bold'>
                                <div className='w-6 h-6 pt-1'>
                                <FaCheck className='text-gray-500 text-2xl'/>
                                </div>
                                <p>{item?.list}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="mt-20 mb-10">
                <Link href={data?.buttonLink || '#'} className="mt-6 px-8 uppercase py-4 border font-bold bg-[#0F73B0] border-[#0F73B0] hover:border-[#FBAC17] rounded-full text-white hover:bg-white hover:text-[#FBAC17] transition">
                    Get Started
                </Link>
            </div>
        </section>
    )
}

export default Following