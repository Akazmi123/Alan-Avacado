import Image from "next/image";

export const EighthPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative xs:block hidden">
        <div className="absolute left-70 bottom-0 z-[-10] w-[40vw] h-[40vh]">
          <Image src={"/vegFlower.png"} alt="banner" fill />
        </div>
        <div className="absolute left-[50%] w-[40vw] h-[50vh] -translate-x-1/2 top-0 z-[1]">
          {" "}
          <div className="relative left-[8vw] top-0 z-[-10] w-[30vw] h-[40vh]">
            <Image src={"/vegSpray.png"} alt="banner" fill />{" "}
          </div>
          <div className="w-[20vw] mt-[20vh] text-[2vh] proza text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> The finished product is
            universal: you can use it for salads, frying eggs and vegetables,
            marinades, and even baking. It’s not only healthy but also
            convenient — avocado oil easily replaces other oils in recipes.
          </div>
        </div>
        <div className="bg-[#CADBB7] w-[24vw] h-[85vh] absolute left-10 bottom-0 z-[-1]">
          <div className="w-[40vw] h-[50vh] relative flex justify-center items-end">
            <div className="absolute top-0 right-20 translate-x-1/2 -translate-y-[30px] z-[-10] w-[40vw] h-[40vh]">
              <Image src={"/vegSplash.png"} alt="banner" fill />{" "}
            </div>

            <div className="w-full px-10 text-[5vw] playfair-italic text-[#3C210E] ">
              Oil for <br />
              Every
              <br /> Kitchen
            </div>
          </div>
        </div>
        <div className="absolute  right-0 bottom-0 z-[1]">
          <div className="mb-[35vh]">
            <div className="w-full text-[2.2vh] playfair-italic text-[#3C210E] uppercase">
              Interesting
            </div>
            <div className="w-[25vw] mt-[10px] text-[1.5vh]  proza text-[#7B695A]">
              {" "}
              <span className="opacity-0">fffffff</span> Many of our customers
              say that after trying avocado oil once, they no longer return to
              olive oil in everyday cooking.
            </div>
          </div>{" "}
          <div className="relative right-[10vw] bottom-0 z-[-10] w-[30vw] h-[40vh]">
            <Image src={"/vegBread.png"} alt="banner" fill />{" "}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full xs:hidden block">
        <div className="bg-[#CADBB7] w-[80%] h-[320px] flex justify-start items-end pl-10 pb-4 mb-10 relative">
          <div className="w-[90%] h-[200px] absolute mb-10 top-0 right-0 translate-x-[30%] -translate-y-[35%]">
            <Image src={"/vegSplash.png"} alt="banner" fill />{" "}
          </div>
          <div className="w-[70%] h-[260px] absolute mb-10 bottom-0 right-0 translate-x-[50%] translate-y-[65%] z-[-1]">
            <Image src={"/mobTulip.png"} alt="banner" fill />{" "}
          </div>
          <div className="w-[70%] text-[34px] playfair-italic text-[#3C210E]">
            Quality <br />
            Control and <br />
            Attention to <br />
            Detail
            <Image
              src={"/line.svg"}
              alt="banner"
              width={80}
              height={40}
              color="#86796F"
              className="mt-[10px]"
            />
          </div>
        </div>
        <div className="w-[90%] mx-auto proza text-[#7B695A] text-[16px] mb-10">
          <span className="opacity-0">fff</span> The finished product is
          universal: you can use it for salads, frying eggs and vegetables,
          marinades, and even baking. It’s not only healthy but also convenient
          — avocado oil easily replaces other oils in recipes.
        </div>
        <div className="w-full h-[388px] relative mb-10">
          <Image src={"/mobSpray.png"} alt="banner" fill />{" "}
        </div>
        <div className="w-[90%] mx-auto proza text-[#7B695A] text-[18px] mb-10">
          <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase mb-2">
            Interesting
          </div>
          <div className="w-full mx-auto proza-italic text-[#7B695A] text-[18px] mb-10">
            {" "}
            <span className="opacity-0">fffffff</span> Many of our customers say
            that after trying avocado oil once, they no longer return to olive
            oil in everyday cooking.
          </div>
        </div>
        <div className="w-[90%] mx-auto h-[269px] relative mb-10">
          <Image src={"/mobBread.png"} alt="banner" fill />{" "}
        </div>
      </div>
    </>
  );
};
