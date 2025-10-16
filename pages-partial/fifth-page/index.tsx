import Image from "next/image";

export const FifthPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute bottom-20 left-5 z-[-1]">
        <div className="w-[400px] p-10 pb-4">
          <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase">
            Interesting
          </div>
          <div className="w-full text-[14px] proza text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> Avocado also contains
            vitamin E and natural antioxidants that support cellular health.
          </div>
        </div>
        <Image src={"/oilImage.png"} alt="banner" width={400} height={400} />
      </div>
      <div className="bg-[#CADBB7] px-10 w-[25%] h-[80vh] absolute bottom-0 left-[50%] -translate-x-1/2 flex justify-center items-start">
        <div className="w-full h-full relative">
          <div className="w-full pt-15 text-[50px] playfair-italic text-[#3C210E]">
            Color and <br />
            Flavor That <br />
            Speak for
            <br /> Themselves
          </div>
          <div className="w-[500px] h-[65%] absolute bottom-0 right-10 translate-x-3/4 z-[-1]">
            <Image src={"/oilBottle.svg"} alt="banner" fill />{" "}
          </div>
        </div>
      </div>
      <div className="Proza text-[#7B695A] absolute top-1/2 right-10 -translate-y-1/2 w-[400px]">
        <div>
          {" "}
          <span className="opacity-0">fffffff</span> After pressing, the oil
          takes on its signature greenish tint — a sign that the product is
          unrefined and has retained its natural pigments. Unlike
          neutral-tasting oils, our avocado oil keeps the rich flavor of fresh
          avocado. <br />
          <br />
          <span className="opacity-0">fffffff</span>
          This flavor doesn’t overpower dishes but enhances them. From salads to
          sautéed vegetables or meats, the oil becomes part of your cooking
          style rather than just “an ingredient.”
        </div>
      </div>
    </div>
  );
};
