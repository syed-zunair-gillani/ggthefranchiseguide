import Image from 'next/image'
import React from 'react'

const Main = ({data}) => {
  return (
    <section className="bg-white py-[100px] mt-[100px] z-[1] relative overflow-y-hidden ">
      <div className="max-w-[1100px] mx-auto grid px-3 lg:px-0 md:grid-cols-2 z-[2] relative items-center justify-center gap-20">
        <figure>
          <Image
            src={data?.image?.node?.mediaItemUrl || "/images/meet.jpeg"}
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
           {data?.title}
          </h2>
          <p className="text-xl font_aleo leading-[36px]">
            {data?.caption}
          </p>
        </div>
      </div>
      <Image
        src={"/images/dots.jpg"}
        alt=""
        width={700}
        height={700}
        className="absolute z-[1] top-1/2 opacity-50 -translate-y-1/2 left-0"
      />
    </section>
  )
}

export default Main