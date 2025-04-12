import React from 'react'

const ContactForm = () => {
  return (
    <section className='max-w-[650px] bg-white mt-20 rounded-lg mx-auto py-[30px] px-[40px]'>
        <div className='text-black'>
            <div className='flex flex-col justify-start text-left'>
                <label htmlFor="" className='font-normal mb-1'>First Name</label>
                <input type="text" className='w-full border border-gray-300 !rounded-lg p-2 mt-2 px-4 text-sm' placeholder='First Name '/>
            </div>
            <div className='flex flex-col justify-start text-left mt-4'>
                <label htmlFor="" className='font-normal mb-1'>Last Name</label>
                <input type="text" className='w-full border border-gray-300 !rounded-lg p-2 mt-2 px-4 text-sm' placeholder='Last Name '/>
            </div>
            <div className='flex flex-col justify-start text-left mt-4'>
                <label htmlFor="" className='font-normal mb-1'>Phone *</label>
                <input type="number" className='w-full border border-gray-300 !rounded-lg p-2 mt-2 px-4 text-sm' placeholder='Phone'/>
            </div>
            <div className='flex flex-col justify-start text-left mt-4'>
                <label htmlFor="" className='font-normal mb-1'>Email *</label>
                <input type="email" className='w-full border border-gray-300 !rounded-lg p-2 mt-2 px-4 text-sm' placeholder='email'/>
            </div>
            <div className='flex items-start text-left text-sm gap-2 mt-4 cursor-pointer'>
                <input type='checkbox' id='checkbox' className='w-6 h-6'/>
                <label htmlFor="checkbox">By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply STOP to opt-out.</label>
            </div>

            <button className='p-3 !rounded-lg mt-5 bg-[#18BD5B] text-white w-full font-normal'>Submit</button>
        </div>
    </section>
  )
}

export default ContactForm