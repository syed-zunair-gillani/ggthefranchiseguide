import React from 'react'
import BackgroundImage from "../../public/images/work-with-us.jpg"
import NewsLetterForm from '@/components/news-letter-form/news-letter-form'
import Image from 'next/image'

const WorkshopTemp = ({ data }) => {
    return (
        <>
            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(239,239,239, .8), rgba(239,239,239, .8)), url(${BackgroundImage?.src})` }}
                className='py-[60px] md:py-[200px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[1080px] mx-auto text-black'>
                    <h2 className='text-3xl md:text-[40px] font-bold mb-4 capitalize'>{data?.main.title}</h2>
                    <div className='content text-xl'>
                        <div dangerouslySetInnerHTML={{ __html: data?.main.content }} />
                    </div>
                    <div>
                        <NewsLetterForm />
                    </div>
                </div>
            </section>
            <section className='max-w-[1080px] px-3 mx-auto text-black content py-20'>
                <div dangerouslySetInnerHTML={{ __html: data?.content }} />
            </section>

            <section className='bg-[#F2F2F2] py-[100px] bg-cover bg-no-repeat'        >
                <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm text-center uppercase">Success Stories:</h5>
                <h2 className="text-2xl px-2 sm:text-[40px] mt-3 font-bold text-black text-center mb-6 max-w-[800px] leading-tight mx-auto uppercase">{data?.successStoriesTitle}</h2>
                <div className='max-w-[1140px] mx-auto px-3 flex flex-col gap-6 mt-12' style={{ gap: '1.5rem' }}>
                    {
                        data?.successStories?.map((item, idx) => (
                            <div className='flex bg-white gap-12 flex-col sm:flex-row items-center p-[30px]' key={idx}>
                                <div>
                                    {
                                        item?.profileImage ?
                                            <figure>
                                                <Image src={item?.profileImage?.node?.mediaItemUrl} alt="" width="120" height="120" className="rounded-full" />
                                            </figure> :
                                            <div className='w-[98px] !h-[98px] rounded-full text-5xl font-bold text-white item-center flex-col text-center flex justify-center bg-[#FFA705]'>{item?.name?.charAt(0)}</div>
                                    }

                                </div>
                                <div>
                                    <p className='font_aleo'>{item?.caption}</p>
                                    <h5 className='font-bold mt-6'>- {item?.name}</h5>
                                    <p className='font_aleo'>{item?.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}

export default WorkshopTemp