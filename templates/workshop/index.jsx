import React from 'react'
import BackgroundImage from "../../public/images/work-with-us.jpg"
import NewsLetterForm from '@/components/news-letter-form/news-letter-form'
import Image from 'next/image'

const WorkshopTemp = () => {
    return (
        <>
            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(239,239,239, .8), rgba(239,239,239, .8)), url(${BackgroundImage?.src})` }}
                className='py-[60px] md:py-[200px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[1080px] mx-auto text-black'>
                    <h2 className='text-3xl md:text-[40px] font-bold mb-4 capitalize'>Franchise Freedom Video Workshop</h2>
                    <div className='content'>
                        <p>How to Escape the Corporate World and Have Financial and Time Freedom by Owning a Franchise</p>
                        <p>Would you be curious to discover how 200+ corporate executives have made the successful transition from employee to employer while mitigating risk + following a proven path to success? If so, happy to share my “Franchise Freedom” video workshop – it’s the EXACT process I’ve walked countless corporate executives through since 2007.</p>
                    </div>
                    <div>
                        <NewsLetterForm />
                    </div>
                </div>
            </section>
            <section className='max-w-[1080px] px-3 mx-auto text-black content py-20'>
                <h2>Find Financial and Time Freedom by Owning a Franchise</h2>
                <p>
                    Are you tired of the corporate grind? Do you feel like you’re stuck in a rut with no hope of ever escaping the 9-5 lifestyle? If so, then this video workshop is for you.
                </p>
                <p>In this free video workshop, you’ll learn how to break free from the corporate world and achieve financial and time freedom by owning your own franchise. You’ll discover the benefits of franchising, how to choose the right franchise for you, and what it takes to be a successful franchise owner.</p>
                <p>So if you’re ready to escape the corporate world and achieve the freedom you deserve, sign up now.</p>
                <h2>What we’ll cover:</h2>
            </section>

            <section className='bg-[#F2F2F2] py-[100px] bg-cover bg-no-repeat'        >
                <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm text-center uppercase">Success Stories:</h5>
                <h2 className="text-2xl px-2 sm:text-[40px] mt-3 font-bold text-black text-center mb-6 max-w-[800px] leading-tight mx-auto uppercase">What Candidates Say About GG The Franchise Guide</h2>
                <div className='max-w-[1140px] mx-auto px-3 flex flex-col gap-6 mt-12' style={{ gap: '1.5rem'}}>
                    {
                        [1,2,3]?.map((item,idx)=>(
                            <div className='flex bg-white gap-12 flex-col sm:flex-row items-center p-[30px]' key={idx}>
                                <figure>
                                    <Image src="/images/model.png" alt="" width="120" height="120" className="rounded-full"/>
                                </figure>
                                <div>
                                    <p className='font_aleo'>“Giuseppe is amazing to work with! He spent a lot of time with me, is an expert and has a wealth of knowledge. I really appreciate all of the help and support he has provided me.”</p>
                                    <h5 className='font-bold mt-6'>- John Doe</h5>
                                    <p className='font_aleo'>Franchise Business Owner</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}

export default WorkshopTemp