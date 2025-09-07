import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest){
  const form = await req.formData();
  const payload: Record<string, string> = {};
  form.forEach((v,k)=> payload[k]=String(v));
  console.log("[Lead]", payload);
  return NextResponse.json({ ok: true });
}
