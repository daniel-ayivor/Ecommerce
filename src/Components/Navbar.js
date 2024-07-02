import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='py-6 mb-12 border-b'>

    <div className='container mx-auto flex justify-between items-center'>
<Link to='/' className='font-bold text-violet-800'>
HomeLand
</Link>
{/**button */}
<div className='flex items-center gap-6'>
<Link to='/signin' className='hover:text-violet-500'>Sign in</Link>
<Link to='signout' className='bg-violet-800 text-white px-4 py-2 rounded-lg transition'>Sign up</Link>
</div>
    </div>
    </div>
  )
}

export default Navbar