import Image from 'next/image'
import React from 'react'
import BackgroundImage from "../../public/images/book.jpg"
import ContactForm from "./contact-form"

const PressKitTemplate = ({data}) => {
    return (
        <>
            <section className='py-20 mt-20 relative last:mb-0'>
                <div className='max-w-[1080px] mx-auto px-3 z-10 relative'>
                    <div className={`flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40`}>
                        <figure className={`md:w-[42%]`}>
                            <Image src={data?.meta?.image?.node?.mediaItemUrl || `/images/press-kit.webp`} alt="" className='w-full shadow-xl' width={362} height={362} />
                        </figure>
                        <div className='flex-1 content'>
                            <div dangerouslySetInnerHTML={{__html: data?.meta?.content}}/>
                        </div>
                    </div>
                </div>
                <Image src={`/images/dots.jpg`} alt='' width={740} height={800} className={`absolute -top-10 opacity-20 right-left`} />
            </section>

            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${BackgroundImage.src})` }}
                className='py-[60px] relative md:pt-[200px] md:pb-[150px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[860px] mx-auto text-center text-white'>
                    <h2 className='text-2xl md:text-3xl font-semibold mb-4 '>To Access Giuseppe’s Press Kit</h2>
                    <h2 className='text-2xl md:text-3xl font-semibold mb-4 '>Please enter your email below</h2>
                    <ContactForm />
                </div>
                <Image src="/images/divider3.png" alt="" width="800" height="160" className="w-full absolute top-0 right-0 left-0"/>
            </section>
        </>
    )
}

export default PressKitTemplate