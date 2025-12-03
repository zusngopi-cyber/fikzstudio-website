interface ServiceCardProps {
  title: string
  description: string
  icon?: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <a href="/contact" className="block group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        {icon && (
          <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Discuss this service
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  )
}
