'use client'

import { useState } from 'react'
import CostCalculatorBanner from './CostCalculatorBanner'
import CostCalculatorModal from './CostCalculatorModal'

export default function CostCalculatorWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <CostCalculatorBanner onOpenCalculator={() => setIsModalOpen(true)} />
      <CostCalculatorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
