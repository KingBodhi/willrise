
import Section from "@/components/Section";
import Link from "next/link";

const DISTRIBUTORS = [
  {
    name: "WR • Defense Partners",
    vertical: "Military",
    img: "/images/distributors/military.svg",
    blurb: "Programs for aircrew, SAR, confined-space, and maritime. ITAR-aware licensing and training packages."
  },
  {
    name: "WR • Build Partners",
    vertical: "Construction",
    img: "/images/distributors/construction.svg",
    blurb: "Territory-based distribution for roofing, towers, wind, solar, and utilities. Toolbox training materials included."
  },
  {
    name: "WR • Motion Partners",
    vertical: "Pleasure",
    img: "/images/distributors/pleasure.svg",
    blurb: "Consumer intimacy products: consent-first, comfort-forward hardware with strict safety disclosures."
  }
] as const;

export default function Page(){
  return (
    <>
      <Section title="Distributors" center subtitle="We partner with select distributors by vertical and region.">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-neutral-700 dark:text-neutral-300">
            Interested in carrying licensed products or integrating the Kinetic Fall Arrest System into your line?
            Apply for licensing to begin the evaluation process.
          </p>
          <div className="mt-6">
            <Link href="/licensing" className="inline-flex items-center rounded-lg bg-alloy px-5 py-3 font-bicubik text-navy hover:bg-alloy/90">
              Apply for Licensing
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Our Distribution Verticals" center>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {DISTRIBUTORS.map((d) => (
            <div key={d.name} className="overflow-hidden rounded-xl border border-alloy/40">
              <div className="aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-900">
                <img src={d.img} alt={`${d.vertical} distribution`} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="font-medium">{d.name}</div>
                <div className="text-xs opacity-70">{d.vertical}</div>
                <p className="mt-2 text-sm opacity-80">{d.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
