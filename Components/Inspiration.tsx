import React from 'react'

const Inspiration = () => {
  return (
    <section className='w-full h-280 bg-white'>
        <div className='flex flex-col gap-y-26 px-22.5 py-16'>
            <div className='flex justify-left items-center w-full h-20 text-[#5B4E45]'>
                <h2 className='  text-[124px]'><span className='  text-[100px]'>Need</span> Inspiration?</h2>
            </div>
            <div className='w-full h-full flex justify-center gap-x-5 pb-20'>
                <div className='w-104 h-175.5 flex flex-col '>
                    <div className='w-104 h-128 '>
                        <img src="/img/inspiration-1.png" width="100%" height="75%" className='rounded-3xl' alt="" />
                    </div>
                    <div className='h-[20%] pt-20 font-sans'>
                        <div className='w-full text-[40px] text-[#5B4E45] '>
                            <h5>Vacation Wave</h5>
                        </div>
                        <div className='w-full text-gray-400  text-xl '>
                            <p>Effortless, sun-ready texture with natural movement.</p>
                        </div>

                    </div>
                </div>
                <div className='w-104 h-175.5 flex flex-col '>
                    <div className='w-104 h-128 '>
                        <img src="/img/inspiration-2.png" width="100%" height="75%" className='rounded-3xl' alt="" />
                    </div>
                    <div className='h-[20%] pt-20 font-sans'>
                        <div className='w-full text-[40px] text-[#5B4E45]'>
                            <h5>Sleek Executive</h5>
                        </div>
                        <div className='w-full text-gray-400 text-xl'>
                            <p>Effortless, sun-ready texture with natural movement.</p>
                        </div>

                    </div>
                </div>
                <div className='w-104 h-175.5 flex flex-col '>
                    <div className='w-104 h-128 '>
                        <img src="/img/inspiration-3.png" width="100%" height="75%" className='rounded-3xl' alt="" />
                    </div>
                    <div className='h-[20%] pt-20 font-sans'>
                        <div className='w-full text-[40px] text-[#5B4E45]'>
                            <h5>Statement Glam</h5>
                        </div>
                        <div className='w-full text-gray-400 text-xl'>
                            <p>Effortless, sun-ready texture with natural movement.</p>
                        </div>

                    </div>
                </div>
                <div className='w-104 h-175.5 flex flex-col '>
                    <div className='w-104 h-128 '>
                        <img src="/img/inspiration-4.png" width="100%" height="75%" className='rounded-3xl' alt="" />
                    </div>
                    <div className='h-[20%] pt-20 font-sans'>
                        <div className='w-full text-[40px] text-[#5B4E45] '>
                            <h5>Dimensional Blonde</h5>
                        </div>
                        <div className='w-full text-gray-400 text-xl'>
                            <p>Effortless, sun-ready texture with natural movement.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inspiration
