import { client } from '@/lib/apollo-client';
import React from 'react'
import { gql } from "@apollo/client";
import Image from 'next/image';
import Link from 'next/link';
import LeftRight from '@/templates/home/left-right';

const SingleGoal = async ({ params }) => {
    const { single } = await params
    const singlePost = gql`
        query NewQuery($slug: ID!) {
          identifyYourGoal(id: $slug, idType: SLUG) {
            title
            featuredImage {
              node {    
                mediaItemUrl
              }
            }
            iug {
              main {
                title
                subTitle
                buttonLink
                backgroundImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
              bookCall {
                buttonLink
                content
                title
                backgroundImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
              leftAndRightSection2 {
                title
                caption
                buttonLink
                picture {
                  node {
                    mediaItemUrl
                  }
                }
              }
              leftAndRightSectionCopy {
                title
                buttonLink
                caption
                picture {
                  node {
                    mediaItemUrl
                  }
                }
              }
            successStoriesCopy {
                caption
                designation
                name
                profileImage {
                node {
                    mediaItemUrl
                }
                }
            }
            }
          }
        }
    `;

    const [data] = await Promise.all([
        client.query({
            query: singlePost,
            variables: {
                slug: single,
            }
        }),
    ]);
    const post = data?.data?.identifyYourGoal
    const { bookCall, main, leftAndRightSection2, leftAndRightSectionCopy, successStoriesCopy } = post.iug

    return (
        <>
            <main className='min-h-screen w-full bg-cover bg-no-repeat flex justify-center relative' style={{
                backgroundImage: `url(${main?.backgroundImage?.node?.mediaItemUrl})`,
                backgroundOrigin: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='bg-black/30 absolute inset-0' />
                <div className='!max-w-[1280px] text-white z-10 flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 items-center mx-auto px-3'>
                    <div className=''>
                        <h1 className='font_montserrat font-bold text-3xl md:text-[42px] !leading-[55px]'>{main?.title}</h1>
                        <p className='font_roboto mb-10 mt-4 text-xl md:text-2xl font-semibold'>{main?.subTitle}</p>
                        <Link href={main?.buttonLink || "#"} className="uppercase bg-[--brand-blue] border-[--brand-blue] text-white py-[14px] hover:border-black hover:text-black hover:bg-transparent border px-6 font-semibold rounded-3xl">Get Started</Link>
                    </div>
                </div>
                {/* <Image src={"/images/main-divider.webp"} alt="" width={800} height={120} className="w-full absolute bottom-0" /> */}
                <svg viewBox="0 0 1000 100" className='absolute bottom-0 left-0 right-0 transform scale-x-[-1]' preserveAspectRatio="none">
                    <path class="elementor-shape-fill" fill='#fff' d="M737.9,94.7L0,0v100h1000V0L737.9,94.7z"></path>
                </svg>
            </main>

            <LeftRight data={leftAndRightSectionCopy} />

            <section className='bg-[#F2F2F2] py-[100px] bg-cover bg-no-repeat'        >
                <h5 className="text-[#0077BE] font-bold tracking-[14px] text-sm text-center uppercase">Success Stories:</h5>
                <h2 className="text-2xl px-2 sm:text-[40px] mt-3 font-bold text-black text-center mb-6 max-w-[800px] leading-tight mx-auto uppercase">What Candidates Say About GG The Franchise Guide</h2>
                <div className='max-w-[1140px] mx-auto px-3 flex flex-col gap-6 mt-12' style={{ gap: '1.5rem' }}>
                    {
                        successStoriesCopy?.map((item, idx) => (
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

            <LeftRight data={leftAndRightSection2}/>

            <section
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 116, 174, .8), rgba(0, 116, 174, .8)), url(${data?.backgroundImage?.node?.mediaItemUrl})` }}
                className='py-[60px] md:py-[100px] bg-no-repeat px-3 bg-top bg-cover'
            >
                <div className='max-w-[1180px] mx-auto text-center text-white'>
                    <h2 className='text-2xl md:text-[32px] font-bold mb-4 uppercase'>{bookCall?.title}</h2>
                    <div className='font_aleo md:text-xl content'>
                        <div dangerouslySetInnerHTML={{ __html: bookCall?.content }}/>
                    </div>
                    <div className='mt-12'>
                        <Link href={data?.buttonLink || `#`} className='uppercase bg-[#FBAC17] border-[#FBAC17] text-white py-[15px] hover:border-white hover:text-white hover:bg-transparent border px-7 font-semibold rounded-3xl'>Get Started</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleGoal