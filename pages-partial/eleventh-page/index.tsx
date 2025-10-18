import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export const EleventhPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="w-full h-[100vh] relative flex justify-center items-center gap-10 xs:block hidden">
        <div className="w-[70vw]">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="rounded-lg p-5 mb-4"
              style={{
                boxShadow: "0px 0px 25px 0px #81926E26",
              }}
            >
              <div className="flex justify-between items-start">
                <div className="relative w-[10vw] h-[20vh]">
                  <Image src={"/smallBottle.png"} alt="banner" fill />
                </div>
                <div className="flex flex-col justify-between items-start gap-5">
                  <div className="text-[2vh] playfair-italic text-[#3C210E]">
                    Name of Product
                  </div>
                  <div className="proza text-[1.5vh] text-[#7B695A]">
                    Lorem ipsum dolor sit amet consectetur. Lacus cursus quis
                    sit varius donec id id nam. Montes suspendisse mi vel sit at
                    ac dui tortor.
                  </div>
                  <div className="proza text-[1.5vh] text-[#7B695A]">
                    Lorem ipsum dolor sit.
                  </div>
                  <div className="proza text-[1.5vh] text-[#3C210E] bg-[#CADBB7] px-6 py-1 rounded-full">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[20%] rounded-lg border-[4px solid #E5F0F3] shadow-lg p-5">
          <div className="flex flex-col justify-between items-start">
            <div className="w-full h-[40vh] relative">
              <div className="absolute right-0 top-0 z-[99] proza text-[10px] text-white bg-black px-4 py-1 rounded-full">
                The Best
              </div>

              <Image src={"/smallBottle.png"} alt="banner" fill />
            </div>
            <div className="flex flex-col justify-between items-start gap-3">
              <div className="text-[20px] playfair-italic text-[#3C210E]">
                Name of Product
              </div>
              <div className="proza text-[12px] text-[#7B695A]">
                Lorem ipsum dolor sit amet consectetur. Lacus cursus quis sit
                varius donec id id nam. Montes suspendisse mi vel sit at ac dui
                tortor.
              </div>
              <div className="proza text-[12px] text-[#7B695A]">
                Lorem ipsum dolor sit.
              </div>
              <div className="m-auto mt-4 proza text-[12px] text-[#3C210E] bg-[#CADBB7] px-6 py-1 rounded-full">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full xs:hidden block">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          loop
          className="w-full mx-auto rounded-lg p-5 mb-10 flex"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-[90%] mx-auto rounded-lg p-5"
                style={{
                  boxShadow: "0px 0px 25px 0px #81926E26",
                }}
              >
                <div className="flex flex-col justify-between items-start">
                  {/* Image Container */}
                  <div className="relative w-full h-[331px] mb-4">
                    <Image
                      src="/smallBottle.png"
                      alt="Product banner"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between items-start gap-5 w-full">
                    <div className="text-[24px] playfair-italic text-[#3C210E]">
                      Name of Product
                    </div>
                    <div className="proza text-[16px] text-[#7B695A]">
                      Lorem ipsum dolor sit amet consectetur. Lacus cursus quis
                      sit varius donec id id nam. Montes suspendisse mi vel sit
                      at ac dui tortor.
                    </div>
                    <div className="proza text-[16px] text-[#7B695A]">
                      Lorem ipsum dolor sit.
                    </div>
                    <button className="text-[16px] proza-bold text-[#3C210E] bg-[#CADBB7] px-8 py-2 rounded-full">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full flex justify-center gap-5 items-center mb-10">
          <Image
            src={activeIndex === 0 ? "/checked.png" : "/unChecked.svg"}
            alt="banner"
            width={10}
            height={10}
          />
          <Image
            src={activeIndex === 1 ? "/checked.png" : "/unChecked.svg"}
            alt="banner"
            width={10}
            height={10}
          />
          <Image
            src={activeIndex === 2 ? "/checked.png" : "/unChecked.svg"}
            alt="banner"
            width={10}
            height={10}
          />
        </div>
        <div
          className="w-[90%] mx-auto rounded-lg p-5 mb-10"
          style={{
            boxShadow: "0px 0px 25px 0px #81926E26",
          }}
        >
          <div className="flex flex-col justify-between items-start">
            <div className="relative w-full h-[331px] mb-4">
              <div className="absolute right-0 top-0 z-[99] proza text-[10px] text-white bg-black px-4 py-1 rounded-full">
                The Best
              </div>
              <Image src={"/smallBottle.png"} alt="banner" fill />
            </div>
            <div className="flex flex-col justify-between items-start gap-5 w-full">
              <div className="text-[24px] playfair-italic text-[#3C210E]">
                Name of Product
              </div>
              <div className="proza text-[16px] text-[#7B695A]">
                Lorem ipsum dolor sit amet consectetur. Lacus cursus quis sit
                varius donec id id nam. Montes suspendisse mi vel sit at ac dui
                tortor.
              </div>
              <div className="proza text-[16px] text-[#7B695A]">
                Lorem ipsum dolor sit.
              </div>
              <div className="w-full flex justify-center">
                <div className="text-[16px] proza-bold text-[#3C210E] bg-[#CADBB7] px-8 py-2 rounded-full">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
