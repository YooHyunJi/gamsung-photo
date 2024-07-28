import Image from "next/image";

interface IPropsType {
  device: number;
}

export default function Phone({ device }: IPropsType) {
  const selectedDevice = `/image/phone_00${device}.png`;

  return (
    <div className="w-[20rem] mx-auto relative">
      <Image
        src={selectedDevice}
        width={100}
        height={100}
        alt="device"
        className="w-[12rem] mx-auto my-[3rem] relative"
      />
      <Image
        src={`/image/phone_002.png`}
        width={100}
        height={100}
        alt="photo"
        className="absolute top-[7.5rem] left-[6.1rem] w-[7.8rem] h-[9.7rem]"
      />
    </div>
  );
}
