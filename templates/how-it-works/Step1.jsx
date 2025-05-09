import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Step1 = ({data}) => {
  console.log("🚀 ~ Step1 ~ data:", data)
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Text content */}
      <div className="container mx-auto px-4 p-6 py-12">
        <div className="font_roboto md:text-xl font-light px-6">
          <h3 className="text-3xl md:text-[60px] font-[500] font_caveat text-[#0D73B0] italic">
            Step 1
          </h3>
          <h2 className="text-3xl md:text-[40px] font-[700] font_montserrat mt-8 leading-[56px] uppercase">
            {data?.title}
          </h2>
          <div className='content mt-4'>
            <div dangerouslySetInnerHTML={{ __html: data?.content}}/>
          </div>

          <div className="mt-12">
            <Link
              href={data?.buttonLink || '#'}
              className="uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-4 px-6 font-semibold rounded-full hover:border-white hover:text-white hover:bg-transparent transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center">
        <Image
          src={data?.sideImage?.node?.mediaItemUrl || "/images/step-1.jpg"}
          alt="Franchise Consultation"
          width={500}
          height={500}
          className="w-full object-cover"
        />
      </div> 
    </section>
  );
};

export default Step1;
