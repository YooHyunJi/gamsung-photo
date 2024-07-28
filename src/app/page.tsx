import Phone from "@/components/Phone";
import Button from "@/components/Button";

export default function Page() {
  return (
    <div className="w-full h-[40rem] flex flex-col justify-center relative">
      <Phone device={1} />
      <section className="flex justify-around w-[20rem] mx-auto mt-[3rem]">
        <Button text="사진 찍기" />
        <Button text="저장하기" />
      </section>
    </div>
  );
}
