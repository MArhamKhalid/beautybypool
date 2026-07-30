import React from 'react'

const Salon2 = () => {
  return (
    <section className='w-full h-250 bg-[#5B4E45] relative'>
        {/* <img src="/img/bg.png" alt=""  className=' top-0 left-0 overflow-hidden h-full w-full  '/> */}
        <img src="/img/beauty-by-avh-line.png" className='absolute top-0 left-0 h-full overflow-hidden' alt="" />
        <div className='w-full h-full relative  flex justify-center items-center z-0'>
            <div className=' bg-[#5B4E45] rounded-b-3xl px-24 flex justify-center items-center '>
                <div className=''>
                    <h2><span>About The</span><br/>Salon</h2>
                </div>
                <div></div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Salon2
