"use client";
import useSWR from "swr"; import { useState } from "react";
const fetcher=(u:string)=>fetch(u).then(r=>r.json());
const money=(c:number)=>Intl.NumberFormat(undefined,{style:"currency",currency:"USD"}).format(c/100);
export default function Page({ params }:{ params:{ handle:string }}){
  const { data } = useSWR(`/api/products/${params.handle}`, fetcher);
  const [variantId,setVariantId]=useState<string|null>(null); const [qty,setQty]=useState(1); const [ack,setAck]=useState(false);
  if(!data) return <div className="px-6 py-10">Loading…</div>;
  const activeId = variantId || data.variants?.[0]?.id || "";
  async function add(){
    if(!activeId){ alert("Please select a variant."); return; }
    try{
      const res=await fetch("/api/cart/items",{
        method:"POST", headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ variantId: activeId, qty, safetyAck: ack })
      });
      if(!res.ok){ const msg=await res.text(); alert("Could not add to cart: "+msg); return; }
      location.href="/cart";
    }catch{ alert("Network error adding to cart."); }
  }
  return (<div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-2">
    <div className="space-y-3">
      <div className="aspect-square overflow-hidden rounded-xl border border-alloy/40 bg-neutral-100 dark:bg-neutral-900">{data.images?.[0] && <img src={data.images[0].url} alt={data.images[0].alt||data.title} className="h-full w-full object-cover" />}</div>
      <div className="grid grid-cols-4 gap-2">{(data.images||[]).slice(0,8).map((img:any)=>(<div key={img.id} className="aspect-square overflow-hidden rounded border border-alloy/30 bg-neutral-100 dark:bg-neutral-900"><img src={img.url} alt={img.alt||data.title} className="h-full w-full object-cover"/></div>))}</div>
    </div>
    <div>
      <h1 className="font-mokoto text-3xl">{data.title}</h1>
      <div className="mt-2 text-xl">{data.variants?.[0]?money(data.variants[0].price):""}</div>
      <p className="mt-4 opacity-80">{data.description}</p>
      
      {/* Inventory Indicator */}
      {data.variants?.[0]?.inventory && (
        <div className="flex items-center gap-2 text-sm mt-2">
          <div className={`h-2 w-2 rounded-full ${data.variants[0].inventory.quantity > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className={data.variants[0].inventory.quantity > 0 ? 'text-green-600' : 'text-red-600'}>
            {data.variants[0].inventory.quantity > 0 
              ? (data.variants[0].inventory.quantity > 10 ? 'In Stock' : `Only ${data.variants[0].inventory.quantity} left`)
              : 'Out of Stock'}
          </span>
        </div>
      )}

      {/* Trust Badges */}
      <div className="mt-4 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-alloy/20">
        <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-2">
          Safety Certifications:
        </div>
        <div className="flex gap-3 items-center text-xs text-neutral-700 dark:text-neutral-300">
          <span>✓ ANSI Z359.1-2016</span>
          <span>✓ OSHA Compliant</span>
          <span>✓ CE Marked</span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
          Trusted by 5,000+ worksites worldwide
        </p>
      </div>

      {/* Urgency Elements */}
      {data.variants?.[0]?.inventory?.quantity < 5 && data.variants[0].inventory.quantity > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-4">
          <div className="flex items-center gap-2 text-sm text-orange-800">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Only {data.variants[0].inventory.quantity} left in stock</span>
          </div>
        </div>
      )}

      {/* Free Shipping Notice */}
      <div className="bg-signal/10 border border-signal/20 rounded-lg p-3 mt-4">
        <div className="text-sm text-signal font-medium">
          🚚 Free shipping on orders over $500 • 30-day returns
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": data.title,
            "description": data.description,
            "image": data.images?.map((img: {url: string}) => img.url) || [],
            "sku": data.variants?.[0]?.sku || "",
            "brand": {
              "@type": "Brand",
              "name": "Willrise Unlimited"
            },
            "offers": {
              "@type": "Offer",
              "url": `${process.env.NEXT_PUBLIC_BASE_URL}/product/${params.handle}`,
              "priceCurrency": "USD",
              "price": (data.variants?.[0]?.price || 0) / 100,
              "availability": data.variants?.[0]?.inventory?.quantity > 0 
                ? "https://schema.org/InStock" 
                : "https://schema.org/OutOfStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          })
        }}
      />
      
      {/* Inventory Indicator */}
      {data.variants?.[0]?.inventory && (
        <div className="flex items-center gap-2 text-sm mt-2">
          <div className={`h-2 w-2 rounded-full ${data.variants[0].inventory.quantity > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className={data.variants[0].inventory.quantity > 0 ? 'text-green-600' : 'text-red-600'}>
            {data.variants[0].inventory.quantity > 0 
              ? (data.variants[0].inventory.quantity > 10 ? 'In Stock' : `Only ${data.variants[0].inventory.quantity} left`)
              : 'Out of Stock'}
          </span>
        </div>
      )}

      {/* Trust Badges */}
      <div className="mt-4 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-alloy/20">
        <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-2">
          Safety Certifications:
        </div>
        <div className="flex gap-3 items-center text-xs text-neutral-700 dark:text-neutral-300">
          <span>✓ ANSI Z359.1-2016</span>
          <span>✓ OSHA Compliant</span>
          <span>✓ CE Marked</span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
          Trusted by 5,000+ worksites worldwide
        </p>
      </div>

      {/* Urgency Elements */}
      {data.variants?.[0]?.inventory?.quantity < 5 && data.variants[0].inventory.quantity > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-4">
          <div className="flex items-center gap-2 text-sm text-orange-800">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Only {data.variants[0].inventory.quantity} left in stock</span>
          </div>
        </div>
      )}

      {/* Free Shipping Notice */}
      <div className="bg-signal/10 border border-signal/20 rounded-lg p-3 mt-4">
        <div className="text-sm text-signal font-medium">
          🚚 Free shipping on orders over $500 • 30-day returns
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": data.title,
            "description": data.description,
            "image": data.images?.map((img: {url: string}) => img.url) || [],
            "sku": data.variants?.[0]?.sku || "",
            "brand": {
              "@type": "Brand",
              "name": "Willrise Unlimited"
            },
            "offers": {
              "@type": "Offer",
              "url": `${process.env.NEXT_PUBLIC_BASE_URL}/product/${params.handle}`,
              "priceCurrency": "USD",
              "price": (data.variants?.[0]?.price || 0) / 100,
              "availability": data.variants?.[0]?.inventory?.quantity > 0 
                ? "https://schema.org/InStock" 
                : "https://schema.org/OutOfStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          })
        }}
      />

      <div className="mt-6 grid gap-3">
        <div className="grid grid-cols-2 gap-2">{(data.variants||[]).map((v:any)=>(<button key={v.id} onClick={()=>setVariantId(v.id)} className={`rounded border px-3 py-2 ${ (variantId||data.variants[0].id)===v.id ? "border-signal ring-1 ring-signal" : "border-alloy/50"}`}>{v.size||"STD"} {v.color?`• ${v.color}`:""}</button>))}</div>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={ack} onChange={e=>setAck(e.target.checked)} /> I understand this gear requires proper training and inspection.</label>
        <div className="flex items-center gap-2"><input type="number" value={qty} onChange={e=>setQty(parseInt(e.target.value||"1"))} min={1} className="w-20 rounded border border-alloy/50 p-2"/><button onClick={add} className="rounded bg-signal px-4 py-2 text-white">Add to Cart</button></div>
      </div>
    </div></div>);
}