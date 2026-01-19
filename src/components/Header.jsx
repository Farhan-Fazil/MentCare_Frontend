import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row md:items-center flex-wrap bg-primary-blue rounded-lg mx-auto md:ml-10 px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-[60%] flex flex-col items-start md:pl-10 justify-center gap-4 py-10 md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight max-sm:text-center'>
                    Your <span className='text-amber-300 font-semibold'>Mental Health is now </span><br className={`max-sm:hidden`} />  in your Pocket...
                </p>
                <p className='max-sm:hidden text-3xl md:text-xl lg:text-2xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Dive into the precious healing lessons from the OGs..
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p className='max-sm:text-center'>Browse compassionate professionals who helped 1M+<br className='hidden sm:block' />victims of mental health issues.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 font-se'>
                    Consult Now <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className="relative flex justify-center items-center">
                
                <div className="absolute w-[380px] h-[380px] bg-white/30 blur-3xl rounded-full"></div>
                <img
                    src={assets.pigeon}
                    alt="hero"
                    className="relative z-10 w-80 rounded-lg  md:scale-125"
                />
            </div>

            <p className='sm:hidden text-3xl md:text-xl lg:text-2xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight mb-8 text-center'>
                Dive into the precious healing lessons from the OGs..
            </p>
            <div className="w-56 h-0.5 bg-gray-300 mt-2 mx-auto "></div>
        </div>
    )
}

export default Header