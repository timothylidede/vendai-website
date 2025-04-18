import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='why-vendai'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                    🚚 why vendai
                </h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>
            
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Boost Sales */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-blue-900">
                                    🛒 Boost Sales
                                </h4>
                                <p className="text-md font-medium">
                                    Turn casual buyers into repeat customers with personalized offers and upsells on WhatsApp.
                                </p>
                            </div>
                        </div>
            
                        {/* Save Time */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-blue-900">
                                    ⏱ Save Time
                                </h4>
                                <p className="text-md font-medium">
                                    Automate 70% of your order process. No more endless phone calls.
                                </p>
                            </div>
                        </div>
            
                        {/* Grow Smarter */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-blue-900">
                                    📊 Grow Smarter
                                </h4>
                                <p className="text-md font-medium">
                                    Track trends, stock movement, and customer behavior from your dashboard.
                                </p>
                            </div>
                        </div>
            
                        {/* Predictable Profitability */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-blue-900">
                                    💰 Predictable Profitability
                                </h4>
                                <p className="text-md font-medium">
                                    See exactly what’s working — and where to reinvest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
