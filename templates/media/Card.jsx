import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const podcastData = [
    {
        id: 1,
        image: '/images/wingman.webp',
        title: 'Unlocking Franchise Freedom – From 9-5 to Business Ownership',
        link: '#'
    },
    {
        id: 2,
        image: '/images/beyond.webp',
        title: 'Beyond Your WHY Podcast: Coaching Edition',
        link: '#'
    },
    {
        id: 3,
        image: '/images/02.webp',
        title: 'Power Washing Franchise with Aaron Harper',
        link: '#'
    },

]

function Card() {
    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="font_montserrat font-[700] text-2xl md:text-[50px] text-center py-10">
            PODCASTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {podcastData.map((item) => (
                    <div key={item.id} className='border border-white shadow-xl bg-white rounded-3xl'>
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="w-full max-w-[400px] h-auto rounded-t-3xl shadow-xl"
                        />
                        <div className="py-6 pb-10  px-6">
                            <h2 className="font_montserrat font-[700] text-xl md:text-[24px] py-4">
                                {item.title}
                            </h2>
                            <Link href={item.link} className="text-blue-600 font_aleo font-[600] ">
                                Listen Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Card



