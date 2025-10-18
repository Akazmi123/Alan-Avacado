import Image from "next/image";

export const SecondPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative xs:block hidden">
        <div className="bg-[#E5F0F3] xs:w-[360px] w-[80vw] xs:h-[90vh] h-[30vh] absolute left-0 xs:bottom-0 bottom-auto top-10 xs:top-auto z-[-1]"></div>
        <Image
          src={"/leaves.svg"}
          alt="banner"
          width={400}
          height={400}
          className="absolute right-10 top-0 z-[-1] xs:block hidden"
        />
        <Image
          src={"/leaves.svg"}
          alt="banner"
          width={200}
          height={200}
          className="absolute right-0 top-[10vh] z-[-1] xs:hidden block"
        />
        <div className="xs:w-[70%] w-full xs:ml-[50px] flex xs:flex-row flex-col justify-between xs:items-center items-start pt-[10vh]">
          <div className="playfair-italic text-[10vw] xs:text-[60px] text-[#3C210E] xs:ml-0 ml-10">
            A Home <br />
            Among the
            <br />
            Forests
          </div>
          <div className="xs:w-[50%] w-[90%] xs:m-0 m-auto mt-8 xs:mt-0 text-[#7B695A]">
            <span className="opacity-0">ffffff</span>Our journey begins in
            Southern Forests — a picturesque corner of Australia where tall
            trees stand alongside well-kept farms. This region is known as the
            “food bowl of the country,” and it is here that one of the largest
            avocado harvests grows. The unique climate and fertile soil create
            the perfect conditions for avocados to be rich in nutrients and
            flavor.
          </div>
        </div>
        <div className="xs:w-[70%] w-full absolute xs:bottom-0 bottom-auto left-[50%] -translate-x-1/2 flex xs:flex-row flex-col justify-center items-start xs:gap-4 gap-0">
          <div className="relative xs:m-0 mt-10 mx-auto">
            <div className="w-[30vw] h-[40vh] xs:block hidden">
              <Image src={"/viewLarge.png"} alt="banner" fill />
            </div>
            <Image
              src={"/bannerDetail.png"}
              alt="banner"
              width={10}
              height={100}
              className="absolute right-0 bottom-0 h-full w-[35px] xs:block hidden"
            />
          </div>
          <div className="relative w-[10vw] h-[30vh] xs:block hidden">
            <Image src={"/viewSmall.png"} alt="banner" fill />
          </div>
          <div className="relative w-[50vw] xs:w-[30%] xs:p-0 p-4 mt-10 xs:mt-0">
            <div className="text-[#3C210E] text-[18px] xs:text-[24px] uppercase playfair-italic">
              Interesting fact
            </div>
            <div className="text-[#7B695A] text-[10px] xs:text-[14px] proza-italic">
              <span className="opacity-0">ffffff</span>Did you know? Southern
              Forests produces thousands of tons of avocados every year, and
              part of the harvest is used exclusively for oil.
            </div>

            <div className="absolute right-0 top-0 translate-x-[100%] w-[50vw] h-[30vh] xs:hidden block">
              <Image src={"/viewSmall.png"} alt="banner" fill />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full xs:hidden block">
        <div className="bg-[#E5F0F3] w-[80%] relative">
          <div className="absolute right-0 bottom-0 translate-x-[40%] translate-y-[10%] h-[206px] w-[60%]">
            <Image src={"/mobLeave.png"} alt="banner" fill />
          </div>
          <div className="playfair-italic text-[34px] text-[#3C210E] p-6">
            A Home <br />
            Among the
            <br />
            Forests
          </div>
        </div>
        <div className="w-[90%] m-auto mt-8 text-[#7B695A] mb-10">
          <span className="opacity-0">ffffff</span>Our journey begins in
          Southern Forests — a picturesque corner of Australia where tall trees
          stand alongside well-kept farms. This region is known as the “food
          bowl of the country,” and it is here that one of the largest avocado
          harvests grows. The unique climate and fertile soil create the perfect
          conditions for avocados to be rich in nutrients and flavor.
        </div>
        <div className="relative w-full h-[450px]">
          <div className="absolute w-full h-[38px] flex justify-center bg-[#93A267] items-center top-0 left-0 z-[1]">
            <div className="text-center playfair-italic text-white">
              Southern Forests - Our Home
            </div>
          </div>
          <Image src={"/viewLargeMob.png"} alt="banner" fill />
        </div>
        <div className="w-full flex mb-40">
          <div className="relative p-4 mt-10 w-[60%]">
            <div className="text-[#3C210E] text-[20px] uppercase playfair-italic">
              Interesting fact
            </div>
            <div className="text-[#7B695A] text-[14px] proza-italic">
              <span className="opacity-0">ffffff</span>Did you know? Southern
              Forests produces thousands of tons of avocados every year, and
              part of the harvest is used exclusively for oil.
            </div>
          </div>
          <div className="relative w-[40%] h-[270px]">
            <Image src={"/viewSmall.png"} alt="banner" fill />
          </div>
        </div>
      </div>
    </>
  );
};
