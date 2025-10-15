import Image from "next/image";
import { HomePage } from "../../pages-partial/first-page";
import { SecondPage } from "../../pages-partial/second-page";
import { ThirdPage } from "../../pages-partial/third-page";

export default function Home() {
  return (
    <>
      <HomePage />
      <SecondPage />
      <ThirdPage />
    </>
  );
}
