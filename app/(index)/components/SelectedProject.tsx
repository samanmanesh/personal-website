import { cn } from '@/app/utils/cn'
import React from 'react'


type SelectedProjectProps = {
  className?: string
}

const SelectedProject = ({className}: SelectedProjectProps) => { 
  return (
    <section className={cn('flex flex-col gap-7 ', className)}>
    <h2 className='font-inter font-medium text-base'>
      Selected Project
    </h2>
    {/* video */}
    <div className='relative w-full  rounded-md border border-[#E8E8E8] aspect-video'>
      <video className='w-full h-full object-cover' autoPlay loop muted>
        <source src='/videos/selected-project.mp4' type='video/mp4' />
      </video>
    </div>


    
    </section>
  )
}

export default SelectedProject