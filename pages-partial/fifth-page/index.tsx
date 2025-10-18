import Image from "next/image";

export const FifthPage = () => {
  return (
    <div className="w-full h-[200vh] xs:h-[100vh] relative">
      <div className="xs:absolute bottom-20 left-5 z-[-1] xs:block flex flex-col-reverse">
        <div className="w-[60%] xs:ml-0 ml-[20px] xs:w-[20vw] mb-6 mt-4 xs:mt-0">
          <div className="w-full text-[24px] xs:text-[4vh] xs:mb-0 mb-4 playfair-italic text-[#3C210E] uppercase">
            Interesting
          </div>
          <div className="w-full text-[16px] xs:text-[2vh] proza text-[#7B695A]">
            <span className="opacity-0">fffffff</span> Avocado also contains
            vitamin E and natural antioxidants that support cellular health.
          </div>
        </div>
        <div className="relative w-[90%] xs:mx-0 mx-auto xs:w-[25vw] h-[50vh] xs:h-[50vh]">
          <Image src={"/oilImage.png"} alt="banner" fill />
          <div className="absolute w-[40%] h-[400px] right-[-10vw] bottom-0 translate-y-[65%] z-[-1] xs:hidden block">
            <Image src={"/mobLeaf.svg"} alt="banner" fill />
          </div>
        </div>
      </div>
      <div className="bg-[#CADBB7] px-4 xs:px-10 w-[80%] xs:w-[25%] h-[450px] xs:h-[80vh] xs:mt-0 mt-10 absolute xs:bottom-0 left-0 xs:left-[50%] xs:-translate-x-1/2 flex justify-center items-start">
        <div className="w-full h-full relative">
          <div className="w-full pt-4 xs:pt-15 text-[42px] xs:text-[8vh] playfair-italic text-[#3C210E]">
            Color and <br />
            Flavor That <br />
            Speak for
            <br /> Themselves
          </div>
          <Image
            src={"/line.svg"}
            alt="banner"
            width={80}
            height={40}
            color="#86796F"
            className="mb-[10px] xs:mb-[0px]"
          />
          <div className="w-[500px] h-[65%] absolute bottom-0 rigth-0 xs:right-10 xs:translate-x-3/4 xs:z-[-1]">
            <Image
              src={"/oilBottle.svg"}
              alt="banner"
              fill
              className="xs:iniline hidden"
            />{" "}
            <Image
              src={"/avacadoBottle.svg"}
              alt="banner"
              fill
              className="xs:hidden iniline"
            />{" "}
          </div>
        </div>
      </div>
      <div className="Proza xs:w-[25vw] w-[90%] text-[#7B695A] text-[2.2vh] absolute xs:left-auto left-1/2 bottom-10 xs:bottom-auto xs:top-1/2 right-10 xs:-translate-x-0 -translate-x-1/2 -translate-y-1/2">
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
