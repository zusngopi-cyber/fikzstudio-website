import { describe, it, expect, beforeEach } from 'vitest'
import {
  getAllProjects,
  getProjectById,
  getAllPosts,
  getPostBySlug,
  getPublishedPosts,
  getPostsByCategory,
  getPostsByTag,
  getRelatedPosts,
  getAllPages,
  getPageBySlug,
  getPublishedPages,
  getActiveSnippets,
  getSnippetsByLocation,
  getAllCategories,
  getAllTags,
  searchContent,
  type Project,
  type BlogPost,
  type Page,
  type Snippet
} from '../cms'

describe('CMS Data Access Layer', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  describe('Projects API', () => {
    it('should return empty array when no projects exist', () => {
      const projects = getAllProjects()
      expect(projects).toEqual([])
    })

    it('should return all projects from localStorage', () => {
      const mockProjects: Project[] = [
        {
          id: 1,
          title: 'Test Project',
          category: 'Web Development',
          description: 'A test project',
          tags: ['React', 'TypeScript'],
          link: '#',
          color: 'from-blue-500 to-cyan-500',
          customFields: {}
        }
      ]
      localStorage.setItem('projects', JSON.stringify(mockProjects))

      const projects = getAllProjects()
      expect(projects).toHaveLength(1)
      expect(projects[0].title).toBe('Test Project')
    })

    it('should get project by id', () => {
      const mockProjects: Project[] = [
        {
          id: 1,
          title: 'Project 1',
          category: 'Web Development',
          description: 'First project',
          tags: [],
          link: '#',
          color: 'from-blue-500 to-cyan-500',
          customFields: {}
        },
        {
          id: 2,
          title: 'Project 2',
          category: 'Web Design',
          description: 'Second project',
          tags: [],
          link: '#',
          color: 'from-purple-500 to-pink-500',
          customFields: {}
        }
      ]
      localStorage.setItem('projects', JSON.stringify(mockProjects))

      const project = getProjectById(2)
      expect(project).not.toBeNull()
      expect(project?.title).toBe('Project 2')
    })

    it('should return null for non-existent project id', () => {
      const project = getProjectById(999)
      expect(project).toBeNull()
    })
  })

  describe('Blog Posts API', () => {
    const mockPosts: BlogPost[] = [
      {
        id: 1,
        title: 'First Post',
        slug: 'first-post',
        content: 'Content here',
        excerpt: 'Excerpt here',
        categories: ['Tech', 'Web'],
        tags: ['javascript', 'react'],
        author: 'John Doe',
        publishedAt: '2024-01-01',
        status: 'published'
      },
      {
        id: 2,
        title: 'Draft Post',
        slug: 'draft-post',
        content: 'Draft content',
        excerpt: 'Draft excerpt',
        categories: ['Tech'],
        tags: ['typescript'],
        author: 'Jane Doe',
        publishedAt: '2024-01-02',
        status: 'draft'
      }
    ]

    it('should return all posts', () => {
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      const posts = getAllPosts()
      expect(posts).toHaveLength(2)
    })

    it('should return only published posts', () => {
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      const posts = getPublishedPosts()
      expect(posts).toHaveLength(1)
      expect(posts[0].status).toBe('published')
    })

    it('should get post by slug', () => {
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      const post = getPostBySlug('first-post')
      expect(post).not.toBeNull()
      expect(post?.title).toBe('First Post')
    })

    it('should filter posts by category', () => {
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      const posts = getPostsByCategory('Web')
      expect(posts).toHaveLength(1)
      expect(posts[0].categories).toContain('Web')
    })

    it('should filter posts by tag', () => {
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      const posts = getPostsByTag('react')
      expect(posts).toHaveLength(1)
      expect(posts[0].tags).toContain('react')
    })

    it('should get related posts based on categories and tags', () => {
      const posts: BlogPost[] = [
        {
          id: 1,
          title: 'Post 1',
          slug: 'post-1',
          content: 'Content',
          excerpt: 'Excerpt',
          categories: ['Tech', 'Web'],
          tags: ['javascript', 'react'],
          author: 'Author',
          publishedAt: '2024-01-01',
          status: 'published'
        },
        {
          id: 2,
          title: 'Post 2',
          slug: 'post-2',
          content: 'Content',
          excerpt: 'Excerpt',
          categories: ['Tech'],
          tags: ['javascript'],
          author: 'Author',
          publishedAt: '2024-01-02',
          status: 'published'
        },
        {
          id: 3,
          title: 'Post 3',
          slug: 'post-3',
          content: 'Content',
          excerpt: 'Excerpt',
          categories: ['Design'],
          tags: ['css'],
          author: 'Author',
          publishedAt: '2024-01-03',
          status: 'published'
        }
      ]
      localStorage.setItem('blogPosts', JSON.stringify(posts))

      const related = getRelatedPosts(posts[0], 2)
      expect(related).toHaveLength(2)
      // Post 2 should be more related (shares category and tag)
      expect(related[0].id).toBe(2)
    })
  })

  describe('Pages API', () => {
    const mockPages: Page[] = [
      {
        id: 1,
        title: 'About',
        slug: 'about',
        content: 'About content',
        template: 'about',
        status: 'published',
        customFields: {},
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: 2,
        title: 'Draft Page',
        slug: 'draft',
        content: 'Draft content',
        template: 'default',
        status: 'draft',
        customFields: {},
        createdAt: '2024-01-02',
        updatedAt: '2024-01-02'
      }
    ]

    it('should return all pages', () => {
      localStorage.setItem('pages', JSON.stringify(mockPages))
      const pages = getAllPages()
      expect(pages).toHaveLength(2)
    })

    it('should return only published pages', () => {
      localStorage.setItem('pages', JSON.stringify(mockPages))
      const pages = getPublishedPages()
      expect(pages).toHaveLength(1)
      expect(pages[0].status).toBe('published')
    })

    it('should get page by slug', () => {
      localStorage.setItem('pages', JSON.stringify(mockPages))
      const page = getPageBySlug('about')
      expect(page).not.toBeNull()
      expect(page?.title).toBe('About')
    })
  })

  describe('Snippets API', () => {
    const mockSnippets: Snippet[] = [
      {
        id: 1,
        title: 'Analytics',
        code: '<script>console.log("analytics")</script>',
        type: 'javascript',
        location: 'head',
        active: true,
        createdAt: '2024-01-01'
      },
      {
        id: 2,
        title: 'Inactive Snippet',
        code: '<style>body { color: red; }</style>',
        type: 'css',
        location: 'head',
        active: false,
        createdAt: '2024-01-02'
      },
      {
        id: 3,
        title: 'Footer Script',
        code: '<script>console.log("footer")</script>',
        type: 'javascript',
        location: 'footer',
        active: true,
        createdAt: '2024-01-03'
      }
    ]

    it('should return only active snippets', () => {
      localStorage.setItem('snippets', JSON.stringify(mockSnippets))
      const snippets = getActiveSnippets()
      expect(snippets).toHaveLength(2)
      expect(snippets.every(s => s.active)).toBe(true)
    })

    it('should filter snippets by location', () => {
      localStorage.setItem('snippets', JSON.stringify(mockSnippets))
      const headSnippets = getSnippetsByLocation('head')
      expect(headSnippets).toHaveLength(1)
      expect(headSnippets[0].location).toBe('head')
    })
  })

  describe('Categories and Tags', () => {
    const mockPosts: BlogPost[] = [
      {
        id: 1,
        title: 'Post 1',
        slug: 'post-1',
        content: 'Content',
        excerpt: 'Excerpt',
        categories: ['Tech', 'Web'],
        tags: ['javascript', 'react'],
        author: 'Author',
        publishedAt: '2024-01-01',
        status: 'published'
      },
      {
        id: 2,
        title: 'Post 2',
        slug: 'post-2',
        content: 'Content',
        excerpt: 'Excerpt',
        categories: ['Design', 'Tech'],
        tags: ['css', 'javascript'],
        author: 'Author',
        publishedAt: '2024-01-02',
        status: 'published'
      }
    ]

    it('should get all unique categories', () => {
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      const categories = getAllCategories()
      expect(categories).toHaveLength(3)
      expect(categories).toContain('Tech')
      expect(categories).toContain('Web')
      expect(categories).toContain('Design')
    })

    it('should get all unique tags', () => {
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      const tags = getAllTags()
      expect(tags).toHaveLength(3)
      expect(tags).toContain('javascript')
      expect(tags).toContain('react')
      expect(tags).toContain('css')
    })
  })

  describe('Search functionality', () => {
    beforeEach(() => {
      const mockProjects: Project[] = [
        {
          id: 1,
          title: 'React Dashboard',
          category: 'Web Development',
          description: 'A modern dashboard built with React',
          tags: ['React', 'TypeScript'],
          link: '#',
          color: 'from-blue-500 to-cyan-500',
          customFields: {}
        }
      ]

      const mockPosts: BlogPost[] = [
        {
          id: 1,
          title: 'Getting Started with React',
          slug: 'react-guide',
          content: 'Learn React basics',
          excerpt: 'A comprehensive guide',
          categories: ['Tech'],
          tags: ['react'],
          author: 'Author',
          publishedAt: '2024-01-01',
          status: 'published'
        }
      ]

      const mockPages: Page[] = [
        {
          id: 1,
          title: 'About React Development',
          slug: 'about',
          content: 'We specialize in React',
          template: 'about',
          status: 'published',
          customFields: {},
          createdAt: '2024-01-01',
          updatedAt: '2024-01-01'
        }
      ]

      localStorage.setItem('projects', JSON.stringify(mockProjects))
      localStorage.setItem('blogPosts', JSON.stringify(mockPosts))
      localStorage.setItem('pages', JSON.stringify(mockPages))
    })

    it('should search across all content types', () => {
      const results = searchContent('react')
      expect(results.projects).toHaveLength(1)
      expect(results.posts).toHaveLength(1)
      expect(results.pages).toHaveLength(1)
    })

    it('should return empty results for non-matching query', () => {
      const results = searchContent('nonexistent')
      expect(results.projects).toHaveLength(0)
      expect(results.posts).toHaveLength(0)
      expect(results.pages).toHaveLength(0)
    })

    it('should be case-insensitive', () => {
      const results = searchContent('REACT')
      expect(results.projects.length + results.posts.length + results.pages.length).toBeGreaterThan(0)
    })
  })
})
