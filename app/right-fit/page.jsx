import Image from 'next/image'
import React from 'react'
import SurveyForm from './SurveyForm'

const RightFit = () => {
    return (
        <section className='max-w-[1280px] mx-auto px-4 py-8 mt-20'>
            <figure className='flex flex-col items-center justify-center text-center'>
                {/* Logo */}
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GG-GrammaticoLogo_Horizontal_Vertical-kP9bdpb0tNHD6zFUoiGnqdEFlTQGrk.png"
                    alt="Grammatico The Franchise Guide"
                    width={150}
                    height={150}
                    className="mb-8"
                />
            </figure>
            <h4 className='text-lg text-center sm:text-2xl font-semibold text-[#FF0000]'>FREE: Franchise Guide Shows You…            </h4>
            <h1 className='text-xl sm:text-2xl md:text-4xl text-center my-4 font-semibold'>How To Discover Your Best Franchise Fit Without Wasting Time</h1>
            <h1 className='text-lg sm:text-xl md:text-3xl text-center my-4 font-semibold'>Use the Form Below to Start Now & Get Matched!</h1>
            <SurveyForm/>
        </section>
    )
}

export default RightFit