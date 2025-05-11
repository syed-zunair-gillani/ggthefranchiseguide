import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const LeftRight = ({data}) => {
    return (
        <sections className="py-20">
            {
                data?.map((item, idx) => (
                    <div key={idx} className='mb-20 relative last:mb-0'>
                        <div className='max-w-[910px] mx-auto px-3 z-10 relative'>
                            <div className={`flex gap-5 items-start lg:gap-0 ${idx%2 !== 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"}`}>
                                <figure className={`md:w-[50%] ${idx%2 !== 0 ? "flex md:justify-end" : ""}`}>
                                    <Image src={item?.picture?.node?.mediaItemUrl} alt="" width={362} height={362} className='' />
                                </figure>
                                <div className='flex-1'>
                                    <h4 className='!font-bold text-2xl md:text-[30px] font_montserrat'>{item?.title}</h4>
                                    <div className='text-xl font-medium mt-2 font_aleo mb-8 content'>
                                        <div dangerouslySetInnerHTML={{ __html: item?.caption}}/>
                                    </div>
                                    <Link href={item?.buttonLink || "#"} className='uppercase bg-[--brand-blue] border-[--brand-blue] text-white py-[14px] hover:border-black hover:text-black hover:bg-transparent border px-6 font-semibold rounded-3xl'>Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <Image src={`/images/dots.jpg`} alt='' width={400} height={400} className={`absolute -top-5 opacity-40 ${idx%2 !== 0 ? "right-0" : "left-0"}`}/>
                    </div>
                ))
            }
        </sections>
    )
}

export default LeftRight
