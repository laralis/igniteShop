import { stripe } from "@/lib/stripe";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { priceId } = await req.json();

  if (!priceId) {
    return new Response("Não veio ai", { status: 400 });
  }
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });
  return new Response(checkoutSession.url, { status: 201 });
}
