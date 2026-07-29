import React from 'react'

const Experience = () => {
  return (
    <section className='w-full h-350 px-5 bg-white flex flex-col gap-y-15.5'>
        <div className='w-full  flex justify-start  items-center'> 
            <div className='w-full flex flex-col justify-start pl-24  capitalize mt-40'>
                <div>
                    <h2 className='text-[45px] md:text-[75px] lg:text-[90px] font-light text-black'><span>more than</span> a salon</h2>
                </div>
                <div className='flex items-center gap-x-10 pl-30 -mt-8'>
                    <div className='h-0.5 w-100 bg-black'></div><h2 className='text-[45px] md:text-[75px] lg:text-[90px] font-light text-[#5B4E45]'>Luxury Experience</h2>
                </div>
            </div>
        </div>
        <div className='w-full h-full'>
            <div className='flex justify-center w-full gap-52 px-8'>
                <div className='flex flex-col h-142 bg-white w-[85vw] md:w-100 lg:w-120 gap-y-2 '>
                    <div className=''>
                        <img src="/img/custom-wigs.png" width="572" height="531" alt="" />
                    </div>
                    <div className='text-[#111] text-[38px] lg:text-[48px] font-light capitalize h-20'>
                        <h2>
                            custom wigs
                        </h2>
                    </div>
                    <div className='font-sans font-light text-[#555] text-[15px] leading-[1.6]  capitalize w-full h-full '>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum impedit expedita harum ea officiis ducimus voluptates.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col h-142 bg-white w-[85vw] md:w-100 lg:w-120  '>
                    <div className='text-[#111] text-[38px] lg:text-[48px] font-light capitalize h-20'>
                        <h2>
                            Scalp Treatments
                        </h2>
                    </div>
                    <div className='font-sans font-light text-[#555] text-[15px] leading-[1.6]  capitalize w-full h-full '>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum impedit expedita harum ea officiis ducimus voluptates.
                        </p>
                    </div>
                    <div className='mt-34'>
                        <img src="/img/scalp-treatments.png" width="572" height="531" alt="" />
                    </div>
                </div>
                <div className='flex flex-col h-142 bg-white w-[85vw] md:w-100 lg:w-120 gap-y-2 '>
                    <div className=''>
                        <img src="/img/luxury-braids.png" width="572" height="531" alt="" />
                    </div>
                    <div className='text-[#111] text-[38px] lg:text-[48px] font-light capitalize h-20'>
                        <h2>
                            Luxury Braid Services
                        </h2>
                    </div>
                    <div className='font-sans font-light text-[#555] text-[15px] leading-[1.6]  capitalize w-full h-full '>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum impedit expedita harum ea officiis ducimus voluptates.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Experience
