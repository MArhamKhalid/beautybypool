
const FAQ = () => {
  return (
    <section className="w-full h-350 px-20 bg-[#5B4E45]">
        <div className="flex flex-col justify-center items-center gap-y-40 w-full">
            <div className="w-full h-150 bg-white rounded-b-3xl px-24 py-24 flex flex-col gap-y-1.58">
                <div className="w-full px-26 text-[#5B4E45]">
                    <div className="flex justify-center flex-col text-8xl capitalize leading-28 ">
                        <h1 className="text-extrabold">
                            <span className="text-[40px]">Your perfect</span> hair—
                        </h1>
                        <h2 className="text-center">Curated For You</h2>
                    </div>
                </div>
                <div className="w-full px-26 mt-18 ">
                    <div className="flex justify-between items-center capitalize text-[#5B4E45]">
                        <h5 className="text-xl">Answer a few quick questions and receive a personalized recommendation tailored to your look, lifestyle, and standards.</h5>
                        <button className="btn-all capitalize">begin your concultation</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center w-326 text-white gap-y-20">   
                <div className=" text-7xl flex justify-center">
                    <h2>A Luxury Hair<span> Wig Experience</span> Quiz</h2>
                </div>
                <div className="flex justify-center  gap-x-6">
                    <div className="flex flex-col gap-y-6 w-full ">
                        <div className="w-full flex justify-center items-center gap-x-4">
                            <div className="w-15 h-12 rounded-full bg-white flex justify-center items-center text-[#5B4E45]">
                                <p>01</p>
                            </div>
                            <div className="w-full h-0.5 bg-[#e7e4d3]"></div>
                        </div>
                        <div className="capitalize text-[20px] h-16">
                            <h2>What's Your Ideal Hair Transformation?</h2>
                        </div>
                        <div>
                            <ul className="w-full capitalize flex flex-col gap-y-1.5 text-[#5B4E45]">
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
                            <div className="w-15 h-12 rounded-full bg-white flex justify-center items-center text-[#5B4E45]">
                                <p>02</p>
                            </div>
                            <div className="w-full h-0.5 bg-[#e7e4d3]"></div>
                        </div>
                        <div className="capitalize text-[20px] h-16">
                            <h2>How Often Do You Like To Change Your Hairstyle?</h2>
                        </div>
                        <div>
                            <ul className="w-full capitalize flex flex-col gap-y-1.5 text-[#5B4E45]">
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
                            <div className="w-15 h-12 rounded-full bg-white flex justify-center items-center text-[#5B4E45]">
                                <p>03</p>
                            </div>
                            <div className="w-full h-0.5 bg-[#e7e4d3]"></div>
                        </div>
                        <div className="capitalize text-[20px] h-16">
                            <h2>What Matters Most To You In A Luxury Wig?</h2>
                        </div>
                        <div>
                            <ul className="w-full capitalize flex flex-col gap-y-1.5 text-[#5B4E45]">
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
