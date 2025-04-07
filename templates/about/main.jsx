import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <section className="bg-white py-[100px] mt-[100px] z-[1] relative overflow-y-hidden ">
      <div className="max-w-[1100px] mx-auto grid px-3 lg:px-0 md:grid-cols-2 z-[2] relative items-center justify-center gap-20">
        <figure>
          <Image
            src="/images/meet.jpeg"
            width={400}
            alt=""
            height={600}
            className="w-full"
          />
        </figure>
        <div>
          <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm  uppercase">
            Meet Giuseppe
          </h5>
          <h2 className="text-[87px] my-3 font_aleo leading-[84px] font-medium">
            “Freedom favors the bold”
          </h2>
          <p className="text-xl font_aleo leading-[36px]">
            Giuseppe Grammatico is a franchise veteran, coach, author, speaker &
            consultant who simplifies the process of franchising and excels at
            guiding his candidates to the business model that best suits their
            desired lifestyle. His greatest joy is helping people realize the
            American dream and sharing the freedom that comes from franchising.
            Giuseppe is the author of Franchise Freedom: A New Manifesto For
            Your Financial And Time Freedom.
          </p>
        </div>
      </div>
      <Image
        src="/images/dots.jpg"
        alt=""
        width={700}
        height={700}
        className="absolute z-[1] top-1/2 opacity-50 -translate-y-1/2 left-0"
      />
    </section>
  )
}

export default Main