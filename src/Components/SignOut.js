import React from 'react'
//import logout from '../image/decor.jpeg'
import { Link } from 'react-router-dom'
function SignOut() {
  return (
    <div>
         <div className='container mx-auto'>
         <div className=' px-4 py-1 -my-6 '>
    
    <div className='max-w-[450px] h-[500px] mx-auto text-white'>
    <div className='max-w-[320px] mx-auto justify-center items-center py-14 border border-gray-300 shadow-lg '>
    <h1 className='text-3xl font-bold text-violet-700 mx-4 mb-2'>Sign Out</h1>
    <form className='flex flex-col gap-y-4  px-4 '>
          <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
           placeholder='name'  type='text' /> 
             <input  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 h text-sm'
              placeholder='email' type='text' />   
              <input  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
               placeholder='password' type='text' /> 
         
                <div className='flex gap-x-2'>
                  <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 w-full'>Sign Out</button>
   <Link to='/signin' className='border-violet-700 border text-violet-700
    hover:border-violet-500 rounded p-4 text-sm w-full transition '>sign In</Link>
                </div>
        </form>
  
    </div>
    </div>
      </div>
        
    </div>
    </div>
  )
}

export default SignOut