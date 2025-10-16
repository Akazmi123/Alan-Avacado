import Image from "next/image";

export const FourthPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="w-[90%] flex justify-between items-center p-10">
        <div className="w-[22vw]">
          <div className="text-[1.5vw] playfair-italic text-[#3C210E] uppercase">
            Company <br />
            fact
          </div>
          <div className="text-[#7B695A] text-[1.2vw] playfair-italic">
            {" "}
            <span className="opacity-0">fffffff</span>The idea of producing oil
            was originally born as a way to fight food waste — and over time, it
            became the brand’s main direction.
          </div>
          <br />
          <div>------------</div>
          <br />
          <div className="text-[#7B695A] text-[1.2vw] playfair-italic">
            {" "}
            <span className="opacity-0">fffffff</span>Processing “imperfect”
            avocados helps reduce waste and makes the process more sustainable.
          </div>
        </div>
        <div className="w-[20vw] pr-10 pt-[15vh] text-[1.2vw] text-[#7B695A] playfair-italic">
          {" "}
          Avocado oil is rich in mono- and polyunsaturated fats that are
          beneficial for heart health.
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[26vw] pt-[15vh] text-[#7B695A] text-[1vw]">
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
        <div className="w-full px-10 text-[4vw] playfair-italic text-[#3C210E]">
          Cold <br />
          Pressing: <br />
          The Art of <br />
          Care
        </div>
      </div>
      <div className="absolute bottom-0 left-[2vw] z-[-1] w-[30vw] h-[50vh]">
        <Image src={"/flowerArt.svg"} alt="banner" fill />
      </div>
      <div className="absolute bottom-0 right-10 z-[-1] w-[30vw] h-[50vh]">
        <Image src={"/leaveArt.svg"} alt="banner" fill />
      </div>
      <div className="absolute top-0 right-[2vw] z-[-1] w-[40vw] h-[50vh]">
        <Image src={"/splashArt.svg"} alt="banner" fill />
      </div>
    </div>
  );
};
