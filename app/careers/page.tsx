import Section from "../../components/Section";
import Link from "next/link";

const openPositions = [
  {
    title: "Senior Safety Engineer",
    department: "Engineering",
    location: "Remote / Austin, TX",
    type: "Full-time",
    description: "Lead the development of next-generation fall protection systems and conduct safety testing protocols.",
    requirements: ["MS in Mechanical/Biomedical Engineering", "5+ years safety equipment experience", "ANSI/OSHA standards expertise"],
    posted: "2 days ago"
  },
  {
    title: "Technical Sales Manager",
    department: "Sales",
    location: "Remote / Field",
    type: "Full-time", 
    description: "Drive B2B sales growth by building relationships with construction companies and safety distributors.",
    requirements: ["Safety equipment sales experience", "Knowledge of OSHA regulations", "Strong presentation skills"],
    posted: "1 week ago"
  },
  {
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Austin, TX",
    type: "Full-time",
    description: "Ensure our products meet the highest safety standards through rigorous testing and compliance verification.", 
    requirements: ["Quality assurance background", "Manufacturing experience", "Attention to detail"],
    posted: "3 days ago"
  },
  {
    title: "Marketing Content Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling content that educates safety professionals about fall protection best practices.",
    requirements: ["B2B content marketing experience", "Technical writing skills", "Safety industry knowledge preferred"],
    posted: "5 days ago"
  }
];

const benefits = [
  { icon: "🏥", title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage" },
  { icon: "💰", title: "Competitive Compensation", description: "Above-market salary with performance bonuses" },
  { icon: "📈", title: "Stock Options", description: "Equity participation in company growth" },
  { icon: "🏖️", title: "Flexible PTO", description: "Unlimited vacation policy with minimum 3 weeks" },
  { icon: "🎓", title: "Learning Budget", description: "$2,000 annual budget for conferences and training" },
  { icon: "🏠", title: "Remote Friendly", description: "Work from anywhere with quarterly team meetups" }
];

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      {/* Hero Section */}
      <Section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success-100 text-success-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-lg">🚀</span>
              Join Our Mission
            </div>
            
            <h1 className="font-display text-display-1 font-bold text-primary-600 mb-4">
              Build the Future of <span className="text-accent-500">Workplace Safety</span>
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
              Join a team of passionate engineers, safety experts, and innovators working to eliminate 
              preventable workplace injuries through breakthrough technology.
            </p>
          </div>

          {/* Company Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-display font-bold text-primary-600 mb-2">Mission-Driven</h3>
              <p className="text-sm text-neutral-600">Every decision we make is guided by our mission to save lives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="font-display font-bold text-primary-600 mb-2">Innovation First</h3>
              <p className="text-sm text-neutral-600">We challenge conventional thinking to create breakthrough solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-display font-bold text-primary-600 mb-2">Team Excellence</h3>
              <p className="text-sm text-neutral-600">We attract and develop the best talent in safety engineering</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 font-bold text-primary-600 mb-4">
              Why Join Willrise?
            </h2>
            <p className="text-body-lg text-neutral-600">
              We believe in taking care of our team so they can take care of our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-primary-600 mb-2">{benefit.title}</h3>
                <p className="text-sm text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 font-bold text-primary-600 mb-4">
              Open Positions
            </h2>
            <p className="text-body-lg text-neutral-600">
              Join our growing team and help shape the future of workplace safety
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="card p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="font-display text-xl font-bold text-primary-600">{position.title}</h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {position.department}
                      </span>
                      <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Posted {position.posted}
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-primary-600 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                            <svg className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Link 
                      href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                      className="btn-primary text-center mb-4"
                    >
                      Apply Now
                    </Link>
                    <Link 
                      href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="btn-secondary text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Open Positions Message */}
          {openPositions.length === 0 && (
            <div className="text-center card p-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="font-display text-xl font-bold text-primary-600 mb-4">
                No Current Openings
              </h3>
              <p className="text-neutral-600 mb-6">
                We're not actively hiring right now, but we're always interested in connecting with talented individuals who share our mission.
              </p>
              <Link href="/contact" className="btn-primary">
                Send Your Resume
              </Link>
            </div>
          )}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 font-bold text-primary-600 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-body-lg text-neutral-600">
              We believe in taking care of our team so they can focus on our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-primary-600 mb-2">{benefit.title}</h3>
                <p className="text-sm text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Application Process */}
      <Section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 font-bold text-primary-600 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-body-lg text-neutral-600">
              A transparent, respectful process designed to find the right fit for both sides
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-display font-bold text-primary-600 mb-2">Application</h3>
              <p className="text-sm text-neutral-600">Submit your application and resume through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-display font-bold text-primary-600 mb-2">Phone Screen</h3>
              <p className="text-sm text-neutral-600">30-minute call with our hiring team to discuss your background</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-display font-bold text-primary-600 mb-2">Technical Interview</h3>
              <p className="text-sm text-neutral-600">Deep dive into your technical skills and problem-solving approach</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary-600">4</span>
              </div>
              <h3 className="font-display font-bold text-primary-600 mb-2">Team Meeting</h3>
              <p className="text-sm text-neutral-600">Meet your potential teammates and learn about our culture</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-h1 font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know 
            how you'd like to contribute to our mission of workplace safety innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Send Your Resume
            </Link>
            
            <a 
              href="mailto:careers@willrise.com"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200"
            >
              Email careers@willrise.com
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}