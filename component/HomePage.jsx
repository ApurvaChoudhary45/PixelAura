import React from 'react'
import { useSession, signIn } from "next-auth/react"
import {motion} from 'framer-motion'
const HomePage = () => {
    const { data: session } = useSession()
    const container = (delay)=>({
      initial: { opacity: 0, y: 100 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: "easeIn",
          staggerChildren: 0.1
        }
      }
    })
  return (
    <>
    <div className='flex justify-center items-center gap-20 py-70 flex-col md:flex-row'>
        <motion.div className='text-center md:text-9xl font-bold text-gray-800 dark:text-gray-200 z-10 relative text-6xl' variants={container(0.5)} initial="initial" animate="animate">
            PixelAura
        </motion.div>
        <motion.div className='relative z-10' variants={container(1)} initial="initial" animate="animate">
            <button className='text-white p-3 border-2 rounded-full bg-transparent hover:text-gray-800 text-3xl hover: cursor-pointer' onClick={()=> signIn()}>Launch PixelAura</button>
        </motion.div>
      
    </div>
    <motion.div className='text-center text-4xl font-semibold text-gray-800 dark:text-gray-400 z-10 relative -my-50' variants={container(1.5)} initial="initial" animate="animate">
    <p>Breathe life into your screen. Discover the aura of every pixel.</p>
    </motion.div>
    </>
  )
}

export default HomePage