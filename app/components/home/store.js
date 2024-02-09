"use client";

import { Poppins } from "next/font/google";
import shopee from "../../assets/store/shopee-logo.png";
import tokopedia from "../../assets/store/tokopedia-logo.png";
import tiktok from "../../assets/store/tiktok-shop-logo.png";
import lazada from "../../assets/store/lazada-logo.png";
import blibli from "../../assets/store/blibli-logo.png";
import Image from "next/image";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-poppins",
});

export default function StoreHome() {
  const position = { lat: 1.4916, lng: 124.84411 };
  const [open, setOpen] = useState(false);
  const resellerData = [
    {
      id: 1,
      longitude: 106.9035558,
      latitude: -6.3757114,
      reseller_nama: "Adek Mungil",
    },
    {
      id: 2,
      longitude: 98.6644565,
      latitude: 3.5834634,
      reseller_nama: "Athena Baby Shop",
    },
    {
      id: 3,
      longitude: 109.3330663,
      latitude: -0.0255726,
      reseller_nama: "Baby House",
    },
    {
      id: 4,
      longitude: 115.2037838,
      latitude: -8.6634434,
      reseller_nama: "Baby Land",
    },
  ];

  return (
    <div
      id="store"
      className=" bg-white mb-10 flex flex-col items-center phone:gap-10 tablet:gap-20 laptop:gap-28 desktop:gap-32 desktopXl:gap-40"
    >
      <div className="stores-section flex flex-col items-center">
        <h1
          className={`${poppins.variable} font-poppins font-bold uppercase text-dark-grey text-center phone:text-2xl phone:mb-5 tablet:text-3xl tablet:mb-12 laptop:text-4xl laptop:mb-16 desktop:text-5xl desktop:mb-20`}
        >
          toko online kami
        </h1>
        <div className="shop-logo flex items-baseline phone:gap-5 tablet:gap-10 laptop:gap-12 desktop:gap-16">
          <Image
            src={shopee}
            width={133}
            height={189}
            alt="shopee"
            className="h-auto phone:w-12 tablet:w-16 laptop:w-20 desktop:w-[90px]"
          />
          <Image
            src={tokopedia}
            width={133}
            height={189}
            alt="tokopedia"
            className="h-auto phone:w-14 tablet:w-20 laptop:w-24 desktop:w-28"
          />
          <Image
            src={tiktok}
            width={171}
            height={186}
            alt="tiktok shop"
            className="h-auto phone:w-14 tablet:w-20 laptop:w-24 desktop:w-28"
          />
          <Image
            src={lazada}
            width={177}
            height={140}
            alt="lazada"
            className="h-auto phone:w-14 tablet:w-20 laptop:w-24 desktop:w-28"
          />
          <Image
            src={blibli}
            width={125}
            height={192}
            alt="blibli"
            className="h-auto phone:w-10 tablet:w-14 laptop:w-[70px] desktop:w-20"
          />
        </div>
      </div>

      <div className="resellers-section flex flex-col items-center">
        <h1
          className={`${poppins.variable} font-poppins font-bold uppercase text-dark-grey text-center phone:text-2xl phone:mb-5 tablet:text-3xl tablet:mb-12 laptop:text-4xl laptop:mb-16 desktop:text-5xl desktop:mb-20`}
        >
          omo! reseller
        </h1>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <div className="flex justify-center">
            <div className="phone:h-[500px] phone:w-[350px] tablet:w-[700px] laptop:w-[1000px] desktop:w-[1300px]">
              <Map
                zoom={4}
                minZoom={4}
                center={{ lat: -1.4940371963337244, lng: 120.19495865257923 }}
                mapId={process.env.NEXT_PUBLIC_MAPS_ID}
                maxZoom={8}
              >
                <AdvancedMarker
                  position={position}
                  onClick={() => setOpen(true)}
                >
                  <Pin />
                </AdvancedMarker>
              </Map>
            </div>
          </div>
        </APIProvider>
        <div className="flex flex-col items-center phone:gap-3 phone:mt-3 tablet:mt-6 laptop:mt-12">
          <label
            htmlFor="region"
            className={`${poppins.variable} font-poppins tablet:text-lg laptop:text-xl desktop:text-2xl`}
          >
            Pilih Kota
          </label>
          <select
            id="region"
            className="border phone:rounded-md phone:w-44 tablet:w-52 tablet:p-2 laptop:text-lg desktop:text-xl desktop:w-64 desktopXl:w-72 focus:outline-grey"
          >
            <option value={""}></option>
            <option value={""}>DKI Jakarta</option>
            <option value={""}>Jawa Barat</option>
          </select>
        </div>
      </div>
    </div>
  );
}
