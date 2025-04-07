import React from 'react'

const Videos = () => {
    return (
        <section className='max-w-[1280px] mx-auto w-full'>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-14 gap-5 px-3">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                <div key={idx} className="relative w-full overflow-hidden aspect-video">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
        </section>

    )
}

export default Videos
