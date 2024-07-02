import React from 'react'
import {AiFillInstagram,AiFillTwitterCircle,AiFillFacebook,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Footer() {
  return (
<div className='bg-black py-8 text-center text-white'>
        <div className=' container flex flex-cols justify-center items-center gap-4 mx-auto  '>
           
            <Link to='/' className='font-bold text-white'>Real Estate <span className='font-bold text-violet-700'>::</span></Link>
            <p className='text-white md:block'>Copyright &copy; 2024, All Rights Resserved</p>    
  <AiFillLinkedin size={30}/>
            <AiFillTwitterCircle className='text-gray-600'size={30} />
            <AiFillYoutube       className='text-gray-600' size={30}/>
            <AiFillInstagram     className='text-gray-600'  size={30}/>
            <AiFillFacebook      className='text-gray-600' size={30}/>
</div>
        </div>
                      
  )
}

export default Footer