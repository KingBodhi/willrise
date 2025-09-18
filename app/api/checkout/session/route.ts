import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { getOrCreateCart } from "@/lib/cart";
const STRIPE_KEY = process.env.STRIPE_SECRET_KEY || "";
const stripe = STRIPE_KEY ? new Stripe(STRIPE_KEY, { apiVersion: "2024-06-20" }) : null as any;
export async function POST(){
  const cart=await getOrCreateCart();
  const items=await prisma.cartItem.findMany({ where:{ cartId: cart.id }, include:{ variant:{ include:{ product:true } } } });
  if(!items.length) return new Response("Empty cart",{status:400});
  if(!stripe) return new Response("Stripe not configured on server",{status:500});
  const line_items=items.map(i=>({ quantity:i.qty, price_data:{ currency:"usd", unit_amount:i.price, product_data:{ name:`${i.variant.product.title} ${i.variant.size||""} ${i.variant.color||""}`.trim() } } }));
  const base=process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const session=await stripe.checkout.sessions.create({ mode:"payment", line_items, success_url:`${base}/cart?success=1`, cancel_url:`${base}/cart?cancel=1` });
  return Response.json({ id: session.id, url: session.url });
}
