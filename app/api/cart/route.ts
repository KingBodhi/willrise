import { getOrCreateCart } from '@/lib/cart'; export async function GET(){ const cart=await getOrCreateCart(); return Response.json(cart); }
