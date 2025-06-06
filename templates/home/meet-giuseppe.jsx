import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MeetGiuseppe = ({data}) => {
  return (
    <section className='bg-white py-[100px] -mt-[2px] z-[1] relative overflow-y-hidden'>
        <div className='max-w-[1100px] mx-auto grid px-3 lg:px-0 md:grid-cols-2 z-[2] relative items-center justify-center gap-20'>
            <figure>
                <Image src={data?.image?.node?.mediaItemUrl || "/images/meet.jpeg"} alt='' width={400} height={600} className='w-full'/>
            </figure>
            <div>
                <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm  uppercase">Meet Giuseppe</h5>
                <h2 className='text-[34px] my-3 font_caveat font-bold italic'>{data?.title}</h2>
                <p className='text-xl font_aleo leading-[36px]'>{data?.caption}</p>
                <div className='mt-12'>
                    <Link href={data?.buttonLink || "#"} className="mt-6 px-8 uppercase py-4 border font-bold bg-[#0F73B0] border-[#0F73B0] hover:border-[#0F73B0] rounded-full text-white hover:bg-white hover:text-[#0F73B0] transition">Read More</Link>
                </div>
            </div>
        </div>
        <Image src="/images/meet-shape.jpg" alt='' width={1000} height={1000} className='absolute z-[1] w-full sm:w-auto top-0 left-0'/>
    </section>
  )
}

export default MeetGiuseppe