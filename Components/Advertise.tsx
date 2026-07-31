import React from 'react'

const Advertise = () => {
  return (
    <section className='w-full h-120 py-16 px-20 bg-white'>
        <div className='flex flex-col justify-center items-center py-20 gap-y-15'>
            <div className='text-[#5B4E45] text-[70px]'><h2 className='text-[90px]'>Trusted.
                <span className=' text-[90px]'>Proven.</span>Consistent.</h2></div>
            {/* <marquee  direction="left">
                OGUE ELLE BAZAAR COSMOPOLITAN ALLURE GLAMO
            </marquee> */}
            <div className="marquee-container text-7xl text-[#e7e4d3] ">
                <h1 className="moving-heading">VOGUE  ELLE  BAZAAR  COSMOPOLITAN  ALLURE  GLAMOUR</h1>
            </div>

        </div>
    </section>
  )
}

export default Advertise
