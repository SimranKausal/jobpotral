import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { motion } from 'framer-motion'

// const randomJobs = [1, 2,45];

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state
        setTimeout(() => setIsLoading(false), 1000);
        return () => {
            dispatch(setSearchedQuery(""));
        }
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
                <div className="flex items-center justify-between mb-8">
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='font-bold text-2xl sm:text-3xl text-gray-900'
                    >
                        Search Results 
                        <span className="ml-2 text-purple-600">({allJobs.length})</span>
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-2"
                    >
                        {/* Add filter buttons or sorting options here */}
                    </motion.div>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="animate-pulse">
                                <div className="h-64 bg-gray-200 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    >
                        {allJobs.length === 0 ? (
                            <div className="col-span-full text-center py-10">
                                <h2 className="text-2xl font-semibold text-gray-600">No jobs found</h2>
                                <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
                            </div>
                        ) : (
                            allJobs.map((job) => (
                                <Job key={job._id} job={job}/>
                            ))
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Browse