import React, { useState } from 'react'
//import data
import { data } from './Data'
//import use paramas
import { useParams } from 'react-router-dom'
//import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
//import link
import { Link } from 'react-router-dom'
import { wait } from '@testing-library/user-event/dist/utils'
function PropertyDetails() {
  //get the house id
  const {id} = useParams();
  //get house base on id
  const house = data.find(house => {
    return house.id === parseInt(id);
  })

  const [user, setUser] =useState({
    fullName:"",
    email:"",
    password:"",
    request:""
  })
  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.name] : e.value
    })
  }
  //handle submit
  const handleSubmit = async(e)=>{
e.preventDefault()
    try {
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
          username: user?.name,
        }),
      });
      const result = res.json() 
      if(res.ok){
        console.log('recorded successful...')
      } else{
        console.log('detils recorded...')
      }
    } catch (error) {
      console.log('error...')
    }
  }
  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
  <div>
    <h2 className='text-2xl font-semibold'>{house.name}</h2>
    <h3 className='text-lg mb-4'>{house.address}</h3>
  </div>
  <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
    <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
    <div className='bg-violet-500 text-white rounded-full px-3'>{house.country}</div>
  </div>
  <div className='text-3xl font-semibold text-violet-600'>${house.price}</div>
</div>
<div className='flex flex-col items-start gap-8 lg:flex-row'>
  <div className='max-w-[768px]'>
    <div className='mb-8'>

  <img src={house.image} alt='/' />
  </div>
  <div className='flex gap-x-6 text-violet-700 mb-6'>
    <div  className='flex gap-x-2 items-center'>
      <BiBed className='text-2xl'/>
      <div className=''>{house.bedrooms}</div>
    </div>
    <div  className='flex gap-x-2 items-center'>
      <BiBath className='text-2xl'/>
      <div className=''>{house.bathrooms}</div>
    </div>
    <div  className='flex gap-x-2 items-center'>
      <BiArea className='text-2xl'/>
      <div className=''>{house.surface}</div>
    </div>
  </div>
  <div>{house.description}</div>
    </div>
    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
      <div className='flex items-center gap-x-4 mb-8' >
        <div className='w-20 h-20 p-1 border border-gray-300 rounded-full '>
          <img src={house.agent.image} alt='/' className='h-[70px] w-20 rounded-full ' />
        </div>
        <div className=''>
          <div className='font-bold text-lg'>{house.agent.name}</div>
          <Link to='' className='text-violet text-sm'>View Listening</Link>
          
        </div>
       
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
          <input onChange={handleChange} value={user.fullName}
          name="fullName" className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
           placeholder='name'  type='text' /> 
             <input onChange={handleChange} value={user.email}
             name="email"  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 h text-sm'
              placeholder='email' type='text' />   
              <input  onChange={handleChange} value={user.password}
              name="password" className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
               placeholder='password' type='text' /> 
                <textarea onChange={handleChange} value={user.request}
                name="request" className='border border-gray-300 focus:border-violet-700 resize-none rounded  w-full p-4 h-36
                text-sm text-gray-400' placeholder='Message'
                defaultValue='Hello, I am interested in [Modern apatment...]'></textarea>
                <div className='flex gap-x-2'>
                  <button type='submit' className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 w-full'>Send message</button>
                <button className='border-violet-700 border text-violet-700 hover:border-violet-500 rounded p-4 text-sm w-full transition'>Call</button>
                </div>
        </form>

    </div>
  </div>
    </div>
  )
}

export default PropertyDetails