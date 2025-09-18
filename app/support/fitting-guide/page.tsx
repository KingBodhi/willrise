import Section from "@/components/Section";
import Link from "next/link";

export default function FittingGuidePage() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <nav className="text-sm text-neutral-600 mb-6">
              <Link href="/support" className="hover:text-primary-600">Support</Link>
              <span className="mx-2">→</span>
              <span>Harness Fitting Guide</span>
            </nav>
            
            <h1 className="font-display text-5xl font-bold text-primary-600 mb-6">
              Harness Fitting Guide
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Proper harness fit is critical for safety and comfort. Follow this comprehensive guide 
              to ensure optimal protection and performance.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-danger-50 border border-danger-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-danger-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-danger-800 mb-2">Safety Warning</h3>
                  <p className="text-danger-700">
                    Improper harness fit can result in serious injury or death. Always have harness fitting 
                    verified by a qualified person before use.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-primary-600 mb-6">Step-by-Step Fitting Process</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
                <h3 className="font-display text-xl font-bold text-primary-600 mb-4">1. Initial Sizing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Measure chest circumference at fullest point
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Measure waist circumference at belt line
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Select size according to manufacturer chart
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
                <h3 className="font-display text-xl font-bold text-primary-600 mb-4">2. Harness Adjustment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Adjust shoulder straps for snug fit
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Position chest strap below sternum
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Secure leg straps snugly around thighs
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8">
              <h3 className="font-display text-xl font-bold text-primary-600 mb-4">Need Personal Assistance?</h3>
              <p className="text-primary-700 mb-4">
                Our safety experts can provide personalized fitting assistance and training.
              </p>
              <Link 
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Schedule Fitting Session
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}