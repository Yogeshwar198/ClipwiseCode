import React from 'react'

const Bestprice = () => {
    return (
        <div className='hidden md:block relative w-full h-full bg-gradient-to-r from-sky-300 to-sky-400 overflow-hidden'>
            <svg className='w-full' viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z" fill="white" />
            </svg>
            {/* Description div */}
            <div className='absolute top-60 left-60 text-right'>
                <p className='text-4xl'>BEST PRICE</p>
                <p className='text-5xl font-semibold'>Agate Phone Grip</p>
                <p className='mt-6 mb-6'><span className='line-through text-gray-400'>44.50$</span><span className='text-red-500 font-bold text-3xl'>19.50$</span></p>
                <p className='mb-6'>These Pop Rock Crystal grip tops can be swapped with <br /> other tops depending on your mood, outfit, nails,<br /> phone case, holiday, etc.! Just gently squeeze the sides <br /> to remove and swap out with another color or design!
                </p>
                <button className='rounded-xl px-8 py-3 text-[10px] font-bold bg-gradient-to-r from-sky-300 to-sky-400 text-white'>BUY NOW</button>
            </div>
            {/* Circle Image div */}
            {/* <div className='absolute top-60 right-10 p-20 bg-white rounded-full shadow-[0_0_50px_25px_rgba(255,255,255,0.6)]'>
                <div className='rounded-full shadow-xl bg-white p-10'>
                    <img className='h-40 w-40' src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__" alt="" />
                </div>
            </div> */}
            {/* Circular Image div with white shadow effect */}
            <div className='hidden lg:block absolute top-48 right-32'>
                {/* Outer div with white "shadow" effect */}
                <div className='relative'>
                    <div className='absolute inset-0 bg-white opacity-40 p-72 rounded-full clip-pie'></div>

                    {/* Main content (foreground) */}
                    <div className='relative p-16 top-20 left-20 bg-white shadow-2xl rounded-full'>
                        <div className='rounded-full bg-white p-16 shadow-2xl'>
                            <img className='h-40 w-40' src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__" alt="Agate Phone Grip" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bestprice