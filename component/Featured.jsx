'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { select } from '@/Redux/TabSearch/tabsearch';
import { useDispatch } from 'react-redux'
const Featured = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const tabs = ['Random', 'Film', 'People', 'Textures', 'Travel'];
    const dispatch = useDispatch()
    const anim = (delay)=>({
      initial : { opacity: 0, y: -100 },
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
    return (
        <motion.div className="hidden md:flex items-center space-x-70 justify-center py-15" variants={anim(0.8)} initial = "initial" animate = "animate">
            <div className="flex bg-gray-800 rounded-full px-4 py-2 space-x-6 relative z-10">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {setActiveTab(tab); dispatch(select(tab))}}
                        className="relative px-4 py-1 font-semibold rounded-full text-gray-400 hover:text-white cursor-pointer"
                    >
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-black rounded-full z-0"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{tab}</span>
                    </button>
                ))}
            </div>
            
        </motion.div>
    )
}

export default Featured
