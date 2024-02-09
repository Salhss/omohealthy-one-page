"use client";

import { Grandstander, Poppins } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
});
const grandstander = Grandstander({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-grandstander",
});
export default function AchievementHome() {
  const swiperRef = useRef();
  return (
    <div id="achievement" className=" h-fit bg-white tablet:mt-20 laptop:mt-40">
      <div className="relative">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Navigation]}
          className="h-fit w-full"
        >
          <SwiperSlide>
            <div className="laptop:relative laptop:flex laptop:flex-row">
              <div className="bg-soft-grey relative phone:h-[410px] tablet:h-[500px] laptop:w-[60%] desktop:h-[700px] desktopXl:h-[800px]">
                <div className="bg-gradient absolute  from-[transparent] to-white phone:bg-gradient-to-b phone:bottom-0 phone:h-1/2 phone:w-full laptop:h-full laptop:w-1/2 laptop:right-0 laptop:bg-gradient-to-r desktop:-right-1 desktop:h-[105%] desktop:top-[0.2px] desktopXl:top-0"></div>
                <Image
                  src={
                    "https://omohealthysnack.co.id/img_news/img_190613041356.jpg"
                  }
                  width={886}
                  height={458}
                  alt="achievement"
                  className="object-cover object-center w-full h-full "
                />
              </div>
              <div className="content-title flex flex-col laptop:absolute laptop:w-1/3 laptop:right-[15%] laptop:top-1/2 laptop:-translate-y-1/2 laptop:gap-1 desktop:gap-2 desktop:right-[10%] desktopXl:gap-3">
                <h1
                  className={`${poppins.variable} font-poppins font-bold title-1  text-dark-grey uppercase phone:text-center phone:text-[34px] laptop:text-left desktop:text-6xl`}
                >
                  Pencapaian
                </h1>
                <h2
                  className={`${poppins.variable} font-poppins font-bold title-2  text-dark-grey uppercase phone:text-center phone:text-3xl laptop:text-left desktop:text-5xl`}
                >
                  Juara 1
                </h2>
                <h3
                  className={`${poppins.variable} font-poppins font-bold title-3  text-dark-grey phone:text-center phone:text-2xl laptop:text-left desktop:text-4xl`}
                >
                  Market Fest Tokopedia 2018
                </h3>
                <p
                  className={`${grandstander.variable} font-grandstander font-semibold text-justify phone:px-11 phone:indent-5 phone:text-sm phone:mt-2 laptop:px-0 desktop:text-base desktopXl:text-2xl`}
                >
                  {" "}
                  Tiga kreator lokal berhasil memenangkan kompetisi Maker Fest
                  2018 yang diinisiasi oleh Tokopedia bekerja sama dengan
                  Bekraf, Kemenperin, Kemendag, dan Kominfo. Juara satu, dua, da
                  tiga masing-masing diraih oleh OMO! Healthy Snack dari
                  Yogyakarta, Kandura dari Jakarta, dan The Able Art dari
                  Surabaya.
                </p>
                <div className="link-button phone:w-full phone:pl-11 phone:mt-6 laptop:pl-0">
                  {/* <div className="cursor-pointer w-fit group flex justify-center items-center bg-white border-[3px] rounded-full border-pink phone:gap-[6px] phone:py-1 phone:px-4 laptop:py-2 laptop:px-5 transition-all duration-300 ease-in-out hover:bg-pink hover:border-white">
                    <p
                      className={`${grandstander.variable} font-grandstander font-bold text-pink uppercase laptop:text-lg desktop:text-xl desktopXl:text-2xl group-hover:text-white`}
                    >
                      Info Selengkapnya
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 25"
                      fill="none"
                      className=" phone:w-2 phone:-translate-y-[1px] tablet:w-3 group-hover:translate-x-1"
                    >
                      <path
                        d="M0.585938 3.9113L4.21178 0.475586L16.9022 12.5006L4.21178 24.5256L0.585938 21.0899L9.65055 12.5006L0.585938 3.9113Z"
                        className="fill-pink group-hover:fill-white"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="laptop:relative laptop:flex laptop:flex-row">
              <div className="bg-soft-grey relative phone:h-[410px] tablet:h-[500px] laptop:w-[60%] desktop:h-[700px] desktopXl:h-[800px]">
                <div className="bg-gradient absolute  from-[transparent] to-white phone:bg-gradient-to-b phone:bottom-0 phone:h-1/2 phone:w-full laptop:h-full laptop:w-1/2 laptop:right-0 laptop:bg-gradient-to-r desktop:-right-1 desktop:h-[105%] desktop:top-[0.2px] desktopXl:top-0"></div>
                <Image
                  src={
                    "https://omohealthysnack.co.id/img_news/img_190613035136.jpg"
                  }
                  width={886}
                  height={458}
                  alt="achievement"
                  className="object-cover object-center w-full h-full "
                />
              </div>
              <div className="content-title flex flex-col laptop:absolute laptop:w-1/3 laptop:right-[15%] laptop:top-1/2 laptop:-translate-y-1/2 laptop:gap-1 desktop:gap-2 desktop:right-[10%] desktopXl:gap-3">
                <h1
                  className={`${poppins.variable} font-poppins font-bold title-1  text-dark-grey uppercase phone:text-center phone:text-[34px] laptop:text-left desktop:text-6xl`}
                >
                  Kunjungan
                </h1>
                <h2
                  className={`${poppins.variable} font-poppins font-bold title-2  text-dark-grey uppercase phone:text-center phone:text-3xl laptop:text-left desktop:text-5xl`}
                >
                  Spesial KEMENDAG
                </h2>
                <h3
                  className={`${poppins.variable} font-poppins font-bold title-3  text-dark-grey phone:text-center phone:text-2xl laptop:text-left desktop:text-4xl`}
                >
                  Kemendag Komit Dorong Produk Kreatif Lokal
                </h3>
                <p
                  className={`${grandstander.variable} font-grandstander font-semibold text-justify phone:px-11 phone:indent-5 phone:text-sm phone:mt-2 laptop:px-0 desktop:text-base desktopXl:text-2xl`}
                >
                  {" "}
                  KEMENTERIAN Perdagangan berkomitmen untuk terus mendukung
                  pengembangan produk kreatif dan penguatan merek nasional. Hal
                  itu ditunjukkan dengan kunjungan yang dilakukan Menteri
                  Perdagangan Enggartiasto Lukita ke pabrik OMO! Healthy Snack,
                  produsen makanan olahan bayi dan anak-anak di Yogyakarta
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute z-10 flex justify-between phone:px-5 phone:w-full phone:top-1/4 laptop:top-1/2 laptop:w-[52%] desktop:w-[55%]">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white bg-opacity-80 rounded-full h-fit w-fit p-1"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 rotate-180"
            >
              <path
                d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
                className="fill-dark-grey"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white bg-opacity-80 rounded-full h-fit w-fit p-1"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5"
            >
              <path
                d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
                className="fill-dark-grey"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
