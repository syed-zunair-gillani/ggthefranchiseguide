import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackgroundImage from "../../public/images/book.jpg"

const Step4 = ({data}) => {
    return (
        <>
            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${BackgroundImage.src})` }}
                className='py-[60px] relative md:pt-[100px] md:pb-[100px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[950px] mx-auto  text-white '>
                    <h3 className="text-3xl md:text-[60px] font-[500] font_caveat  italic text-center ">
                        Step 4
                    </h3>
                    <h2 className="text-center text-3xl md:text-[40px] font-[700] font_montserrat mt-8 leading-[56px] uppercase">
                    {data?.title}
                    </h2>
                    <p className=' tracking-[10px] py-3 uppercase font-[700] text-[13px] text-center'>{data?.subTitle}</p>
                    <p className='content !text-2xl !text-center font_aleo'>
                        <div dangerouslySetInnerHTML={{ __html: data?.content }}/>
                    </p>
                    <div className='mt-12 text-center '>
                        <Link href={data?.buttonLink || `#`} className='uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-[14px] hover:border-white hover:text-white hover:bg-transparent border px-6 font-semibold rounded-3xl '>Get Started</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step4;