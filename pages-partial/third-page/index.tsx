import Image from "next/image";

export const ThirdPage = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute left-0 bottom-0 z-[-1] w-[400px]">
        <div className="relative w-full bg-black">
          <div className="bg-[#CADBB7] w-full min-w-[20vw] h-[50vh]"></div>
          <Image
            src={"/avocado.png"}
            alt="banner"
            width={300}
            height={300}
            className="absolute right-10 top-10 z-[-1] translate-x-1/2 -translate-y-1/2 z-[10]"
          />
        </div>
      </div>{" "}
      <div className="absolute left-10 bottom-20 z-[-1] w-[90%] flex justify-start items-end">
        <div className="text-[8vh] playfair-italic text-[#3C210E]">
          A Second
          <br /> Chance for <br />
          the Fruit
        </div>
        <div className="w-[30vw] text-[#7B695A] mb-[10vh] ml-[20%] text-[2.3vh]">
          <span className="opacity-0">fffffff</span>Not all avocados make it to
          market. Many are rejected for their size or shape: too big, too small,
          or simply with “character.” Yet their taste and nutritional value
          remain unchanged. Instead of wasting this harvest, we decided to give
          these fruits a new life.
          <br />
          <span className="opacity-0">fffffff</span>This is how our project
          began — turning these avocados into cold-pressed oil.
        </div>
        <div className="absolute right-[1vw] top-[1vw] w-[13vw] h-[35vh]">
          <Image src={"/smallTree.png"} alt="banner" fill />
        </div>
      </div>
      <div className="absolute top-0 right-10 w-[40vw] h-[50vh]">
        <Image src={"/bigTree.png"} alt="banner" fill />
      </div>
    </div>
  );
};
