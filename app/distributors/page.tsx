import Section from "../../components/Section";
import Link from "next/link";

export default function Page(){
  return (<>
    <Section center title="Distributors" subtitle="We partner with specialists across application classes.">
      <div className="mx-auto max-w-3xl text-neutral-700 dark:text-neutral-300 space-y-4">
        <p>We are building a focused distributor network for three product families. If your organization serves these communities and values safety, training, and long-term support, we’d love to talk.</p>
        <div className="pt-4">
          <Link href="/licensing" className="inline-flex items-center rounded bg-signal px-4 py-2 text-white">Apply via Licensing</Link>
        </div>
      </div>
    </Section>
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-alloy/40 overflow-hidden">
          <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-900"><img src="/images/apps/military.svg" alt="Military" className="h-full w-full object-cover"/></div>
          <div className="p-4"><div className="font-medium">Military</div><p className="text-sm opacity-80">Low-signature, posture-protective designs for high-mobility operations.</p></div>
        </div>
        <div className="rounded-xl border border-alloy/40 overflow-hidden">
          <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-900"><img src="/images/apps/construction.svg" alt="Construction" className="h-full w-full object-cover"/></div>
          <div className="p-4"><div className="font-medium">Construction</div><p className="text-sm opacity-80">Jobsite-ready fall protection designed to mitigate suspension trauma.</p></div>
        </div>
        <div className="rounded-xl border border-alloy/40 overflow-hidden">
          <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-900"><img src="/images/apps/pleasure.svg" alt="Pleasure" className="h-full w-full object-cover"/></div>
          <div className="p-4"><div className="font-medium">Pleasure</div><p className="text-sm opacity-80">Ergonomic, circulation-conscious designs for consensual recreational use.</p></div>
        </div>
      </div>
    </Section>
  </>);
}
