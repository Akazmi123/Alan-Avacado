import Image from "next/image";

export const SixthPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative xs:block hidden">
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
                  <span className="opacity-0">fffffff</span> Food lovers often
                  use avocado oil not only for cooking but also for seasoning
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
          <div className="w-[60%] m-auto mb-[90px] text-[6vh] playfair-italic text-[#3C210E] leading-[1]">
            Quality <br />
            Control <br />
            and <br /> Attention to <br />
            Detail
            <Image
              src={"/line.svg"}
              alt="banner"
              width={60}
              height={20}
              color="#86796F"
              className="mt-[10px]"
            />
          </div>
        </div>

        <div className="absolute w-[25%] right-10 bottom-[10vh] porza text-[#7B695A] text-[1.8vh]">
          <span className="opacity-0">fffffff</span> Every batch of oil is
          tested for acidity, freshness, and flavor. We do this to ensure that
          every bottle meets international Extra Virgin standards. For us, it’s
          not just about producing oil — it’s about creating a product you can
          trust. <br />
          <span className="opacity-0">fffffff</span> We are proud that our
          entire team is involved in the process — from farmers who harvest the
          crop to technologists who oversee the pressing.
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full xs:hidden block">
        <div className="w-full mb-4 relative">
          <div className="w-[70%] h-[391px] absolute right-0 top-0 -translate-y-1/2 z-[-2]">
            <Image src={"/factLeaves.png"} alt="banner" fill />
          </div>
          <div className="w-[50%] ml-[16px]">
            <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase mb-2">
              Fact
            </div>
            <div className="w-full text-[16px] proza-italic text-[#7B695A]">
              {" "}
              <span className="opacity-0">fffffff</span> A high smoke point
              (around 260°C / 500°F) makes it one of the best oils for frying.
            </div>
          </div>
        </div>
        <div className="relative h-[401px] w-full mb-4">
          <Image src={"/mobilePour.png"} alt="banner" fill />
        </div>
        <div className="w-[50%] ml-[16px] mb-14">
          <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase mb-2">
            Interesting
          </div>
          <div className="w-full text-[16px] proza-italic text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> Food lovers often use
            avocado oil not only for cooking but also for seasoning cast-iron
            pans.
          </div>
        </div>
        <div className="w-full flex justify-end mb-[30px]">
          <div className="bg-[#CADBB7] w-[80%] h-[280px] flex justify-end items-center">
            <div className="w-[70%] text-[36px] playfair-italic text-[#3C210E]">
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
        </div>
        <div className="w-[90%] mx-auto proza text-[#7B695A] text-[16px] mb-10">
          <span className="opacity-0">ffff</span> Every batch of oil is tested
          for acidity, freshness, and flavor. We do this to ensure that every
          bottle meets international Extra Virgin standards. For us, it’s not
          just about producing oil — it’s about creating a product you can
          trust. <br />
          <span className="opacity-0">ffff</span> We are proud that our entire
          team is involved in the process — from farmers who harvest the crop to
          technologists who oversee the pressing.
        </div>
      </div>
    </>
  );
};
