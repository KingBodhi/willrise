import * as jose from 'jose';
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
export type Session = { userId: string; role: "ADMIN"|"EDITOR"|"DISTRIBUTOR"|"CUSTOMER"; email: string };
const name = "wr_session";
const secret = new TextEncoder().encode(process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET || "fallback-dev-secret-key-change-in-production");
export async function setSession(payload: Session){
  const token = await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(secret);
  cookies().set(name, token, { httpOnly: true, sameSite: "lax", path: "/" });
}
export async function getSession(): Promise<Session|null>{
  try {
    const token = cookies().get(name)?.value;
    if(!token) {
      console.log('No session token found');
      return null;
    }
    const { payload } = await jwtVerify(token, secret);
    return payload as Session;
  } catch (error) {
    console.log('Session verification failed:', error);
    return null;
  }
}
export function clearSession(){ cookies().set(name, "", { httpOnly:true, sameSite:"lax", path:"/", maxAge:0 }); }
