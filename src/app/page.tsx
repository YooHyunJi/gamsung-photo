import Phone from "@/components/Phone";
import Button from "@/components/Button";

export default function Page() {
  return (
    <div
      id="capture-area"
      className="w-full h-[40rem] flex flex-col justify-center relative"
    >
      <Phone device={1} />
      <section className="flex justify-around w-[20rem] mx-auto mt-[1rem]">
        <Button text="사진 선택" />
        <Button text="뽀샵하기" />
      </section>
    </div>
  );
}
