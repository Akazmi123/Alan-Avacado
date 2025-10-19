"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [image, setImage] = useState(80);
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 950) {
      setImage(80);
    } else {
      setImage(60);
    }
  }, []);
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col xs:justify-between justify-start items-center xs:pl-[5%] relative">
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
        <div className="relative xs:hidden flex justify-center items-center text-[10px] gap-5 xs:pb-10 pt-2 text-[#3C210E]">
          <div>Main</div>
          <div className="opacity-[0.5]">Our Home Amid the Forests</div>
          <div className="absolute bottom-1 translate-y-[100%] left-1/2 xs:hidden block w-[10vh] h-[10vh] -translate-x-1/2">
            <Image src={"/topBanner.svg"} alt="banner" fill />
          </div>
        </div>
        <div className="w-full flex justify-center items-center px-[15px] xs:ml-[-40px]">
          <div className="xs:w-[70vw] w-full xs:max-w-[800px] lg:max-w-[1440px] relative xs:h-full h-[80vh] flex justify-between items-start">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full w-[150vw] xs:w-[50vw] h-[90vh] xs:h-[50vh]">
              <Image src={"/flower.svg"} alt="banner" fill />
            </div>
            <div>
              <div className="playfair-italic xs:text-[10vh] text-[8vw] text-[#3C210E] pt-26 xs:pt-10 xs:leading-20 leading-8 lg:leading-30">
                Southern <br /> forests
              </div>
              <div className="proza text-[#86796F] xs:text-[2vh] text-[3vw] xs:leading-10 lg:leading-20">
                Est. 2007
              </div>
            </div>
            <div className="playfair-italic xs:text-[10vh] text-[8vw] text-[#3C210E] pt-[60vh] xs:pt-42 xs:text-left text-right xs:leading-20 leading-8 lg:leading-30">
              Avocado <br /> oil
            </div>
          </div>
        </div>
        <div className="xs:static absolute bottom-20 xs:ml-[-40px] flex justify-center items-end xs:items-center gap-4 text-[#86796F] proza">
          <div>250ml</div>
          <Image
            src={"/line.svg"}
            alt="banner"
            width={60}
            height={20}
            color="#86796F"
            className="mb-[10px] xs:mb-[0px]"
          />
          <div>750ml</div>
        </div>
        <div className="xs:static absolute left-6 bottom-[15vh] w-full flex justify-start items-center xs:mb-[-40px]">
          <Image src={"/badge.svg"} alt="banner" width={image} height={image} />
        </div>
        <div className="xs:flex hidden justify-center items-center gap-5 pb-10 text-[#3C210E] relative">
          <div>Main</div>
          <div className="opacity-[0.5]">Our Home Amid the Forests</div>
          <div className="opacity-[0.5]">Second Chance for the Fruit</div>
          <div
            className="w-full h-[30px] absolute right-0 top-0"
            style={{
              background:
                "linear-gradient(270deg, #ffffffff 0%, rgba(255, 255, 255, 0) 65.08%)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
