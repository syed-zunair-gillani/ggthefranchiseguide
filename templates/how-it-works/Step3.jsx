"use client";
import React from 'react';
import BackgroundImage from "../../public/images/IMG_4186.jpeg";
import Image from 'next/image';
import Link from 'next/link';

const Step3 = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {/* Image */}
      <div className="">
        <Image
          src={BackgroundImage.src}
          alt="Franchise Consultation"
          width={200}
          height={300}
          className="w-full md:h-[700px] h-auto"
        />
      </div>
      {/* Text content */}
      <div className="container mx-auto px-4 p-6">
        <div className="font_roboto md:text-xl font-light ">
          <h3 className="text-3xl md:text-[60px] font-[500] font_caveat text-[#0D73B0] italic ">
            Step 3
          </h3>
          <h2 className="text-3xl md:text-[40px] font-[700] font_montserrat mt-8 leading-[56px] uppercase">
          Get Franchise Matches
          </h2>
          <p className="text-[18px] md:text-[20px] font-[400] leading-[36px] py-4">
          Helping you find the right franchise matches for you.
          On the third call, you will work with me to create a personalized franchise model. This model will outline all the characteristics of your ideal business. By doing this, you will have a clear picture of what you are looking for in a franchise.
          </p>
          <p className="text-[18px] md:text-[20px] font-[400] leading-[36px]">
          Once you have created your personalized franchise model, you will move forward in exploring franchises that best meet your characteristics. The next step is to explore 2 to 3 franchise companies that match your model. This means that you will be looking at specific franchises that align with your ideal business characteristics.
          </p>

          <div className="mt-12">
            <Link
              href={`#`}
              className="uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-4 px-6 font-semibold rounded-full  hover:bg-transparent transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Step3;
