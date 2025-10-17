import Image from "next/image";

export const EleventhPage = () => {
  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center gap-10">
      <div className="w-[70vw]">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="rounded-lg p-5 mb-4"
            style={{
              boxShadow: "0px 0px 25px 0px #81926E26",
            }}
          >
            <div className="flex justify-between items-start">
              <div className="relative w-[10vw] h-[20vh]">
                <Image src={"/smallBottle.png"} alt="banner" fill />
              </div>
              <div className="flex flex-col justify-between items-start gap-5">
                <div className="text-[2vh] playfair-italic text-[#3C210E]">
                  Name of Product
                </div>
                <div className="proza text-[1.5vh] text-[#7B695A]">
                  Lorem ipsum dolor sit amet consectetur. Lacus cursus quis sit
                  varius donec id id nam. Montes suspendisse mi vel sit at ac
                  dui tortor.
                </div>
                <div className="proza text-[1.5vh] text-[#7B695A]">
                  Lorem ipsum dolor sit.
                </div>
                <div className="proza text-[1.5vh] text-[#3C210E] bg-[#CADBB7] px-6 py-1 rounded-full">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[20%] rounded-lg border-[4px solid #E5F0F3] shadow-lg p-5">
        <div className="flex flex-col justify-between items-start">
          <div className="w-full h-[40vh] relative">
            <div className="absolute right-0 top-0 z-[99] proza text-[10px] text-white bg-black px-4 py-1 rounded-full">
              The Best
            </div>

            <Image src={"/smallBottle.png"} alt="banner" fill />
          </div>
          <div className="flex flex-col justify-between items-start gap-3">
            <div className="text-[20px] playfair-italic text-[#3C210E]">
              Name of Product
            </div>
            <div className="proza text-[12px] text-[#7B695A]">
              Lorem ipsum dolor sit amet consectetur. Lacus cursus quis sit
              varius donec id id nam. Montes suspendisse mi vel sit at ac dui
              tortor.
            </div>
            <div className="proza text-[12px] text-[#7B695A]">
              Lorem ipsum dolor sit.
            </div>
            <div className="m-auto mt-4 proza text-[12px] text-[#3C210E] bg-[#CADBB7] px-6 py-1 rounded-full">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
