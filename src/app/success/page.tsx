import { stripe } from "@/lib/stripe";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import Stripe from "stripe";
interface SuccessProps {
  searchParams: {
    session_id: string;
  };
}
export default async function Success({ searchParams }: SuccessProps) {
  const sectionId = searchParams.session_id;
  if (!sectionId) {
    redirect("/");
  }
  const response = await stripe.checkout.sessions.retrieve(sectionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  const customerName = response.customer_details.name;
  const product = response.line_items.data[0].price.product as Stripe.Product;
  {
    console.log(product);
  }
  return (
    <main className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <h1 className="text-2xl text-gray-100">Compra efetuada!</h1>
      <div className="w-full max-w-[130px] h-[145px] bg-gradient-to-b from-green-400 to-purple rounded-lg p-1 mt-16 ">
        <img src={product.images[0]} alt="" className="object-cover" />
      </div>
      <p className="text-xl text-gray-300 text-center mt-8 max-w-[360px] leading-6">
        Uhuul, <strong>{customerName}</strong> , sua{" "}
        <strong>{product.name} </strong>já está a caminho da sua casa.
      </p>

      <Link
        href={"/"}
        className="block text-green-500 text-lg hover:text-green-300 bold mt-20"
      >
        Voltar ao catálogo
      </Link>
    </main>
  );
}
