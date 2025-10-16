import Image from "next/image";

export const ThirtenthPage = () => {
  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center">
      <div className="w-full max-w-[400px]">
        <div className="text-[20px] playfair-italic text-[#3C210E] text-center">
          Interested in stocking our product?
          <br /> Need to talk to us? <br />
          You can reach us here:
        </div>
        <div className="flex justify-start items-start flex-col proza mb-6 text-[12px]">
          <div className="text-[#3C210E]">Name:</div>
          <input
            type="text"
            className="w-full rounded-full mt-2 p-2 border border-[#3C210E]"
            placeholder="Name"
          />
        </div>
        <div className="flex justify-start items-start flex-col proza mb-6 text-[12px]">
          <div className="text-[#3C210E]">Email:</div>
          <input
            type="text"
            className="w-full rounded-full mt-2 p-2 border border-[#3C210E]"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-start items-start flex-col proza mb-6 text-[12px]">
          <div className="text-[#3C210E]">Message:</div>
          <input
            type="textarea"
            className="w-full rounded-lg mt-2 p-2 pb-20 border border-[#3C210E]"
            placeholder="Write your message"
          />
        </div>
        <div className="w-fit mt-4 proza text-[14px] text-[#FFFFFF] bg-[#3C210E] px-10 py-1 rounded-full">
          Send
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center proza-italic text-[#7B695A]">
        Or email us:
        <br />
        hello@sffoodtech.com.au
      </div>
      <Image
        src={"/formFlower.png"}
        alt="banner"
        width={500}
        height={500}
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};
