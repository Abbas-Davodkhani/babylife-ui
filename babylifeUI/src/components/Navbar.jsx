import React from 'react';
import {assets} from '../assets/assets';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (<div className='flex justify-between items-center py-5 font-medium'>
 
        <img src={assets.logo} alt="logo" className='w-36' />
        {/* <h1 className='text-2xl font-bold'>BabyLife</h1> */}

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >

            <NavLink to='/' className='flex  flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/collection' className='flex  flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/about' className='flex  flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/contact' className='flex  flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt='' />

            <div>
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='' />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-column gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>

                    </div>
                </div>
                
            </div>
        </div>
  </div>)
};

export default Navbar;