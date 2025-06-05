import { searchQuery } from '@/Redux/Search/search'
import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
const Search = () => {
  const [search, setsearch] = useState('')
  const dispatch = useDispatch()
  const anims = (delay)=>({
      initial : { opacity: 0, y: 100 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          delay : delay,
          duration: 0.5,
          ease: "easeIn",
          staggerChildren: 0.1
        }
      }
    })
  const searchData = ()=>{
    dispatch(searchQuery(search))
  }
  return (
    <motion.div className='relative z-10 py-60 md:py-5' variants={anims(1.5)} initial = "initial" animate = "animate">
      <div className="flex items-center md:w-3/4 w-[90%] mx-auto bg-transparent border border-gray-300 rounded-full px-4 py-2 shadow-sm -mt-50">
  <input
    type="text"
    placeholder="Search wallpapers..."
    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 text-3xl"
    value={search}
    onChange={(e)=>setsearch(e.target.value)}
  />
  <button className="text-gray-500 hover:text-blue-500 transition cursor-pointer text-2xl" onClick={searchData}>
    🔍
  </button>
</div>

    </motion.div>
  )
}

export default Search
