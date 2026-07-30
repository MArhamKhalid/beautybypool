import React from 'react'

const Salon2 = () => {
  return (
    <section className='relative w-full h-220 flex flex-col justify-center z-0 about rounded-b-3xl'>
        <img src="/img/bg.png" alt="background" className="absolute top-0 left-0 h-full bg-cover " />
        <img src="/img/beauty-by-avh-line.png" className='absolute top-0 left-0 h-full w-full bg-cover z-0' alt="" />

        <div className='w-full h-full z-0'>
            <div className='w-full px-20 py-12 flex justify-between items-center text-white  gap-x-15 '>
                <div className='w-full items-center gap-y-14 flex flex-col '>
                    <div className='flex items-center text-7xl'>
                        <span className='text-[80px] md:text-[75px] lg:text-[90px] font-light text-white'>About The</span>
                    </div>
                    <div className='flex items-center gap-x-10 -mt-8'>
                        <div className='h-0.5 w-50 bg-white'></div>
                        <h2 className='text-[45px] md:text-[75px] lg:text-[90px] font-light text-white'>Salon</h2>
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
