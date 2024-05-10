"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
interface ProductsProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}
export default function Carrossel({ products }: ProductsProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
      origin: "center",
    },
  });
  return (
    <section className="flex  w-container ml-auto keen-slider" ref={sliderRef}>
      {products.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            prefetch={false}
            key={product.id}
          >
            <div className="group bg-gradient-to-b from-green-400 to-purple rounded-lg p-1 cursor-pointer relative flex items-center justify-center bg-footerBg overflow-hidden h-[660px]  keen-slider__slide">
              <Image
                src={product.imageUrl}
                alt={""}
                height={480}
                width={520}
                priority={true}
              />
              <footer className=" flex absolute bottom-1 left-1 right-1 rounded-md items-center justify-between bg-footerBg p-8 translate-y-[110%] group-hover:translate-y-[0%]   group-hover:transition-all group-hover:ease-in-out group-hover:delay-200 opacity-0 group-hover:opacity-100 ">
                <strong className="text-lg font-bold text-green-300 ">
                  {product.name}
                </strong>
                <span>R$ {product.price}</span>
              </footer>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
