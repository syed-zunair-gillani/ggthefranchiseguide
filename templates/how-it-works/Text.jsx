import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Text = () => {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="text-center">
                <p className="font_roboto mb-4 mt-4 text-[26px] font-[700] text-[#666666] w-full md:w-[60%] mx-auto">
                    Before you get started, here’s what you should know
                    There is no cost for my services, my fee is paid by the franchisor!
                    How much money do you need to get started?
                    At the minimum, every franchisee must have:
                </p>

                <p className="font_roboto mb-10  text-[26px] font-[700] text-[#666666] w-full md:w-[90%] mx-auto">
                $50,000 or more in liquid capital (Cash, Savings, Money Market, Investments).
                $100,000 Net Worth or More (Assets: Liquid Capital, Home Market Value, 401Ks, Home Equity – less Liabilities: Mortgage, Loans, etc.).
                </p>
            </div>
        </section>
    );
};

export default Text;
