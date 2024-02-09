"use client";

import { Grandstander, Poppins } from "next/font/google";
import Image from "next/image";
import bones from "../../assets/why-omo/bones.png";
import flour from "../../assets/why-omo/flour.png";
import halal from "../../assets/why-omo/halal.png";
import doctor from "../../assets/why-omo/doctor.png";
import noSugar from "../../assets/why-omo/no-sugar.png";
import halfOnion from "../../assets/why-omo/half-onion.png";
import bestPrice from "../../assets/why-omo/best-price.png";
import supplement from "../../assets/why-omo/supplement.png";
import noPreservatives from "../../assets/why-omo/no-preservatives.png";
import babyAstronaut from "../../assets/why-omo/baby-astronaut.png";
import rocket from "../../assets/why-omo/rocket.png";
import { useEffect } from "react";

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

export default function BenefitHome() {
  useEffect(() => {
    const handleScroll = () => {
      let productSection = document.getElementById("product");
      let rocket = document.getElementById("floating-rocket");
      let astronaut = document.getElementById("floating-astronaut");
      let scroll = window.scrollY;
      let startPoint = Math.floor(productSection.offsetTop / 1.5);
      let scrollTranslate = Math.min((scroll - startPoint) / 3, 400);

      if (scroll >= startPoint) {
        astronaut.style.transform = `translateY(-${
          scrollTranslate / 1.5
        }px) rotate(${scrollTranslate}deg)`;

        // === CHOICE 2 ASTRONAUT ===
        // astronaut.style.transform = `translateY(-${
        //   scrollTranslate / 1.5
        // }px) translateX(-${
        //   scrollTranslate / 2
        // }px) rotate(${scrollTranslate}deg)`;

        rocket.style.transform = "translateY(-" + scrollTranslate + "px)";

        // === CHOICE 2 ROCKET ===
        // rocket.style.transform =
        //   "translateY(-" +
        //   scrollTranslate +
        //   "px) translateX(" +
        //   scrollTranslate +
        //   "px)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="advantage"
      className="relative h-fit flex flex-col items-center bg-white phone:pt-28 phone:mb-14"
    >
      <Image
        src={halfOnion}
        width={190}
        height={380}
        alt="half union"
        className="absolute bottom-0 right-0 w-auto phone:hidden  desktop:h-[230px] desktop:block desktopXl:h-[280px]"
      />
      <Image
        src={babyAstronaut}
        width={302}
        height={337}
        alt="baby astonaut"
        id="floating-astronaut"
        className="absolute h-auto phone:top-[20%] left-[10%] phone:w-28 tablet:w-32 laptop:w-36 desktop:w-44 desktop:top-[30%] desktopXl:w-44"
      />
      <Image
        src={rocket}
        width={156}
        height={177}
        alt="rocket"
        id="floating-rocket"
        className="absolute h-auto phone:top-[20%] phone:left-0 phone:w-16 desktop:w-24 desktop:top-[30%] desktopXl:w-28"
      />
      <h1
        className={`${poppins.variable} font-poppins font-bold text-dark-grey phone:text-2xl laptop:text-3xl desktop:text-5xl`}
      >
        KENAPA HARUS OMO?
      </h1>
      <div className="advantages-container phone:mt-9 laptop:flex laptop:gap-8 desktop:gap-12 desktop:mt-32">
        <div className="flex flex-col phone:gap-3 laptop:gap-5 desktop:gap-8">
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={bones}
              width={66}
              height={66}
              alt="kaya zat besi dan kalsium"
              className="bone-icon h-auto phone:w-10 desktop:w-12"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Kaya Zat Besi & Kalsium
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Membantu dalam tumbuh kembang tulang dan pencegahan anemia
              </p>
            </div>
          </div>
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={supplement}
              width={66}
              height={66}
              alt="kaya vitamin"
              className="supplement-icon h-auto phone:w-10 desktop:w-12"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Kaya Vitamin A dan Vitamin C
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Membantu dalam menjaga kesehatan mata, kulit dan sistem
                kekebalan tubuh
              </p>
            </div>
          </div>
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={noPreservatives}
              width={66}
              height={66}
              alt="tanpa perwarna buatan"
              className="lab-icon h-auto phone:w-10 desktop:w-12"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Tanpa Pewarna Buatan
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Tanpa pemutih dan pewarna buatan sehingga baik bagi kesehatan
                anak
              </p>
            </div>
          </div>
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={noSugar}
              width={66}
              height={66}
              alt="tanpa gula"
              className="no-sugar-icon h-auto phone:w-10 desktop:w-12"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Tanpa tambahan gula, garam & MSG
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Tanpa gula berlebih sehingga dapat mencegah overweight pada anak
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col phone:gap-3 laptop:gap-5 phone:mt-3 laptop:mt-0 desktop:gap-8">
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={bestPrice}
              width={66}
              height={66}
              alt="harga terjangkau"
              className="price-icon h-auto phone:w-10 desktop:w-12"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Harga Terjangkau
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Snack sehat dan aman untuk anak-anak dengan harga yang
                terjangkau
              </p>
            </div>
          </div>
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={halal}
              width={66}
              height={66}
              alt="halal"
              className="halal-icon h-auto phone:w-10 desktop:w-12"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Terverifikasi Halal dan BPOM
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Komposisi OMO! Healthy Snack sudah mendapatkan verifikasi Halal
                dan BPOM
              </p>
            </div>
          </div>
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={doctor}
              width={66}
              height={66}
              alt="nutrisionist"
              className="doctor-icon phone:h-auto phone:w-10 desktop:h-12 desktop:w-auto phone:mx-1 desktop:mx-2"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Formula Dari Nutrisionist Terpercaya
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Kandungan gizi OMO! Healthy Snack telah diatur oleh Nutrisionist
                terpercaya
              </p>
            </div>
          </div>
          <div className="bg-soft-yellow flex items-center phone:gap-2 phone:w-[330px] phone:h-fit phone:py-3 phone:rounded-full phone:pl-3 desktop:pl-5 desktop:gap-4 desktop:w-[590px]">
            <Image
              src={flour}
              width={66}
              height={66}
              alt="terbuat dari bahan sehat"
              className="flour-icon h-auto phone:w-10 desktop:w-12"
            />
            <div className="advantage-text">
              <h1
                className={`${grandstander.variable} font-grandstander font-bold text-soft-orange phone:text-sm desktop:text-lg`}
              >
                Terbuat dari Bahan-Bahan Sehat
              </h1>
              <p
                className={`${grandstander.variable} font-grandstander font-semibold text-soft-grey phone:text-xs phone:leading-[1.1] desktop:text-base desktop:leading-[1]`}
              >
                Dari bahan sehat, seperti tepung gluten free, telur ayam
                kampung, dan lain-lain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
