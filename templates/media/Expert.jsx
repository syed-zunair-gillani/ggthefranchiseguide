import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackgroundImage from "../../public/images/book.jpg"

const Expert = () => {
    return (
        <>
            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${BackgroundImage.src})` }}
                className='py-52 relative   bg-no-repeat px-3 bg-top bg-cover '
            >
                <div className='max-w-[1080px] mx-auto  text-white  '>
                    <h2 className='text-2xl md:text-[26px] font-[700] mb-4 uppercase text-center'>Expert Insights on Franchise Ownership and Business Success</h2>
                    <p className='font_aleo md:text-[20px]'>Explore Giuseppe’s Appearances on Leading Industry Podcasts, Articles, and Videos
                    Want to learn from one of the leading experts in the franchise industry? Giuseppe has been featured in a variety of media outlets, sharing his insights on franchise ownership and business success. Here, you’ll find a collection of Giuseppe’s appearances on leading podcasts, articles, and videos, where he shares his knowledge and experience to help aspiring entrepreneurs succeed in the world of franchising. Whether you’re a seasoned business owner or just starting out, Giuseppe’s expert advice is sure to inspire and inform. Check out his appearances below and start building your path to franchise success.</p>
                </div>

                <Image src="/images/top-divider-white.png" alt="" width="800" height="160" className="w-full absolute top-0 right-0 left-0" />
                <svg class="w-full absolute bottom-0 right-0 left-0" viewBox="0 0 1000 100" preserveAspectRatio="none">
                  
                </svg>
            </section>
        </>
    )
}

export default Expert;