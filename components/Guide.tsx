import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flex-col flexCenter">
      <div className="w-full pb-24 padding-container max-container">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="mb-3 -mt-1 uppercase regular-18 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="relative w-full flexCenter max-container">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="object-cover object-center w-full 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="w-auto h-full"
          />
          <div className="flex-col flexBetween">
            <div className="flex flex-col w-full">
              <div className="w-full flexBetween">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="mt-2 bold-20">Aguas Calientes</p>
            </div>

            <div className="flex flex-col w-full">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="mt-2 bold-20 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
