import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackgroundImage from "../../public/images/book.jpg"

const Help = () => {
    return (
        <>
            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${BackgroundImage.src})` }}
                className='py-[60px] relative md:pt-[150px] md:pb-[100px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[950px] mx-auto  text-white'>
                    <h2 className='text-3xl md:text-[40px] font-bold mb-4 uppercase text-center pb-4'>How I Can Help</h2>
                    <p className='font_aleo text-[20px] font-[400]'>
                        <p>How my experience can help guide you</p>
                        <p className='py-2'> Through all my years in business ownership, I must say that franchising has been the source of the most fulfillment in my business life.</p>

                        <p> The freedom, flexibility, impact, and income that I’ve been blessed to experience could not have been possible without franchising, and that is why I am so excited to help others find it for themselves through the same path.</p>

                        <p className='py-2'>With that said, while exciting, franchising isn’t for just anyone.
                            If that sounds within reach for you, we are one step closer to putting you in the driver’s seat of your dream business.</p>

                        <p className='py-2'> Most of the people I have helped fall into one of the following situations:</p>

                        <li>You have an existing business and are looking to diversify.</li>
                        <li> You lost your job and want to work for yourself rather than find a new one.</li>
                        <li> You are tired of your corporate career and are looking for something new.</li>

                        <p className='py-2'> However this may look like for you, I would be happy to walk you through my signature process. I will help you find and research all of the franchises that might fit your life to save you time and, ultimately, money that most beginner franchisees lose just from a lack of experience.</p>
                    </p>
                    <div className='mt-12 text-center '>
                        <Link href={`#`} className='uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-[14px] hover:border-white hover:text-white hover:bg-transparent border px-6 font-semibold rounded-3xl '>Get Started</Link>
                    </div>
                </div>

                <Image src="/images/top-divider-white.png" alt="" width="800" height="160" className="w-full absolute top-0 right-0 left-0" />

            </section>
        </>
    )
}

export default Help