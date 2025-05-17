import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className='p-5 rounded-lg shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300'
        >
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button 
                    variant="ghost" 
                    className="rounded-full hover:bg-purple-50 hover:text-purple-600 transition-all" 
                    size="icon"
                >
                    <Bookmark className="h-5 w-5" />
                </Button>
            </div>

            <div className='flex items-center gap-3 my-4'>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    <Avatar className="h-12 w-12 ring-2 ring-purple-100">
                        <AvatarImage src={job?.company?.logo} alt={job?.company?.name} />
                    </Avatar>
                </motion.div>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500 flex items-center gap-1'>
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        India
                    </p>
                </div>
            </div>

            <div className='space-y-2'>
                <h1 className='font-bold text-lg text-gray-900'>{job?.title}</h1>
                <p className='text-sm text-gray-600 line-clamp-2'>{job?.description}</p>
            </div>

            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-medium bg-blue-50 hover:bg-blue-100' variant="secondary">
                    {job?.position} Positions
                </Badge>
                <Badge className='text-[#F83002] font-medium bg-red-50 hover:bg-red-100' variant="secondary">
                    {job?.jobType}
                </Badge>
                <Badge className='text-[#7209b7] font-medium bg-purple-50 hover:bg-purple-100' variant="secondary">
                    {job?.salary}LPA
                </Badge>
            </div>

            <div className='flex items-center gap-3 mt-6'>
                <Button 
                    onClick={()=> navigate(`/description/${job?._id}`)} 
                    variant="outline"
                    className="flex-1 hover:bg-gray-100 transition-all"
                >
                    View Details
                </Button>
                <Button 
                    className="flex-1 bg-[#7209b7] hover:bg-[#5a067c] transition-all"
                >
                    Quick Apply
                </Button>
            </div>
        </motion.div>
    )
}

export default Job