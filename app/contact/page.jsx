import React from 'react'
import BackgroundImage from "../../public/images/dots.jpg"
import Image from 'next/image'
import NewsLetterForm from '@/components/news-letter-form/news-letter-form'

const Contact = () => {
    return (
        <section className='pt-20'>
            <div
                className='bg-center bg-no-repeat'
            >
                <Image src={BackgroundImage?.src} alt='' className='opacity-25 absolute max-w-[780px] w-full left-1/2 -translate-x-1/2' width={600} height={600} />
                <h2 className='text-center font-bold pt-20 text-3xl px-3 sm:text-4xl'>How can I help you?</h2>
                <p className='pt-20 px-3 text-center font-semibold text-xl sm:text-2xl text-gray-600'>Just fill out the form below and we’ll respond as soon as possible</p>
                <div className='z-[10] relative'>
                    <NewsLetterForm />
                </div>
            </div>
            <svg className='' viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path class="" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill='#0B72AF'></path>
            </svg>
        </section>
    )
}

export default Contact