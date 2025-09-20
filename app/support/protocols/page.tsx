import Section from "../../../components/Section";
import Link from "next/link";

export default function ProtocolsPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <nav className="text-sm text-neutral-600 mb-6">
              <Link href="/support" className="hover:text-primary-600">Support</Link>
              <span className="mx-2">→</span>
              <span>Safety Protocols</span>
            </nav>
            
            <h1 className="font-display text-5xl font-bold text-primary-600 mb-6">
              Safety Protocols
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Standardized safety procedures and protocols for fall protection equipment use and emergency response.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-warning-50 border border-warning-200 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-warning-800 mb-4">Development In Progress</h2>
              <p className="text-warning-700 mb-6">
                Our safety team is developing comprehensive protocols covering:
              </p>
              <ul className="space-y-2 text-warning-700">
                <li>• Pre-work safety assessments</li>
                <li>• Equipment deployment procedures</li>
                <li>• Emergency response protocols</li>
                <li>• Rescue operation guidelines</li>
                <li>• Incident reporting procedures</li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Request Protocol Information
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
