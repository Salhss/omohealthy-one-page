import Image from "next/image";
import hills from "@/app/assets/footer/hills-footer.png";
import logo from "@/app/assets/footer/omo-white-logo.png";
import whatsapLogo from "@/app/assets/footer/whatsapp-logo.png";
import instagram from "@/app/assets/footer/instagram-logo.png";
import tiktok from "@/app/assets/footer/tiktok-logo.png";
import bimo from "@/app/assets/footer/bimo.png";
import biu from "@/app/assets/footer/biu.png";
import { Grandstander } from "next/font/google";

const grandstander = Grandstander({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-grandstander",
});
export default function Footer() {
  return (
    <footer className="relative">
      <Image
        src={bimo}
        width={251}
        height={386}
        alt="bimo"
        className="h-auto absolute phone:hidden laptop:block laptop:w-32 laptop:-top-32 laptop:left-10 desktop:w-44 desktop:-top-40 "
      />
      <Image
        src={biu}
        width={200}
        height={316}
        alt="biu"
        className="h-auto absolute phone:hidden laptop:block laptop:w-28 laptop:right-14 desktop:w-32 desktop:right-20"
      />
      <div className="footer-text absolute z-10 phone:top-16 phone:left-9  tablet:w-[90%] desktop:top-20 desktop:left-1/2 desktop:-translate-x-1/2">
        <div className="logo-tagline">
          <Image
            src={logo}
            width={283}
            height={142}
            alt="logo omo"
            className="h-auto phone:w-[158px] tablet:w-44 desktop:w-52"
          />
          <p
            className={`${grandstander.variable} font-grandstander font-semibold text-justify text-dark-green phone:w-[300px] phone:text-xs phone:mt-12 tablet:text-sm tablet:w-[90%] desktop:text-lg`}
          >
            OMO! Healthy Snack dibuat sepenuh cinta dengan bahan-bahan
            berkualitas. dedikasi untuk meningkatkan kebiasaan makan yang baik
            sejak dini membuat OMO! berhasil menjadi juara pertama MARKETFEST
            Tokopedia 2018, sebuh kompetisi yang mewadahi ribuan industri
            kreatif Tanah Air.
          </p>
        </div>
        <div className="navigation-contact flex items-start phone:justify-between phone:mt-7  ">
          <div className="navigation">
            <ul
              className={`${grandstander.variable} font-grandstander font-bold text-dark-green flex flex-col phone:text-sm phone:gap-1 tablet:text-lg desktop:text-2xl`}
            >
              <li>Beranda</li>
              <li>Produk OMO!</li>
              <li>Fitur OMO!</li>
              <li>Toko</li>
              <li>Komik OMO!</li>
              <li>Tentang Kita</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="contact flex phone:flex-col tablet:flex-row tablet:justify-between tablet:items-start tablet:w-[60%]">
            <div className="contact-phone">
              <h4
                className={`${grandstander.variable} font-grandstander font-bold text-dark-green phone:mb-2 tablet:text-lg tablet:mb-3 desktop:text-2xl desktop:mb-4`}
              >
                Hubungi Kami
              </h4>
              <div className="contact-person flex items-start phone:gap-1 phone:mb-1 tablet:mb-2 desktop:gap-3 desktop:mb-4">
                <Image
                  src={whatsapLogo}
                  width={35}
                  height={35}
                  alt="whatsapp"
                  className="h-auto phone:w-4 tablet:w-5 desktop:w-7"
                />
                <div className="">
                  <p
                    className={`${grandstander.variable} font-grandstander font-medium text-dark-green phone:text-sm tablet:text-base desktop:text-2xl`}
                  >
                    082140030250
                  </p>
                  <p
                    className={`${grandstander.variable} font-grandstander font-medium text-dark-green phone:text-sm tablet:text-base desktop:text-2xl`}
                  >
                    (Marketing OMO!)
                  </p>
                </div>
              </div>
              <div className="contact-person flex items-start phone:gap-1">
                <Image
                  src={whatsapLogo}
                  width={35}
                  height={35}
                  alt="whatsapp"
                  className="h-auto phone:w-4 tablet:w-5 desktop:w-7"
                />
                <div className="">
                  <p
                    className={`${grandstander.variable} font-grandstander font-medium text-dark-green phone:text-sm tablet:text-base desktop:text-2xl`}
                  >
                    082140030250
                  </p>
                  <p
                    className={`${grandstander.variable} font-grandstander font-medium text-dark-green phone:text-sm tablet:text-base desktop:text-2xl`}
                  >
                    (Marketing OMO!)
                  </p>
                </div>
              </div>
            </div>
            <div className="sosmed">
              <h4
                className={`${grandstander.variable} font-grandstander font-bold text-dark-green phone:my-2 tablet:my-0 tablet:mb-2 tablet:text-lg desktop:text-2xl`}
              >
                Ikuti Kami
              </h4>
              <div className="tiktok-omo flex items-start phone:gap-1">
                <Image
                  src={tiktok}
                  width={35}
                  height={35}
                  alt="tiktok omo"
                  className="h-auto phone:w-4 tablet:w-5 desktop:w-7"
                />
                <p
                  className={`${grandstander.variable} font-grandstander font-medium text-dark-green phone:text-xs tablet:text-base desktop:text-2xl`}
                >
                  @omohealthysnack
                </p>
              </div>
              <div className="instagram-omo flex items-start phone:gap-1 phone:mt-2 tablet:mt-3">
                <Image
                  src={instagram}
                  width={35}
                  height={35}
                  alt="tiktok omo"
                  className="h-auto phone:w-4 tablet:w-5 desktop:w-7"
                />
                <p
                  className={`${grandstander.variable} font-grandstander font-medium text-dark-green phone:text-xs tablet:text-base desktop:text-2xl`}
                >
                  @omohealthysnack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-small">
        <Image
          src={hills}
          width={2920}
          height={788}
          alt="footer"
          className=" phone:h-auto phone:w-full tablet:h-[400px]"
        />
        <div className=" bg-soft-green w-full phone:h-[450px] tablet:h-[200px] laptop:h-[150px] desktop:h-[250px]"></div>
      </div>
    </footer>
  );
}
