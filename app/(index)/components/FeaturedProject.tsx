import { cn } from '@/app/utils/cn'
import React from 'react'


type SelectedProjectProps = {
  className?: string
}

const FeaturedProject = ({className}: SelectedProjectProps) => { 
  return (
    <section className={cn('flex flex-col gap-7 ', className)}>
    <h3 className="font-sohne text-sm text-secondary font-normal">Featured</h3>
    {/* video */}
    <div className='relative w-full  rounded-md border border-[#E8E8E8] dark:border-none aspect-video'>
      <video className='w-full h-full object-cover' autoPlay loop muted>
        <source src='/videos/selected-project.mp4' type='video/mp4' />
      </video>
    </div>


    
    </section>
  )
}

export default FeaturedProject