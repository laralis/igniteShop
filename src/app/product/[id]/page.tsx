import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
type ProductParams = {
  params: {
    id: string;
  };
};

export default async function Product({ params }: ProductParams) {
  const productId = params.id;
  const response = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = response.default_price as Stripe.Price;
  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: (price.unit_amount! / 100).toFixed(2),
    description: response.description,
    defaultPriceId: price.id,
  };



  return (
    <main className="grid grid-cols-2 items-stretch gap-16 ml-32 mr-20">
      <div className="w-full max-w-[576px] bg-gradient-to-b from-green-400 to-purple rounded-lg px-1 flex items-center justify-center py-24">
        <Image
          src={product.imageUrl}
          alt=""
          width={520}
          height={480}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col ">
        <h1 className="text-3xl text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-3xl text-green-300">
          R$ {product.price}
        </span>
        <p className=" mt-10 text-md leading-7 text-gray-300">
          {product.description}
        </p>
        <Button productId={product.defaultPriceId}/>
      </div>
    </main>
  );
}
