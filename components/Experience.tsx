import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { FaDownload, FaEye } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='py-20' id="experience">
        <h1 className="heading">
            My
            <span className="text-accent"> Experience</span>
        </h1>
        {/* gap-10 is between each experience*/}
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
                <Button
                    key={card.id}
                    //random makes the border speeds random
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))
            }
        </div>

        {/* Resume Buttons */}
        <div className="flex justify-center mt-12 gap-4">
            <a 
                href="/documents/glmao_resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 transition-colors"
            >
                <FaEye className="text-lg" />
                <span>View Resume</span>
            </a>
            <a 
                href="/documents/glmao_resume.pdf" 
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 transition-colors"
            >
                <FaDownload className="text-lg" />
                <span>Download Resume</span>
            </a>
        </div>
    </div>
  )
}

export default Experience