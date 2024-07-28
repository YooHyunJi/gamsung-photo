"use client";

import html2canvas from "html2canvas";
import useImageStore from "@/store/image-store";

interface IPropsType {
  text: string;
}

export default function Button({ text }: IPropsType) {
  const { setUrl } = useImageStore();

  const handleTakePhoto = () => {
    const input = document.querySelector("#photoInput") as HTMLInputElement;
    input?.click();
  };

  const handleMakeURL = () => {
    const input = document.querySelector("#photoInput") as HTMLInputElement;
    if (input.files) {
      setUrl(URL.createObjectURL(input.files[0]));
    }
  };

  const handleSavePhoto = () => {
    const target = document.querySelector("#capture-area") as HTMLDivElement;
    html2canvas(target).then((canvas) => {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL("image/png");
      link.download = "당신에게 감성을 한스푼....png";
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <button
      type="button"
      onClick={text === "사진 선택" ? handleTakePhoto : handleSavePhoto}
      className="bg-[#ff5ea6] text-white px-[1rem] py-[0.5rem] text-[1.5rem] font-Tear"
    >
      {text}
      <input
        type="file"
        id="photoInput"
        accept="image/*"
        className="hidden"
        onChange={handleMakeURL}
      />
    </button>
  );
}
