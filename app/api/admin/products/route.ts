import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
export async function GET(){
  const sess = await getSession();
  if(!sess) return new Response("Unauthorized",{status:401});
  const products = await prisma.product.findMany({ include:{ variants:true, images:true, collections:{ include:{ collection:true } } } });
  return Response.json(products);
}
export async function POST(req:Request){
  const sess = await getSession();
  if(!sess || (sess.role!=="ADMIN" && sess.role!=="EDITOR")) return new Response("Unauthorized",{status:401});
  const body = await req.json();
  const { title, handle, description } = body || {};
  if(!title || !handle) return new Response("Missing fields",{status:400});
  const p = await prisma.product.create({ data:{ title, handle, description: description || "" } });
  return Response.json(p);
}
