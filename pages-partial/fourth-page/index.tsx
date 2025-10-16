import Image from "next/image";

export const FourthPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="w-[90%] flex justify-between items-center p-10">
        <div className="w-[400px]">
          <div className="text-[28px] playfair-italic text-[#3C210E] uppercase">
            Company <br />
            fact
          </div>
          <div className="text-[#7B695A] text-[20px] playfair-italic">
            {" "}
            <span className="opacity-0">fffffff</span>The idea of producing oil
            was originally born as a way to fight food waste — and over time, it
            became the brand’s main direction.
          </div>
          <br />
          <div>_____________</div>
          <br />
          <div className="text-[#7B695A] text-[20px] playfair-italic">
            {" "}
            <span className="opacity-0">fffffff</span>Processing “imperfect”
            avocados helps reduce waste and makes the process more sustainable.
          </div>
        </div>
        <div className="w-[300px] pr-10 pt-[200px] text-[#7B695A] playfair-italic">
          {" "}
          Avocado oil is rich in mono- and polyunsaturated fats that are
          beneficial for heart health.
        </div>
      </div>
      <div className="w-[100%] flex justify-center items-center p-10">
        <div className="w-[400px] text-[#7B695A] text-[16px]">
          {" "}
          <span className="opacity-0">fffffff</span>Production begins with
          careful preparation: we use only fresh avocados harvested at peak
          ripeness. The fruits are then pressed at low temperatures — a process
          that preserves maximum nutrients, resulting in oil that is rich and
          pure.
          <br />
          <span className="opacity-0">fffffff</span>Our oil — Extra Virgin
          Avocado Oil — meets strict quality and purity standards. We pay
          attention to every detail to ensure consistently high results.
        </div>
      </div>
      <div className="bg-[#E5F0F3] w-[30%] h-[55vh] absolute top-0 left-[45%] -translate-x-1/2 flex justify-center items-center">
        <div className="w-full px-20 text-[55px] playfair-italic text-[#3C210E]">
          Cold <br />
          Pressing: <br />
          The Art of <br />
          Care
        </div>
      </div>
      <Image
        src={"/flowerArt.svg"}
        alt="banner"
        width={400}
        height={400}
        className="absolute bottom-0 left-10"
      />
      <Image
        src={"/leaveArt.svg"}
        alt="banner"
        width={400}
        height={400}
        className="absolute bottom-0 right-10"
      />
      <Image
        src={"/splashArt.svg"}
        alt="banner"
        width={550}
        height={550}
        className="absolute top-0 right-10 z-[-1]"
      />
    </div>
  );
};
