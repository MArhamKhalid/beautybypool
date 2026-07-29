import React from 'react'

const Reviews = () => {
  return (
    <section className='w-full h-screen relative'>
        <img src="/img/bg-avh-standard.png" className='absolute top-0 left-0 h-240 bg-cover w-full ' alt="" />

        <div className='w-full h-full flex justify-center items-center text-8xl text-white'>
            <div className='flex z-0'>
                
                <h2>The AVH <span>Standard</span></h2>
            </div>
        </div>
        <div className='flex gap-3 px-24 relative -top-100'>
            <div className='w-full h-full  flex justify-center z-0'>
                <div className='w-136 h-full flex flex-col justify-center items-center px-10 bg-linear-to-b from-[#fbfaf8] to-[#f0eee6] absolute top-[45%] rounded-2xl'>
                    <div className='w-110 h-90 flex flex-col-reverse  relative'>
                        <div className='absolute w-full h-120 z-0 flex '>
                            <img src="/img/avh-standard-tile-img.png" className='absolute -top-8 left-0' alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center capitalize text-center mt-30 z-0'>
                            <h4 className='font-sans text-[#1c1c1c] text-[20px] md:text-[22px]'>
                                full from root to tip
                            </h4>

                            <p className='font-sans text-[#4a4a4a] text-[14px] md:text-[15px] leading-relaxed'>no thinning. no compromise. just dense, healthy strands from root to end</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-100  flex justify-center z-0'>
                <div className='w-136 h-full flex flex-col justify-center items-center px-10 bg-linear-to-b from-[#fbfaf8] to-[#f0eee6] absolute top-[55%] rounded-2xl'>
                    <div className='w-110 h-90 flex flex-col-reverse  mt-18 relative'>
                        <div className='absolute w-full h-120 z-0 flex '>
                            <img src="/img/avh-standard-tile-img.png" className='absolute -top-8 left-0' alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center capitalize text-center mt-30 z-0'>
                            <h4 className='font-sans text-[#1c1c1c] text-[20px] md:text-[22px]'>
                                full from root to tip
                            </h4>

                            <p className='font-sans text-[#4a4a4a] text-[14px] md:text-[15px] leading-relaxed'>no thinning. no compromise. just dense, healthy strands from root to end</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex justify-center z-0'>
                <div className='w-136 h-full flex flex-col justify-center items-center px-10 bg-linear-to-b from-[#fbfaf8] to-[#f0eee6] absolute top-[45%] rounded-2xl'>
                    <div className='w-110 h-90 flex flex-col-reverse relative'>
                        <div className='absolute w-full h-120 z-0 flex '>
                            <img src="/img/avh-standard-tile-img.png" className='absolute -top-8 left-0' alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center capitalize text-center mt-30 z-0'>
                            <h4 className='font-sans text-[#1c1c1c] text-[20px] md:text-[22px]'>
                                full from root to tip
                            </h4>

                            <p className='font-sans text-[#4a4a4a] text-[14px] md:text-[15px] leading-relaxed'>no thinning. no compromise. just dense, healthy strands from root to end</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <div className='w-full h-200 bg-white flex flex-col items-center justify-center gap-y-15 -mt-12'>
            <div className='w-0.5 h-50 bg-[#4a4a4a]'></div>
            <div className='w-full flex flex-col justify-center items-center gap-y-8 '>
                <div className='flex items-center text-[#4a4a4a] gap-5'>
                    <p className='text-8xl  text-[40px] md:text-[60px] lg:text-[80px] font-thin italic leading-none capitalize'>most hair looks good</p>
                    <div className='relative w-[140px] md:w-[206px] h-[60px] md:h-[86px] rounded-[43px] overflow-hidden shrink-0'>
                        <img src="/img/quote-img-1.png" width="100%" height="100%" className='bg-cover bg-[#EF4848]' alt="" />
                    </div>
                </div>
                <div className='flex items-center text-[#4a4a4a] gap-5'>
                    <div className='relative w-[140px] md:w-[206px] h-[60px] md:h-[86px] rounded-[43px] overflow-hidden shrink-0'>
                        <img src="/img/quote-img-2.png" width="100%" height="100%" className='bg-cover bg-[#E3CC98]' alt="" />
                    </div>
                    <p className='text-8xl  text-[40px] md:text-[60px] lg:text-[80px] font-thin italic leading-none capitalize'>most hair looks good</p>
                </div>
            </div>
            <div className='text-5xl mt-15'>
                <span>Perform Over Time</span>
            </div>
            <div>
                <button className="btn-all h-14 w-60 text-m font-medium rounded-3xl capitalize text-white">begin your concultation</button>

            </div>
        </div>

    </section>
  )
}

export default Reviews