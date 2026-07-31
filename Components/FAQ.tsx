
const FAQ = () => {
  return (
    <section className="w-full h-340 px-20 bg-[#5B4E45]">
        <div className="flex flex-col justify-center items-center gap-y-20 w-full">
            <div className="w-full h-144 bg-white rounded-b-[20px] px-10 py-16 lg:py-24 flex flex-col gap-y-1.5">
                <div className="w-full flex justify-start pl-46 text-[#5B4E45]">
                    <div className="flex justify-center flex-col text-8xl capitalize leading-30 ">
                        <h1 className="text-extrabold flex gap-x-2">
                            <span className="text-[40px]">Your perfect</span> <h2 className=" text-[120px]">hair—</h2>
                        </h1>
                        <div className="pl-118">
                        <h2 className="text-center text-[120px]">Curated For You</h2></div>
                    </div>
                </div>
                <div className=" w-full h-full flex items-center mt-10  ">
                    <div className="w-full flex justify-center gap-53 items-center capitalize text-[#5B4E45]  font-mono">
                        <div><p className="text-[21px] font-sans leading-9">Answer a few quick questions and receive a personalized recommendation<br/>tailored to your look, lifestyle, and standards.</p></div>
                        <div><button className="btn-all capitalize font-sans text-[18px]">begin your concultation</button></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center w-326 text-white gap-y-24">   
                <div className=" text-[64px] flex justify-center">
                    <h2>A Luxury Hair<span> Wig Experience</span> Quiz</h2>
                </div>
                <div className="flex justify-center  gap-x-8">
                    <div className="flex flex-col gap-y-6 w-full ">
                        <div className="w-full flex justify-center items-center gap-x-4">
                            <div className="w-15 h-12 rounded-full bg-white flex justify-center items-center text-[#5B4E45] text-xl">
                                <p>01</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#e7e4d3]"></div>
                        </div>
                        <div className="capitalize text-[20px] h-16  font-semibold">
                            <p>What's Your Ideal Hair Transformation?</p>
                        </div>
                        <div>
                            <ul className="w-full capitalize flex flex-col gap-y-1 text-[#5B4E45]">
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    a. slee, straight, and sophisticated
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    B. Voluminous Curls With Glam Vibes
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    C. Natural, Everyday Elegance
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    D. Bold And Trend-Setting Style
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 w-full ">
                        <div className="w-full flex justify-center items-center gap-x-4">
                            <div className="w-15 h-12 rounded-full bg-white flex justify-center items-center text-[#5B4E45] text-xl">
                                <p>02</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#e7e4d3]"></div>
                        </div>
                        <div className="capitalize text-[20px] h-16  font-semibold">
                            <p>How Often Do You Like To Change Your Hairstyle?</p>
                        </div>
                        <div>
                            <ul className="w-full capitalize flex flex-col gap-y-1 text-[#5B4E45]">
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    A. I Stick To One Signature Look
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    B. Occasionally, For Special Events
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    C. I Like Seasonal Changes
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    D. Frequently — I Love Experimenting
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 w-full ">
                        <div className="w-full flex justify-center items-center gap-x-4">
                            <div className="w-15 h-12 rounded-full bg-white flex justify-center items-center text-[#5B4E45] text-xl">
                                <p>03</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#e7e4d3]"></div>
                        </div>
                        <div className="capitalize text-[20px] h-16 font-semibold">
                            <p>What Matters Most To You In A Luxury Wig?</p>
                        </div>
                        <div>
                            <ul className="w-full capitalize flex flex-col gap-y-1 text-[#5B4E45]">
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px] px-3">
                                    A. Premium Quality And Long-Lasting Wear
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    B. Comfort And Natural Feel
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    C. Perfect Color Match And Styling
                                </li>
                                <li className="w-full h-14 bg-white flex  items-center rounded-[5px]  px-3">
                                    D. Versatility And Easy Maintenance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ
