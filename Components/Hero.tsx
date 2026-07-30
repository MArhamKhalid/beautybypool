const Hero = () => {
  return (
    <>
    <section className="w-full h-dvh relative ">
        
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 inset-0 h-full w-full overflow-hidden object-cover">
            <source src="/img/banner-video-2.mp4 " type="video/mp4"/>
        </video>
        <div className="flex flex-col justify-center items-center relative top-100 z-10 capitalize text-white">
            <div className="text-5xl"><h6>We don't sell hair</h6></div>
            <div className="text-[8rem] leading-38"><h2>We deliver certainty</h2></div>
            <div className="text-2xl"><p>Every bundle tested. Every strand controlled. Hair you never have to question.</p></div>
            <div className="w-140 h-16 flex justify-center gap-4 mt-8">
                <button className="w-50 bg-white text-black cursor-pointer rounded-full capitalize"><a href="#">shop collection</a></button>
                <button className="btn-all rounded-full capitalize"><a href="#">begin your consultation</a></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
