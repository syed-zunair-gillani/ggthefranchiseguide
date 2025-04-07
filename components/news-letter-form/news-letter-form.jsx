import React from 'react'

const NewsLetterForm = () => {
    return (
        <div>
            <div className="max-w-[640px] mx-auto w-full flex items-center my-[100px] justify-center p-4">
                <form className="bg-[#003366] text-white rounded-2xl p-8 py-10 w-full max-w-2xl space-y-4 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-3">First Name *</label>
                            <input type="text" placeholder="First Name" className="w-full p-3 rounded bg-[#0C73B0] placeholder-white" required />
                        </div>
                        <div>
                            <label className="block mb-3">Last Name *</label>
                            <input type="text" placeholder="Last Name" className="w-full p-3 rounded bg-[#0C73B0] placeholder-white" required />
                        </div>
                        <div>
                            <label className="block mb-3">Email *</label>
                            <input type="email" placeholder="Email" className="w-full p-3 rounded bg-[#0C73B0] placeholder-white" required />
                        </div>
                        <div>
                            <label className="block mb-3">Phone *</label>
                            <div className="flex items-center bg-[#0C73B0] rounded">
                                <input type="tel" placeholder="Phone" className="w-full p-3 bg-transparent placeholder-white" required />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-3">Tell me which one of these best represents you?</label>
                            <select className="w-full p-3 rounded bg-[#0C73B0] text-white">
                                <option>Select</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-3">How did you hear about the Franchise Guide? *</label>
                            <select className="w-full p-3 rounded bg-[#0C73B0] text-white" required>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-3">If you found me as a guest on someone's podcast, what podcast was it?</label>
                        <input type="text" className="w-full p-3 rounded bg-[#0C73B0] placeholder-white" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ffcc33] text-white uppercase text-xl font-bold py-4 rounded hover:bg-[#ffdb4d] transition duration-300"
                    >
                        Subscribe
                    </button>

                    <div className="flex items-start space-x-2 pt-2">
                        <input type="checkbox" className="mt-1" />
                        <label className="">
                            I agreebly providing my phone number to receive text messages from the business.
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsLetterForm