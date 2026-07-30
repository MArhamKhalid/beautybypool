import React from 'react'

const Socail = () => {
  return (
    <section className='w-full h-280 bg-white '>
        <div className='w-full h-full py-24 flex flex-col gap-y-18 '>
            <div className='w-full  flex justify-center items-center'> 
                <div className='w-full flex flex-col justify-start pl-20  capitalize '>
                    <div>
                        <h2 className='text-[45px] md:text-[75px] lg:text-[90px] font-light text-[#5B4E45]'><span>Follow</span></h2>
                    </div>
                    <div className='flex items-center gap-x-10 pl-10 -mt-8'>
                        <div className='h-0.5 w-30 bg-[#5B4E45]'></div><h2 className='text-[45px] md:text-[75px] lg:text-[90px] font-light text-[#5B4E45]'>Us On Instagram</h2>
                    </div>
                    <div>
                        <h5 className='text-[#5b4e45] text-[20px] md:text-[28px] font-sans'>Real clients. Real installs. Real results.</h5>
                    </div>
                </div>
                <div className='w-150 pr-20 mt-20'>
                    <img src="/img/instagram-logo.png" alt="Instagram" />
                </div>
            </div>
            <div className='w-full h-full '>
                <div  className='w-full  flex px-20 py-20 gap-4'>
                    
                    <div className='w-full h-116.5'>
                        <img src="/img/insta-5.png" className=' rounded-2xl w-[100%] h-[100%]' alt="" />
                    </div>
                    <div className='w-full h-116.5'>
                        <img src="/img/insta-2.png" className=' rounded-2xl w-[100%] h-[100%]'  alt="" />
                    </div>
                    <div className='w-full h-116.5 flex flex-col justify-between '>
                        <img src="/img/insta-3.png" className=' rounded-full'  alt="" />
                        <div className='capitalize p-6 bg-[#f5f3ea] rounded-3xl'>
                            <h6 className='leading-8 text-[#4a4a4a]'>First time at thp for cut and colour and it was great - skilled, up to the minute styling. I've been looking for a decent place in Sydney for a year and I finally found it!! Highly recommend</h6>
                        </div>
                    </div>
                    <div className='w-full h-116.5'>
                        <img src="/img/insta-4.png" className=' rounded-2xl w-[100%] h-[100%]'  alt="" />
                    </div>
                    <div className='w-full h-116.5'>
                        <img src="/img/insta-5.png" className=' rounded-2xl w-[100%] h-[100%]'  alt="" />
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Socail
