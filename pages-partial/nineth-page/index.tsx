import Image from "next/image";

export const NinethPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative xs:block hidden">
        <div className="absolute left-30 top-0 -translate-x-1/2 z-[-10] w-[40vw] h-[50vh]">
          <Image src={"/avocadosLeaves.png"} alt="banner" fill />
        </div>
        <div className="bg-[#E5F0F3] w-[25%] absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center">
          <div className="w-[70%] m-auto mb-[40px] mt-[60px] text-[6vh] playfair-italic text-[#3C210E]">
            From <br />
            Nature to <br />
            Your Story
          </div>
        </div>
        <div className="w-[50vh] mt-[40px] text-[12px] proza text-[#7B695A] absolute top-[8vh] right-[2vw]">
          {" "}
          <span className="opacity-0">fffffff</span> The finished product is
          universal: you can use it for salads, frying eggs and vegetables,
          marinades, and even baking. It’s not only healthy but also convenient
          — avocado oil easily replaces other oils in recipes.
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-[-10]">
          {" "}
          <div className="relative w-[30vw] h-[40vh]">
            <Image src={"/avocadosTree.png"} alt="banner" fill />{" "}
          </div>
          <Image
            src={"/avacadosLeafSec.png"}
            alt="banner"
            width={400}
            height={400}
            className="absolute right-0 bottom-50 translate-x-[70%] z-[-10]"
          />
        </div>{" "}
        <div className="absolute left-[2vw] bottom-[10vh]">
          <div className="w-full text-[4vh] playfair-italic text-[#3C210E] uppercase">
            Fact
          </div>
          <div className="w-[23vw] mt-[10px] text-[2vh]  proza text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> Avocado oil retains its
            flavor and freshness longer thanks to natural antioxidants.
          </div>
        </div>
        <div className="absolute right-30 bottom-10 translate-x-1/2 z-[-10] w-[20vw] h-[30vh]">
          <Image src={"/avocadosLeaf.png"} alt="banner" fill />
        </div>{" "}
      </div>

      {/* Mobile view */}
      <div className="w-full xs:hidden block">
        <div className="w-full mb-10 relative">
          <div className="w-full mx-auto h-[430px] absolute bottom-0 left-4 translate-y-[18%] z-[-1]">
            <Image src={"/mobBreadLeave.png"} alt="banner" fill />{" "}
          </div>
          <div className="w-[90%] mx-auto proza text-[#7B695A] text-[18px] mb-10">
            <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase mb-2">
              Fact
            </div>
            <div className="w-full mx-auto proza-italic text-[#7B695A] text-[16px] mb-10">
              <span className="opacity-0">fffffff</span> Avocado oil retains its
              flavor and freshness longer thanks to natural antioxidants.
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end items-center mb-10">
          <div className="bg-[#E5F0F3] w-[90%] flex justify-center items-center">
            <div className="w-[70%] m-auto mb-[40px] mt-[60px] text-[6vh] playfair-italic text-[#3C210E]">
              From <br />
              Nature to <br />
              Your Story
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
        </div>

        <div className="w-[90%] mx-auto mb-10">
          <div className="w-full proza text-[#7B695A] text-[16px] mb-10">
            <span className="opacity-0">fff</span> For us, avocado oil is more
            than just a product. It is a story of the land, of the people who
            work on it, and of the fruit-bearing trees we nurture with care.
            Each bottle is a piece of Australian nature that we share with you.
          </div>
        </div>

        <div className="w-full mx-auto h-[554px] relative mb-10">
          <div className="w-full w-full h-[554px] absolute bottom-0 z-[-1] translate-y-[41%]">
            <Image src={"/mobGardenBranch.png"} alt="banner" fill />{" "}
          </div>
          <Image src={"/mobGarden.png"} alt="banner" fill />{" "}
        </div>
      </div>
    </>
  );
};
