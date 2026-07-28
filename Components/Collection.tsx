const Collection = () => {
  return (
    <>
        <div className="w-full h-24  flex justify-center bg-[#F5EFD6]">
            <div className="h-28 flex justify-center mt-0.5 ">
                    <div className="capitalize w-100 bg-white  flex justify-center items-center rounded-bl-2xl"><img src="/img/medal-1.png" alt="" />
                        <span>Trusted By Thousands</span>
                    </div>
                    <div className="w-100 h-full flex justify-center items-center bg-white">
                        <div className="capitalize w-full h-full flex justify-center items-center bg-[#F5EFD6] rounded-t-2xl"><img src="/img/protection.svg" alt="" />
                            <span>14+ Years Of Expertise</span>
                        </div>
                    </div>
                    <div className="capitalize w-100 flex justify-center items-center bg-white rounded-br-2xl"><img src="/img/thumbs-up.svg" alt="" />
                    <span>Quality You Can Count On</span>
                    </div>

            </div>
        </div>
    <section className="relative w-full h-dvh flex justify-center bg-[#F5EFD6]">
        <img src="/img/bg.png" alt="background" className="absolute top-0 left-0 w-full bg-cover " />
        
            {/* <div className=" absolute right-0 w-450  z-10 "> */}
                <img src="/img/women-back.png" alt="background" className="absolute top-0 right-0 w-220 h-full " />
            {/* </div> */}
        <div className="w-full flex flex-col items-center py-30 gap-y-8 z-0">
            <div className="text-7xl">
                <h2><span className="text-9xl">Shop by</span> Collection</h2>
            </div>
            <div>
                <p>Explore Curated Collections Designed For Every Mood, Lifestyle, And Finish</p>
            </div>
            <div className="h-15 bg-white gap-18 capitalize flex justify-center items-center font-semibold rounded-4xl px-2">
                <a href="" className="w-28 h-12 bg-[#5B4E45] flex justify-center items-center rounded-3xl text-white">home page</a>
                <a href="" className="uppercase">wefts</a>
                <a href="" className="uppercase">5x5 lace closure</a>
                <a href="" className="uppercase">wigs</a>
                <a href="">specialty hair</a>
                <a href="">hair care</a>
            </div>
            <div className="text-5xl capitalize"><h2>home page</h2></div>
        </div>

    </section>
    </>
  )
}

export default Collection
