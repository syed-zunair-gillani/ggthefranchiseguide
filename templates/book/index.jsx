"use client"
import React from 'react'
import BackgroundImage from '../../public/images/book.webp'
import Link from 'next/link'
import Image from 'next/image'

const BookTemplate = ({data}) => {
    console.log("🚀 ~ BookTemplate ~ data:", data)
    return (
        <>
            <main className='min-h-screen w-full bg-cover bg-no-repeat flex justify-center relative' style={{
                backgroundImage: `linear-gradient(to bottom, rgba(85,87,88,.9), rgba(85,87,88,.7)), url(${BackgroundImage.src})`,
                backgroundOrigin: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='!min-w-[1080px] text-white mx-auto px-3 pb-6'>
                    <div className='mt-40'>
                        <p className='text-center font-bold'>{data?.main?.subTitle}</p>
                        <h5 className='text-2xl sm:text-[40px] text-center font-bold mt-10 mb-8'>{data?.main?.title}</h5>

                        <div class="aspect-w-16 aspect-h-9">
                            <iframe src={data?.main?.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <h5 className='mt-4 font-bold text-xl sm:text-2xl text-center'>Get Your FREE Copy of "Franchise Freedom"</h5>
                        <div className='flex justify-center my-5'>
                            <Link href={data?.main?.buttonLink || "#"} className="bg-[#0074AE] rounded-xl px-6 py-3 font-semibold shadow-md border hover:bg-transparent border-transparent hover:border-[#fff]">Download Now</Link>
                        </div>
                        <p className='text-[#FAAB18] text-xl text-center font-bold'>(And ditch that soul-crushing job)</p>
                    </div>
                </div>
            </main >

            <section className="max-w-[1280px] text-black mx-auto px-3 pb-6 mt-6">
                <h2 className='text-center font-bold text-xl sm:text-2xl'>How Much is That Dead-End Job Costing You?</h2>
                <h3 className='text-center my-4 text-xl font-semibold'>(Hint: It's More Than Just Money)</h3>
                <p className='text-center font-semibold'>Most people struggle to find a career that's fulfilling AND pays the bills...</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6'>
                    <div>
                        <h3 className='my-4 text-xl font-semibold'>When you’re stuck in that corporate grind, you end up…</h3>
                        <ul className='list-disc pl-8 space-y-8'>
                            <li><strong>Trading Time for Dollars:</strong> Working long hours and missing out on life’s precious moments (with your family, friends, and even just yourself).</li>
                            <li><strong>Feeling Trapped and Unfulfilled:</strong> Dreading Mondays and counting down the minutes until Friday (sound familiar?).</li>
                            <li>
                                <strong>Stressing About the Future:</strong>
                                Worried about layoffs, downsizing, and whether you’ll ever be able to retire comfortably.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='my-4 text-xl font-semibold'>Imagine a life where you…</h3>
                        <ul className='list-disc pl-8 space-y-8'>
                            <li><strong>Wake up excited to go to work</strong> (because you’re building something you’re passionate about). </li>
                            <li><strong>Have the time freedom to enjoy life</strong> (and actually be present for those soccer games and school plays).</li>
                            <li><strong>Create a secure financial future</strong> (without sacrificing your personal life).</li>
                        </ul>
                    </div>
                </div>
                <p className='text-center font-semibold mt-10'>Franchise Freedom is possible. But most people don’t know where to start. They end up wasting time and money on the wrong opportunities (or worse, give up altogether)</p>
                <div className='flex justify-center my-5'>
                    <Link href={data?.guidance?.buttonUrl || "#"} className="bg-[#0074AE] text-white hover:text-[#0074AE] rounded-xl px-6 py-3 text-xl font-semibold shadow-md border hover:bg-transparent border-transparent hover:border-[#0074AE]">Download Now</Link>
                </div>
                <p className='text-sm text-center italic'>(Get the guidance you need to build a business you love)</p>
                <figure className='flex justify-center my-10'>
                    <Image src={data?.guidance?.image?.node?.mediaItemUrl || "/images/book-cover.webp"} alt="" width={190} height={300} />
                </figure>
                <h3 className='my-4 text-xl font-semibold text-center'>Inside this no-nonsense book... you'll discover </h3>
                <div className='grid grid-cols-1 max-w-[1080px] mx-auto sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6'>
                    {
                        data?.cards?.map((item, idx) => {
                            return (
                                <div className='flex flex-col items-center justify-center my-4' key={idx}>
                                    <Image src={item?.icon?.node?.mediaItemUrl} alt="" className='' width={68} height={68} />
                                    <h6 className='text-2xl text-center my-2 font-bold'>{item?.title}</h6>
                                    <p className='text-lg text-center text-gray-500'>{item?.caption}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center my-5'>
                    <Link href={data?.bookNowLink || "#"} className="bg-[#0074AE] text-white hover:text-[#0074AE] rounded-xl px-6 py-3 text-xl font-semibold shadow-md border hover:bg-transparent border-transparent hover:border-[#0074AE]">Download Now</Link>
                </div>
                <h6 className='tet-xl sm:text-2xl md:text-3xl text-center font-bold'>But don't just take our word for it...</h6>
                <p className='text-center text-lg my-4 font-semibold'>Hear what our candidates have to say about finding their perfect franchise match and transforming their lives!</p>

                <div>
                    {
                        data?.videoUrl?.map((item, idx) => (
                            <div key={idx}>
                                <div class="aspect-w-16 aspect-h-9">
                                    <iframe src={item?.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className='pt-[1px] bg-gray-800 my-8 max-w-[60%] mx-auto' />
                            </div>
                        ))
                    }
                </div>

                <div>
                    <h4 className='text-xl sm:text-2xl md:text-3xl font-bold text-center'>Ready to take control of your life and build a business you love?</h4>
                    <h2 className='text-center font-bold text-xl sm:text-2xl my-5'>Download Your FREE Copy of "Franchise Freedom"</h2>
                    <div className='flex justify-center my-5'>
                        <Link href={data?.bookNowLink || "#"} className="bg-[#0074AE] text-white hover:text-[#0074AE] rounded-xl px-6 py-3 text-xl font-semibold shadow-md border hover:bg-transparent border-transparent hover:border-[#0074AE]">Download Now</Link>
                    </div>
                </div>

            </section>

        </>
    )
}

export default BookTemplate