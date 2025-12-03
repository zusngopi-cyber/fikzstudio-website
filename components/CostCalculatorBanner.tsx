'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CostCalculatorBannerProps {
  onOpenCalculator: () => void
}

export default function CostCalculatorBanner({ onOpenCalculator }: CostCalculatorBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user has dismissed the banner in this session
    const dismissed = sessionStorage.getItem('calculator-banner-dismissed')
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    sessionStorage.setItem('calculator-banner-dismissed', 'true')
  }

  const handleOpen = () => {
    setIsVisible(false)
    onOpenCalculator()
  }

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 max-w-md"
        >
          <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-2xl p-6 text-white relative">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-white/80 hover:text-white"
            >
              ✕
            </button>
            
            <div className="flex items-start gap-4">
              <div className="text-4xl">💰</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Calculate Your Website Cost</h3>
                <p className="text-white/90 text-sm mb-4">
                  Get instant pricing based on your needs. Takes only 2 minutes!
                </p>
                <button
                  onClick={handleOpen}
                  className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors w-full"
                >
                  Start Calculator →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
