import React from 'react'

const Videos = ({ data }) => {
    return (
        <section className='max-w-[1280px] mx-auto w-full'>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-14 gap-5 px-3">
                {data?.map((item, idx) => (
                    <div key={idx}>
                        <iframe
                            className="w-full h-[225px]"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Who is Giuseppe Grammatico?"
                            width="640"
                            height="360"
                            src={item?.videoUrl}
                            id="widget2"
                        ></iframe>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Videos
