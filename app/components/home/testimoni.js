"use client";

import { Poppins } from "next/font/google";
import baloonBinga from "../../assets/testimoni/baloon-binga.png";
import bblChtYlw from "../../assets/testimoni/bubble-chat-yellow.png";
import bblChtPnk from "../../assets/testimoni/bubble-chat-pink.png";
import Image from "next/image";
import { useEffect } from "react";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function TestimoniHome() {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const achievementSection = document.getElementById("achievement");
      const binga = document.getElementById("binga-baloon");
      let startPoint = Math.floor(achievementSection.offsetTop / 1.5);
      let scrollTranslate = Math.min((scroll - startPoint) / 3, 600);
      if (scroll >= startPoint) {
        binga.style.transform = `translateY(-${scrollTranslate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="testimoni"
      className="relative h-fit bg-white phone:pt-20 phone:mb-10"
    >
      <Image
        src={baloonBinga}
        width={328}
        height={652}
        alt="binga baloon"
        id="binga-baloon"
        className="absolute h-auto z-10 phone:right-0 phone:top-1/2 phone:w-24 tablet:right-10 tablet:w-32 desktop:w-40 desktopXl:w-60 "
      />
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`${poppins.className} font-poppins font-bold text-center uppercase text-dark-grey phone:text-2xl laptop:text-3xl desktop:text-4xl desktopXl:text-5xl`}
        >
          ulasan pelanggan
        </h1>
        <div className="testimoni-container flex phone:flex-col phone:my-10 laptop:my-16 laptop:flex-row laptop:gap-20 desktop:my-24 desktopXl:my-32">
          <div className="bubbles-container flex flex-col phone:gap-2 laptop:gap-5">
            <div className="bubble-item relative">
              <Image
                src={bblChtYlw}
                width={594}
                height={500}
                alt="testimoni omo"
                className=" relative h-auto phone:w-[310px] phone:h-[150px] laptop:w-[400px] laptop:h-[200px] desktopXl:w-[800px]"
              />
              <div className="absolute phone:top-[10%] phone:left-[5%] flex flex-col gap-2">
                <div className="stars flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                </div>
                <p className=" text-grey font-semibold phone:text-xs laptop:text-base desktopXl:text-lg">
                  oleh <span className="text-dark-grey">lapak.aulian21</span> 13
                  September 2021
                </p>
                <p className=" text-dark-grey font-semibold phone:text-xs laptop:text-base desktopXl:text-lg">
                  Terimakasih banyak, sudah menyediakan cemilan sehat untuk
                  anak-anak.
                </p>
              </div>
            </div>
            <div className="bubble-item relative">
              <Image
                src={bblChtPnk}
                width={594}
                height={500}
                alt="testimoni omo"
                className=" relative -scale-x-100 h-auto phone:w-[310px] phone:h-[150px] laptop:w-[400px] laptop:h-[200px] desktopXl:w-[800px]"
              />
              <div className="absolute phone:top-[10%] phone:left-[5%] flex flex-col gap-2">
                <div className="stars flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                </div>
                <p className=" text-grey phone:text-xs font-semibold laptop:text-base desktopXl:text-lg">
                  oleh{" "}
                  <span className="text-dark-grey">Agung Pratama Putra</span> 11
                  Maret 2019
                </p>
                <p className=" text-dark-grey phone:text-xs font-semibold laptop:text-base desktopXl:text-lg">
                  Sesuai pesanan tapi agak lama respon nya. Anyway barang nya
                  bagus dan sesuai deskripsi
                </p>
              </div>
            </div>
          </div>
          <div className="bubbles-container flex flex-col phone:gap-2 phone:mt-2 laptop:mt-0 laptop:gap-5 laptop:flex-col-reverse">
            <div className="bubble-item relative">
              <Image
                src={bblChtYlw}
                width={594}
                height={500}
                alt="testimoni omo"
                className="relative h-auto phone:w-[310px] phone:h-[150px] laptop:w-[400px] laptop:h-[200px] desktopXl:w-[800px]"
              />
              <div className="absolute phone:top-[10%] phone:left-[5%] flex flex-col gap-2">
                <div className="stars flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                </div>
                <p className=" text-grey phone:text-xs font-semibold laptop:text-base desktopXl:text-lg">
                  oleh <span className="text-dark-grey">ajengkanty</span> 13
                  September 2021
                </p>
                <p className=" text-dark-grey phone:text-xs font-semibold laptop:text-base desktopXl:text-lg">
                  Anak ku suka banget sama cemilan ini , rasanya enak ga lebay
                  .. trimkasih
                </p>
              </div>
            </div>
            <div className="bubble-item relative">
              <Image
                src={bblChtPnk}
                width={594}
                height={500}
                alt="testimoni omo"
                className=" relative -scale-x-100 h-auto phone:w-[310px] phone:h-[150px] laptop:w-[400px] laptop:h-[200px] desktopXl:w-[800px]"
              />
              <div className="absolute phone:top-[10%] phone:left-[5%] flex flex-col gap-2">
                <div className="stars flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 25"
                    fill="none"
                    className=" phone:w-5"
                  >
                    <path
                      d="M13.4023 0.146484L16.4333 9.47475H26.2416L18.3065 15.2399L21.3374 24.5682L13.4023 18.803L5.46724 24.5682L8.49818 15.2399L0.563081 9.47475H10.3714L13.4023 0.146484Z"
                      fill="#EF8348"
                    />
                  </svg>
                </div>
                <p className=" text-grey phone:text-xs font-semibold laptop:text-base desktopXl:text-lg">
                  oleh <span className="text-dark-grey">Laniba</span> 13
                  September 2021
                </p>
                <p className=" text-dark-grey phone:text-xs font-semibold laptop:text-base desktopXl:text-lg">
                  Kirain Bakal Seperti Produk Ivenet ,ternyata beda ...yg ini
                  lebih renyah dan kecil ,anakku paling doyan rasa keju dan sapi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
