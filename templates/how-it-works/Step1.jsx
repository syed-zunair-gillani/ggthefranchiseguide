"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Step1 = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
      {/* Text content */}
      <div className="container mx-auto px-4 p-6">
        <div className="font_roboto md:text-xl font-light px-6">
          <h3 className="text-3xl md:text-[60px] font-[500] font_caveat text-[#0D73B0] italic">
            Step 1
          </h3>
          <h2 className="text-3xl md:text-[40px] font-[700] font_montserrat mt-8 leading-[56px] uppercase">
            Book Your Right Fit Introduction Call
          </h2>
          <p className="text-[18px] md:text-[20px] font-[400] leading-[36px] py-4">
            Get expert advice on which franchise opportunities align with your goals. 
            Are you considering franchise ownership but aren’t sure where to start? We understand that the process can be overwhelming, and that’s why we offer a no-cost, right-fit call to help you identify whether a franchise is the right fit for what you’re looking to achieve.
          </p>
          <p className="text-[18px] md:text-[20px] font-[400] leading-[36px]">
            During this personalized consultation, we’ll take the time to understand your goals, answer any questions you might have about franchise ownership, and help you identify which opportunities align with your specific needs and interests.
          </p>
          <p className="text-[18px] md:text-[20px] font-[400] leading-[36px] pt-3">
            Our team has a proven track record of matching entrepreneurs with successful franchise systems, and we’re committed to helping you achieve your goals as a franchisee. Whether you’re looking for a full-time business opportunity or a part-time venture to supplement your income, we’re here to help you explore your options and make informed decisions about your future.
          </p>
          <p className="text-[18px] md:text-[20px] font-[400] leading-[36px] pt-3">
            Ready to take the first step towards franchise ownership? Book your no-cost, right-fit call today and let us help you achieve your dreams.
          </p>

          <div className="mt-12">
            <Link
              href={`#`}
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
          src="/images/step-1.jpg"
          alt="Franchise Consultation"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Step1;
