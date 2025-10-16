import Image from "next/image";

export const TewelvethPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute top-10 right-5 z-[10]">
        <div className="w-[400px] p-10 pb-4">
          <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase">
            Interesting
          </div>
          <div className="w-full text-[14px] proza text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> The spray format has
            become especially popular with customers who value portion control
            and ease in their cooking.
          </div>
        </div>
      </div>
      <div className="bg-[#E5F0F3] w-[450px] h-[45vh] absolute left-[6%] top-0 z-[5]">
        <div className="w-full h-full relative flex justify-start items-end p-15">
          <div className="text-[40px] playfair-italic text-[#3C210E]">
            Packaging <br />
            Designed
            <br /> with Care
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 translate-x-[50px] w-[80%] h-[100vh]">
        <Image src={"/oilBottles.png"} alt="banner" fill />
      </div>
      <div className="absolute bottom-20 left-[10%] w-[300px] proza text-[#7B695A] text-[12px]">
        {" "}
        <span className="opacity-0">fffffff</span>We made sure our avocado oil
        is convenient to use in any situation. That’s why we offer several
        packaging formats: <br />
        <br />
        <span className="proza-bold">250 ml</span> glass bottle — a compact
        option for everyday use, first-time tasting, or as a gift. <br />
        <br />
        <span className="proza-bold">750 ml</span> glass bottle — the
        family-sized format for those who cook often and use oil regularly.{" "}
        <br />
        <br />
        <span className="proza-bold">200 ml</span> spray — a modern solution for
        light dosing. Perfect for grilling, roasting vegetables, or adding just
        the right touch to salads. <br />
        <br />
        Each bottle is made of dark glass or aluminum to protect the oil from
        sunlight and keep it fresh longer.
      </div>
    </div>
  );
};
