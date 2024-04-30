"use client";
import Image from "next/image";
import camiseta1 from "../../public/1.png";
import camiseta2 from "../../public/2.png";
import camiseta3 from "../../public/3.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
      origin: "center",
    },
  });
  return (
    <section className="flex  w-container ml-auto keen-slider" ref={sliderRef}>
      <a
        href=""
        className="group bg-gradient-to-b from-green-400 to-purple rounded-lg p-1 cursor-pointer relative flex items-center justify-center bg-footerBg overflow-hidden h-[660px]  keen-slider__slide"
      >
        <Image
          src={camiseta1}
          alt={""}
          height={480}
          width={520}
          objectFit="cover"
        />
        <footer className=" flex absolute bottom-1 left-1 right-1 rounded-md items-center justify-between bg-footerBg p-8 translate-y-[110%] group-hover:translate-y-[0%]   group-hover:transition-all group-hover:ease-in-out group-hover:delay-200 opacity-0 group-hover:opacity-100 ">
          <strong className="text-lg font-bold text-green-300 ">
            Camiseta X
          </strong>
          <span>R$ 49,90</span>
        </footer>
      </a>
      <a
        href=""
        className="group bg-gradient-to-b from-green-400 to-purple rounded-lg p-1 cursor-pointer relative flex items-center justify-center bg-footerBg overflow-hidden h-[660px] keen-slider__slide"
      >
        <Image
          src={camiseta2}
          alt={""}
          height={480}
          width={520}
          objectFit="cover"
        />
        <footer className=" flex absolute bottom-1 left-1 right-1 rounded-md items-center justify-between bg-footerBg p-8 translate-y-[110%] group-hover:translate-y-[0%]   group-hover:transition-all group-hover:ease-in-out group-hover:delay-200 opacity-0 group-hover:opacity-100">
          <strong className="text-lg font-bold text-green-300 ">
            Camiseta X
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </a>
      <a
        href=""
        className="group bg-gradient-to-b from-green-400 to-purple rounded-lg p-1 cursor-pointer relative flex items-center justify-center bg-footerBg overflow-hidden h-[660px] keen-slider__slide"
      >
        <Image
          src={camiseta2}
          alt={""}
          height={480}
          width={520}
          objectFit="cover"
        />
        <footer className=" flex absolute bottom-1 left-1 right-1 rounded-md items-center justify-between bg-footerBg p-8 translate-y-[110%] group-hover:translate-y-[0%]   group-hover:transition-all group-hover:ease-in-out group-hover:delay-200 opacity-0 group-hover:opacity-100">
          <strong className="text-lg font-bold text-green-300 ">
            Camiseta X
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </a>
      <a
        href=""
        className="group bg-gradient-to-b from-green-400 to-purple rounded-lg p-1 cursor-pointer relative flex items-center justify-center bg-footerBg overflow-hidden h-[660px] keen-slider__slide"
      >
        <Image
          src={camiseta2}
          alt={""}
          height={480}
          width={520}
          objectFit="cover"
        />
        <footer className=" flex absolute bottom-1 left-1 right-1 rounded-md items-center justify-between bg-footerBg p-8 translate-y-[110%] group-hover:translate-y-[0%]   group-hover:transition-all group-hover:ease-in-out group-hover:delay-200 opacity-0 group-hover:opacity-100">
          <strong className="text-lg font-bold text-green-300 ">
            Camiseta X
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </a>
    </section>
  );
}
