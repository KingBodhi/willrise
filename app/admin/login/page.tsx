"use client";
import { useState } from "react";
export default function Page(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [err,setErr]=useState("");
  async function submit(e:React.FormEvent){ e.preventDefault(); setErr("");
    const res=await fetch("/api/admin/login",{method:"POST",headers:{ "Content-Type":"application/json" },body:JSON.stringify({email,password})});
    if(res.ok){ location.href="/admin"; } else { setErr(await res.text()||"Login failed"); }
  }
  return (<div className="mx-auto max-w-sm px-6 py-16">
    <h1 className="font-mokoto text-2xl mb-6">Admin Login</h1>
    <form onSubmit={submit} className="space-y-3">
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full rounded border p-2"/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full rounded border p-2"/>
      {err && <div className="text-red-600 text-sm">{err}</div>}
      <button className="rounded bg-signal px-4 py-2 text-white w-full">Sign in</button>
    </form>
  </div>);
}
