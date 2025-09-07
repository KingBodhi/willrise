
import Section from "@/components/Section";

export default function Page(){
  return (
    <>
      <Section title="About Willrise Unlimited" center subtitle="We’re building safer futures for builders, first responders, and anyone who works at height.">
        <div className="mx-auto max-w-3xl space-y-6 text-neutral-700 dark:text-neutral-300">
          <p>
            Willrise Unlimited is the licensing entity behind a patent‑pending <strong>Kinetic Fall Arrest System</strong> —
            a harness geometry designed to manage posture and pressure paths during and after a fall. Our focus is simple:
            reduce suspension trauma risk, extend survivable time-to-rescue, and make protective equipment more humane.
          </p>
          <p>
            We partner with manufacturers, integrators, and program leaders across <em>construction</em>, <em>military/defense</em>,
            and <em>professional rescue</em> to bring the technology to market through responsible licensing.
          </p>
        </div>
      </Section>

      <Section title="Founder" center>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-[260px_minmax(0,1fr)]">
          <div className="rounded-xl border border-alloy/40 p-3">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
              {/* Replace with real portrait */}
              <div className="flex h-full w-full items-center justify-center text-sm opacity-60">Portrait Placeholder</div>
            </div>
            <div className="mt-3 text-center">
              <div className="font-mokoto text-lg">Maximus Willhammer</div>
              <div className="text-xs opacity-70">Founder &amp; Innovator</div>
            </div>
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              Maximus Willhammer founded Willrise Unlimited to rethink how harnesses behave under real load —
              prioritizing <strong>circulatory protection</strong>, <strong>breathing comfort</strong>, and
              <strong> rapid self‑relief</strong> in suspension. His work guided the development of our kinetic geometry,
              which redistributes pressure away from the femoral and abdominal regions and introduces practical
              stance‑relief features.
            </p>
            <div className="rounded-xl border border-alloy/40 p-4">
              <h3 className="font-bicubik text-sm uppercase tracking-widest opacity-80">Ethos</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li><strong>Safety-first:</strong> Design for the worst minute of the job, not the best.</li>
                <li><strong>Evidence-led:</strong> Iterate with bench tests and live suspensions, then standardize.</li>
                <li><strong>Human comfort:</strong> Gear people can actually wear and recover in.</li>
                <li><strong>Responsible licensing:</strong> Partner with brands that honor standards and training.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Principles" center>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            ["Kinetic Geometry","Load paths that adapt across thigh, seat, and ventral attachment for posture protection."],
            ["Comfort Under Load","Pressure distribution that preserves circulation and supports breathing."],
            ["Rapid Self‑Relief","Built‑in features enabling immediate calf‑pump posture without leaving the system."]
          ].map(([t,s]) => (
            <div key={t} className="rounded-xl border border-alloy/40 p-5">
              <div className="font-medium">{t}</div>
              <p className="mt-2 text-sm opacity-80">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Commitment to Builders & First Responders" center>
        <div className="mx-auto max-w-4xl text-neutral-700 dark:text-neutral-300">
          <p>
            We owe our progress to the communities who climb towers, set steel, rig rescues, and step into risk every day.
            Our mission is to give them more margin when things go wrong — and more comfort the rest of the time.
          </p>
        </div>
      </Section>
    </>
  );
}
