import React from 'react'

const Reviews = () => {
  return (
    <section className='w-full h-screen relative bg-white z-10'>
        <img src="/img/avh-standard-bg.jpg" className='absolute top-0 left-0 h-220 bg-cover w-full ' alt="" />

        <div className='w-full h-full flex justify-center items-center text-8xl text-white'>
            <div className='flex z-0'>
                
                <h2>The AVH <span>Standard</span></h2>
            </div>
        </div>
        <div className='flex gap-3 px-24 bg-white  '>
            <div className='w-full h-full  flex justify-center z-0'>
                <div className='w-136 h-100 flex flex-col justify-center items-center px-10 bg-linear-to-b from-[#fbfaf8] to-[#f0eee6] absolute top-[73%] rounded-2xl'>
                    <div className='w-110 h-90 flex flex-col-reverse  relative'>
                        <div className='absolute w-112 h-100 z-0 flex '>
                            <img src="/img/avh-standard-root-to-tip.png" className=' object-cover absolute -top-22 left-0 rounded-2xl w-[100%] h-[100%]' alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center capitalize text-center z-0'>
                            <h4 className='font-sans text-[#1c1c1c] text-[20px] md:text-[22px]'>
                                full from root to tip
                            </h4>

                            <p className='font-sans text-[#4a4a4a] text-[14px] md:text-[15px] leading-relaxed'>no thinning. no compromise. just dense, healthy strands from root to end</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full  flex justify-center z-0'>
                <div className='w-136 h-110 flex flex-col justify-center items-center px-10 bg-linear-to-b from-[#fbfaf8] to-[#f0eee6] absolute top-[80%] rounded-2xl'>
                    <div className='w-110 h-100 flex flex-col-reverse  mt-18 relative'>
                        <div className='absolute w-112 h-100 z-0 flex '>
                            <img src="/img/avh-standard-seamless-alignment.png" className=' object-cover absolute -top-28 left-0 rounded-2xl w-[100%] h-[100%]' alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center capitalize text-center gap-y-4 pb-3 z-0'>
                            <h4 className='font-sans text-[#1c1c1c] text-[20px] md:text-[22px]'>
                                Seamless Alignment
                            </h4>

                            <p className='font-sans text-[#4a4a4a] text-[14px] md:text-[15px] leading-relaxed'>All cuticles intact and aligned—minimizing tangling and preserving long-term wear</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex justify-center z-0'>
                <div className='w-136 h-100 flex flex-col justify-center items-center px-10 bg-linear-to-b from-[#fbfaf8] to-[#f0eee6] absolute top-[73%] rounded-2xl'>
                    <div className='w-110 h-90 flex flex-col-reverse relative'>
                        <div className='absolute w-112 h-100 z-0 flex '>
                            <img src="/img/avh-standard-tile-img.png" className=' object-cover absolute -top-22 left-0 rounded-2xl w-[100%] h-[100%]' alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center capitalize text-center mt-30 z-0'>
                            <h4 className='font-sans text-[#1c1c1c] text-[20px] md:text-[22px]'>
                                Controlled at Every Step
                            </h4>

                            <p className='font-sans text-[#4a4a4a] text-[14px] md:text-[15px] leading-relaxed'>From sourcing to final preparation, every stage is monitored to ensure consistency and quality.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        

    </section>
  )
}

export default Reviews