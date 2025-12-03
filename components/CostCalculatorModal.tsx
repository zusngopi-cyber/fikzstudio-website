'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import jsPDF from 'jspdf'

interface CalculatorData {
  // Step 1: Project Type
  projectType: string
  // Step 2: Pages & Features
  pages: number
  features: string[]
  // Step 3: Design & Extras
  designLevel: string
  extras: string[]
  // Step 4: Contact Info
  name: string
  email: string
  phone: string
  whatsapp: string
  company: string
}

interface CostCalculatorModalProps {
  isOpen: boolean
  onClose: () => void
}

const SST_RATE = 0.08 // 8% SST in Malaysia (2024)

export default function CostCalculatorModal({ isOpen, onClose }: CostCalculatorModalProps) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<CalculatorData>({
    projectType: '',
    pages: 5,
    features: [],
    designLevel: '',
    extras: [],
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    company: ''
  })

  // Pricing logic
  const calculateCost = () => {
    let baseCost = 0

    // Project type base cost
    const projectCosts: Record<string, number> = {
      'landing': 999,
      'business': 2999,
      'ecommerce': 5999,
      'custom': 8999
    }
    baseCost = projectCosts[data.projectType] || 0

    // Pages cost (RM 200 per additional page after base)
    const basePages = data.projectType === 'landing' ? 1 : 5
    if (data.pages > basePages) {
      baseCost += (data.pages - basePages) * 200
    }

    // Features cost
    const featureCosts: Record<string, number> = {
      'seo': 500,
      'blog': 800,
      'booking': 1500,
      'payment': 2000,
      'crm': 2500,
      'multilingual': 1000,
      'chat': 500,
      'analytics': 300
    }
    data.features.forEach(feature => {
      baseCost += featureCosts[feature] || 0
    })

    // Design level
    const designCosts: Record<string, number> = {
      'template': 0,
      'custom': 1500,
      'premium': 3000
    }
    baseCost += designCosts[data.designLevel] || 0

    // Extras
    const extraCosts: Record<string, number> = {
      'logo': 500,
      'content': 800,
      'photography': 1500,
      'video': 2000,
      'maintenance': 300
    }
    data.extras.forEach(extra => {
      baseCost += extraCosts[extra] || 0
    })

    const sst = baseCost * SST_RATE
    const total = baseCost + sst

    return { baseCost, sst, total }
  }

  const { baseCost, sst, total } = calculateCost()

  // Continue in next part...

  const generatePDF = () => {
    const doc = new jsPDF()
    
    // Modern gradient header with accent
    doc.setFillColor(99, 102, 241) // Primary blue
    doc.rect(0, 0, 210, 50, 'F')
    doc.setFillColor(139, 92, 246) // Purple accent
    doc.rect(0, 0, 210, 5, 'F')
    
    // Company branding
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(28)
    doc.setFont('helvetica', 'bold')
    doc.text('FIKZ STUDIO', 20, 22)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text('Professional Web Design & Digital Marketing', 20, 30)
    doc.setFontSize(9)
    doc.text('Phone: +60127075391  |  Email: fikzstudiowork@gmail.com', 20, 37)
    
    // Quote badge
    doc.setFillColor(255, 255, 255)
    doc.roundedRect(145, 15, 50, 25, 3, 3, 'F')
    doc.setTextColor(99, 102, 241)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('QUOTATION', 150, 23)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.text(`#${Date.now().toString().slice(-6)}`, 150, 28)
    doc.text(new Date().toLocaleDateString('en-MY'), 150, 33)
    
    // Reset text color
    doc.setTextColor(0, 0, 0)
    
    // Client & Project Info Cards
    let yPos = 60
    
    // Client card with border
    doc.setDrawColor(99, 102, 241)
    doc.setLineWidth(0.5)
    doc.setFillColor(249, 250, 251)
    doc.roundedRect(20, yPos, 85, 40, 2, 2, 'FD')
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(99, 102, 241)
    doc.text('CLIENT INFORMATION', 25, yPos + 7)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.text(`Name: ${data.name}`, 25, yPos + 14)
    if (data.company) doc.text(`Company: ${data.company}`, 25, yPos + 20)
    doc.text(`Email: ${data.email}`, 25, yPos + (data.company ? 26 : 20))
    doc.text(`Phone: ${data.phone}`, 25, yPos + (data.company ? 32 : 26))
    
    // Project card with border
    doc.setDrawColor(139, 92, 246)
    doc.setFillColor(249, 250, 251)
    doc.roundedRect(110, yPos, 85, 40, 2, 2, 'FD')
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(139, 92, 246)
    doc.text('PROJECT DETAILS', 115, yPos + 7)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.text(`Type: ${data.projectType.toUpperCase()}`, 115, yPos + 14)
    doc.text(`Pages: ${data.pages}`, 115, yPos + 20)
    doc.text(`Design: ${data.designLevel.toUpperCase()}`, 115, yPos + 26)
    if (data.features.length > 0) {
      doc.text(`Features: ${data.features.length}`, 115, yPos + 32)
    }
    
    // Professional table with alternating rows
    yPos = 110
    
    // Table header with gradient effect
    doc.setFillColor(99, 102, 241)
    doc.rect(20, yPos, 170, 12, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('DESCRIPTION', 25, yPos + 8)
    doc.text('AMOUNT (RM)', 160, yPos + 8)
    
    // Table content with alternating row colors
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    yPos += 12
    
    let rowCount = 0
    const addTableRow = (description: string, amount: number, isBold = false) => {
      // Alternating row background
      if (rowCount % 2 === 0) {
        doc.setFillColor(255, 255, 255)
      } else {
        doc.setFillColor(249, 250, 251)
      }
      doc.rect(20, yPos, 170, 8, 'F')
      
      // Draw cell borders
      doc.setDrawColor(230, 230, 230)
      doc.setLineWidth(0.1)
      doc.line(20, yPos, 190, yPos)
      
      // Text
      doc.setFont('helvetica', isBold ? 'bold' : 'normal')
      doc.text(description, 25, yPos + 5.5)
      doc.text(amount.toFixed(2), 175, yPos + 5.5, { align: 'right' })
      
      yPos += 8
      rowCount++
    }
    
    // Base package
    const projectCosts: Record<string, number> = {
      'landing': 999, 'business': 2999, 'ecommerce': 5999, 'custom': 8999
    }
    addTableRow(`${data.projectType.toUpperCase()} Website Package`, projectCosts[data.projectType] || 0)
    
    // Additional pages
    const basePages = data.projectType === 'landing' ? 1 : 5
    if (data.pages > basePages) {
      addTableRow(`Additional Pages (${data.pages - basePages} × RM 200)`, (data.pages - basePages) * 200)
    }
    
    // Features
    const featureCosts: Record<string, number> = {
      'seo': 500, 'blog': 800, 'booking': 1500, 'payment': 2000,
      'crm': 2500, 'multilingual': 1000, 'chat': 500, 'analytics': 300
    }
    data.features.forEach(feature => {
      const featureNames: Record<string, string> = {
        'seo': 'SEO Optimization',
        'blog': 'Blog System',
        'booking': 'Booking System',
        'payment': 'Payment Gateway',
        'crm': 'CRM Integration',
        'multilingual': 'Multi-language Support',
        'chat': 'Live Chat',
        'analytics': 'Analytics Dashboard'
      }
      addTableRow(featureNames[feature] || feature.toUpperCase(), featureCosts[feature] || 0)
    })
    
    // Design level
    const designCosts: Record<string, number> = {
      'template': 0, 'custom': 1500, 'premium': 3000
    }
    if (designCosts[data.designLevel] > 0) {
      addTableRow(`${data.designLevel.toUpperCase()} Design Package`, designCosts[data.designLevel])
    }
    
    // Extras
    const extraCosts: Record<string, number> = {
      'logo': 500, 'content': 800, 'photography': 1500, 'video': 2000, 'maintenance': 300
    }
    const extraNames: Record<string, string> = {
      'logo': 'Logo Design',
      'content': 'Content Writing',
      'photography': 'Professional Photography',
      'video': 'Video Production',
      'maintenance': 'Monthly Maintenance'
    }
    data.extras.forEach(extra => {
      addTableRow(extraNames[extra] || extra.toUpperCase(), extraCosts[extra] || 0)
    })
    
    // Subtotal row
    yPos += 3
    doc.setDrawColor(99, 102, 241)
    doc.setLineWidth(0.5)
    doc.line(20, yPos, 190, yPos)
    yPos += 2
    
    doc.setFillColor(249, 250, 251)
    doc.rect(20, yPos, 170, 8, 'F')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('SUBTOTAL', 25, yPos + 5.5)
    doc.text(baseCost.toFixed(2), 175, yPos + 5.5, { align: 'right' })
    yPos += 8
    
    // SST row
    doc.setFillColor(255, 255, 255)
    doc.rect(20, yPos, 170, 8, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text('Sales & Service Tax (SST 8%)', 25, yPos + 5.5)
    doc.text(sst.toFixed(2), 175, yPos + 5.5, { align: 'right' })
    yPos += 8
    
    // Total row with gradient
    yPos += 2
    doc.setFillColor(99, 102, 241)
    doc.rect(20, yPos, 170, 14, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('TOTAL ESTIMATE', 25, yPos + 9)
    doc.text(`RM ${total.toFixed(2)}`, 175, yPos + 9, { align: 'right' })
    
    // Terms & Conditions box
    yPos += 20
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(0.3)
    doc.setFillColor(255, 251, 235)
    doc.roundedRect(20, yPos, 170, 25, 2, 2, 'FD')
    doc.setTextColor(120, 53, 15)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text('TERMS & CONDITIONS', 25, yPos + 6)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text('• This quotation is valid for 30 days from the date of issue', 25, yPos + 11)
    doc.text('• Final pricing may vary based on specific project requirements', 25, yPos + 16)
    doc.text('• 50% deposit required to commence work, balance upon completion', 25, yPos + 21)
    
    // Professional footer
    yPos = 275
    doc.setDrawColor(99, 102, 241)
    doc.setLineWidth(0.5)
    doc.line(20, yPos, 190, yPos)
    doc.setTextColor(100, 100, 100)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.text('Thank you for considering Fikz Studio for your web design needs.', 105, yPos + 5, { align: 'center' })
    doc.text('We look forward to bringing your vision to life!', 105, yPos + 10, { align: 'center' })
    
    doc.save(`Fikz-Studio-Quote-${data.name.replace(/\s/g, '-')}-${Date.now()}.pdf`)
  }

  const sendWhatsApp = () => {
    const featuresList = data.features.map(f => `  - ${f.toUpperCase()}`).join('\n') || '  - None'
    const extrasList = data.extras.map(e => `  - ${e.toUpperCase()}`).join('\n') || '  - None'
    
    const message = `*WEBSITE COST ESTIMATE*

*CLIENT INFORMATION*
Name: ${data.name}
Company: ${data.company || 'N/A'}
Email: ${data.email}
Phone: ${data.phone}
WhatsApp: ${data.whatsapp}

*PROJECT DETAILS*
Package: ${data.projectType.toUpperCase()}
Pages: ${data.pages} pages
Design Level: ${data.designLevel.toUpperCase()}

*Features Selected:*
${featuresList}

*Additional Services:*
${extrasList}

*COST BREAKDOWN*
Subtotal:     RM ${baseCost.toFixed(2)}
SST (8%):     RM ${sst.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━
*TOTAL:       RM ${total.toFixed(2)}*

I'd like to discuss this project and get started!

_Quote valid for 30 days_`

    const url = `https://wa.me/60127075391?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const sendEmail = async () => {
    const projectCosts: Record<string, number> = {
      'landing': 999, 'business': 2999, 'ecommerce': 5999, 'custom': 8999
    }
    const basePages = data.projectType === 'landing' ? 1 : 5
    const featureCosts: Record<string, number> = {
      'seo': 500, 'blog': 800, 'booking': 1500, 'payment': 2000,
      'crm': 2500, 'multilingual': 1000, 'chat': 500, 'analytics': 300
    }
    const designCosts: Record<string, number> = {
      'template': 0, 'custom': 1500, 'premium': 3000
    }
    const extraCosts: Record<string, number> = {
      'logo': 500, 'content': 800, 'photography': 1500, 'video': 2000, 'maintenance': 300
    }
    
    const featureNames: Record<string, string> = {
      'seo': 'SEO Optimization',
      'blog': 'Blog System',
      'booking': 'Booking System',
      'payment': 'Payment Gateway',
      'crm': 'CRM Integration',
      'multilingual': 'Multi-language Support',
      'chat': 'Live Chat',
      'analytics': 'Analytics Dashboard'
    }
    
    const extraNames: Record<string, string> = {
      'logo': 'Logo Design',
      'content': 'Content Writing',
      'photography': 'Professional Photography',
      'video': 'Video Production',
      'maintenance': 'Monthly Maintenance'
    }
    
    // Build table rows
    let tableRows = `<tr style="background: #fff;">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${data.projectType.toUpperCase()} Website Package</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">${(projectCosts[data.projectType] || 0).toFixed(2)}</td>
        </tr>`
    
    let rowIndex = 1
    
    if (data.pages > basePages) {
      const bgColor = rowIndex % 2 === 0 ? '#fff' : '#f9fafb'
      tableRows += `<tr style="background: ${bgColor};">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Additional Pages (${data.pages - basePages} × RM 200)</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">${((data.pages - basePages) * 200).toFixed(2)}</td>
        </tr>`
      rowIndex++
    }
    
    data.features.forEach(feature => {
      const bgColor = rowIndex % 2 === 0 ? '#fff' : '#f9fafb'
      tableRows += `<tr style="background: ${bgColor};">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${featureNames[feature] || feature.toUpperCase()}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">${(featureCosts[feature] || 0).toFixed(2)}</td>
        </tr>`
      rowIndex++
    })
    
    if (designCosts[data.designLevel] > 0) {
      const bgColor = rowIndex % 2 === 0 ? '#fff' : '#f9fafb'
      tableRows += `<tr style="background: ${bgColor};">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${data.designLevel.toUpperCase()} Design Package</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">${designCosts[data.designLevel].toFixed(2)}</td>
        </tr>`
      rowIndex++
    }
    
    data.extras.forEach(extra => {
      const bgColor = rowIndex % 2 === 0 ? '#fff' : '#f9fafb'
      tableRows += `<tr style="background: ${bgColor};">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${extraNames[extra] || extra.toUpperCase()}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">${(extraCosts[extra] || 0).toFixed(2)}</td>
        </tr>`
      rowIndex++
    })
    
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
      line-height: 1.6; 
      color: #1f2937; 
      background: #f3f4f6;
      margin: 0;
      padding: 20px;
    }
    .container { 
      max-width: 650px; 
      margin: 0 auto; 
      background: #fff; 
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header { 
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); 
      color: white; 
      padding: 40px 30px; 
      text-align: center;
      border-top: 5px solid #8b5cf6;
    }
    .header h1 { margin: 0 0 10px 0; font-size: 32px; font-weight: 700; }
    .header p { margin: 0; font-size: 16px; opacity: 0.95; }
    .quote-badge {
      background: rgba(255, 255, 255, 0.2);
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      margin-top: 15px;
      font-size: 14px;
      font-weight: 600;
    }
    .section { padding: 30px; }
    .section-title {
      color: #6366f1;
      font-size: 20px;
      font-weight: 700;
      margin: 0 0 20px 0;
      padding-bottom: 10px;
      border-bottom: 3px solid #6366f1;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .info-card {
      background: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #6366f1;
    }
    .info-card h3 {
      color: #6366f1;
      font-size: 14px;
      font-weight: 700;
      margin: 0 0 12px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .info-card p {
      margin: 6px 0;
      font-size: 14px;
      color: #4b5563;
    }
    .info-card strong { color: #1f2937; }
    table { 
      width: 100%; 
      border-collapse: collapse; 
      margin: 20px 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    th { 
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); 
      color: white; 
      padding: 14px; 
      text-align: left;
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    th:last-child { text-align: right; }
    td { 
      padding: 12px; 
      border-bottom: 1px solid #e5e7eb;
      font-size: 14px;
    }
    .subtotal-row {
      background: #f9fafb !important;
      font-weight: 700;
      border-top: 2px solid #6366f1;
    }
    .sst-row {
      background: #fff !important;
      font-weight: 600;
    }
    .total-row { 
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important; 
      color: white !important; 
      font-weight: 700; 
      font-size: 20px;
    }
    .total-row td {
      padding: 18px 12px;
      border: none;
    }
    .features-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin: 15px 0;
    }
    .feature-badge {
      background: #eff6ff;
      color: #1e40af;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    .feature-badge:before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      margin-right: 8px;
      font-size: 16px;
    }
    .terms-box {
      background: #fffbeb;
      border: 2px solid #fbbf24;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    .terms-box h3 {
      color: #92400e;
      font-size: 16px;
      margin: 0 0 12px 0;
      font-weight: 700;
    }
    .terms-box ul {
      margin: 0;
      padding-left: 20px;
      color: #78350f;
    }
    .terms-box li {
      margin: 6px 0;
      font-size: 13px;
    }
    .footer { 
      background: #1f2937; 
      color: #9ca3af;
      padding: 30px; 
      text-align: center; 
      font-size: 13px;
    }
    .footer strong {
      color: #fff;
      font-size: 16px;
      display: block;
      margin-bottom: 10px;
    }
    .footer a {
      color: #6366f1;
      text-decoration: none;
    }
    .cta-button {
      display: inline-block;
      background: #10b981;
      color: white;
      padding: 14px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      margin: 20px 0;
      font-size: 16px;
    }
    @media only screen and (max-width: 600px) {
      .info-grid { grid-template-columns: 1fr; }
      .features-list { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 WEBSITE QUOTATION</h1>
      <p>Professional Web Design & Digital Marketing</p>
      <div class="quote-badge">Quote #${Date.now().toString().slice(-6)} | ${new Date().toLocaleDateString('en-MY')}</div>
    </div>
    
    <div class="section">
      <h2 class="section-title">Client & Project Information</h2>
      <div class="info-grid">
        <div class="info-card">
          <h3>👤 Client Details</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
        </div>
        
        <div class="info-card" style="border-left-color: #8b5cf6;">
          <h3>📋 Project Summary</h3>
          <p><strong>Package:</strong> ${data.projectType.toUpperCase()}</p>
          <p><strong>Pages:</strong> ${data.pages} pages</p>
          <p><strong>Design:</strong> ${data.designLevel.toUpperCase()}</p>
          ${data.features.length > 0 ? `<p><strong>Features:</strong> ${data.features.length} selected</p>` : ''}
          ${data.extras.length > 0 ? `<p><strong>Extras:</strong> ${data.extras.length} services</p>` : ''}
        </div>
      </div>
      
      ${data.features.length > 0 ? `
      <h3 style="color: #4b5563; font-size: 16px; margin: 25px 0 12px 0;">✨ Selected Features</h3>
      <div class="features-list">
        ${data.features.map(f => `<div class="feature-badge">${featureNames[f] || f.toUpperCase()}</div>`).join('')}
      </div>
      ` : ''}
      
      ${data.extras.length > 0 ? `
      <h3 style="color: #4b5563; font-size: 16px; margin: 25px 0 12px 0;">🎁 Additional Services</h3>
      <div class="features-list">
        ${data.extras.map(e => `<div class="feature-badge" style="background: #f3e8ff; color: #6b21a8;">${extraNames[e] || e.toUpperCase()}</div>`).join('')}
      </div>
      ` : ''}
    </div>
    
    <div class="section" style="background: #f9fafb;">
      <h2 class="section-title">💰 Detailed Cost Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>DESCRIPTION</th>
            <th style="text-align: right;">AMOUNT (RM)</th>
          </tr>
        </thead>
        <tbody>
        ${tableRows}
        <tr class="subtotal-row">
          <td style="padding: 14px 12px;">SUBTOTAL</td>
          <td style="padding: 14px 12px; text-align: right;">${baseCost.toFixed(2)}</td>
        </tr>
        <tr class="sst-row">
          <td style="padding: 14px 12px;">Sales & Service Tax (SST 8%)</td>
          <td style="padding: 14px 12px; text-align: right;">${sst.toFixed(2)}</td>
        </tr>
        <tr class="total-row">
          <td>TOTAL ESTIMATE</td>
          <td style="text-align: right;">RM ${total.toFixed(2)}</td>
        </tr>
        </tbody>
      </table>
      
      <div class="terms-box">
        <h3>📋 Terms & Conditions</h3>
        <ul>
          <li>This quotation is valid for 30 days from the date of issue</li>
          <li>Final pricing may vary based on specific project requirements</li>
          <li>50% deposit required to commence work, balance upon completion</li>
          <li>Estimated delivery: 4-6 weeks from project commencement</li>
        </ul>
      </div>
      
      <div style="text-align: center;">
        <a href="https://wa.me/60127075391?text=${encodeURIComponent(`Hi! I received quote #${Date.now().toString().slice(-6)} and would like to discuss the project.`)}" class="cta-button">
          💬 Let's Discuss This Project
        </a>
      </div>
    </div>
    
    <div class="footer">
      <strong>FIKZ STUDIO</strong>
      <p>Professional Web Design & Digital Marketing</p>
      <p>📞 <a href="tel:+60127075391">+60127075391</a> | 📧 <a href="mailto:fikzstudiowork@gmail.com">fikzstudiowork@gmail.com</a></p>
      <p style="margin-top: 15px; font-size: 12px;">Thank you for considering Fikz Studio. We look forward to bringing your vision to life!</p>
    </div>
  </div>
</body>
</html>`

    // Create mailto link with HTML email
    const subject = `Website Quotation #${Date.now().toString().slice(-6)} - ${data.name}`
    const plainTextBody = `Hi,

Please find attached your website quotation.

Project: ${data.projectType.toUpperCase()} Website
Total: RM ${total.toFixed(2)}

I'll send you the detailed HTML quote separately.

Best regards,
Fikz Studio`
    
    const mailtoLink = `mailto:fikzstudiowork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainTextBody)}`
    
    // Copy HTML to clipboard and open mailto
    navigator.clipboard.writeText(emailHTML).then(() => {
      alert('✅ Professional email HTML copied to clipboard!\n\nYou can paste this into your email client for a beautiful formatted quote.\n\nOpening email client now...')
      window.location.href = mailtoLink
    }).catch(() => {
      // Fallback if clipboard fails
      const blob = new Blob([emailHTML], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Fikz-Studio-Quote-${data.name.replace(/\s/g, '-')}.html`
      a.click()
      alert('📧 Email HTML downloaded! You can open it in your browser and copy the content to your email.')
    })
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Website Cost Calculator</h2>
                <p className="text-white/80 text-sm">Step {step} of 5</p>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white text-2xl">
                ✕
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4 bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Content - Will continue in next part */}

          {/* Body */}
          <div className="p-8 overflow-y-auto max-h-[60vh]">
            {/* Step 1: Project Type */}
            {step === 1 && (
              <div>
                <h3 className="text-2xl font-bold mb-2">What type of website do you need?</h3>
                <p className="text-gray-600 mb-6">Choose the option that best fits your project</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { id: 'landing', name: 'Landing Page', desc: 'Single page website', price: 'From RM 999', icon: '📄' },
                    { id: 'business', name: 'Business Website', desc: '5-10 pages, full features', price: 'From RM 2,999', icon: '🏢' },
                    { id: 'ecommerce', name: 'E-Commerce', desc: 'Online store with payments', price: 'From RM 5,999', icon: '🛍️' },
                    { id: 'custom', name: 'Custom Solution', desc: 'Fully customized platform', price: 'From RM 8,999', icon: '⚡' }
                  ].map(type => (
                    <button
                      key={type.id}
                      onClick={() => setData({...data, projectType: type.id})}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        data.projectType === type.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <h4 className="font-bold text-lg mb-1">{type.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{type.desc}</p>
                      <p className="text-primary-600 font-semibold">{type.price}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Pages & Features */}
            {step === 2 && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Pages & Features</h3>
                <p className="text-gray-600 mb-6">Customize your website requirements</p>
                
                {/* Number of Pages */}
                <div className="mb-8">
                  <label className="block font-semibold mb-3">Number of Pages: {data.pages}</label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={data.pages}
                    onChange={(e) => setData({...data, pages: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 page</span>
                    <span>50 pages</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block font-semibold mb-3">Select Features:</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { id: 'seo', name: 'SEO Optimization', price: '+RM 500' },
                      { id: 'blog', name: 'Blog System', price: '+RM 800' },
                      { id: 'booking', name: 'Booking System', price: '+RM 1,500' },
                      { id: 'payment', name: 'Payment Gateway', price: '+RM 2,000' },
                      { id: 'crm', name: 'CRM Integration', price: '+RM 2,500' },
                      { id: 'multilingual', name: 'Multi-language', price: '+RM 1,000' },
                      { id: 'chat', name: 'Live Chat', price: '+RM 500' },
                      { id: 'analytics', name: 'Analytics Dashboard', price: '+RM 300' }
                    ].map(feature => (
                      <button
                        key={feature.id}
                        onClick={() => {
                          const newFeatures = data.features.includes(feature.id)
                            ? data.features.filter(f => f !== feature.id)
                            : [...data.features, feature.id]
                          setData({...data, features: newFeatures})
                        }}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          data.features.includes(feature.id)
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-medium">{feature.name}</span>
                          <span className="text-xs text-primary-600">{feature.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Continue in next part... */}

            {/* Step 3: Design & Extras */}
            {step === 3 && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Design Level & Extras</h3>
                <p className="text-gray-600 mb-6">Choose your design preference and additional services</p>
                
                {/* Design Level */}
                <div className="mb-8">
                  <label className="block font-semibold mb-3">Design Level:</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { id: 'template', name: 'Template Based', desc: 'Pre-made design', price: 'Included' },
                      { id: 'custom', name: 'Custom Design', desc: 'Unique to your brand', price: '+RM 1,500' },
                      { id: 'premium', name: 'Premium Custom', desc: 'High-end bespoke', price: '+RM 3,000' }
                    ].map(level => (
                      <button
                        key={level.id}
                        onClick={() => setData({...data, designLevel: level.id})}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          data.designLevel === level.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <h4 className="font-bold mb-1">{level.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{level.desc}</p>
                        <p className="text-primary-600 font-semibold text-sm">{level.price}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extras */}
                <div>
                  <label className="block font-semibold mb-3">Additional Services:</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { id: 'logo', name: 'Logo Design', price: '+RM 500' },
                      { id: 'content', name: 'Content Writing', price: '+RM 800' },
                      { id: 'photography', name: 'Professional Photography', price: '+RM 1,500' },
                      { id: 'video', name: 'Video Production', price: '+RM 2,000' },
                      { id: 'maintenance', name: 'Monthly Maintenance', price: '+RM 300/mo' }
                    ].map(extra => (
                      <button
                        key={extra.id}
                        onClick={() => {
                          const newExtras = data.extras.includes(extra.id)
                            ? data.extras.filter(e => e !== extra.id)
                            : [...data.extras, extra.id]
                          setData({...data, extras: newExtras})
                        }}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          data.extras.includes(extra.id)
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-medium">{extra.name}</span>
                          <span className="text-xs text-primary-600">{extra.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Your Contact Information</h3>
                <p className="text-gray-600 mb-6">We need your details to send the quote</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setData({...data, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      value={data.company}
                      onChange={(e) => setData({...data, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="ABC Sdn Bhd"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData({...data, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => setData({...data, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="+60123456789"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block font-semibold mb-2">WhatsApp Number *</label>
                      <input
                        type="tel"
                        value={data.whatsapp}
                        onChange={(e) => setData({...data, whatsapp: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="+60123456789"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Continue in next part... */}

            {/* Step 5: Summary & Submit */}
            {step === 5 && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Your Estimate Summary</h3>
                <p className="text-gray-600 mb-6">Review your selections and get your quote</p>
                
                {/* Summary */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-2">PROJECT DETAILS</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Type:</span> {data.projectType.toUpperCase()}</div>
                        <div><span className="font-medium">Pages:</span> {data.pages}</div>
                        <div><span className="font-medium">Design:</span> {data.designLevel}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-2">CONTACT INFO</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Name:</span> {data.name}</div>
                        <div><span className="font-medium">Email:</span> {data.email}</div>
                        <div><span className="font-medium">Phone:</span> {data.phone}</div>
                      </div>
                    </div>
                  </div>
                  
                  {data.features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-500 mb-2">FEATURES</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.features.map(f => (
                          <span key={f} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {data.extras.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-2">EXTRAS</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.extras.map(e => (
                          <span key={e} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Cost Breakdown */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-lg mb-4">Cost Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-semibold">RM {baseCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>SST (8%)</span>
                      <span className="font-semibold">RM {sst.toFixed(2)}</span>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-3 flex justify-between text-xl font-bold text-primary-600">
                      <span>Total Estimate</span>
                      <span>RM {total.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    * This is an estimate. Final pricing may vary based on specific requirements.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={sendWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                  
                  <button
                    onClick={generatePDF}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF Quote
                  </button>
                  
                  <button
                    onClick={sendEmail}
                    className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send via Email
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="border-t p-6 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
            )}
            
            {step < 5 && (
              <button
                onClick={() => {
                  if (step === 1 && !data.projectType) {
                    alert('Please select a project type')
                    return
                  }
                  if (step === 3 && !data.designLevel) {
                    alert('Please select a design level')
                    return
                  }
                  if (step === 4 && (!data.name || !data.email || !data.phone || !data.whatsapp)) {
                    alert('Please fill in all required fields')
                    return
                  }
                  setStep(step + 1)
                }}
                className="ml-auto px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
              >
                Next →
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
