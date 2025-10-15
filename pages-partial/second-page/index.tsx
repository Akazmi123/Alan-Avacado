import Image from "next/image";

export const SecondPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative">
        <div className="bg-[#E5F0F3] w-[360px] h-[90vh] absolute left-0 bottom-0 z-[-1]"></div>
        <Image
          src={"/leaves.svg"}
          alt="banner"
          width={400}
          height={400}
          className="absolute absolute right-10 top-0 z-[-1]"
        />
        <div className="w-[70%] ml-[50px] flex justify-between items-center pt-[100px]">
          <div className="playfair-italic text-[60px] text-[#3C210E]">
            A Home <br />
            Among the
            <br />
            Forests
          </div>
          <div className="w-[50%]">
            <div className="mt-[100px] text-[#7B695A]">
              <span className="opacity-0">ffffff</span>Our journey begins in
              Southern Forests — a picturesque corner of Australia where tall
              trees stand alongside well-kept farms. This region is known as the
              “food bowl of the country,” and it is here that one of the largest
              avocado harvests grows. The unique climate and fertile soil create
              the perfect conditions for avocados to be rich in nutrients and
              flavor.
            </div>
          </div>
        </div>
        <div className="w-[70%] absolute bottom-0 left-[50%] -translate-x-1/2 flex justify-center items-start gap-4">
          <div className="relative">
            <Image
              src={"/viewLarge.png"}
              alt="banner"
              width={600}
              height={600}
            />
            <Image
              src={"/bannerDetail.png"}
              alt="banner"
              width={10}
              height={100}
              className="absolute right-0 bottom-0 h-full w-[35px]"
            />
          </div>
          <Image src={"/viewSmall.png"} alt="banner" width={150} height={150} />
          <div className="w-[30%]">
            <div className="text-[#3C210E] text-[24px]">Interesting fact</div>
            <div className="text-[#7B695A]">
              <span className="opacity-0">ffffff</span>Did you know? Southern
              Forests produces thousands of tons of avocados every year, and
              part of the harvest is used exclusively for oil.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
