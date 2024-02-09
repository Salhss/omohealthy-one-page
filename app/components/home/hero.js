"use client";
import { Grandstander, Poppins } from "next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/zoom";

const grandstander = Grandstander({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-grandstander",
});
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function HeroHome() {
  return (
    <div id="home" className=" h-fit phone:pt-5 tablet:pt-10">
      <div className="hero-container flex phone:flex-col tablet:flex-row tablet:px-5 laptop:px-12 desktop:justify-around desktop:px-36">
        <div>
          <img
            src="https://res.cloudinary.com/droa4xzz7/image/upload/v1707205430/omohealthysnack/gunqtc1clczeodwppeco.png"
            width="600"
            height="480"
            className="h-auto tablet:w-[550px] laptop:w-[600px] desktop:w-[900px]"
          />
        </div>
        <div className="px-5 mt-3 tablet:flex tablet:flex-col tablet:justify-center">
          <h1
            className={`${grandstander.variable} font-grandstander font-bold text-dark-grey tablet:text-right phone:text-2xl desktop:text-3xl`}
          >
            OMO! Healthy Snack
          </h1>
          <p
            className={`${poppins.variable} font-poppins font-medium text-dark-grey my-3 tablet:text-right tablet:max-w-[369px] desktop:text-lg`}
          >
            Snack sehat dengan komposisi alami aman untuk si kecil, dan
            pastinya, dari Indonesia untuk Indonesia!
          </p>
          {/* <div className="tablet:flex tablet:justify-end">
            <div className="w-fit group border-pink flex items-center justify-center phone:rounded-3xl phone:border-2 phone:px-3 phone:py-2 phone:gap-[6px] tablet:border-[3px] tablet:px-[14px] tablet:py-[10px] tablet:gap-3 tablet:rounded-full cursor-pointer">
              <p
                className={`${grandstander.variable} font-grandstander font-bold text-pink uppercase tablet:text-lg laptop:text-xl tablet:translate-y-[2px]`}
              >
                Tentang Kita
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 28"
                fill="none"
                className="phone:w-2 tablet:w-[10px] transition-all duration-300 ease-in-out group-hover:translate-x-1"
              >
                <path
                  d="M0 3.86865L3.4734 0L15.6303 13.5403L3.4734 27.0806L0 23.2119L8.6835 13.5403L0 3.86865Z"
                  fill="#EB69A3"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
      <div className="my-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          zoom={{
            maxRatio: 5,
            minRatio: 1,
          }}
          modules={[Autoplay, Zoom]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-zoom-container ">
              <div className="w-full">
                <img
                  src="https://res.cloudinary.com/droa4xzz7/image/upload/v1707205381/omohealthysnack/rnyx5zz0b1foyv9nsicm.jpg"
                  width="1080"
                  height="500"
                  className="object-cover h-auto w-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container ">
              <div className="w-full">
                <img
                  src="https://res.cloudinary.com/droa4xzz7/image/upload/v1707205381/omohealthysnack/jeyuo14t2bdxy2lpcgab.jpg"
                  width="1080"
                  height="500"
                  className="object-cover h-auto w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
