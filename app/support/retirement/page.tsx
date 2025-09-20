import Section from "../../../components/Section";
import Link from "next/link";

export default function RetirementPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <nav className="text-sm text-neutral-600 mb-6">
              <Link href="/support" className="hover:text-primary-600">Support</Link>
              <span className="mx-2">→</span>
              <span>Equipment Retirement Criteria</span>
            </nav>
            
            <h1 className="font-display text-5xl font-bold text-primary-600 mb-6">
              Equipment Retirement Criteria
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Critical guidelines for determining when fall protection equipment must be retired from service.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-danger-50 border border-danger-200 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-danger-800 mb-4">Safety-Critical Information</h2>
              <p className="text-danger-700 mb-6">
                Detailed retirement criteria under development to cover:
              </p>
              <ul className="space-y-2 text-danger-700">
                <li>• Visible wear and damage indicators</li>
                <li>• Age-based retirement schedules</li>
                <li>• Impact and load history tracking</li>
                <li>• Environmental exposure limits</li>
                <li>• Manufacturer recall procedures</li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get Retirement Guidelines
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
