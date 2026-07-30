import React from 'react'

const SecondReviews = () => {
  return (
    <section className='w-full h-350 bg-white'>
                
        <div className='w-full h-full py-24 flex flex-col gap-y-18 '>
            <div className='w-full  flex justify-center items-center'> 
                <div className='w-full flex flex-col justify-center items-center leading-36 capitalize '>
                    <div>
                        <h2 className='text-[30px] md:text-[75px] lg:text-[90px] font-light text-[#5B4E45]'><span>latest belogs</span></h2>
                    </div>
                    <div className='flex items-center gap-x-10 pl-10 -mt-8'>
                        <div className='h-0.5 w-30 bg-[#5B4E45]'></div><h2 className='text-[45px] md:text-[75px] lg:text-[90px] font-light text-[#5B4E45]'>Write. Share. Connect</h2>
                    </div>
                </div>
            </div>
            
            <div className='w-full h-full flex justify-center gap-x-19.5 pb-20'>
                <div className='w-124 h-122.5 flex flex-col justify-center '>
                    <div className='w-full h-112.5 '>
                        <img src="/img/blogs-1.png" className='rounded-3xl w-full h-full bg-cover' alt="" />
                    </div>
                    <div className='h-[20%] pt-4 font-sans '>
                        <div className='w-full text-[40px] text-[#5B4E45] leading-12'>
                            <h5>Making Your Wig Look Even More Natural</h5>
                        </div>
                        <div className='w-full text-gray-400  text-xl mt-4'>
                            <p>READ MORE.</p>
                        </div>

                    </div>
                </div>
                <div className='w-124 h-181.5 flex flex-col justify-center mt-20'>
                    <div className='w-full h-147 '>
                        <img src="/img/blogs-2.png" width="100%"  className='rounded-3xl h-full bg-cover' alt="" />
                    </div>
                    <div className='h-[20%] pt-4 font-sans'>
                        <div className='w-full text-[40px] text-[#5B4E45] leading-12'>
                            <h5>Making Your Wig Look Even More Natural</h5>
                        </div>
                        <div className='w-full text-gray-400 text-xl mt-4'>
                            <p>READ MORE.</p>
                        </div>

                    </div>
                </div>
                <div className='w-124 h-122.5 flex flex-col  justify-center'>
                    <div className='w-full h-112.5 '>
                        <img src="/img/blogs-3.png" width="100%" height="75%" className='rounded-3xl' alt="" />
                    </div>
                    <div className='h-[20%] pt-8 font-sans'>
                        <div className='w-full text-[40px] text-[#5B4E45] leading-12'>
                            <h5>Making Your Wig Look Even More Natural</h5>
                        </div>
                        <div className='w-full text-gray-400 text-xl mt-4'>
                            <p>READ MORE.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SecondReviews
