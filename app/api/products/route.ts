import { prisma } from '@/lib/prisma'; export async function GET(){ const prods=await prisma.product.findMany({ include:{ images:true, variants:true } }); return Response.json(prods); }
