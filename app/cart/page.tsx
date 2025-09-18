"use client";
import useSWR from "swr"; const fetcher=(u:string)=>fetch(u).then(r=>r.json());
const money=(c:number)=>Intl.NumberFormat(undefined,{style:"currency",currency:"USD"}).format(c/100);
export default function Page(){
  const { data, mutate } = useSWR("/api/cart", fetcher);
  if(!data) return <div className="px-6 py-10">Loading…</div>;
  const total=(data.items||[]).reduce((s:any,i:any)=>s+i.price*i.qty,0);
  async function del(id:string){ await fetch("/api/cart/items",{method:"DELETE", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ id })}); mutate(); }
  async function checkout(){
    try{
      const res=await fetch("/api/checkout/session",{method:"POST"});
      if(!res.ok){ const msg=await res.text(); alert("Checkout error: "+msg+"\nMake sure STRIPE_SECRET_KEY is set in .env"); return; }
      const json=await res.json(); if(json.url) location.href=json.url;
    }catch{ alert("Network error creating checkout session."); }
  }
  return (<div className="mx-auto max-w-4xl px-6 py-10">
    <h1 className="font-mokoto text-2xl">Cart</h1>
    <div className="mt-6 divide-y rounded-xl border border-alloy/30">{(data.items||[]).map((i:any)=>(<div key={i.id} className="flex items-center justify-between p-3 text-sm"><div>{i.variant?.sku||"Variant"} × {i.qty}</div><div className="flex items-center gap-3"><div>{money(i.price*i.qty)}</div><button onClick={()=>del(i.id)} className="rounded border border-alloy/50 px-2 py-1">Remove</button></div></div>))}{!data.items?.length && <div className="p-6 text-sm opacity-70">Your cart is empty.</div>}</div>
    <div className="mt-4 flex items-center justify-between"><div className="text-lg">Total: {money(total)}</div><button onClick={checkout} disabled={!data.items?.length} className="rounded bg-signal px-4 py-2 text-white">Checkout</button></div>
  </div>);
}
