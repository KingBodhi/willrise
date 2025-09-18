import Section from "@/components/Section";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { money } from "@/lib/utils";
export default async function Page(){
  const products=await prisma.product.findMany({ include:{ images:true, variants:true } });
  return (<Section title="Shop" center subtitle="Harnesses and accessories by application.">
    <div className="grid gap-6 md:grid-cols-3">
      {products.map(p=>(
        <Link key={p.id} href={`/product/${p.handle}`} className="rounded-xl border border-alloy/40 overflow-hidden hover:border-signal">
          <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-900">{p.images[0] && <img src={p.images[0].url} alt={p.images[0].alt||p.title} className="h-full w-full object-cover" />}</div>
          <div className="p-4"><div className="font-medium">{p.title}</div><div className="text-sm opacity-70">{p.variants[0]?money(p.variants[0].price):""}</div></div>
        </Link>
      ))}
    </div></Section>);
}
