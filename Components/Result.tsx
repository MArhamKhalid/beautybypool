import React from 'react'

const Result = () => {
  return (
    <section className='relative w- full h-300 bg-[#e7e4d3] flex overflow-hidden'>
        <img src="/img/bg-line-reviews.png" className='absolute top-0 left-0 bg-cover h-[100%] w-[100%]' alt="" />
        <div className='w-full h-full flex flex-col justify-center py-20 z-10 gap-y-10'>
            <div className='w-full h-50 text-7xl text-[#5B4E45] flex flex-col items-center justify-center leading-26 text-center'>
                <div className='w-full'>
                    <span>Refined Results.</span>
                </div>
                <div className='w-full'>
                    <h2>Trusted by Many</h2>
                </div>
            </div>
            <div className='w-full h-190 relative'>
                <div className='w-full h-full flex justify-center items-center '>
                    <div className='absolute -left-50 top-3 w-65 '>
                        <img src="/img/ashley.jpg" className=' height-[100%] width-[100%] rounded-3xl -rotate-10' alt="" />
                    </div>
                    <div className='w-full h-full flex justify-center items-center gap-16 mt-40 pl-80'>
                        <img src="/img/alicia-t.jpg" className='w-97 h-114.5 rounded-3xl -rotate-10' alt="" />
                        <div className='capitalize w-120 flex flex-col gap-y-4 text-black'>
                            <img src="/img/quote.svg" width="40px" alt="" />
                            <h2 className='text-3xl'>Alice T.</h2>
                            <h5 className='text-xl'>I'm so impressed! The texture matches my hair perfectly, and I love how easy it is to style. It feels soft, looks luxurious, and blends seamlessly. I've already gotten so many compliments. I'm hooked!</h5>
                        </div>
                    </div>
                    <div className='absolute -right-50 top-0 w-65 h-100 object-cover'>
                        <img src="/img/t-nelson.jpg" className=' height-[100%] width-[100%] rounded-3xl rotate-10' alt="" />
                    </div>
                </div>
                <div className='w-40 h-20 absolute flex justify-center items-center gap-5 left-28 bottom-5'>
                    <a className='w-16 h-16 rounded-full border-[1px] border-solid border-black hover:bg-gray-200 flex justify-center items-center'>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 24 24" className='text-black' >
                        <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
                        </svg>
                    </a>
                    <a className='w-16 h-16 rounded-full border border-solid border-black  hover:bg-gray-200 flex justify-center items-center'>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 24 24" className='text-black'>
                        <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Result
