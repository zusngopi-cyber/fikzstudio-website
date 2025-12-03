import Link from 'next/link'
import OptimizedImage from './OptimizedImage'
import { Project } from '@/lib/cms'

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link href={`/work/${project.id}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          {project.image ? (
            <OptimizedImage
              src={project.image}
              alt={project.title}
              fill
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <span className="text-6xl">🚀</span>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
            {project.category}
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* View Project Link */}
        <div className="px-6 pb-6">
          <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
            <span>View Project</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
