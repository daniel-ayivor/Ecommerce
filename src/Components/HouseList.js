import React,{useContext} from 'react'
//import context
import { HouseContext } from './HouseContext'
//import component
import House from './House'
//import link
import { Link } from 'react-router-dom'
//import icons
import {ImSpinner2} from 'react-icons/im'
function HouseList() {
    const {loading,Houses} =useContext(HouseContext)
   // console.log(Houses)
   //if loading is true
  if(loading){
    return (<ImSpinner2 className='mx-auto  animate-spin text-violet-700 text-4xl mt-[200px]'/>)
   }

   if(Houses.length < 1){
    return <div className='text-gray-700 ml-30 px-8 md:ml-40 items-center justify-center text-3xl mt-48'>Sorry, nothing found</div>
   }
  return (
    <div className='mb-20'>
        <div className='container mx-auto'>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
        {Houses?.map((house, index)=>{
            return(
                <Link to={`/property/${house.id}`} key={index}>
                    <House  house={house}/>
                </Link>
            )
        })}                      
    </div>
        </div>

    </div>
  )
}

export default HouseList