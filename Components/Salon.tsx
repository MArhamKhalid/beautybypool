import React from 'react'

const Salon = () => {
  return (
    <section className='w-full h-260 bg-white'>
        {/* <div className='w-full h-260 bg-white  '> */}
            <div className='h-full flex flex-col items-center justify-center pt-60 pb-16 gap-y-15'>
                    
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
        {/* </div> */}
        
    </section>
  )
}

export default Salon
