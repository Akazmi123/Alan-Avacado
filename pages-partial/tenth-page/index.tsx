import Image from "next/image";

export const TenthPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="bg-[#CADBB7] w-[24vw] h-[60vh] absolute right-50 bottom-0 z-[5]">
        <div className="w-full h-full relative flex justify-center items-end">
          <div className="text-[7vh] playfair-italic text-[#3C210E] pb-10">
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
          marinades, and even baking. It’s not only healthy but also convenient
          — avocado oil easily replaces other oils in recipes.
        </div>
      </div>
    </div>
  );
};
