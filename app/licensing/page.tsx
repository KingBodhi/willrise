import Section from "@/components/Section";
export default function Page(){
  return (
    <>
      <Section title="Licensing Options" subtitle="Flexible structures for OEMs and safety brands.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Exclusive by Vertical","Secure competitive moat within your industry segment."],
            ["Non-exclusive by Region","Accelerate adoption with regional rights."],
            ["Tech Transfer Support","On-site integration, QA, and training packages."]
          ].map(([t,s])=> (
            <div key={t} className="rounded-xl border border-alloy/40 p-5">
              <div className="font-medium">{t}</div>
              <p className="text-sm opacity-80">{s}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Typical Process" subtitle="From evaluation to integration.">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Intro + NDA</li>
          <li>Technical dossier review</li>
          <li>Pilot program & validation</li>
          <li>Manufacturing integration</li>
          <li>License execution & support</li>
        </ol>
      </Section>
    </>
  )
}
