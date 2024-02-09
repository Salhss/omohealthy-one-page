"use client";

import { Grandstander, Poppins } from "next/font/google";
import Image from "next/image";
import specialEditionLogo from "../../assets/products/special-edition.png";
import newLogo from "../../assets/products/new-logo.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const grandstander = Grandstander({
  weight: "800",
  subsets: ["latin"],
});

export default function ProductHome() {
  const data = [
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
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1702886948/omohealthysnack/dw4rnkwh8xpofg6fwrcl.png",
      description: null,
      productEditionId: 2,
      ProductEdition: "general",
    },
    {
      id: 3,
      name: "OMO! CRUNCH IT - pinkfong BABY SHARK X OMO",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1702887888/omohealthysnack/wizftnxxrg4uzon19nhd.png",
      description: null,
      productEditionId: 1,
      ProductEdition: "baby-shark",
    },
    {
      id: 4,
      name: "OMO! CRUNCH IT",
      imgUrl:
        "https://res.cloudinary.com/droa4xzz7/image/upload/v1702888079/omohealthysnack/axfytk0wugtdmwmik1xa.png",
      description: null,
      productEditionId: 2,
      ProductEdition: "general",
    },
  ];

  const options = {
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "15rem",
    arrows: false,
  };

  return (
    <div className="products-container bg-light-pink phone:pt-8 phone:h-[510px]">
      <h1
        className={`${poppins.className} text-center text-dark-grey uppercase phone:text-2xl`}
      >
        Produk OMO!
      </h1>

      <Splide hasTrack={false} options={options}>
        <div className="relative">
          <SplideTrack>
            <SplideSlide>
              <div className="product-card relative border-[2.5px] border-pink bg-white flex flex-col justify-center items-center phone:mt-[80px] phone:gap-5 phone:rounded-xl phone:h-[220px] phone:w-[154px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="product-card relative border-[2.5px] border-dark-grey bg-white flex flex-col justify-center items-center phone:mt-[80px] phone:gap-5 phone:rounded-xl phone:h-[220px] phone:w-[154px]"></div>
            </SplideSlide>
          </SplideTrack>
        </div>
      </Splide>
      {/* <div className="products-item flex justify-center items-center"> */}
      {/* <div className="product-card relative border-[2.5px] border-pink bg-white flex flex-col justify-center items-center phone:mt-[80px] phone:gap-5 phone:rounded-xl phone:h-[220px] phone:w-[154px]"></div> */}
      {/* </div> */}
    </div>
  );
}
