"use client";

import Image from "next/image";
import useImageStore from "@/store/image-store";

interface IPropsType {
  device: number;
}

export default function Phone({ device }: IPropsType) {
  const selectedDevice = `/image/phone_00${device}.png`;

  const { url } = useImageStore();

  return (
    <>
      <div className="w-[20rem] mx-auto relative">
        <Image
          src={selectedDevice}
          width={100}
          height={100}
          alt="device"
          className="w-[12rem] mx-auto my-[3rem] relative"
        />
        <Image
          src={url}
          width={100}
          height={100}
          alt="photo"
          id="selectedImage"
          className="absolute top-[7.5rem] left-[6.1rem] w-[7.8rem] h-[9.7rem]"
        />
      </div>
    </>
  );
}
