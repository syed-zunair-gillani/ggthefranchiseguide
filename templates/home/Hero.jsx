import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const  Hero = ({data}) => {
  return (
    <main className='min-h-screen w-full bg-cover bg-no-repeat flex justify-center relative' style={{
        backgroundImage: `url(${data?.backgroundImge?.node?.mediaItemUrl})`,
        backgroundOrigin: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
        <div className='!max-w-[1280px] flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 items-center mx-auto px-3'>
            <div className='flex justify-center w-[40%]'>
                <Image src={data?.image?.node?.mediaItemUrl} alt="" width={250} height={375}/>
            </div>
            <div className='w-[60%]'>
                <h4 className='font_caveat text-4xl text-[--brand-blue] font-medium mb-6 italic'>{data?.caption}</h4>
                <h1 className='font_montserrat font-bold text-3xl md:text-[60px] md:leading-[66px]'>{data?.title}</h1>
                <p className='font_roboto mb-10 mt-4'>{data?.subTitle}</p>
                <Link href={data?.buttonLink || "#"} className="uppercase bg-[--brand-blue] border-[--brand-blue] text-white py-[14px] hover:border-black hover:text-black hover:bg-transparent border px-6 font-semibold rounded-3xl">Get Started</Link>
            </div>
        </div>
        <Image src={"/images/main-divider.webp"} alt="" width={800} height={120} className="w-full absolute bottom-0"/>
    </main>
  )
}

export default Hero