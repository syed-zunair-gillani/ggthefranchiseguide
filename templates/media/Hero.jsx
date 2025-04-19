import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-white py-[100px] mt-[100px] z-[1] relative overflow-y-hidden ">
      <div className="max-w-[1100px] mx-auto grid px-3 lg:px-0 md:grid-cols-2 z-[2] relative items-center justify-center gap-20">
        
        <div>
          <h2 className="text-[70px] my-3 font_montserrat leading-[84px] font-[700]">
          Featured Media Presence
          </h2>
          <p className="text-xl font_aleo leading-[36px]">
          From articles to podcasts and videos, Giuseppe has shared his expertise on franchising and entrepreneurship with various media outlets. Browse through this page to find links to his best media features and learn from his insights.
          </p>
        </div>
        <figure>
          <Image
            src="/images/Media.jpeg"
            width={400}
            alt=""
            height={600}
            className="w-full"
          />
        </figure>
      </div>
     
    </section>
  )
}

export default Hero