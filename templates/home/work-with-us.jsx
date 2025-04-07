import React from 'react'
import BackgroundImage from "../../public/images/work-with-us.jpg"
import Link from 'next/link'

const WorkWithUs = () => {
    return (
        <section
            style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${BackgroundImage?.src})` }}
            className='py-[60px] md:py-[100px] bg-no-repeat px-3 bg-top bg-cover'
        >
            <div className='max-w-[860px] mx-auto text-center text-white'>
                <h2 className='text-3xl md:text-[40px] font-bold mb-4 uppercase'>Why work with us</h2>
                <p className='font_aleo md:text-xl'>Navigating the intricacies of franchising can be daunting, especially for corporate executives exploring side hustles, individuals amidst career transitions, and investors seeking diversified portfolios. Misconceptions, such as the belief that franchising is exclusive to the fast-food industry and necessitates immense capital, often deter potential entrepreneurs. GG the Franchise Guide shatters these myths by illuminating varied ownership landscapes and business types, revealing that managing a franchise while maintaining employment is a viable option. Offering a comprehensive, cost-free service, they empower candidates with essential knowledge, guiding them through the multifaceted journey of discerning and embracing potentially prosperous business ownership opportunities.</p>
                <div className='mt-12'>
                    <Link href={`#`} className='uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-[14px] hover:border-white hover:text-white hover:bg-transparent border px-6 font-semibold rounded-3xl'>Get Started</Link>
                </div>
            </div>
        </section>
    )
}

export default WorkWithUs