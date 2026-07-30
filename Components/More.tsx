import React from 'react'

const More = () => {
  return (
    <section className='relative w-full h-dvh flex justify-center '>
        <div className='w-full h-full relative z-0 '>
            <img src="/img/more-than-experience-bg.jpg" alt="background" className="absolute top-0 left-0 h-full w-full bg-cover " />
            
            <div className='w-full h-full flex  sticky'>
                <div className='w-full h-full flex items-center z-0 justify-center'>
                    <div className='text-9xl text-white capitalize italic leading-38'>
                        
                        <h2>More than <span>hair</span><br/>an<br/>experience.</h2>
                    </div>
                </div>
                <div className='w-[32%] h-[100%] pt-3'>
                    <div className='flex flex-col justify-between w-full h-[33%] bg-gradient-to-br from-[#2a2118] to-[#1a140f] capitalize px-15 py-15'>
                        <a>
                            <p className='text-xl font-sans text-white/70'>book your</p>
                            <h3 className='text-5xl text-white mt-4'>appointment</h3>
                        </a>
                        <div className='self text-white'>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  fill="currentColor" viewBox="0 0 20 20" >
                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                            </svg>

                        </div>
                    </div>
                    <div className='flex flex-col justify-between w-full h-[33%] bg-gradient-to-br from-[#3a3028] to-[#2a2118] capitalize px-15 py-15'>
                        <a>
                            <p className='text-xl font-sans text-white/70'>view</p>
                            <h3 className='text-5xl text-white mt-4'>loactions</h3>
                        </a>
                        <div className='self text-white'>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  fill="currentColor" viewBox="0 0 20 20" >
                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                            </svg>

                        </div>
                    </div>
                    <div className='flex flex-col justify-between w-full h-[33%] bg-gradient-to-br from-[#4a3f35] to-[#3a3028] capitalize px-15 py-15'>
                        <a>
                            <p className='text-xl font-sans text-white/70'>Explore</p>
                            <h3 className='text-5xl text-white mt-4'>services</h3>
                        </a>
                        <div className='self text-white'>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  fill="currentColor" viewBox="0 0 20 20" >
                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default More
