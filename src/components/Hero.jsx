import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-sky-300 to-sky-400 h-screen flex gap-20 p-10 '>
               {/* left div */}
                <div className='pt-20'>
                    <p className='text-white text-4xl'>Welcome to</p>
                    <p className='text-white text-5xl font-bold'>Pop Rock Crystal Shop!</p>
                    <p className='text-sm mt-5'>Here you will find unique phone accessories, crystals,<br /> jewelry and more.
                        Free shipping inside the U.S. and our <br /> phone grips come with a limited warranty.
                        Enjoy!
                    </p>
                    <div className='flex items-center mt-5 gap-8'>
                        <button className='px-6 py-2 text-sm rounded-lg  bg-white'>SHOP NOW</button>
                        <p className='text-gray-600'>about us</p>
                    </div>
                </div>
                {/* right div  */}
                <div className='hidden relative w-2/5 h-96 mt-5 z-10 bg-white shadow-md md:flex flex-col justify-center items-center rounded-3xl'>
                    <p className='absolute top-16 left-0 bg-sky-500 text-white px-3 py-1 newLot text-sm'>New lot</p>
                    <img className='h-64 w-64'
                        src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__" alt="" />
                    <p className='text-center'>CRYSTAL AGATE PHONE GRIP <b>- 18.99$</b></p>
                </div>
            </div>
            <div className='hidden lg:block z-0 absolute top-32'>
                <svg width="full" height="530" viewBox="0 0 1440 604" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z" fill="white" />
                </svg>
                <div className='hidden  absolute bottom-10 right-1/2 md:flex cursor-pointer'>
                    <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7C13.6906 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6906 11.6667 14 11.6667C14.3094 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3094 7 14 7ZM14 2.33333C11.834 2.33333 9.75682 3.19374 8.22527 4.72529C6.69373 6.25684 5.83331 8.33406 5.83331 10.5V17.5C5.83331 19.6659 6.69373 21.7432 8.22527 23.2747C9.75682 24.8062 11.834 25.6667 14 25.6667C16.1659 25.6667 18.2431 24.8062 19.7747 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7747 4.72529C18.2431 3.19374 16.1659 2.33333 14 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1248 21.6248C17.0308 22.7187 15.5471 23.3333 14 23.3333C12.4529 23.3333 10.9692 22.7187 9.87519 21.6248C8.78123 20.5308 8.16665 19.0471 8.16665 17.5V10.5C8.16665 8.9529 8.78123 7.46917 9.87519 6.37521C10.9692 5.28124 12.4529 4.66666 14 4.66666C15.5471 4.66666 17.0308 5.28124 18.1248 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z" fill="#307189" />
                        <path d="M14.866 36.5C14.4811 37.1667 13.5189 37.1667 13.134 36.5L12.2679 35C11.883 34.3333 12.3642 33.5 13.134 33.5L14.866 33.5C15.6358 33.5 16.117 34.3333 15.7321 35L14.866 36.5Z" fill="#307189" />
                    </svg>
                    <p>sroll down</p>
                </div>
                <div className='hidden md:flex gap-2 items-center absolute left-2/3 bottom-20 cursor-pointer'>
                    <span className='bg-sky-500 rounded-sm py-1 hover:bg-sky-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                    </span>
                    <span className='hidden md:block h-2 w-2 bg-sky-500 rounded-full'></span>
                    <span className='hidden md:block h-2 w-2 bg-sky-200 rounded-full'></span>
                    <span className='hidden md:block h-2 w-2 bg-sky-200 rounded-full'></span>
                    <span className='hidden md:block h-2 w-2 bg-sky-200 rounded-full'></span>
                    <span className='hidden md:block h-2 w-2 bg-sky-200 rounded-full'></span>
                    <span className='hidden md:block h-2 w-2 bg-sky-200 rounded-full'></span>
                    <span className='hidden md:block h-2 w-2 bg-sky-200 rounded-full'></span>
                    <span className='bg-sky-500 rounded-sm py-1 hover:bg-sky-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Hero