import Section from "../../../components/Section";
import Link from "next/link";

export default function StoragePage() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <nav className="text-sm text-neutral-600 mb-6">
              <Link href="/support" className="hover:text-primary-600">Support</Link>
              <span className="mx-2">→</span>
              <span>Storage Guidelines</span>
            </nav>
            
            <h1 className="font-display text-5xl font-bold text-primary-600 mb-6">
              Equipment Storage Guidelines
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Proper storage procedures to maintain equipment integrity and extend service life.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-primary-800 mb-4">Storage Guidelines In Development</h2>
              <p className="text-primary-700 mb-6">
                Comprehensive storage procedures being developed:
              </p>
              <ul className="space-y-2 text-primary-700">
                <li>• Climate control requirements</li>
                <li>• UV protection measures</li>
                <li>• Chemical exposure prevention</li>
                <li>• Proper hanging and organization</li>
                <li>• Long-term storage protocols</li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Contact Storage Experts
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
