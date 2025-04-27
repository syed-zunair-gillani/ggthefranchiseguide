import React from 'react'
import BackgroundImage from "../../public/images/book.jpg"
import Link from 'next/link'
import Image from 'next/image'

const GetBook = ({ data }) => {
    return (
        <>
            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${BackgroundImage.src})` }}
                className='py-[60px] relative md:pt-[250px] md:pb-[150px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[1080px] flex flex-col md:flex-row gap-10 mx-auto items-start px-3 my-10'>
                    <Image src={data?.image?.node?.mediaItemUrl} alt={data?.title} width={200} height={300} />
                    <div className='text-white'>
                        <h5 className="text-white font-bold tracking-[14px] text-sm uppercase">get this free ebook!</h5>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 font_aleo leading-[36px]'>{data?.title}</h2>
                        <div className='mt-12'>
                            <Link href={data?.buttonLink || `#`} className='uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-[14px] hover:border-white hover:text-white hover:bg-transparent border px-6 font-semibold rounded-3xl'>Get Free Book</Link>
                        </div>
                    </div>
                </div>
                <svg className="absolute top-0 left-0 right-0" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path d="M738,99l262-93V0H0v5.6L738,99z" fill="#F3F4F6"></path>
                </svg>
                <Image src="/images/divider2.webp" alt="" width="800" height="160" className="w-full absolute bottom-0 right-0 left-0" />
            </section>
        </>
    )
}

export default GetBook