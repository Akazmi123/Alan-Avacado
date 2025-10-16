import Image from "next/image";

export const EighthPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <Image
        src={"/vegFlower.png"}
        alt="banner"
        width={500}
        height={500}
        className="absolute left-70 bottom-0 z-[-10]"
      />
      <div className="absolute left-[50%] -translate-x-1/2 top-0 z-[1]">
        <Image src={"/vegSpray.png"} alt="banner" width={500} height={500} />
        <div className="w-[350px] mt-[40px] text-[12px] proza text-[#7B695A]">
          {" "}
          <span className="opacity-0">fffffff</span> The finished product is
          universal: you can use it for salads, frying eggs and vegetables,
          marinades, and even baking. It’s not only healthy but also convenient
          — avocado oil easily replaces other oils in recipes.
        </div>
      </div>
      <div className="bg-[#CADBB7] w-[360px] h-[90vh] absolute left-10 bottom-0 z-[-1]">
        <div className="w-full h-full relative flex justify-center items-end">
          <Image
            src={"/vegSplash.png"}
            alt="banner"
            width={400}
            height={400}
            className="absolute top-0 right-20 translate-x-1/2 -translate-y-[30px]"
          />

          <div className="w-[60%] text-[60px] playfair-italic text-[#3C210E] pb-30">
            Oil for <br />
            Every
            <br /> Kitchen
          </div>
        </div>
      </div>
      <div className="absolute right-10 bottom-0 z-[1]">
        <div className="mb-50 ml-10">
          <div className="w-full text-[20px] playfair-italic text-[#3C210E] uppercase">
            Interesting
          </div>
          <div className="w-[300px] mt-[10px] text-[12px] proza text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> Many of our customers say
            that after trying avocado oil once, they no longer return to olive
            oil in everyday cooking.
          </div>
        </div>
        <Image src={"/vegBread.png"} alt="banner" width={450} height={450} />
      </div>
    </div>
  );
};
