import React from 'react'
import Card from './Card'


const Allproduct = () => {
    return (
        <div className='w-full h-full p-14 mb-4 text-center'>
            <h1 className='text-center font-bold text-2xl text-gray-600'>All product</h1>
            <div className='hidden md:flex gap-1 m-10'>
                <p className='text-gray-400'>Filter: </p>
                <p className='text-gray-600 font-semibold'>All product</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360 280-560h400L480-360Z" /></svg>

                <p className='ml-20 text-gray-400'>Sort: </p>
                <p className='text-gray-600 font-semibold'>Best Selling</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360 280-560h400L480-360Z" /></svg>
            </div>
            <Card />
            <button className="border-[2px] border-sky-400 px-[40px] py-[10px] mt-16 rounded-xl text-[11px] font-bold text-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-sky-200 transition duration-300">
                View All
            </button>
        </div>
    )
}

export default Allproduct