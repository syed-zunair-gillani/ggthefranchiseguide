import Link from "next/link";
import React from "react";

const StepsSection = ({data}) => {
    return (
        <div className="bg-gray-100 py-12 text-center">
            <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm ">HOW DOES IT WORK</h5>
            <h2 className="text-[40px] mt-3 font-bold text-black mb-6">FOLLOW THESE STEPS</h2>

            <div className="flex justify-center gap-10 md:gap-6 flex-wrap px-6 mt-20">
                {data?.map((step, idx) => (
                    <div
                        key={step.id}
                        className="relative bg-[#FBAC17] text-white p-6 w-full sm:w-72 rounded-lg shadow-lg"
                    >
                        <span className="absolute -top-12 left-14 transform font_caveat rotate-3 text-[60px] italic text-[#0D73B0]">
                            {idx + 1}
                        </span>
                        <h3 className="text-[30px] uppercase leading-8 font-bold mt-4">{step?.title}</h3>
                        <p className="mt-5 text-lg font_aleo !mb-4">{step?.caption}</p>
                        <Link href={step?.buttonLink || "#"} className="mt-6 px-4 py-2 border font-bold border-white rounded-full text-white hover:bg-white hover:text-[#FBAC17] transition">
                            LEARN MORE
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-20 mb-10">
                <Link href={'#'} className="mt-6 px-8 uppercase py-4 border font-bold bg-[#0F73B0] border-[#0F73B0] hover:border-[#FBAC17] rounded-full text-white hover:bg-white hover:text-[#FBAC17] transition">
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default StepsSection;
