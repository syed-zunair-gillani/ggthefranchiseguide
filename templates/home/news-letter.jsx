import React from 'react'
import BackgroundImage from "../../public/images/newletter.jpg"
import NewsLetterForm from "@/components/news-letter-form/news-letter-form"

const NewsLetter = () => {
    return (
        <section className='bg-[#F2F2F2] py-[100px] bg-cover bg-no-repeat'
            style={{ backgroundImage: `linear-gradient(to right, rgba(242,242,242, .8), rgba(242,242,242, .8)), url(${BackgroundImage.src})` }}
        >
            <h2 className="text-2xl px-2 sm:text-[40px] mt-3 font-bold text-black text-center mb-6 uppercase">Join the newsletter</h2>
            <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm text-center uppercase">Fill out the form below</h5>
            <NewsLetterForm/>
        </section>
    )
}

export default NewsLetter