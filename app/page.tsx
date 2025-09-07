"use client";
import Section from "@/components/Section";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site-config";
import { posts } from "@/content/blog/posts";

const CERT_LOGOS = ["/logos/cert1.svg","/logos/cert2.svg","/logos/cert3.svg","/logos/cert4.svg","/logos/cert5.svg"];

function LogoCarousel(){
  return (
    <div className="relative mt-10 overflow-hidden py-6">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 from-white to-transparent bg-gradient-to-r dark:from-black"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 from-transparent to-white bg-gradient-to-l dark:to-black"></div>
      <div className="flex w-[200%] animate-[marquee_30s_linear_infinite]">
        <div className="flex w-1/2 whitespace-nowrap">
          {CERT_LOGOS.map((src, i) => (
            <div key={`a-${i}`} className="flex min-w-[33.3333%] items-center justify-center">
              <img src={src} alt="Certification logo" className="h-12 w-auto opacity-90" />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 whitespace-nowrap">
          {CERT_LOGOS.map((src, i) => (
            <div key={`b-${i}`} className="flex min-w-[33.3333%] items-center justify-center">
              <img src={src} alt="Certification logo duplicate" className="h-12 w-auto opacity-90" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .animate-[marquee_30s_linear_infinite] { animation: none; } }
      `}</style>
    </div>
  );
}

function Hero(){
  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-black dark:to-neutral-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:px-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-mokoto text-[clamp(2.2rem,2.8vw+1rem,3.6rem)] leading-[1.05]">{site.hero.title}</h1>
          <p className="font-bicubik max-w-xl text-neutral-700 dark:text-neutral-300">{site.hero.subtitle}</p>
          <div className="flex gap-3">
            <a href="https://www.youtube.com/watch?v=3xIDJMKQM6U" target="_blank" rel="noreferrer" className="rounded-lg border border-alloy/60 px-4 py-2">Watch Demo</a>
            <Link href="/licensing" className="rounded-lg bg-signal px-4 py-2 text-white">License the Technology</Link>
          </div>
          <div className="flex items-center gap-3 pt-2 text-xs opacity-80">
            {site.hero.badges.map(b => <span key={b} className="rounded bg-neutral-100 px-2 py-1 dark:bg-neutral-800">{b}</span>)}
          </div>
        </div>
        <div className="rounded-xl border border-alloy/40 overflow-hidden">
          <img src="/images/hero.svg" alt="Product hero placeholder" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-8"><LogoCarousel /></div>
    </section>
  );
}

export default function Page(){
  return (
    <>
      <Hero />

      {/* Video below hero */}
      <Section id="intro-video">
        <div className="mx-auto w-full max-w-3xl md:max-w-4xl rounded-xl border border-alloy/40 overflow-hidden">
          <div className="aspect-video w-full">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/4524ivG_T3M" title="Explainer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-alloy/30 bg-gradient-to-b from-neutral-50 to-white p-6 text-center shadow-sm dark:from-neutral-900 dark:to-neutral-950">
          <h3 className="mb-3 font-mokoto text-2xl">DANGERS OF TRADITIONAL HARNESSES</h3>
          <p className="mx-auto max-w-3xl text-neutral-700 dark:text-neutral-300">
            Extended suspension in conventional leg-loop harnesses can induce venous pooling, abdominal pressure,
            and orthostatic intolerance—shrinking the rescue window. Our Kinetic geometry manages load paths and posture
            to protect circulation and comfort in suspension.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-alloy/40 p-3"><div className="text-xl font-semibold">3–5 min</div><div className="text-xs opacity-75">Time to loss of consciousness in adverse suspension scenarios.</div></div>
            <div className="rounded-lg border border-alloy/40 p-3"><div className="text-xl font-semibold">8–15 min</div><div className="text-xs opacity-75">Window from blackout to fatal outcome without rescue.</div></div>
            <div className="rounded-lg border border-alloy/40 p-3"><div className="text-xl font-semibold">0 tools</div><div className="text-xs opacity-75">Most wearers lack practical self-relief under real-world load.</div></div>
          </div>
        </div>
      </Section>

      <Section id="tech" title="Kinetic Fall Arrest System" center subtitle="Harness geometry that manages load paths and posture to protect circulation and comfort in suspension.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {[
              ["Dynamic thigh–seat transition","Redistributes pressure to gluteal plane, lowering femoral tourniquet effects."],
              ["Ventral bias control","Micro-adjustable tie-in geometry eases diaphragmatic loading."],
              ["Pressure-band distribution","Multi-band webbing spreads force across wider surface."],
              ["Rapid stance loops","Immediate calf pump & relief posture without leaving system."]
            ].map(([t,s]) => (
              <div key={t} className="rounded-xl border border-alloy/40 p-4">
                <div className="font-medium">{t}</div>
                <p className="text-sm opacity-80">{s}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-dashed border-alloy/60 p-6">
            <div className="aspect-square rounded-lg bg-neutral-100 dark:bg-neutral-900" />
            <p className="mt-2 text-xs opacity-70">Insert exploded-view render here</p>
          </div>
        </div>
      </Section>

      <Section id="verticals" title="Applications" center>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Military","/military","/images/apps/military.svg","Aircrew, SAR, confined-space, maritime."],
            ["Construction","/construction","/images/apps/construction.svg","Roofing, tower, wind, solar, utilities."],
            ["Pleasure","/pleasure","/images/apps/pleasure.svg","Consumer intimacy restraints — consent-first, comfort-forward."]
          ].map(([t,href,img,desc]) => (
            <a key={href} href={href} className="rounded-xl border border-alloy/40 p-0 hover:border-signal overflow-hidden">
              <div className="aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-900">
                <img src={img} alt={`${t} placeholder`} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="font-medium">{t}</div>
                <p className="mt-1 text-sm opacity-80">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="blog" title="Latest from the Blog" center>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0,3).map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border border-alloy/40 p-0 hover:border-signal overflow-hidden">
              <div className="aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-900">{p.image && <img src={p.image} alt={p.title} className="h-full w-full object-cover" />}</div>
                <div className="p-5"><div className="text-lg font-medium">{p.title}</div>
              <div className="mt-1 text-sm opacity-80">{p.excerpt}</div>
              <div className="mt-3 text-xs opacity-60">{p.date} • {p.tags.join(", ")}</div></div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact Us" center subtitle="Send us a note about your application or questions. We’ll respond shortly.">
        <div className="max-w-2xl mx-auto"><LeadForm /></div>
      </Section>
    </>
  );
}
