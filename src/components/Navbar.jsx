import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {motion} from "framer-motion"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='bg-[##1E3A8A] flex items-center justify-between text-sm gap-10 pb-0 border-b border-b-gray-400 md:px-20 max-sm:px-2'>
      <div className="w-20 h-20 overflow-hidden flex-1">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 2 }}
          className='max-sm:text-[35px] font-semibold text-4xl lg:text-5xl pt-4'>Ment<span className='text-amber-300'>Care</span></motion.p>
      </div>

      <motion.ul
            initial={{opacity:0,y:-50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,ease:"easeOut"}}
            viewport={{once:true}}
       className='hidden md:flex items-start gap-5 font-medium md:text-[18px]'>
        <li className='pb-0.5 px-2'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 border-amber-300 hover:text-amber-300' : 'hover:text-amber-300'}>Home</NavLink>
        </li>
        <li className='pb-0.5'>
          <NavLink to='/doctors' className={({ isActive }) => isActive ? 'border-b-2 border-amber-300 hover:text-amber-300' : 'hover:text-amber-300'}>Healers</NavLink>
        </li>
        <li className='pb-0.5'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'border-b-2 border-amber-300 hover:text-amber-300' : 'hover:text-amber-300'}>About</NavLink>
        </li>
        <li className='pb-0.5'>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'border-b-2 border-amber-300 hover:text-amber-300' : 'hover:text-amber-300'}>Contact</NavLink>
        </li>
      </motion.ul>

      <div className='flex items-center gap-4'>

        {/* ✅ Admin Panel Button - show only on home page  */}
        {location.pathname === '/' && (
          <button
            onClick={() => window.open('https://appointy-doctor-appointment-web-app-admin.onrender.com', '_blank')}
            className='bg-primary text-white text-xs px-4 py-2 rounded-full hover:bg-white hover:text-black hidden md:block'
          >
            Admin Login
          </button>
        )}

        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-12 rounded-full' src={userData.image || '/fallback-user.png'} alt="profile" />
            <img className='w-2.5' src={assets.dropdown_icon || '/fallback-icon.png'} alt="dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-white text-primary-blue md:font-bold px-8 py-3 rounded-full font-light hidden md:block hover:scale-110 transition-all duration-200 ease-in-out'
          >
            Create Account
          </button>
        )}

        <img onClick={() => setShowMenu(true)} className='w-8 bg-white p-2 rounded-full md:hidden' src={assets.menu_icon} alt="" />



        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-primary-blue transition-all `}>
          <div className='flex items-center justify-between px-5 py-6 text-4xl'>
            <p className='font-bold text-white'>Ment<span className='font-bold text-amber-300'>Care</span></p>
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-10 bg-white rounded-full p-2' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL HEALERS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
