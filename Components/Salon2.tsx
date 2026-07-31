import React from 'react'

const Salon2 = () => {
  return (
    <section className='relative w-full h-230 flex flex-col justify-center about rounded-b-3xl z-0'>
        <div className='absolute inset-0 w-full h-full bg-cover'>
            <img src="/img/bg.png" className='absolute z-10 h-full w-full top-0 left-0 ' alt="" />
            <div className='absolute inset-0 bg-[#44362d] rounded-b-3xl'></div>
        </div>
        <div className='relative w-full flex justify-center z-10'>
            <img src="/img/beauty-by-avh-line.png" className='absolute' alt="" />
        </div>

        <div className='w-full h-full z-10'>
            <div className='w-full px-20 pb-12 pt-20 flex justify-between items-center text-white  gap-x-15 '>
                <div className='w-full items-center flex flex-col '>
                    <div className='flex w-full justify-center items-center text-[90px]'>
                        <span className=' font-light text-white'>About The</span>
                    </div>
                    <div className='flex items-center gap-x-10 pl-14'>
                        <div className='h-[1px] w-30 bg-white'></div>
                        <h2 className='text-[140px] font-light text-white'>Salon</h2>
                    </div>
                </div>
                <div className=''>
                    <div className='w-118 h-200  '>
                        <img src="/img/about-salon.jpg" className='h-full w-full rounded-t-full rounded-b-full' alt="" />
                    </div>
                </div>
                <div className='w-full text-2xl flex flex-col gap-y-5 mt-64'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Salon2
