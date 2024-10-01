import React from 'react'
import card_Data from '../assets/cardData';

const Card = () => {
    return (

        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 '>
            {card_Data.map((data, index) => {
                return <div key={index} className='border p-5 rounded-2xl hover:shadow-xl'>
                    
                    <img className='w-40 ml-6'
                        src={data.img} alt="" />
                
                    <p className='font-medium'>{data.desc}</p>
                    <p className='mb-4 font-bold'>{data.price}</p>
                    <button className='border-[2px] border-sky-400 px-[40px] py-[10px] rounded-xl text-[10px] font-bold text-sky-400  hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-sky-200 transition duration-300'>BUY NOW</button>
                </div>
            })
            }
            
        </div >
    )
}

export default Card