import Image from "next/image";

export const ThirdPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative xs:block hidden">
        <div className="absolute left-0 xs:bottom-0 bottom-auto xs:top-auto top-20 z-[-1] w-full xs:w-[400px]">
          <div className="relative w-full">
            <div className="bg-[#CADBB7] w-[90%] m-auto xs:m-0 xs:w-full min-w-[20vw] h-[250px] xs:h-[50vh] xs:block flex justify-start items-center">
              <div className="text-[6vh] playfair-italic text-[#3C210E] xs:hidden block xs:ml-0 ml-5">
                A Second
                <br /> Chance for <br />
                the Fruit
              </div>
            </div>
            <Image
              src={"/avocado.png"}
              alt="banner"
              width={300}
              height={300}
              className="absolute right-10 top-10 z-[-1] translate-x-1/2 -translate-y-1/2 z-[10] xs:inline hidden"
            />
            <Image
              src={"/avocado.png"}
              alt="banner"
              width={200}
              height={200}
              className="absolute right-[2vw] top-0 z-[-1] -translate-y-1/2 z-[10] xs:hidden inline"
            />
          </div>
        </div>{" "}
        <div className="absolute left-10 bottom-20 z-[-1] w-[90%] justify-start items-end xs:flex hidden">
          <div className="text-[8vh] playfair-italic text-[#3C210E]">
            A Second
            <br /> Chance for <br />
            the Fruit
          </div>
          <div className="w-[30vw] text-[#7B695A] mb-[10vh] ml-[20%] text-[2.3vh]">
            <span className="opacity-0">fffffff</span>Not all avocados make it
            to market. Many are rejected for their size or shape: too big, too
            small, or simply with “character.” Yet their taste and nutritional
            value remain unchanged. Instead of wasting this harvest, we decided
            to give these fruits a new life.
            <br />
            <span className="opacity-0">fffffff</span>This is how our project
            began — turning these avocados into cold-pressed oil.
          </div>
          <div className="absolute right-[1vw] top-[1vw] w-[13vw] h-[35vh] xs:block hidden">
            <Image src={"/smallTree.png"} alt="banner" fill />
          </div>
        </div>
        <div className="w-[90%] mx-auto text-[#7B695A] text-[2.3vh] xs:hidden block">
          <span className="opacity-0">fffffff</span>Not all avocados make it to
          market. Many are rejected for their size or shape: too big, too small,
          or simply with “character.” Yet their taste and nutritional value
          remain unchanged. Instead of wasting this harvest, we decided to give
          these fruits a new life.
          <br />
          <span className="opacity-0">fffffff</span>This is how our project
          began — turning these avocados into cold-pressed oil.
        </div>
        <div className="relative xs:absolute top-0 xs:right-10 xs:w-[40vw] w-full h-[50vh] xs:mt-0 mt-3">
          <Image src={"/bigTree.png"} alt="banner" fill />
        </div>
      </div>

      {/* Mobile view */}
      <div className="relative w-full xs:hidden block">
        <div className="bg-[#CADBB7] w-[90%] m-auto xs:m-0 xs:w-full min-w-[20vw] h-[250px] xs:h-[50vh] xs:block flex justify-start items-center">
          <div className="text-[6vh] playfair-italic text-[#3C210E] xs:hidden block xs:ml-0 ml-5">
            <Image
              src={"/line.svg"}
              alt="banner"
              width={60}
              height={20}
              color="#86796F"
              className="mb-[10px] xs:mb-[0px]"
            />
            A Second
            <br /> Chance for <br />
            the Fruit
          </div>
        </div>
        <Image
          src={"/avocado.png"}
          alt="banner"
          width={200}
          height={200}
          className="absolute right-[2vw] top-0 z-[-1] -translate-y-1/2 z-[10]"
        />
        <div className="w-[90%] m-auto mt-8 text-[#7B695A] mb-10">
          <span className="opacity-0">fffffff</span>Not all avocados make it to
          market. Many are rejected for their size or shape: too big, too small,
          or simply with “character.” Yet their taste and nutritional value
          remain unchanged. Instead of wasting this harvest, we decided to give
          these fruits a new life.
          <br />
          <span className="opacity-0">fffffff</span>This is how our project
          began — turning these avocados into cold-pressed oil.
        </div>
        <div className="w-full h-[399px] relative">
          <Image src={"/mobAva.png"} alt="banner" fill />
        </div>
      </div>
    </>
  );
};
