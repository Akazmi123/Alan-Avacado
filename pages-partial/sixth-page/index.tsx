import Image from "next/image";

export const SixthPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <Image
        src={"/pourLeaves.svg"}
        alt="banner"
        width={500}
        height={500}
        className="absolute left-0 top-0 z-[-1]"
      />
      <div className="absolute bottom-0 left-[40%] -translate-x-1/2 z-[-1]">
        <div className="flex justify-between items-center">
          <div className="w-[14vw] pb-4 mr-10">
            <div className="w-full text-[3.5vh] playfair-italic text-[#3C210E] uppercase">
              Fact
            </div>
            <div className="w-full text-[2vh] proza text-[#7B695A]">
              {" "}
              <span className="opacity-0">fffffff</span> A high smoke point
              (around 260°C / 500°F) makes it one of the best oils for frying.
            </div>
          </div>
          <div>
            <div className="w-[20vw] pb-4">
              <div className="w-full text-[3.5vh] playfair-italic text-[#3C210E] uppercase">
                Interesting
              </div>
              <div className="w-full text-[2vh] proza text-[#7B695A]">
                {" "}
                <span className="opacity-0">fffffff</span> Food lovers often use
                avocado oil not only for cooking but also for seasoning
                cast-iron pans.
              </div>
            </div>
            <div className="relative w-[20vw] h-[50vh]">
              <Image src={"/pourOil.png"} alt="banner" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E5F0F3] w-[25%] h-[55vh] absolute top-0 right-10 flex justify-center items-center">
        <div className="w-[50%] m-auto mb-[40px] text-[6vh] playfair-italic text-[#3C210E]">
          Quality <br />
          Control <br />
          and <br /> Attention to <br />
          Detail
        </div>
      </div>

      <div className="absolute w-[25%] right-10 bottom-[10vh] porza text-[#7B695A] text-[1.8vh]">
        <span className="opacity-0">fffffff</span> Every batch of oil is tested
        for acidity, freshness, and flavor. We do this to ensure that every
        bottle meets international Extra Virgin standards. For us, it’s not just
        about producing oil — it’s about creating a product you can trust.{" "}
        <br />
        <span className="opacity-0">fffffff</span> We are proud that our entire
        team is involved in the process — from farmers who harvest the crop to
        technologists who oversee the pressing.
      </div>
    </div>
  );
};
