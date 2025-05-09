import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackgroundImage from "../../public/images/book.jpg"

const Help = (props) => {
    return (
        <>
            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${BackgroundImage.src})` }}
                className='py-[60px] relative md:pt-[150px] md:pb-[100px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[950px] mx-auto  text-white'>
                    <h2 className='text-3xl md:text-[40px] font-bold mb-4 uppercase text-center pb-4'>How I Can Help</h2>
                    <div className='font_aleo text-[20px] font-[400] content'>
                       <div dangerouslySetInnerHTML={{ __html: props.data}}/> 
                    </div>
                    <div className='mt-12 text-center '>
                        <Link href={props?.link} className='uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-[14px] hover:border-white hover:text-white hover:bg-transparent border px-6 font-semibold rounded-3xl '>Get Started</Link>
                    </div>
                </div>

                <Image src="/images/top-divider-white.png" alt="" width="800" height="160" className="w-full absolute top-0 right-0 left-0" />

            </section>
        </>
    )
}

export default Help