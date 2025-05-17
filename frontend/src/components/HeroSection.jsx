import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-purple-50 to-white'>
            <div className='flex flex-col gap-5 my-10 px-4 md:px-0'>
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium hover:bg-gray-200 transition-all cursor-pointer'
                >
                    No. 1 Job Hunt Website
                </motion.span>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-3xl md:text-5xl font-bold leading-tight'
                >
                    Search, Apply & <br /> 
                    Get Your <span className='text-[#6A38C2] relative'>
                        Dream Jobs
                        <svg className='absolute w-full h-2 -bottom-2 left-0 text-[#6A38C2] opacity-20' viewBox="0 0 200 8" preserveAspectRatio="none">
                            <path d="M0,0 L200,0 C160,4 120,8 80,8 C40,8 0,4 0,0" fill="currentColor"/>
                        </svg>
                    </span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='text-gray-600 text-lg'
                >
                    Swipe, Match, Hired 
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='flex w-full md:w-[60%] lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white hover:shadow-xl transition-all'
                >
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full py-3'
                    />
                    <Button 
                        onClick={searchJobHandler} 
                        className="rounded-r-full bg-[#6A38C2] hover:bg-[#5a2eb8] transition-all"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray-600'
                >
                    <span>Popular:</span>
                    {['UI/UX', 'Remote', 'Full-Time', 'Developer'].map((tag, index) => (
                        <span key={index} className='hover:text-[#6A38C2] cursor-pointer transition-all'>
                            {tag}
                            {index < 3 && ' •'}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection