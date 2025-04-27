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
                            <div className={`flex gap-5 lg:gap-0 ${idx%2 !== 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"}`}>
                                <figure className={`md:w-[50%] ${idx%2 !== 0 ? "flex md:justify-end" : ""}`}>
                                    <Image src={item?.picture?.node?.mediaItemUrl} alt="" width={362} height={362} />
                                </figure>
                                <div className='flex-1'>
                                    <h4 className='!font-bold text-2xl md:text-[30px] font_montserrat'>{item?.title}</h4>
                                    <p className='text-xl font-medium mt-2 font_aleo mb-8 '>{item?.caption}</p>
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



const sections = [
    {
        title: "FIND FINANCIAL FREEDOM",
        description: "Discover the key to financial freedom with our free service. We’ll help you explore the options of starting a business or franchise and guide you through the entire process.",
        buttonUrl: "#",
        imageUrl: "../../public/images/left-right.jpg",
    },
    {
        title: "Overcome Fear",
        description: "Don't be scared to take the leap! With our FREE service, we’ll help you overcome any fear of leaving your job and losing your investment.",
        buttonUrl: "#",
        imageUrl: "../../public/images/left-right.jpg",
        direction: "right"
    },
    {
        title: "EDUCATE YOURSELF",
        description: "Be sure to educate yourself on different types of business and franchise ownership. You’ll be surprised to find out that you can keep your job and run a franchise. With us, you’ll learn the key to success.",
        buttonUrl: "#",
        imageUrl: "../../public/images/left-right.jpg"
    }
];
