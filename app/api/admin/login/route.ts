import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcryptjs";
import { setSession } from "@/lib/auth";
export async function POST(req: Request){
  const { email, password } = await req.json();
  if(!email || !password) return new Response("Missing credentials",{status:400});
  const user = await prisma.user.findUnique({ where:{ email } });
  if(!user) return new Response("Invalid login",{status:401});
  const ok = await bcrypt.compare(password, user.password);
  if(!ok) return new Response("Invalid login",{status:401});
  await setSession({ userId: user.id, role: (user.role as any) || "EDITOR", email: user.email });
  return Response.json({ ok: true });
}
