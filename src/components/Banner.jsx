import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className=' bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 relative '>

            {/* ------- Left Side ------- */}
            <div className={`pt-5 text-center md:text-6xl font-bold text-white`}>
                <span className=''>PEACE</span>- <span className='text-amber-300'>COMPASSION</span>- <span>LOVE</span>
            </div>
            <div className='pb-8'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white sm:py-10'>
                    <p className='text-center text-amber-300'>" A Conversation can heal which 1000 drugs cannot "</p>
                    <p className='mt-4 font-light text-center '>With 100s of professionals with exciting journeys, mental health now comes at your convenience of pocket.</p>
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full hover:scale-105 transition-all'>I want Mental Peace</button>
                </div>
                
            </div>

            {/* ------- Right Side -------
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            </div> */}
        </div>
    )
}

export default Banner