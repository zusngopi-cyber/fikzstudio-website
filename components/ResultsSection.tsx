'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ResultsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const caseStudies = [
    {
      industry: "Local Restaurant",
      location: "Shah Alam",
      before: {
        leads: "5-10/month",
        revenue: "RM 15,000",
        source: "Walk-ins only"
      },
      after: {
        leads: "50+/month",
        revenue: "RM 45,000",
        source: "Google + Website"
      },
      improvement: "200% Revenue Increase",
      testimonial: "We went from struggling to fully booked. The website pays for itself every single week.",
      color: "from-orange-500 to-red-500"
    },
    {
      industry: "Home Services",
      location: "Klang",
      before: {
        leads: "2-3/week",
        revenue: "RM 8,000",
        source: "Referrals only"
      },
      after: {
        leads: "15+/week",
        revenue: "RM 32,000",
        source: "Organic Search"
      },
      improvement: "300% More Leads",
      testimonial: "I used to spend RM 5,000/month on ads. Now I get better leads for free from Google.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "Professional Services",
      location: "Petaling Jaya",
      before: {
        leads: "Inconsistent",
        revenue: "RM 20,000",
        source: "Cold calling"
      },
      after: {
        leads: "Predictable",
        revenue: "RM 65,000",
        source: "Inbound inquiries"
      },
      improvement: "225% Growth",
      testimonial: "Clients now find us. We don't have to chase anyone anymore. Game changer.",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const metrics = [
    {
      number: "3.2x",
      label: "Average Conversion Rate Increase",
      description: "Compared to industry standard"
    },
    {
      number: "87%",
      label: "Clients Get ROI in First Month",
      description: "Website pays for itself quickly"
    },
    {
      number: "RM 180K+",
      label: "Average Annual Value Generated",
      description: "Per client website"
    },
    {
      number: "24/7",
      label: "Your Website Works Non-Stop",
      description: "Even while you sleep"
    }
  ]

  return (
    <section id="results" ref={ref} className="py-32 px-6 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4 block">Real Results</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            These Businesses Stopped Losing Money
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              And Started Growing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here's what happened when they got a website that actually converts
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all">
                {/* Header */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${study.color} rounded-full text-white text-sm font-bold mb-4`}>
                    {study.improvement}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.industry}</h3>
                  <p className="text-gray-400">📍 {study.location}</p>
                </div>

                {/* Before/After */}
                <div className="space-y-6 mb-6">
                  {/* Before */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">
                    <div className="text-red-400 font-bold text-sm mb-3">❌ BEFORE</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Leads:</span>
                        <span className="font-semibold">{study.before.leads}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Revenue:</span>
                        <span className="font-semibold">{study.before.revenue}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Source:</span>
                        <span className="font-semibold">{study.before.source}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* After */}
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4">
                    <div className="text-emerald-400 font-bold text-sm mb-3">✅ AFTER</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Leads:</span>
                        <span className="font-semibold text-emerald-400">{study.after.leads}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Revenue:</span>
                        <span className="font-semibold text-emerald-400">{study.after.revenue}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Source:</span>
                        <span className="font-semibold text-emerald-400">{study.after.source}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    "{study.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3">
                {metric.number}
              </div>
              <div className="text-white font-bold text-lg mb-2">{metric.label}</div>
              <div className="text-gray-400 text-sm">{metric.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
            <div className="text-7xl mb-6">🎯</div>
            <h3 className="text-4xl font-bold text-white mb-4">Our Results Guarantee</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If your website doesn't generate at least 3x more leads in the first 90 days, 
              we'll work for free until it does. That's how confident we are.
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-semibold">90-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Money-Back Promise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Fast Results</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Get These Results for Your Business?
          </h3>
          <a
            href="https://wa.me/60127075391?text=I%20want%20results%20like%20these%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Yes, I Want These Results
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-gray-400 mt-4">Free strategy call • See your custom plan • No pressure</p>
        </motion.div>
      </div>
    </section>
  )
}
