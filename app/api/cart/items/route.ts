import { getOrCreateCart } from "@/lib/cart";
import { prisma } from "@/lib/prisma";
export async function POST(req:Request){
  const cart=await getOrCreateCart(); const body=await req.json(); const { variantId, qty=1, safetyAck=false }=body;
  const variant=await prisma.variant.findUnique({ where:{ id:variantId }, include:{ product:true } });
  if(!variant) return new Response("Variant not found",{status:404});
  const item=await prisma.cartItem.create({ data:{ cartId: cart.id, variantId, qty, price: variant.price, metadata: JSON.stringify({ safetyAck }) } });
  return Response.json(item);
}
export async function PATCH(req:Request){ const { id, qty }=await req.json(); await prisma.cartItem.update({ where:{ id }, data:{ qty } }); return Response.json({ok:true}); }
export async function DELETE(req:Request){ const { id }=await req.json(); await prisma.cartItem.delete({ where:{ id } }); return Response.json({ok:true}); }
