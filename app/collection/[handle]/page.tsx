import Section from "@/components/Section";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { money } from "@/lib/utils";
export default async function Page({ params }:{ params:{ handle:string }}){
  const c=await prisma.collection.findUnique({ where:{ handle:params.handle }, include:{ products:{ include:{ product:{ include:{ images:true, variants:true } } } } } });
  if(!c) return <Section title="Collection" center><p>Not found.</p></Section>;
  return (<Section title={c.title} center>
    <div className="grid gap-6 md:grid-cols-3">
      {c.products.map(cp=>(
        <Link key={cp.product.id} href={`/product/${cp.product.handle}`} className="rounded-xl border border-alloy/40 overflow-hidden hover:border-signal">
          <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-900">{cp.product.images[0] && <img src={cp.product.images[0].url} alt={cp.product.images[0].alt||cp.product.title} className="h-full w-full object-cover" />}</div>
          <div className="p-4"><div className="font-medium">{cp.product.title}</div><div className="text-sm opacity-70">{cp.product.variants[0]?money(cp.product.variants[0].price):""}</div></div>
        </Link>
      ))}
    </div></Section>);
}
