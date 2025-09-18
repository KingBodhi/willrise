import * as jose from 'jose';
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
export type Session = { userId: string; role: "ADMIN"|"EDITOR"|"DISTRIBUTOR"|"CUSTOMER"; email: string };
const name = "wr_session";
const secret = new TextEncoder().encode(process.env.SESSION_SECRET || "dev-secret");
export async function setSession(payload: Session){
  const token = await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(secret);
  cookies().set(name, token, { httpOnly: true, sameSite: "lax", path: "/" });
}
export async function getSession(): Promise<Session|null>{
  const token = cookies().get(name)?.value;
  if(!token) return null;
  try { const { payload } = await jwtVerify(token, secret); return payload as Session; } catch { return null; }
}
export function clearSession(){ cookies().set(name, "", { httpOnly:true, sameSite:"lax", path:"/", maxAge:0 }); }
