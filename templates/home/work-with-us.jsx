import React from 'react'
import Link from 'next/link'

const WorkWithUs = ({data}) => {
    return (
        <section
            style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${data?.backgroundImage?.node?.mediaItemUrl})` }}
            className='py-[60px] md:py-[100px] bg-no-repeat px-3 bg-top bg-cover'
        >
            <div className='max-w-[860px] mx-auto text-center text-white'>
                <h2 className='text-3xl md:text-[40px] font-bold mb-4 uppercase'>Why work with us</h2>
                <p className='font_aleo md:text-xl'>{data?.content}</p>
                <div className='mt-12'>
                    <Link href={data?.buttonLink || `#`} className='uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-[14px] hover:border-white hover:text-white hover:bg-transparent border px-6 font-semibold rounded-3xl'>Get Started</Link>
                </div>
            </div>
        </section>
    )
}

export default WorkWithUs