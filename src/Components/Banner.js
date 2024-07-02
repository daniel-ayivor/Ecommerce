import React from 'react'
import inner from '../image/h1.jpeg'
import Search from './Search'
function Banner() {
  return (
    <div className='h-full max-h-[650px] mb-8 xl:mb-24'>
        
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
            lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                    <span className='text-violet-700'>Rent</span> Your Dream House With Us.
                </h1>
                <p className='max-w-[480px] mb-8'>On the Insert tab, the galleries include items that are designed
                     to coordinate with the overall look of your document. You can
                      use these galleries to insert tabes gallery provide reset commands so
                       that you can always restore the look of your document to the original
                        contained in your current template.
</p>
            </div>
            {/**image */}
            <div className='hidden flex-1 lg:flex justify-end items-end'>
                <img src={inner} alt='/' style={{borderTopLeftRadius:'80px'}}/>
            </div>
        </div>
        <Search />
    </div>
  )
}

export default Banner