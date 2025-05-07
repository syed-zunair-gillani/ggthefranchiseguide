import Image from 'next/image'
import React from 'react'

const Calendar = () => {
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
      <h1 className='text-xl sm:text-2xl md:text-3xl text-center my-4 font-semibold'>Congratulations! You may be the Right Fit for a Franchise Business Opportunity! The Next step is to book a quick call with Giuseppe below...
      </h1>
      <div className='mt-6'>
        <iframe src="https://link.socialmarketinglabs.com/widget/booking/yYUTsDOCZ7N1TtsvKBlb" style={{
          width: '100%',
          border: 'none',
          overflow: 'hidden'
        }} scrolling="no" id="yYUTsDOCZ7N1TtsvKBlb_1729620387258"></iframe>
        <br /><script src="https://link.socialmarketinglabs.com/js/form_embed.js" type="text/javascript"></script>
      </div>
    </section>

  )
}

export default Calendar