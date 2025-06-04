'use client'
import React from 'react'

import { signOut } from "next-auth/react"
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { goingDark } from '@/Redux/mode/dark';
const Details = () => {
    const anim = (delay)=>({
          initial : { opacity: 0, y: -100 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              delay : delay,
              duration: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.1
            }
          }
        })
    const daaark = useSelector(state => state.black.darkmode)
    const dispatch = useDispatch()

    return (
        <>
            <div className='flex items-center justify-between mx-12 my-6 relative z-10 -mt-30'>
                <motion.h1 className='text-3xl font-bold' variants={anim(0.3)} initial = "initial" animate = "animate">PixelAura</motion.h1>
                
                <motion.div className='flex items-center gap-4' variants={anim(0.3)} initial = "initial" animate = "animate">
                    <button className='text-2xl border-2 bg-transparent rounded-full text-gray-800 px-2 hover:text-gray-300 cursor-pointer' onClick={() => signOut()}>Log out</button>
                    <label className="relative w-14 h-8 cursor-pointer">
                        {/* Hidden checkbox */}
                        <input type="checkbox" className="sr-only peer" onClick={()=>dispatch(goingDark())} />

                        {/* Slider background */}
                        <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-white transition duration-300"></div>

                        {/* Toggle circle */}
                        <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-6">{daaark ? '🌙' : '🌞'}</div>
                    </label>

                </motion.div>

            </div>
            <div className='py-50 relative z-10'>
                <motion.h1 className='text-center text-gray-800 text-6xl font-bold' variants={anim(1)} initial = "initial" animate = "animate">Welcome to PixelAura </motion.h1>
                <motion.p className='text-center text-gray-800 text-3xl py-20' variants={anim(1.2)} initial = "initial" animate = "animate"> Your gateway to stunning, high-quality wallpapers.
                    Explore vibrant collections tailored to your style and give your screen a fresh new vibe.
                    Start browsing and let every pixel reflect your aura.</motion.p>
            </div>
        </>
    )
}

export default Details
