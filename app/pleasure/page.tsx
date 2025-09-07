import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
export default function Page(){
  return (<>
    <Section title="Designed for pleasure, engineered for safety" subtitle="Consent-first education; skin-safe materials; wide pressure bands for comfort.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-alloy/40 p-5">
          <h3 className="font-bicubik font-medium">Compatibility</h3>
          <p className="text-sm opacity-80">Works with common connectors and lifelines; adapter guidance provided.</p>
        </div>
        <div className="rounded-xl border border-alloy/40 p-5">
          <h3 className="font-bicubik font-medium">Validation</h3>
          <p className="text-sm opacity-80">Bench tests and field suspension timings available in dossier.</p>
        </div>
      </div>
    </Section>
    <Section title="Start a conversation">
      <LeadForm vertical="Pleasure" />
    </Section>
  </>);
}
