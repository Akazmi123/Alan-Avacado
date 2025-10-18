import Image from "next/image";

export const SeventhPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative xs:block hidden">
        <div className="w-full h-full p-5 flex justify-center items-center gap-10">
          <div className="w-[60%] h-[90%] relative p-10">
            <Image src={"/scentOil.png"} alt="banner" fill />
          </div>
          <div>
            <div className="w-[225px] pb-10">
              <div className="w-full text-[20px] playfair-italic text-[#3C210E] uppercase">
                Fact
              </div>
              <div className="w-full text-[12px] proza text-[#7B695A]">
                {" "}
                <span className="opacity-0">fffffff</span> The oil is bottled
                directly at the production site, ensuring maximum freshness.
              </div>
            </div>
            <Image
              src={"/checkOil.png"}
              alt="banner"
              width={400}
              height={400}
            />

            <div className="w-[225px] pb-4">
              <div className="w-full text-[20px] playfair-italic text-[#3C210E] uppercase">
                quality
              </div>
              <div className="w-full text-[12px] proza text-[#7B695A]">
                {" "}
                <span className="opacity-0">fffffff</span> While others offer
                only 300mg of plant sterols per 100ml, we provide a powerful
                438mg per 100ml. <br /> <br />
                <span className="opacity-0">fffffff</span>While others offer
                only 300mg of plant sterols per 100ml, we provide a powerful
                438mg per 100ml.
              </div>
            </div>
          </div>
          <Image
            src={"/leafOil.png"}
            alt="banner"
            width={200}
            height={200}
            className="absolute bottom-0 right-40 z-[-1]"
          />
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full xs:hidden block">
        <div className="relative w-full h-[302px] mb-10">
          <Image src={"/mobScent.png"} alt="banner" fill />
        </div>
        <div className="w-[80%] ml-[16px] mb-14">
          {" "}
          <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase mb-2">
            Fact
          </div>
          <div className="w-full text-[16px] proza-italic text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> The oil is bottled
            directly at the production site, ensuring maximum freshness.
          </div>
        </div>

        <div className="relative w-[90%] mx-auto h-[236px] mb-10">
          <Image src={"/checkOil.png"} alt="banner" fill />
        </div>
        <div className="w-[90%] ml-[16px] mb-14">
          <div className="w-full text-[24px] playfair-italic text-[#3C210E] uppercase mb-2">
            quality
          </div>
          <div className="w-full text-[16px] proza-italic text-[#7B695A]">
            {" "}
            <span className="opacity-0">fffffff</span> While others offer only
            300mg of plant sterols per 100ml, we provide a powerful 438mg per
            100ml. <br /> <br />
            <span className="opacity-0">fffffff</span>While others offer only
            300mg of plant sterols per 100ml, we provide a powerful 438mg per
            100ml.
          </div>
        </div>
      </div>
    </>
  );
};
