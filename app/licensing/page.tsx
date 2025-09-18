import Section from "../../components/Section";
import Link from "next/link";

export default function Page(){
  return (<>
    <Section center title="Licensing" subtitle="We license the kinetic fall-arrest platform across application classes.">
      <div className="mx-auto max-w-3xl text-neutral-700 dark:text-neutral-300 space-y-4">
        <p>We offer IP licensing and co-development agreements for military, construction, and recreational equipment partners. Reach out with market details and timeline, and our team will respond with next steps.</p>
        <p>Licensing packages include technical documentation under NDA, integration guidance, and access to our test data.</p>
        <div className="pt-4"><Link href="/contact" className="inline-flex items-center rounded bg-signal px-4 py-2 text-white">Contact Us</Link></div>
      </div>
    </Section>
  </>);
}
