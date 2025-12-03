'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function TruthSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const otherAgencies = [
    {
      icon: "💸",
      title: "Hidden Charges Everywhere",
      tricks: [
        "\"Setup fee\" - RM 2,000 extra",
        "\"Content upload\" - RM 500 per page",
        "\"Image optimization\" - RM 300",
        "\"SSL certificate\" - RM 500/year",
        "\"Email setup\" - RM 800"
      ],
      total: "RM 4,100+ in hidden fees",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: "🐌",
      title: "Slow Delivery, Endless Revisions",
      tricks: [
        "Promise 2 weeks, deliver in 3 months",
        "Only 2 revisions included",
        "Extra revisions: RM 500 each",
        "Rush delivery: +50% cost",
        "Weekend work: +RM 1,000"
      ],
      total: "3-6 months + RM 2,000+ extra",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: "🎨",
      title: "Template Websites, Premium Prices",
      tricks: [
        "Use RM 50 WordPress themes",
        "Charge you RM 8,000+",
        "Same design for 10 clients",
        "No custom code",
        "Looks like everyone else"
      ],
      total: "You pay 160x the actual cost",
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: "🔒",
      title: "They Own Your Website",
      tricks: [
        "Hosted on their server only",
        "Can't move to another host",
        "Monthly \"maintenance\" fee forever",
        "Want to leave? Pay RM 3,000",
        "They control everything"
      ],
      total: "Trapped paying RM 500+/month",
      color: "from-purple-500 to-red-500"
    },
    {
      icon: "📉",
      title: "Zero Results, Just Pretty Pictures",
      tricks: [
        "No SEO optimization",
        "Slow loading speed",
        "Not mobile-friendly",
        "No conversion strategy",
        "Doesn't rank on Google"
      ],
      total: "Beautiful but useless",
      color: "from-gray-500 to-red-500"
    },
    {
      icon: "🤷",
      title: "Disappear After Payment",
      tricks: [
        "Support? Pay extra RM 300/hour",
        "Bug fixes not included",
        "Updates cost RM 1,500 each",
        "Take days to respond",
        "No training provided"
      ],
      total: "You're on your own",
      color: "from-blue-500 to-red-500"
    }
  ]

  const fikzStudio = [
    {
      icon: "✅",
      title: "100% Transparent Pricing",
      benefits: [
        "One clear price, no hidden fees",
        "Everything included upfront",
        "SSL, hosting, email - all free",
        "Unlimited content uploads",
        "Free image optimization"
      ],
      value: "Save RM 4,000+ immediately",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      icon: "⚡",
      title: "Fast Delivery, Unlimited Revisions",
      benefits: [
        "2-4 weeks guaranteed delivery",
        "Unlimited revisions included",
        "Daily progress updates",
        "No rush fees ever",
        "Weekend support included"
      ],
      value: "Save 2-5 months + RM 2,000",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: "🎨",
      title: "100% Custom Design",
      benefits: [
        "Designed specifically for YOU",
        "No templates, ever",
        "Unique to your brand",
        "Custom coded from scratch",
        "Stands out from competitors"
      ],
      value: "True premium quality",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: "🔓",
      title: "You Own Everything",
      benefits: [
        "Full ownership from day 1",
        "Move to any host you want",
        "All source code included",
        "No monthly hostage fees",
        "Complete control"
      ],
      value: "Save RM 6,000+/year",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📈",
      title: "Built to Convert & Rank",
      benefits: [
        "SEO optimized from start",
        "Lightning fast loading",
        "Mobile-first design",
        "Conversion-focused layout",
        "Ranks on Google page 1"
      ],
      value: "3x more leads guaranteed",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: "🤝",
      title: "Lifetime Support Included",
      benefits: [
        "Free support forever",
        "Bug fixes always free",
        "Free minor updates",
        "Same-day response time",
        "Complete training included"
      ],
      value: "Save RM 10,000+/year",
      color: "from-red-500 to-orange-500"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4 block">The Ugly Truth</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            What Other Agencies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Don't Want You to Know
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're breaking the silence. Here's how most agencies secretly drain your wallet while delivering mediocre results.
          </p>
        </motion.div>

        {/* Other Agencies - The Bad */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-400 font-bold text-xl mb-6">
              <span className="text-3xl">⚠️</span>
              Most Other Agencies
            </div>
            <p className="text-gray-400 text-lg">The tricks they use to maximize their profit at your expense</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherAgencies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:border-red-500/50 transition-colors">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {item.tricks.map((trick, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>{trick}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                    <span className="text-red-300 font-bold text-sm">{item.total}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-bold text-2xl shadow-2xl shadow-emerald-500/50">
            <span>Now Compare That To Fikz Studio</span>
            <span className="text-3xl">👇</span>
          </div>
        </motion.div>

        {/* Fikz Studio - The Good */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400 font-bold text-xl mb-6">
              <span className="text-3xl">✨</span>
              Fikz Studio Promise
            </div>
            <p className="text-gray-400 text-lg">Honest, transparent, and focused on YOUR success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {fikzStudio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-lg text-center">
                    <span className="text-primary-300 font-bold text-sm">{item.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Other Agencies Total */}
                <div className="text-center">
                  <div className="text-red-400 font-bold text-lg mb-4">Other Agencies Total Cost</div>
                  <div className="text-6xl font-bold text-red-400 mb-4">RM 30,000+</div>
                  <div className="text-gray-400 space-y-2 text-sm">
                    <div>Initial: RM 8,000</div>
                    <div>Hidden Fees: RM 4,000</div>
                    <div>Extra Charges: RM 2,000</div>
                    <div>Monthly Fees: RM 6,000/year</div>
                    <div>Support: RM 10,000/year</div>
                  </div>
                  <div className="mt-6 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <span className="text-red-400 font-bold">+ Mediocre Results</span>
                  </div>
                </div>

                {/* Fikz Studio Total */}
                <div className="text-center">
                  <div className="text-emerald-400 font-bold text-lg mb-4">Fikz Studio Total Cost</div>
                  <div className="text-6xl font-bold text-emerald-400 mb-4">RM 999+</div>
                  <div className="text-gray-300 space-y-2 text-sm">
                    <div>✓ Everything Included</div>
                    <div>✓ No Hidden Fees</div>
                    <div>✓ Unlimited Revisions</div>
                    <div>✓ Lifetime Support</div>
                    <div>✓ You Own Everything</div>
                  </div>
                  <div className="mt-6 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                    <span className="text-emerald-400 font-bold">+ Guaranteed Results</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="text-4xl font-bold text-white mb-4">
                  You Save Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">RM 20,000+</span>
                </div>
                <p className="text-gray-400 text-lg mb-8">And get better quality, faster delivery, and actual results</p>
                <a
                  href="https://wa.me/60127075391?text=I%20want%20honest%20pricing%20and%20real%20results%20from%20Fikz%20Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-lg"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Choose Honesty - Work With Fikz Studio
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-gray-500 mt-4">✓ No hidden fees ✓ No tricks ✓ Just honest work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
