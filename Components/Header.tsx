const Header = () => {
  return (
    <>
    <header className="w-full h-40 absolute px-16.5 py-12 z-10">
        <nav className=" flex justify-between items-center ">
            <div className="w-full flex justify-start gap-x-2 items-center">
                <div className="flex flex-col gap-y-[5px]">
                    <span className="w-5 h-[2px] bg-white rounded-full "></span>
                    <span className="w-5 h-[2px] bg-white rounded-full ml-2 "></span>
                    <span className="w-5 h-[2px] bg-white rounded-full "></span>
                </div>
                <div className="capitalize text-xl text-white">
                    <a href="#">menu</a>
                </div>
            </div>
            <div className="w-full h-full flex justify-center  items-center">
                <img src="/img/logo.png" alt="main logo" />
            </div>
            <div className="flex justify-end items-center w-full h-full gap-3">
                <button className="w-80 h-16 bg-[#f8ebd4] text-black text-xl rounded-4xl capitalize ">
                    <h5>make an appointment</h5>
                </button>
                <div className="w-11 h-11 border-[1px] border-[#e1e1e140] border-solid rounded-full flex justify-center items-center gap-2">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fffdfd" viewBox="0 0 24 24" >
                    <path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path>
                    </svg>
                </div>
                <div className="w-11 h-11 border-[1px] border-[#e1e1e140] border-solid rounded-full flex justify-center items-center gap-2">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fffdfd" viewBox="0 0 24 24" >
                    <path d="M3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.16-.05-.31-.11-.44s-1.72-3.45-1.72-3.45A2 2 0 0 0 17.38 2H6.62c-.76 0-1.45.42-1.79 1.11L3.11 6.56c-.07.14-.11.29-.11.45v13Zm2 0V8h14v12zM17.38 4l1 2H5.62l1-2z"></path><path d="M12 13c-1.65 0-3-1.35-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.65-1.35 3-3 3"></path>
                    </svg>
                </div>

            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
