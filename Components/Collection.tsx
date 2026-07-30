const Collection = () => {
  return (
    <>  
        <div className=" h-28  flex justify-center bg-[#e7e4d3] ">
            {/* <div className="h-28 flex justify-center"> */}
                <div className="flex justify-center h-full  bg-white pt-3 rounded-2xl">
                    
                    <div className="capitalize w-100 bg-white text-black flex justify-center items-center gap-2 rounded-2xl">
                        <img src="/img/medal-1.png" alt="" />
                        <span>Trusted By Thousands</span>
                    </div>
                    <div className="w-100 h-full flex justify-center items-center bg-white text-black">
                        <div className="capitalize w-full h-full flex justify-center items-center bg-[#e7e4d3] rounded-t-2xl gap-2">
                            <img src="/img/protection.svg" alt="" />
                            <span>14+ Years Of Expertise</span>
                        </div>
                    </div>
                    <div className="capitalize w-100 flex justify-center items-center bg-white text-black gap-2 rounded-2xl">
                    <img src="/img/thumbs-up.svg" alt="" />
                    <span>Quality You Can Count On</span>
                    </div>
                </div>

            {/* </div> */}
        </div>
    <section className="relative w-full flex flex-col justify-center bg-[#e7e4d3] ">
        <img src="/img/bg.png" alt="background" className="absolute top-0 left-0 h-full bg-cover " />
        <img src="/img/women-back.png" alt="background" className="absolute top-5 right-0 w-180 h-auto " /> 

        <div className=" h-dvh w-full z-0">
            <div className="w-full flex flex-col items-center gap-y-8 text-black pt-40 ">
                <div className="text-7xl">
                    <h2><span className="text-9xl">Shop by</span> Collection</h2>
                </div>
                <div>
                    <p>Explore Curated Collections Designed For Every Mood, Lifestyle, And Finish</p>
                </div>
                <div className="h-14 bg-white gap-x-16 capitalize flex justify-evenly items-center font-semibold rounded-4xl px-1">
                    <a href="" className="h-12 w-40 bg-[#5B4E45] flex justify-center items-center rounded-3xl text-white">home page</a>
                    <a href="" className="uppercase w-20 h-12 flex justify-center items-center hover:bg-gray-300 hover:rounded-3xl">wefts</a>
                    <a href="" className="uppercase w-42 h-12 flex justify-center items-center hover:bg-gray-300 hover:rounded-3xl">5x5 lace closure</a>
                    <a href="" className="uppercase w-20 h-12 flex justify-center items-center hover:bg-gray-300 hover:rounded-3xl">wigs</a>
                    <a href="" className="w-32  h-12 flex justify-center items-center hover:bg-gray-300 hover:rounded-3xl">specialty hair</a>
                    <a href="" className="w-40 h-12 flex justify-center items-center hover:bg-gray-300 hover:rounded-3xl" >hair care</a>
                </div>
                <div className="text-5xl capitalize"><h2>home page</h2></div>
            </div>

            <div className="w-full px-10 flex gap-16 relative mt-10">
                <div className="relative top-24 -rotate-10 w-full h-120 bg-white rounded-2xl flex flex-col justify-center items-center text-black px-6 py-6 gap-y-16">
                    <div className="h-100 mt-10">
                        <img src="/img/hair-2.webp" alt=""/>
                    </div>
                    <div className="flex flex-col h-100 gap-y-4 w-full justify-center items-center">
                        <div className="flex capitalize gap-2">
                            <p className=" text-sm font-light text-gray-600">Essential Body Wave (Mink Hair)</p>
                            <span className="font-semibold text-[#5B4E45]">$85.00</span>
                        </div>
                        <div className="w-full h-12 flex justify-center items-center text-xs font-medium ">
                            <button className="flex justify-center items-center bg-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">shop now</button>
                            <button className="flex justify-center items-center border border-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="relative top-6 -rotate-6 w-full h-120 bg-white rounded-2xl flex flex-col justify-center items-center text-black px-6 py-6 gap-y-16">
                    <div className="h-100 mt-10">
                        <img src="/img/hair-2.webp" alt=""/>
                    </div>
                    <div className="flex flex-col h-100 gap-y-4 w-full justify-center items-center">
                        <div className="flex capitalize gap-2 justify-between w-full">
                            <p className="text-sm font-light text-gray-600">avani curl (Mink Hair)</p>
                            <p className="font-semibold text-[#5B4E45]">$85.00</p>
                        </div>
                        <div className="w-full h-12 flex justify-center items-center text-xs font-medium ">
                            <button className="flex justify-center items-center bg-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">shop now</button>
                            <button className="flex justify-center items-center border border-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-120 bg-white rounded-2xl flex flex-col justify-center items-center text-black px-6 py-6 gap-y-16">
                    <div className="h-100 mt-10">
                        <img src="/img/hair-2.webp" alt=""/>
                    </div>
                    <div className="flex flex-col h-100 gap-y-4 w-full justify-center items-center">
                        <div className="flex capitalize gap-2 justify-between w-full">
                            <p className="text-sm font-light text-gray-600">natural body wave (raw Hair)</p>
                            <p className="font-semibold text-[#5B4E45]">$100.00</p>
                        </div>
                        <div className="w-full h-12 flex justify-center items-center text-xs font-medium ">
                            <button className="flex justify-center items-center bg-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">shop now</button>
                            <button className="flex justify-center items-center border border-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="relative top-6 rotate-6 w-full h-120 bg-white rounded-2xl flex flex-col justify-center items-center text-black px-6 py-6 gap-y-16">
                    <div className="h-100 mt-10">
                        <img src="/img/hair-2.webp" alt=""/>
                    </div>
                    <div className="flex flex-col h-100 gap-y-4 w-full justify-center items-center">
                        <div className="flex capitalize gap-2 justify-between w-full">
                            <p className="text-sm font-light text-gray-600">iconic coil (raw Hair)</p>
                            <p className="font-semibold text-[#5B4E45]">$100.00</p>
                        </div>
                        <div className="w-full h-12 flex justify-center items-center text-xs font-medium ">
                            <button className="flex justify-center items-center bg-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">shop now</button>
                            <button className="flex justify-center items-center border border-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="relative top-24 rotate-10 w-full h-120 bg-white rounded-2xl flex flex-col justify-center items-center text-black px-6 py-6 gap-y-16">
                    <div className="h-100 mt-10">
                        <img src="/img/hair-2.webp" alt=""/>
                    </div>
                    <div className="flex flex-col h-100 gap-y-4 w-full justify-center items-center">
                        <div className="flex capitalize gap-2 justify-between w-full">
                            <p className="text-sm font-light text-gray-600">bounce (raw Hair)</p>
                            <p className="font-semibold text-[#5B4E45]">$100.00</p>
                        </div>
                        <div className="w-full h-12 flex justify-center items-center text-xs font-medium ">
                            <button className="flex justify-center items-center bg-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">shop now</button>
                            <button className="flex justify-center items-center border border-[#e7e4d3] text-[#5B4E45] hover:bg-[#5B4E45] hover:text-[#e7e4d3] h-10 w-full capitalize">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mb-8 mt-40">
                <div className="w-80 h-12 flex justify-center relative border border-[#5B4E45] text-[#5B4E45]  hover:bg-[#5B4E45] hover:text-[#e7e4d3] rounded-2xl">
                    <button className="capitalize">view all collection</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Collection
