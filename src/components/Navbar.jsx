import React from 'react'
import { useDispatch } from 'react-redux'
import { setsearch } from '../Slice/Searchslice'
const Navbar = () => {
  const dispatch = useDispatch()
  return (
   <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6'>
    <div>
        <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 17)}</h3>
        <h1 className='text-2xl font-bold'>Falvoro</h1>
    </div>
    <div>
        <input onChange={(e)=>dispatch(setsearch(e.target.value))} className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' type="text" placeholder='Search here' />
    </div>
   </nav>
  )
}

export default Navbar