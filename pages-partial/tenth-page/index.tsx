import Image from "next/image";

export const TenthPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative xs:block hidden">
        <div className="bg-[#CADBB7] w-[24vw] h-[60vh] absolute right-50 bottom-0 z-[5]">
          <div className="w-full h-full relative flex justify-center items-start">
            <div className="text-[5vh] playfair-italic text-[#3C210E] pb-10">
              <Image
                src={"/line.svg"}
                alt="banner"
                width={60}
                height={20}
                color="#86796F"
                className="pt-[30px]"
              />
              Our <br />
              Products <br />
              That We are <br />
              Proud of
            </div>
          </div>
        </div>
        <div className="absolute right-20 top-0 z-[-2] w-[20vw] h-[50vh]">
          <Image src={"/flowerProd.png"} alt="banner" fill />
        </div>
        <div className="absolute top-0 left-[35%] w-[40vw] h-[50vh] -translate-x-1/2">
          <Image src={"/prodGarden.png"} alt="banner" fill />
        </div>
        <Image
          src={"/prodLeave.png"}
          alt="banner"
          width={350}
          height={350}
          className="absolute bottom-0 left-[45%] -translate-x-1/2"
        />

        <div className="w-[20vw] mt-[40px] text-[2vh] proza text-[#7B695A] absolute bottom-[10vh] left-[20%]">
          <div className="w-full text-[4vh] playfair-italic text-[#3C210E] uppercase">
            About the <br />
            company
          </div>
          <br />
          <div>
            {" "}
            <span className="opacity-0">fffffff</span> The finished product is
            universal: you can use it for salads, frying eggs and vegetables,
            marinades, and even baking. It’s not only healthy but also
            convenient — avocado oil easily replaces other oils in recipes.
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full xs:hidden block">
        <div className="w-[90%] mx-auto proza text-[#7B695A] text-[18px] mb-10">
          <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase mb-2">
            About the company
          </div>
          <div className="w-full mx-auto proza-italic text-[#7B695A] text-[16px]">
            <span className="opacity-0">fffffff</span> Our mission is to create
            products that bring health benefits, protect nature, and inspire
            families to live healthier lives.
          </div>
        </div>

        <div className="relative w-[90%] mx-auto h-[203px]  mb-10">
          <Image src={"/mobTrees.png"} alt="banner" fill />
        </div>
        <div className="relative w-full h-[382px] mb-30">
          <div className="w-[80%] h-[470px] absolute right-0 bottom-0 z-[-1] translate-y-[60%]">
            <Image src={"/mobProd.png"} alt="banner" fill />{" "}
          </div>
          <Image src={"/mobRoad.png"} alt="banner" fill />
        </div>
        <div className="w-full flex justify-end items-center mb-30 relative">
          <div className="w-[80%] h-[300px] absolute left-0 bottom-0 z-[-1] translate-y-[48%]">
            <Image src={"/mobProd2.png"} alt="banner" fill />{" "}
          </div>
          <div className="bg-[#CADBB7] w-[80%] flex justify-end items-center py-[20px]">
            <div className="w-[70%] text-[34px] playfair-italic text-[#3C210E]">
              Our Products <br />
              That We Are <br />
              Proud of
              <Image
                src={"/line.svg"}
                alt="banner"
                width={80}
                height={40}
                color="#86796F"
                className="mt-[10px] py-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
