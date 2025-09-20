import Section from "../../../components/Section";
import Link from "next/link";

export default function CleaningPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <nav className="text-sm text-neutral-600 mb-6">
              <Link href="/support" className="hover:text-primary-600">Support</Link>
              <span className="mx-2">→</span>
              <span>Cleaning Instructions</span>
            </nav>
            
            <h1 className="font-display text-5xl font-bold text-primary-600 mb-6">
              Equipment Cleaning Instructions
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Proper cleaning and maintenance procedures to extend equipment life and ensure optimal safety performance.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-accent-50 border border-accent-200 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-accent-800 mb-4">Maintenance Guidelines Coming Soon</h2>
              <p className="text-accent-700 mb-6">
                Detailed cleaning and maintenance procedures in development:
              </p>
              <ul className="space-y-2 text-accent-700">
                <li>• Approved cleaning solutions and methods</li>
                <li>• Contamination removal procedures</li>
                <li>• Drying and storage requirements</li>
                <li>• Hardware maintenance schedules</li>
                <li>• Environmental damage prevention</li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Request Maintenance Guide
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
