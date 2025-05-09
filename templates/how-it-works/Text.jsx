import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Text = ({data}) => {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="text-center">
                <div className="font_roboto mb-4 mt-4 text-[26px] font-[700] text-[#666666] w-full md:w-[60%] mx-auto">
                   <div dangerouslySetInnerHTML={{ __html: data}}/>
                </div>
            </div>
        </section>
    );
};

export default Text;
