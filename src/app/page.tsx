import Carrossel from "@/components/Carrossel";
import { stripe } from "@/lib/stripe";

import { noSSR } from "next/dynamic";
import Stripe from "stripe";

export default async function Home() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = response.data.map(
    (product) => {
      const price = product.default_price as Stripe.Price;
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: (price.unit_amount! / 100).toFixed(2),
      };
    },
    { caches: noSSR }
  );
  return (
    <>
      <Carrossel products={products} />
    </>
  );
}
