import React from 'react'

export default function SectionSection() {

    const features = [
        {
            icon: "/manufacturer.svg",
            title: "Manufacturer",
        },
        {
            icon: "/unique_designs.svg", // replace with your own icons
            title: "Unique Designs",
        },
        {
            icon: "/great_prices.svg",
            title: "Great Prices",
        },
        {
            icon: "/special_discounts.svg",
            title: "Special Discount",
        },
    ];

    return (
        <div className=' bg-[#fef9f3] overflow-hidden relative'>
        <img className='absolute top-0 left-0 h-[300px] sm:h-[600px] animate-horizontal-float' src="/leaf_bg2.png" alt="" />
        <img className='absolute bottom-0 right-0 h-[150px] sm:h-[300px]' src="/leaf_bg3.png" alt="" />
            <div className='flex justify-center items-center'>


                <div className="div1 w-[95%] pt-[100px]">
                    <p className=' tracking-[5px] text-center text-sm md:text-base'
                    >JEWELS AS UNIQUE AS YOU ARE</p>
                    <br />
                    <h1 className="text-center text-2xl sm:text-4xl uppercase leading-[35px] sm:leading-[70px] flex flex-wrap justify-center gap-2 text-balance">
                        Elegance is timeless, and so is our&nbsp;
                        <span className="flex items-center gap-2">
                            jewelry
                            <img src="/img1.png" alt="jewelry" className="h-[35px] sm:h-[70px] inline-block" />
                        </span>
                        designed with care. Each&nbsp;
                        <span className="flex items-center gap-2">
                            piece
                            <img src="/img2.png" alt="piece" className="h-[35px] sm:h-[70px] inline-block" />
                        </span>
                        reflects your unique
                        <span className="flex items-center gap-2">
                            story
                            <img src="/img3.png" alt="jewelry" className="h-[35px] sm:h-[70px] inline-block" />
                        </span>
                        , making every&nbsp;
                        <span className="flex items-center gap-2">
                            moment
                            <img src="/img4.png" alt="moment" className="h-[35px] sm:h-[70px] inline-block" />
                        </span>
                        &nbsp;unforgettable and every look.
                    </h1>
                </div>
            </div>

            <div className="py-12 px-6 sm:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-10 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-12 h-12 mb-4 text-[var(--smallText-color)]"
                            />       
                            <p className="text-[18px] sm:text-[25px] font-medium text-[#111]">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}