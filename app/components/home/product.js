"use client";

import { Grandstander, Poppins } from "next/font/google";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import specialEditionLogo from "../../assets/products/special-edition.png";
import newLogo from "../../assets/products/new-logo.png";
import blackCrunch from "../../assets/products/black-crunch.png";
import brownCrunch from "../../assets/products/brown-crunch.png";
import pinkStar from "../../assets/products/pink-star.png";
import pinkKrispO from "../../assets/products/pink-krispyo.png";
import pinkSweetbites from "../../assets/products/pink-star-sweetbites.png";
import whiteCrunch from "../../assets/products/white-crunch.png";
import whiteCrunches from "../../assets/products/white-crunches.png";
import whiteStarSweetbites from "../../assets/products/white-star-sweetbites.png";

import "@splidejs/react-splide/css";
import { useEffect } from "react";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
});
const grandstander = Grandstander({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-grandstander",
});

export default function ProductHome() {
  useEffect(() => {
    const handleScroll = () => {
      let images = document.getElementsByClassName("rotate-crunch");

      for (let i = 0; i < images.length; i++) {
        const rotationValue = window.scrollY / 2;
        images[i].style.transform = "rotate(" + rotationValue + "deg)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dataProduct = [
    {
      id: 1,
      name: "OMO! ABON",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1706664031/omohealthysnack/gwtigst2b90prwpyewc5.png",
      description: "Pinkfong BABY SHARK x OMO!",
      productEditionId: 1,
      ProductEdition: "baby-shark",
      isNew: true,
    },
    {
      id: 2,
      name: "OMO! KALDU",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1706689268/omohealthysnack/ha7uepnfgigmtfcsjw6p.png",
      description: null,
      productEditionId: 2,
      ProductEdition: "general",
      isNew: true,
    },
    {
      id: 3,
      name: "OMO! CRUNCH IT",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1706856358/omohealthysnack/rxyzbrkepqoi8op9hjyp.png",
      description: "Pinkfong BABY SHARK x OMO!",
      productEditionId: 1,
      ProductEdition: "baby-shark",
      isNew: false,
    },
    {
      id: 4,
      name: "OMO! CRUNCH IT",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1706856545/omohealthysnack/xddty5edj6oc2pgptio4.png",
      description: null,
      productEditionId: 2,
      ProductEdition: "general",
      isNew: false,
    },
    {
      id: 5,
      name: "OMO! CRUNCH IT",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1706856358/omohealthysnack/rxyzbrkepqoi8op9hjyp.png",
      description: "Pinkfong BABY SHARK x OMO!",
      productEditionId: 1,
      ProductEdition: "baby-shark",
      isNew: false,
    },
    {
      id: 6,
      name: "OMO! KALDU",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1706689268/omohealthysnack/ha7uepnfgigmtfcsjw6p.png",
      description: null,
      productEditionId: 2,
      ProductEdition: "general",
      isNew: true,
    },
    {
      id: 7,
      name: "OMO! CRUNCH IT",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1706856545/omohealthysnack/xddty5edj6oc2pgptio4.png",
      description: null,
      productEditionId: 2,
      ProductEdition: "general",
      isNew: false,
    },
  ];

  return (
    <div
      id="product"
      className="products-container relative bg-light-pink phone:pt-8 phone:h-[510px] laptop:h-[600px] desktop:h-[700px]"
    >
      <Image
        src={pinkStar}
        width={85}
        height={85}
        alt="pink star"
        className="absolute h-auto phone:left-0 phone:translate-x-4 phone:w-10 tablet:w-14 tablet:left-10 tablet:top-0 laptop:w-16"
      />
      <Image
        src={pinkStar}
        width={85}
        height={85}
        alt="pink star"
        className="absolute h-auto z-[1] -scale-x-100 phone:right-0 phone:bottom-0 phone:-translate-x-2 phone:-translate-y-8 phone:w-9 tablet:w-12 tablet:-translate-x-14 tablet:translate-y-5 laptop:w-16 laptop:translate-y-7"
      />
      <Image
        src={whiteCrunches}
        width={125}
        height={145}
        alt="white crunches"
        className="absolute h-auto phone:w-11 phone:left-0 phone:translate-x-12 phone:translate-y-10 tablet:w-24 tablet:translate-x-36 tablet:top-0 tablet:translate-y-4 laptop:w-28 laptop:translate-x-0 laptop:left-[20%]"
      />
      <Image
        src={whiteStarSweetbites}
        width={215}
        height={210}
        alt="white sweetbites"
        className="absolute phone:w-[60px] phone:left-0 phone:bottom-0 phone:-translate-x-2 phone:-translate-y-12 laptop:w-28"
      />
      <div className="white-crunch absolute w-fit phone:bottom-0 phone:left-0 phone:translate-x-10 phone:-translate-y-8 tablet:left-[12%] laptop:-translate-y-6">
        <Image
          src={whiteCrunch}
          width={200}
          height={235}
          alt="white crunch"
          className="rotate-crunch phone:w-[70px] tablet:w-28 laptop:w-36 "
        />
      </div>
      <Image
        src={pinkSweetbites}
        width={110}
        height={110}
        alt="pink sweetbites"
        className="absolute phone:right-0 phone:top-0 phone:w-[52px] phone:-translate-x-3 phone:translate-y-4 tablet:top-[70%] tablet:-translate-x-3 tablet:w-16 laptop:w-20 laptop:-translate-x-10"
      />
      <div className="black-crunch absolute w-fit phone:right-0 phone:top-0 phone:translate-y-[70px] phone:-translate-x-16 tablet:-translate-y-2 tablet:-translate-x-0 tablet:right-[14%] laptop:-translate-x-7">
        <Image
          src={blackCrunch}
          width={215}
          height={195}
          alt="black crunch"
          className="rotate-crunch phone:w-[65px] tablet:w-24 laptop:w-32"
        />
      </div>
      <div className="brown-crunch absolute w-fit phone:right-0 phone:bottom-0 phone:-translate-y-20 phone:-translate-x-10 tablet:-translate-x-0 tablet:-translate-y-12 tablet:right-[22%] ">
        <Image
          src={brownCrunch}
          width={110}
          height={110}
          alt="brown crunch"
          className="rotate-crunch phone:w-[52px] tablet:w-20 laptop:w-24"
        />
      </div>
      <Image
        src={pinkKrispO}
        width={110}
        height={110}
        alt="pink krispy-O"
        className="absolute phone:right-0 phone:top-0 phone:w-10 phone:translate-y-24 phone:-translate-x-2 tablet:w-14 tablet:translate-y-10 laptop:w-20 laptop:-translate-x-10"
      />
      <h1
        className={`${poppins.variable} font-poppins font-bold text-center text-dark-grey uppercase phone:text-2xl tablet:text-3xl laptop:text-4xl`}
      >
        Produk OMO!
      </h1>
      <div className="products-item phone:mt-[20%] tablet:mt-[5%] laptop:mt-[5%] desktop:mt-[2%]">
        <div className="phone:hidden laptop:block relative">
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              drag: "free",
              arrows: false,
              pagination: false,
              perPage: 5,
              breakpoints: {
                2500: { perPage: 7 },
                1600: { perPage: 5 },
                1030: { perPage: 4 },
              },
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 0.5,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideTrack>
              {dataProduct.map((item) => (
                <SplideSlide key={item.id}>
                  <div className="flex items-center laptop:h-[340px] desktop:h-[470px]">
                    <div className="relative flex flex-col justify-center items-center rounded-3xl border-pink bg-white cursor-pointer laptop:p-6 laptop:border-[5px] laptop:w-[200px] laptop:h-[290px] desktop:w-[257px] desktop:h-[395px]">
                      {item.productEditionId === 1 && (
                        <div className="absolute top-0 right-0 laptop:-translate-y-8 laptop:translate-x-4 laptop:w-[90px] desktop:-translate-y-10 desktop:w-[120px]">
                          <Image
                            src={specialEditionLogo}
                            alt="special edition baby shark"
                            width={170}
                            height={170}
                          />
                        </div>
                      )}
                      {!!item.isNew && (
                        <div className="absolute top-0 left-0 laptop:-translate-y-5 laptop:-translate-x-4 laptop:w-24 desktop:w-32">
                          <Image
                            src={newLogo}
                            alt="new product"
                            width={170}
                            height={170}
                          />
                        </div>
                      )}
                      <Image
                        src={item.imgUrl}
                        width={150}
                        height={190}
                        alt={item.name}
                        className=" laptop:max-h-[150px] laptop:w-auto laptop:-translate-y-4 desktop:max-h-[250px] "
                      />
                      <div className="absolute h-[30%] bottom-0 flex flex-col justify-center items-center desktop:justify-end desktop:-translate-y-5">
                        <h1
                          className={`${poppins.variable} font-poppins font-bold text-center laptop:text-xl desktop:text-2xl`}
                        >
                          {item.name}
                        </h1>
                        <h2
                          className={`${
                            poppins.variable
                          } font-poppins font-bold text-center text-sm laptop:leading-5 ${
                            item.description == null && "text-[transparent]"
                          }`}
                        >
                          {item.description !== null
                            ? item.description
                            : "Lorem ipsum dolor."}
                        </h2>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
        <div className="laptop:hidden relative w-full">
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              perPage: 5,
              perMove: 1,
              pagination: false,
              arrows: false,
              focus: "center",
              breakpoints: {
                830: { perPage: 4, gap: "0px" },
                500: { perPage: 3, gap: "120px" },
              },
              autoplay: true,
            }}
          >
            <div className=" relative w-full">
              <div className=" phone:ml-[-18%] tablet:ml-[-22%]">
                <SplideTrack>
                  {dataProduct.map((data) => (
                    <SplideSlide key={data.id}>
                      <div className="phone:w-[154px] phone:h-[250px]  flex justify-center items-center tablet:w-[180px] tablet:h-[300px]">
                        <div className="product-card relative border-pink bg-white flex flex-col justify-center items-center phone:gap-5 phone:rounded-xl phone:h-[220px] phone:w-[154px] phone:border-[2.5px] tablet:border-4 tablet:rounded-2xl tablet:h-[250px] tablet:w-[170px] tablet:gap-2">
                          {data.productEditionId === 1 && (
                            <div className="absolute top-0 right-0 phone:-translate-y-4 phone:translate-x-4 phone:w-12 tablet:w-16 tablet:-translate-y-6">
                              <Image
                                src={specialEditionLogo}
                                alt="special edition baby shark"
                                width={170}
                                height={170}
                              />
                            </div>
                          )}
                          {!!data.isNew && (
                            <div className="absolute top-0 left-0 phone:-translate-y-3 phone:-translate-x-4 phone:w-14 tablet:w-20 tablet:-translate-y-5">
                              <Image
                                src={newLogo}
                                alt="new product"
                                width={170}
                                height={170}
                              />
                            </div>
                          )}
                          <div className="products-image flex justify-center items-center phone:w-[80%] phone:h-[110px] phone:object-contain phone:object-center">
                            <Image
                              src={data.imgUrl}
                              height={450}
                              width={480}
                              alt={data.name}
                              className="phone:w-auto phone:max-h-[110px]"
                            />
                          </div>
                          <div className="product-text">
                            <h3
                              className={`${poppins.variable} font-poppins font-bold text-center text-dark-grey phone:text-[14px] tablet:text-base`}
                            >
                              {data.name}
                            </h3>
                            <h4
                              className={`${poppins.variable} font-poppins font-bold text-center text-dark-grey phone:text-[8px] tablet:text-[12px]`}
                            >
                              {data.description}
                            </h4>
                          </div>
                          <div className="buy-btn">
                            <div
                              className={`absolute z-50 bg-pink flex justify-center items-center phone:-bottom-3 phone:-translate-x-1/2 phone:w-[76px] phone:h-[25px] phone:rounded-lg tablet:w-[90px] tablet:h-[30px]`}
                            >
                              <p
                                className={`${grandstander.variable} font-grandstander font-extrabold uppercase text-white text-center tablet:text-lg tablet:translate-y-[2px]`}
                              >
                                buy
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </div>
            </div>
          </Splide>
        </div>
      </div>
      {/* <div className="link-btn flex justify-center items-center phone:mt-9">
        <div className="cursor-pointer group flex justify-center items-center bg-white border-2 rounded-full border-pink phone:gap-[6px] phone:py-2 phone:px-5 laptop:py-3 laptop:px-6 transition-all duration-300 ease-in-out hover:bg-pink hover:border-white">
          <p
            className={`${grandstander.variable} font-grandstander font-extrabold text-pink uppercase tablet:text-xl laptop:text-2xl group-hover:text-white`}
          >
            Lihat Semua
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
        </div>
      </div> */}
    </div>
  );
}
