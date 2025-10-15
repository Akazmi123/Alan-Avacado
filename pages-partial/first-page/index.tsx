import Image from "next/image"

export const HomePage = () => {
    return <>
        <div className="w-full h-[100vh] flex flex-col justify-between items-center pl-[5%] relative">
            <Image src={'/topBanner.svg'} alt="banner" width={150} height={150} className="absolute absolute left-1/2 top-0 -translate-x-1/2" />
            <div className="w-full flex justify-between items-center mt-[40px]">
                <div className="text-[#3C210E] text-[18px]">Southern Forests <br /> Food Technology</div>
                <div className="text-[#3C210E] text-[18px] border rounded-[100px] px-5 py-1">Contact Us</div>
            </div>
            <div className="w-full flex justify-center items-center ml-[-40px]">
                <div className="w-[65%] relative flex justify-between items-start">
                    <Image src={'/flower.svg'} alt="banner" width={450} height={450} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div>
                        <div className="playfair-italic text-[80px] text-[#3C210E] pt-10">Southern <br /> forests</div>
                        <div>Est. 2007</div>
                    </div>
                    <div className="playfair-italic text-[80px] text-[#3C210E] pt-42">Avocado <br /> oil</div>
                </div>
            </div>
            <div className="ml-[-40px] flex justify-center items-center gap-4">
                <div>250ml</div>
                <Image src={'/line.svg'} alt="banner" width={60} height={20} color="#86796F" className="mb-[-4px]" />
                <div>750ml</div>
            </div>
            <div className="w-full flex justify-start items-center mb-[-40px]">
                <Image src={'/badge.svg'} alt="banner" width={80} height={80} />
            </div>
            <div className="flex justify-center items-center gap-5 pb-10 text-[#3C210E]">
                <div>Main</div>
                <div className="opacity-[0.5]">Our Home Amid the Forests</div>
                <div className="opacity-[0.5]">Second Chance for the Fruit</div>
            </div>
        </div>
    </>
}