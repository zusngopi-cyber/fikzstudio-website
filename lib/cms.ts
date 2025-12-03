// CMS Data Access Layer - Works with localStorage-based CMS

export interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  link: string
  color: string
  image?: string
  customFields: {
    client?: string
    duration?: string
    budget?: string
    technologies?: string
    results?: string
  }
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage?: string
  categories: string[]
  tags: string[]
  author: string
  publishedAt: string
  status: 'published' | 'draft'
}

export interface Page {
  id: number
  title: string
  slug: string
  content: string
  template: 'default' | 'home' | 'about' | 'contact'
  status: 'published' | 'draft'
  customFields: Record<string, any>
  createdAt: string
  updatedAt: string
}

export interface Snippet {
  id: number
  title: string
  code: string
  type: 'css' | 'javascript' | 'html' | 'php'
  location: 'head' | 'body' | 'footer'
  active: boolean
  createdAt: string
}

// Projects API
export function getAllProjects(): Project[] {
  if (typeof window === 'undefined') return []
  const data = localStorage.getItem('projects')
  return data ? JSON.parse(data) : []
}

export function getProjectById(id: number): Project | null {
  const projects = getAllProjects()
  return projects.find(p => p.id === id) || null
}

export function getPublishedProjects(): Project[] {
  return getAllProjects() // All projects are considered published
}

// Blog Posts API
export function getAllPosts(): BlogPost[] {
  if (typeof window === 'undefined') return []
  const data = localStorage.getItem('blogPosts')
  return data ? JSON.parse(data) : []
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find(p => p.slug === slug) || null
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter(p => p.status === 'published')
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getPublishedPosts().filter(p => p.categories.includes(category))
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getPublishedPosts().filter(p => p.tags.includes(tag))
}

export function getRelatedPosts(post: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getPublishedPosts().filter(p => p.id !== post.id)
  
  // Score posts by relevance (shared categories and tags)
  const scored = allPosts.map(p => {
    let score = 0
    p.categories.forEach(cat => {
      if (post.categories.includes(cat)) score += 2
    })
    p.tags.forEach(tag => {
      if (post.tags.includes(tag)) score += 1
    })
    return { post: p, score }
  })
  
  // Sort by score and return top results
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}

// Pages API
export function getAllPages(): Page[] {
  if (typeof window === 'undefined') return []
  const data = localStorage.getItem('pages')
  return data ? JSON.parse(data) : []
}

export function getPageBySlug(slug: string): Page | null {
  const pages = getAllPages()
  return pages.find(p => p.slug === slug) || null
}

export function getPublishedPages(): Page[] {
  return getAllPages().filter(p => p.status === 'published')
}

// Snippets API
export function getActiveSnippets(): Snippet[] {
  if (typeof window === 'undefined') return []
  const data = localStorage.getItem('snippets')
  const snippets: Snippet[] = data ? JSON.parse(data) : []
  return snippets.filter(s => s.active)
}

export function getSnippetsByLocation(location: 'head' | 'body' | 'footer'): Snippet[] {
  return getActiveSnippets().filter(s => s.location === location)
}

// Categories and Tags
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set<string>()
  posts.forEach(post => {
    post.categories.forEach(cat => categories.add(cat))
  })
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

// Search functionality
export function searchContent(query: string): {
  projects: Project[]
  posts: BlogPost[]
  pages: Page[]
} {
  const lowerQuery = query.toLowerCase()
  
  const projects = getAllProjects().filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
  
  const posts = getPublishedPosts().filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.content.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery)
  )
  
  const pages = getPublishedPages().filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.content.toLowerCase().includes(lowerQuery)
  )
  
  return { projects, posts, pages }
}
