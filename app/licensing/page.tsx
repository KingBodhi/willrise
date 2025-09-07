import Section from "@/components/Section";
export default function Page(){
  return (<>
    <Section title="Licensing Options" center subtitle="Flexible structures for OEMs and safety brands.">
      <div className="grid gap-6 md:grid-cols-3">
        {[["Exclusive by Vertical","Secure competitive moat within your industry segment."],
          ["Non-exclusive by Region","Accelerate adoption with regional rights."],
          ["Tech Transfer Support","On-site integration, QA, and training packages."]].map(([t,s])=> (
            <div key={t} className="rounded-xl border border-alloy/40 p-5">
              <div className="font-medium">{t}</div><p className="text-sm opacity-80">{s}</p>
            </div>
        ))}
      </div>
    </Section>
  </>);
}
