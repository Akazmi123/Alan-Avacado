import Image from "next/image";
import { HomePage } from "../../pages-partial/first-page";
import { SecondPage } from "../../pages-partial/second-page";
import { ThirdPage } from "../../pages-partial/third-page";
import { FourthPage } from "../../pages-partial/fourth-page";
import { FifthPage } from "../../pages-partial/fifth-page";
import { SixthPage } from "../../pages-partial/sixth-page";
import { SeventhPage } from "../../pages-partial/seventh-page";
import { EighthPage } from "../../pages-partial/eight-page";
import { NinethPage } from "../../pages-partial/nineth-page";
import { TenthPage } from "../../pages-partial/tenth-page";
import { EleventhPage } from "../../pages-partial/eleventh-page";
import { TewelvethPage } from "../../pages-partial/tewelveth-page";
import { ThirtenthPage } from "../../pages-partial/thirtienth-page";

export default function Home() {
  return (
    <>
      <HomePage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
      <NinethPage />
      <TenthPage />
      <EleventhPage />
      <TewelvethPage />
      <ThirtenthPage />
    </>
  );
}
