import Link from "next/link";
import React from "react";

const steps = [
    {
        id: 1,
        title: "BOOK YOUR CALL",
        description:
            "Book a No-cost, Right-Fit call so that we can decide together if a franchise is a good fit for what you are looking to achieve.",
    },
    {
        id: 2,
        title: "IDENTIFY YOUR GOALS",
        description:
            "On our 2nd call we will identify your vision and the goals you are looking to achieve.",
    },
    {
        id: 3,
        title: "GET FRANCHISE MATCHES",
        description:
            "On our 3rd call, we will work together to create a personalized franchise model that outlines all the characteristics of your ideal business.",
    },
    {
        id: 4,
        title: "NAVIGATE THE PROCESS",
        description:
            "After we make introductions to each franchise company we will make sure to assist with any questions you may have.",
    },
];

const StepsSection = () => {
    return (
        <div className="bg-gray-100 py-12 text-center">
            <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm ">HOW DOES IT WORK</h5>
            <h2 className="text-[40px] mt-3 font-bold text-black mb-6">FOLLOW THESE STEPS</h2>

            <div className="flex justify-center gap-10 md:gap-6 flex-wrap px-6 mt-20">
                {steps.map((step, idx) => (
                    <div
                        key={step.id}
                        className="relative bg-[#FBAC17] text-white p-6 w-full sm:w-72 rounded-lg shadow-lg"
                    >
                        <span className="absolute -top-12 left-14 transform font_caveat rotate-3 text-[60px] italic text-[#0D73B0]">
                            {idx + 1}
                        </span>
                        <h3 className="text-[30px] uppercase leading-8 font-bold mt-4">{step.title}</h3>
                        <p className="mt-5 text-lg font_aleo">{step.description}</p>
                        <button className="mt-6 px-4 py-2 border font-bold border-white rounded-full text-white hover:bg-white hover:text-[#FBAC17] transition">
                            LEARN MORE
                        </button>
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
