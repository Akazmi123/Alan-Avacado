"use client";
import Image from "next/image";

export const ErrorPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col xs:justify-between justify-start items-center xs:pl-[5%] relative">
        <div className="w-[40%] xs:w-[20%] absolute xs:h-[40vh] h-[30vh] bottom-0 left-0">
          <Image src={"/errorLeft.png"} alt="banner" fill />
        </div>{" "}
        <div className="w-[40%] xs:w-[20%] absolute xs:h-[50vh] h-[40vh] top-0 right-0">
          <Image src={"/errorRight.png"} alt="banner" fill />{" "}
        </div>
        <div className="absolute left-1/2 xs:block hidden top-0 w-[20vh] h-[10vh] -translate-x-1/2">
          <Image src={"/topBanner.svg"} alt="banner" fill />
        </div>
        <div className="w-full flex justify-between xs:border-none border-b-1 items-center xs:mt-[40px] py-2 px-[5%] xs:px-0">
          <div className="text-[#3C210E] text-[3vw] xs:text-[18px]">
            Southern Forests <br /> Food Technology
          </div>
          <div className="text-[#3C210E] text-[3vw] xs:text-[18px] px-5 py-1 border border-[#3C210E] rounded-full">
            Contact Us
          </div>
        </div>
        <div className="w-full flex justify-center items-center px-[15px] xs:ml-[-40px]">
          <div className="xs:w-[70vw] w-full xs:max-w-[800px] lg:max-w-[1440px] relative xs:h-full h-[80vh] flex justify-center items-start">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 xs:-translate-y-1/2 w-full xs:w-[50vw] w-[30vw] xs:h-[50vh] h-[30vh]">
              <Image src={"/flower.svg"} alt="banner" fill />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] leading-[0] mt-[-12vh] playfair text-[#CADBB7] z-[-1]">
              404
            </div>
          </div>
        </div>
        <div className="xs:text-[6vh] text-[4vh] xs:static absolute bottom-20 xs:ml-[-40px] flex justify-center items-end xs:items-center gap-4 text-[#3C210E] playfair-italic">
          Page not found
        </div>
        <div className="xs:static absolute left-6 bottom-[15vh] w-full flex justify-start items-center xs:mb-[-40px]"></div>
      </div>
    </>
  );
};
