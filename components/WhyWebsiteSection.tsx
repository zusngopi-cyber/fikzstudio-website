'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WhyWebsiteSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const problems = [
    {
      icon: "😰",
      problem: "Losing Customers to Competitors",
      description: "When people search for your services, they find your competitors first. You're invisible online.",
      impact: "Lost Revenue: RM 10,000+/month"
    },
    {
      icon: "📞",
      problem: "Answering the Same Questions",
      description: "You spend hours every day answering basic questions that a website could handle automatically.",
      impact: "Wasted Time: 20+ hours/week"
    },
    {
      icon: "🤷",
      problem: "No Credibility or Trust",
      description: "Without a professional website, customers question if you're a real, legitimate business.",
      impact: "Lost Sales: 60% of potential customers"
    },
    {
      icon: "💸",
      problem: "Paying for Expensive Ads",
      description: "You're spending thousands on ads because you don't show up in organic Google searches.",
      impact: "Wasted Budget: RM 5,000+/month"
    }
  ]

  const solutions = [
    {
      icon: "🎯",
      title: "Get Found by Customers Actively Looking for You",
      description: "When someone searches 'web design Puncak Alam' or 'digital marketing Selangor', YOUR business shows up first. Not your competitors.",
      result: "3x More Qualified Leads"
    },
    {
      icon: "🤖",
      title: "Your Website Works While You Sleep",
      description: "Answer questions, showcase your work, collect leads, and even take payments 24/7 - without lifting a finger.",
      result: "Save 20+ Hours Per Week"
    },
    {
      icon: "💎",
      title: "Build Instant Trust & Credibility",
      description: "A professional website makes you look established and trustworthy. Customers feel confident choosing you over competitors.",
      result: "60% Higher Conversion Rate"
    },
    {
      icon: "📈",
      title: "Stop Paying for Ads, Get Free Traffic",
      description: "With proper SEO, customers find you organically on Google. No more expensive ads that stop working when you stop paying.",
      result: "Save RM 5,000+/Month on Ads"
    }
  ]

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider mb-4 block">The Hard Truth</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Without a Website,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              You're Losing Money Every Day
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what's happening to your business right now (and you might not even realize it)
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white border-2 border-red-100 rounded-3xl p-8 hover:border-red-300 transition-all">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.problem}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full">
                  <span className="text-red-600 font-bold text-sm">{item.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl shadow-emerald-500/50">
            <span>But Here's the Good News...</span>
            <span className="text-3xl">👇</span>
          </div>
        </motion.div>

        {/* Solutions Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            A Strategic Website
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              Solves All These Problems
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's exactly how a professionally designed website transforms your business
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white border-2 border-emerald-100 rounded-3xl p-8 hover:border-emerald-300 transition-all hover:shadow-2xl">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-emerald-600 font-bold text-sm">{item.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">Let's Do the Math</h3>
              <p className="text-xl text-gray-300">Here's what a website is really worth to your business</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">RM 15,000+</div>
                <div className="text-gray-300">Saved on Ads Per Month</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">20+ Hours</div>
                <div className="text-gray-300">Saved Per Week</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">3x More</div>
                <div className="text-gray-300">Qualified Leads</div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                <span className="text-2xl font-bold">Total Value:</span>
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  RM 180,000+/Year
                </span>
              </div>
              <p className="text-gray-400 mt-4">And we charge less than 1% of that value</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/60127075391?text=I%20want%20to%20stop%20losing%20money%20and%20get%20a%20website%20that%20converts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Stop Losing Money - Get Your Website Now
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-gray-500 mt-4">Free strategy call • No obligation • See results in 30 days</p>
        </motion.div>
      </div>
    </section>
  )
}
