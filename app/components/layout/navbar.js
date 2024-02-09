"use client";

import Image from "next/image";
import logoOmo from "../../assets/logo-omo.png";
import { useEffect, useState } from "react";
import { Grandstander } from "next/font/google";
import "./navbar.css";
import { usePathname } from "next/navigation";

const grandstander = Grandstander({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-grandstander",
});

export default function NavbarMobile() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const pathName = usePathname();

  const burgerHandler = () => {
    setBurgerOpen(() => !burgerOpen);
  };

  useEffect(() => {
    if (pathName === "/") {
      const handleScroll = () => {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("sticky-navbar", window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`relative mobile-navbar ${
          pathName !== "/" && "sticky-navbar"
        }`}
      >
        <div className="navbar-scrolled flex justify-between items-center px-9 py-4 laptop:px-16 desktop:px-[200px] desktopXl:px-[345px]">
          <div className="tablet:hidden">
            <button className="flex flex-col gap-[5px]" onClick={burgerHandler}>
              <div
                className={`w-6 h-[2.5px] bg-dark-grey rounded-md transform transition-all duration-300 ease-in-out ${
                  burgerOpen && "rotate-45 translate-y-[7px]"
                } `}
              />
              <div
                className={`w-6 h-[2.5px] bg-dark-grey rounded-md transform transition-all duration-300 ease-in-out ${
                  burgerOpen && "opacity-0"
                }`}
              />
              <div
                className={`w-6 h-[2.5px] bg-dark-grey rounded-md transform transition-all duration-300 ease-in-out ${
                  burgerOpen && "-rotate-45 -translate-y-[8px]"
                }`}
              />
            </button>
          </div>
          <div className="logo w-auto h-auto">
            <Image
              src={logoOmo}
              width={97}
              height={50}
              alt="logo omo"
              className="h-auto desktop:w-32"
              priority
            />
          </div>
          <div className="menu phone:hidden tablet:block">
            <ul
              className={`${grandstander.variable} font-grandstander font-bold tablet:text-lg laptop:text-xl desktop:text-2xl flex`}
            >
              <li className=" w-fit py-1 px-1 rounded-3xl border-4 border-[transparent] text-dark-grey cursor-pointer hover:border-pink hover:rounded-3xl laptop:px-[10px]">
                <a href="#home">Beranda</a>
              </li>
              <li className=" w-fit py-1 px-1 rounded-3xl border-4 border-[transparent] text-dark-grey cursor-pointer hover:border-pink hover:rounded-3xl laptop:px-[10px]">
                <a href="#product">Produk OMO!</a>
              </li>
              <li className=" w-fit py-1 px-1 rounded-3xl border-4 border-[transparent] text-dark-grey cursor-pointer hover:border-pink hover:rounded-3xl laptop:px-[10px]">
                <a href="#advantage">Why OMO?</a>
              </li>
              <li className=" w-fit py-1 px-1 rounded-3xl border-4 border-[transparent] text-dark-grey cursor-pointer hover:border-pink hover:rounded-3xl laptop:px-[10px]">
                <a href="#testimoni">Testimoni</a>
              </li>
              <li className=" w-fit py-1 px-1 rounded-3xl border-4 border-[transparent] text-dark-grey cursor-pointer hover:border-pink hover:rounded-3xl laptop:px-[10px]">
                <a href="#store">Toko Kami</a>
              </li>
            </ul>
          </div>
          <div className="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5 6C5.5 2.7 7.975 0 11 0C15.8125 0 18.2875 6.45 14.9875 10.35C11.4125 13.95 5.5 11.25 5.5 6ZM22 20.85V24H0V21.15C0 17.85 4.8125 15.15 11 15.15C17.1875 15.15 22 17.7 22 20.85Z"
                fill="#3D3D3D"
              />
            </svg>
          </div>
        </div>
        <div
          className={`absolute w-full bg-white z-50 pl-7 transform transition-all duration-300 ease-in-out ${
            burgerOpen ? "right-0" : "right-[100%]"
          } tablet:hidden`}
        >
          <ul
            className={`${grandstander.variable} font-grandstander font-bold text-2xl flex flex-col gap-1 mb-7`}
          >
            <li className=" w-fit py-1 px-4 rounded-3xl hover:bg-pink  hover:text-white">
              <a href="#home">Beranda</a>
            </li>
            <li className=" w-fit py-1 px-4 rounded-3xl hover:bg-pink  hover:text-white">
              <a href="#product">Produk OMO!</a>
            </li>
            <li className=" w-fit py-1 px-4 rounded-3xl hover:bg-pink  hover:text-white">
              <a href="#advantage">Why OMO?</a>
            </li>
            <li className=" w-fit py-1 px-4 rounded-3xl hover:bg-pink  hover:text-white">
              <a href="#testimoni">Testimoni</a>
            </li>
            <li className=" w-fit py-1 px-4 rounded-3xl hover:bg-pink  hover:text-white">
              <a href="#store">Toko Kami</a>
            </li>
          </ul>
        </div>
      </nav>
      {pathName !== "/" && (
        <>
          <div className="w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2157"
              height="141"
              viewBox="0 0 2157 141"
              fill="none"
              className=" phone:w-[760px] tablet:w-[1000px] laptop:w-fit"
            >
              <path
                d="M0 117.216C0 126.221 3.69461 134.395 9.65986 140.507H543.338L548.264 137.433C553.19 134.359 557.539 130.417 560.618 125.643C562.658 122.46 564.043 119.277 564.928 115.95C570.47 94.8642 554.884 73.3447 532.062 72.1874C521.979 71.681 512.781 75.1531 505.969 81.0122C506.046 80.0357 506.123 79.0591 506.123 78.0464C506.123 48.968 481.261 25.3869 450.626 25.3869C423.725 25.3869 401.288 43.5429 396.208 67.6665C395.515 71.03 395.13 74.502 395.13 78.0464C395.13 79.7101 395.207 81.3738 395.4 83.0013H395.13C384.739 83.0013 375.426 87.1606 368.806 93.8154C368.537 88.0648 366.767 82.6397 363.803 77.9741C357.53 67.9558 346.061 61.2287 332.861 61.2287C317.544 61.2287 304.497 70.3428 299.302 83.146C292.721 76.3828 283.33 72.115 272.862 72.115C264.164 72.115 256.198 75.0446 249.963 79.9271C246.961 55.9121 225.448 37.2859 199.355 37.2859C190.849 37.2859 182.845 39.3113 175.763 42.7834C163.063 15.7303 133.352 -2.53418 99.485 0.286865C56.3042 3.86742 24.7846 42.1324 31.1732 82.8205C31.1732 83.0014 31.2117 83.1822 31.2502 83.363C17.5494 85.0991 6.27314 94.1771 1.96277 106.329C0.731232 109.729 0.0769874 113.382 0.0769874 117.216H0Z"
                fill="white"
              />
              <path
                d="M548.695 117.216C548.695 126.221 552.39 134.395 558.355 140.507H1092.03L1096.96 137.433C1101.89 134.359 1106.23 130.417 1109.31 125.643C1111.35 122.46 1112.74 119.277 1113.62 115.95C1119.17 94.8642 1103.58 73.3447 1080.76 72.1874C1070.67 71.681 1061.48 75.1531 1054.66 81.0122C1054.74 80.0357 1054.82 79.0591 1054.82 78.0464C1054.82 48.968 1029.96 25.3869 999.322 25.3869C972.42 25.3869 949.983 43.5429 944.903 67.6665C944.211 71.03 943.826 74.502 943.826 78.0464C943.826 79.7101 943.903 81.3738 944.095 83.0013H943.826C933.435 83.0013 924.121 87.1606 917.502 93.8154C917.232 88.0648 915.462 82.6397 912.499 77.9741C906.225 67.9558 894.757 61.2287 881.556 61.2287C866.239 61.2287 853.192 70.3428 847.997 83.146C841.416 76.3828 832.025 72.115 821.557 72.115C812.86 72.115 804.893 75.0446 798.659 79.9271C795.657 55.9121 774.143 37.2859 748.05 37.2859C739.545 37.2859 731.54 39.3113 724.459 42.7834C711.758 15.7303 682.047 -2.53418 648.18 0.286865C605 3.86742 573.48 42.1324 579.869 82.8205C579.869 83.0014 579.907 83.1822 579.946 83.363C566.245 85.0991 554.968 94.1771 550.658 106.329C549.427 109.729 548.772 113.382 548.772 117.216H548.695Z"
                fill="white"
              />
              <path
                d="M1067.63 117.216C1067.63 126.221 1071.32 134.395 1077.29 140.507H1610.96L1615.89 137.433C1620.82 134.359 1625.17 130.417 1628.24 125.643C1630.28 122.46 1631.67 119.277 1632.56 115.95C1638.1 94.8642 1622.51 73.3447 1599.69 72.1874C1589.61 71.681 1580.41 75.1531 1573.6 81.0122C1573.67 80.0357 1573.75 79.0591 1573.75 78.0464C1573.75 48.968 1548.89 25.3869 1518.25 25.3869C1491.35 25.3869 1468.92 43.5429 1463.83 67.6665C1463.14 71.03 1462.76 74.502 1462.76 78.0464C1462.76 79.7101 1462.83 81.3738 1463.03 83.0013H1462.76C1452.37 83.0013 1443.05 87.1606 1436.43 93.8154C1436.16 88.0648 1434.39 82.6397 1431.43 77.9741C1425.16 67.9558 1413.69 61.2287 1400.49 61.2287C1385.17 61.2287 1372.12 70.3428 1366.93 83.146C1360.35 76.3828 1350.96 72.115 1340.49 72.115C1331.79 72.115 1323.82 75.0446 1317.59 79.9271C1314.59 55.9121 1293.07 37.2859 1266.98 37.2859C1258.48 37.2859 1250.47 39.3113 1243.39 42.7834C1230.69 15.7303 1200.98 -2.53418 1167.11 0.286865C1123.93 3.86742 1092.41 42.1324 1098.8 82.8205C1098.8 83.0014 1098.84 83.1822 1098.88 83.363C1085.18 85.0991 1073.9 94.1771 1069.59 106.329C1068.36 109.729 1067.7 113.382 1067.7 117.216H1067.63Z"
                fill="white"
              />
              <path
                d="M1590.95 117.216C1590.95 126.221 1594.64 134.395 1600.61 140.507H2134.29L2139.21 137.433C2144.14 134.359 2148.49 130.417 2151.57 125.643C2153.61 122.46 2154.99 119.277 2155.88 115.95C2161.42 94.8642 2145.83 73.3447 2123.01 72.1874C2112.93 71.681 2103.73 75.1531 2096.92 81.0122C2096.99 80.0357 2097.07 79.0591 2097.07 78.0464C2097.07 48.968 2072.21 25.3869 2041.57 25.3869C2014.67 25.3869 1992.24 43.5429 1987.16 67.6665C1986.46 71.03 1986.08 74.502 1986.08 78.0464C1986.08 79.7101 1986.15 81.3738 1986.35 83.0013H1986.08C1975.69 83.0013 1966.37 87.1606 1959.75 93.8154C1959.48 88.0648 1957.71 82.6397 1954.75 77.9741C1948.48 67.9558 1937.01 61.2287 1923.81 61.2287C1908.49 61.2287 1895.44 70.3428 1890.25 83.146C1883.67 76.3828 1874.28 72.115 1863.81 72.115C1855.11 72.115 1847.15 75.0446 1840.91 79.9271C1837.91 55.9121 1816.4 37.2859 1790.3 37.2859C1781.8 37.2859 1773.79 39.3113 1766.71 42.7834C1754.01 15.7303 1724.3 -2.53418 1690.43 0.286865C1647.25 3.86742 1615.73 42.1324 1622.12 82.8205C1622.12 83.0014 1622.16 83.1822 1622.2 83.363C1608.5 85.0991 1597.22 94.1771 1592.91 106.329C1591.68 109.729 1591.02 113.382 1591.02 117.216H1590.95Z"
                fill="white"
              />
            </svg>
          </div>
        </>
      )}
    </>
  );
}
