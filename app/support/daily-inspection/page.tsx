import Section from "../../../components/Section";
import Link from "next/link";

export default function DailyInspectionPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <nav className="text-sm text-neutral-600 mb-6">
              <Link href="/support" className="hover:text-primary-600">Support</Link>
              <span className="mx-2">→</span>
              <span>Daily Inspection Guide</span>
            </nav>
            
            <h1 className="font-display text-5xl font-bold text-primary-600 mb-6">
              Daily Inspection Guide
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Essential daily inspection procedures to ensure your fall protection equipment remains safe and reliable.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-success-50 border border-success-200 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-success-800 mb-4">Content Development</h2>
              <p className="text-success-700 mb-6">
                Our safety experts are creating detailed inspection procedures including:
              </p>
              <ul className="space-y-2 text-success-700">
                <li>• Visual inspection checklists</li>
                <li>• Hardware integrity checks</li>
                <li>• Webbing and stitching assessment</li>
                <li>• Documentation requirements</li>
                <li>• When to retire equipment</li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get Inspection Guidelines
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
