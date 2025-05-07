import Image from 'next/image'
import React from 'react'
import DownloadAndSurveyForm from '@/components/download-and-survey-form'

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
            <DownloadAndSurveyForm />
        </section>
    )
}

export default RightFit