import React from 'react'

const Footer = () => {
  return (
    <footer className='relative w-full h-dvh overflow-hidden rounded-bl-none rounded-br-none flex flex-col justify-center z-0'>
        <div className='absolute inset-0 w-full h-full bg-cover'>
            <img src="/img/footer-bg.png" className='absolute z-10 h-full w-full top-0 left-0 ' alt="" />
            <div className='absolute inset-0 bg-[#44362d]'></div>
        </div>
        <div className='relative w-full flex justify-center z-0'>
            <img src="/img/footer-b-by-a.png" className='absolute top-0 w-160' alt="" />
        </div>
        <div className='w-full h-full flex justify-center items-center z-10'>
            <div className='w-full h-50 flex px-24'>
                <div className='w-full h-full capitalize text-white flex flex-col gap-y-5'>
                    <div className='text-6xl'><h2>stay up to date</h2></div>
                    <div className='text-2xl'><h5>Don't miss any of our unique offers.</h5></div>
                    <div className='w-120 h-16 bg-white flex items-center  rounded-full'>
                        <input type="text" placeholder='Enter Your Email' className='w-104 h-full pl-2 text-[#44362d]  rounded-4xl outline-none'  />
                        <button className='w-15 h-15 my-2 rounded-full bg-[#44362d] flex justify-center items-center'>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='text-xl'><h5>By subscribing you consent to us sending you emails.</h5></div>
                </div>
                <div className='w-full flex text-center text-xl'>
                    <div className='w-full flex justify-center h-10 text-xl text-white text-left list-none'>
                        <ul className=' grid grid-cols-2 gap-y-2 w-auto'>
                            <li className='hover:text-[#e7e4d3]'>Home</li>
                            <li className='hover:text-[#e7e4d3]'>Stories</li>
                            <li className='hover:text-[#e7e4d3]'>About</li>
                            <li className='hover:text-[#e7e4d3]'>Blog</li>
                            <li className='hover:text-[#e7e4d3]'>Services</li>
                            <li className='hover:text-[#e7e4d3]'>Contact us</li>
                            <li className='hover:text-[#e7e4d3]'>Products</li>

                        </ul>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-end text-white capitalize gap-y-9'>
                    <div className='text-[50px]'><h2>make an appointment</h2></div>
                    <div className='text-2xl'><h5>call us at <a className='underline'> 0123 456 789</a> </h5></div>
                    <div className='text-2xl'><h5>or send email to  <a  className='underline'>hello@beautybyavh.com</a></h5></div>
                </div>
            </div>
        </div>
        <div className='w-full h-40 flex flex-col justify-center z-10'>
            <div className='w-full flex justify-center'>
                <div className='w-[90%] h-[1px] bg-white'></div>
            </div>
            <div className='w-full flex items-center justify-between pt-10 text-white px-24 pb-8'>
                <div className='w-100 flex justify-start'>
                    <h5>© 2026 - Copyright Beauty By AVH</h5></div>
                <div className='flex justify-center w-100'>
                    <img src="/img/logo.png" alt="" /></div>
                <div className='flex justify-end w-100 gap-x-5'>
                    <img src="/img/visa.png" className='w-10 h-10' alt="" />
                    <img src="/img/mastercard.png" className='w-10 h-10' alt="" />
                    <img src="/img/paypal.png" className='w-10 h-10' alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
