# Implementation Plan

- [ ] 1. Setup WordPress Content Studio
  - Install WordPress 6.4+ with PHP 8.1+
  - Configure basic WordPress settings (permalinks, timezone, site title)
  - Install required plugins: Advanced Custom Fields Pro, ShortPixel/Imagify, Code Snippets Pro
  - Configure separate domain for WordPress backend (studio.fikzstudio.com)
  - _Requirements: 4.1, 4.2, 5.1, 9.1_

- [ ] 1.1 Write unit tests for WordPress setup
  - Test WordPress installation and configuration
  - Test plugin activation
  - _Requirements: 4.1, 4.2_

- [ ] 2. Implement WordPress security and role management
  - Create custom Editor role with restricted capabilities
  - Implement menu restrictions for Editor role (hide Appearance, Plugins, Tools, Settings)
  - Configure strong password requirements and session timeout
  - Implement rate limiting on login attempts (5 attempts per 5 minutes)
  - Add security headers and hardening measures
  - _Requirements: 6.1, 6.5, 9.1, 9.2, 9.3, 9.4_

- [ ] 2.1 Write property test for rate limiting
  - **Property 20: Rate limiting enforcement**
  - **Validates: Requirements 9.4**

- [ ] 3. Create Portfolio custom post type and ACF fields
  - Register Portfolio custom post type with REST API support
  - Create ACF field group for Portfolio with all required fields (short_summary, cover_image, gallery, services_provided, tech_stack, industry, results, external_link, testimonial, SEO fields)
  - Configure services_provided as checkbox with predefined options
  - Configure results as repeater field
  - Enable REST API exposure for all ACF fields
  - _Requirements: 5.1, 5.4_

- [ ] 3.1 Write unit tests for Portfolio CPT
  - Test Portfolio post type registration
  - Test ACF field group configuration
  - Test REST API exposure
  - _Requirements: 5.1_

- [ ] 4. Implement image optimization pipeline
  - Hook into WordPress upload process (wp_handle_upload filter)
  - Implement automatic image compression
  - Implement WebP conversion while preserving original
  - Generate responsive image sizes (320w, 640w, 1024w, 1920w)
  - Enforce maximum image dimension (2000px width)
  - Configure ShortPixel/Imagify plugin settings
  - _Requirements: 4.4, 10.1, 10.2, 10.3, 10.4_

- [ ] 4.1 Write property test for image upload processing
  - **Property 8: Image upload processing**
  - **Validates: Requirements 4.4, 10.1, 10.2, 10.3**

- [ ] 4.2 Write property test for oversized image resizing
  - **Property 21: Oversized image resizing**
  - **Validates: Requirements 10.4**

- [ ] 4.3 Write property test for gallery image processing
  - **Property 10: Gallery image processing**
  - **Validates: Requirements 5.3**

- [ ] 5. Setup deploy webhook system
  - Create webhook endpoint configuration in WordPress admin
  - Implement publish hooks for Blog Posts (publish_post action)
  - Implement publish hooks for Portfolio Projects (publish_portfolio action)
  - Add webhook trigger function with retry logic (3 attempts with exponential backoff)
  - Ensure draft saves do not trigger webhook
  - Add webhook logging and error handling
  - _Requirements: 4.3, 4.5, 5.2, 11.1_

- [ ] 5.1 Write property test for content publishing triggers deployment
  - **Property 7: Content publishing triggers deployment**
  - **Validates: Requirements 4.3, 5.2, 11.1**

- [ ] 5.2 Write property test for draft saves do not trigger deployment
  - **Property 9: Draft saves do not trigger deployment**
  - **Validates: Requirements 4.5**

- [ ] 6. Implement code snippets management
  - Configure Code Snippets Pro plugin
  - Restrict snippet creation/editing to Admin role only
  - Implement error handling wrapper for snippet execution
  - Add snippet versioning to database
  - Create snippet disable toggle
  - Test snippet injection (CSS in head, JS before body close)
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 6.1 Write property test for code snippet injection
  - **Property 12: Code snippet injection**
  - **Validates: Requirements 6.2**

- [ ] 6.2 Write property test for code snippet error handling
  - **Property 13: Code snippet error handling**
  - **Validates: Requirements 6.3**

- [ ] 6.3 Write property test for code snippet versioning
  - **Property 14: Code snippet versioning**
  - **Validates: Requirements 6.4**

- [x] 7. Setup Next.js project structure




  - Initialize Next.js 14+ project with TypeScript
  - Configure Tailwind CSS with custom design tokens
  - Setup project directory structure (components, lib, pages, styles, types)
  - Configure environment variables for WordPress API URL
  - Install required dependencies (fast-check for property testing)
  - Setup ESLint and Prettier
  - _Requirements: 7.1, 7.2, 7.3_


- [ ] 7.1 Write unit tests for project configuration
  - Test environment variable loading



  - Test Tailwind configuration
  - _Requirements: 7.1_

- [ ] 8. Create WordPress API client
  - Implement data fetching functions for posts (getAllPosts, getPostBySlug)
  - Implement data fetching functions for portfolio (getAllPortfolioProjects, getPortfolioBySlug)
  - Implement data fetching for categories and tags
  - Add error handling and retry logic with exponential backoff


  - Implement response caching
  - Create TypeScript interfaces for all data models (BlogPost, PortfolioProject, Category, Tag, Image)


  - _Requirements: 2.2, 3.2, 4.2_

- [ ] 8.1 Write unit tests for API client
  - Test data fetching functions
  - Test error handling and retries


  - Test caching logic
  - _Requirements: 2.2, 3.2_

- [ ] 9. Build reusable UI components
  - Create OptimizedImage component with WebP support and lazy loading
  - Create SEO component with meta tags and schema markup
  - Create Hero section component with WhatsApp CTA
  - Create ServiceCard component
  - Create PortfolioCard component for grid display
  - Create ContactForm component with validation

  - Create Footer component
  - Implement design system with Tailwind (typography, colors, spacing)
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 7.5_



- [ ] 9.1 Write unit tests for UI components
  - Test component rendering with various props
  - Test form validation logic
  - Test image component with different formats
  - _Requirements: 1.1, 1.3, 7.5_

- [ ] 10. Implement homepage
  - Create homepage with Hero section and WhatsApp CTA
  - Add services overview section with service cards

  - Add featured portfolio projects section
  - Add testimonials section


  - Add contact CTA section
  - Implement SEO metadata and Organization schema
  - Ensure responsive layout (320px to 1920px)
  - _Requirements: 1.1, 1.2, 1.3, 7.4, 8.4_

- [ ] 10.1 Write property test for responsive layout
  - **Property 15: Responsive layout without horizontal scroll**
  - **Validates: Requirements 7.4**

- [ ] 11. Implement Services page
  - Create Services page with detailed service descriptions
  - Add service cards with icons and CTAs
  - Add contact form or WhatsApp CTA
  - Implement SEO metadata
  - Ensure responsive layout
  - _Requirements: 1.3, 7.4_

- [ ] 12. Implement Portfolio listing page
  - Create Portfolio page with grid layout
  - Fetch all portfolio projects from WordPress API
  - Display portfolio cards with cover images, titles, and service tags
  - Implement optional filtering by service type
  - Add pagination or load more functionality
  - Implement SEO metadata
  - _Requirements: 2.1, 7.4_

- [ ] 13. Implement Portfolio detail page template
  - Create dynamic route for portfolio projects ([slug].tsx)
  - Implement getStaticPaths to generate all portfolio pages
  - Implement getStaticProps with ISR (revalidate: 60)
  - Display all portfolio fields (cover image, summary, services, tech stack, industry, results, gallery, testimonial, external link)
  - Render problem-solution-results structure
  - Implement image gallery with lightbox
  - Add analytics tracking for portfolio views
  - Implement SEO metadata from ACF fields
  - _Requirements: 2.2, 2.3, 2.4, 2.5, 8.1_

- [ ] 13.1 Write property test for portfolio navigation and content completeness
  - **Property 2: Portfolio navigation and content completeness**
  - **Validates: Requirements 2.2, 2.3**

- [ ] 13.2 Write property test for external link behavior
  - **Property 3: External link behavior**
  - **Validates: Requirements 2.4**

- [ ] 13.3 Write property test for results formatting
  - **Property 11: Results formatting**
  - **Validates: Requirements 5.5**

- [ ] 14. Implement Blog listing page
  - Create Blog page with list of published posts
  - Fetch all blog posts from WordPress API
  - Display post cards with featured images, titles, excerpts, dates, and categories
  - Implement category and tag filtering
  - Add pagination
  - Implement SEO metadata
  - _Requirements: 3.1, 7.4_

- [ ] 15. Implement Blog post detail page template
  - Create dynamic route for blog posts ([slug].tsx)
  - Implement getStaticPaths to generate all blog pages
  - Implement getStaticProps with ISR (revalidate: 60)
  - Display post content with proper typography and heading structure
  - Add related posts section based on categories/tags
  - Display categories and tags as clickable links
  - Add blog CTA with analytics tracking
  - Implement Article schema markup
  - Implement SEO metadata from post fields
  - _Requirements: 3.2, 3.3, 3.4, 3.5, 8.5_

- [x] 15.1 Write property test for blog post heading structure


  - **Property 4: Blog post heading structure**
  - **Validates: Requirements 3.2, 12.5**

- [ ] 15.2 Write property test for related posts relevance
  - **Property 5: Related posts relevance**
  - **Validates: Requirements 3.3**

- [x] 15.3 Write property test for category and tag rendering



  - **Property 6: Category and tag rendering**
  - **Validates: Requirements 3.4**

- [ ] 16. Implement About page
  - Create About page with company story and team information
  - Add mission and values section
  - Add contact CTA
  - Implement SEO metadata
  - Ensure responsive layout




  - _Requirements: 7.4_

- [ ] 17. Implement Contact page
  - Create Contact page with contact form
  - Implement form validation (client-side and server-side)
  - Create API route for form submission
  - Add WhatsApp CTA as alternative
  - Implement success/error states
  - Add analytics tracking for form submissions
  - Implement SEO metadata
  - _Requirements: 1.4, 1.5, 7.4_

- [ ] 17.1 Write property test for form validation correctness
  - **Property 1: Form validation correctness**
  - **Validates: Requirements 1.4**

- [ ] 18. Implement Privacy Policy and Terms pages
  - Create Privacy Policy page with basic privacy information
  - Create Terms of Service page with basic terms
  - Implement SEO metadata
  - Ensure responsive layout
  - _Requirements: 7.4_

- [ ] 19. Implement custom 404 page
  - Create custom 404 error page with branding
  - Add search functionality or navigation links
  - Suggest popular pages (Home, Services, Portfolio, Blog)
  - Implement analytics tracking for 404 errors
  - _Requirements: 13.4_

- [ ] 20. Implement SEO infrastructure
  - Generate sitemap.xml dynamically from WordPress content
  - Create robots.txt with sitemap reference
  - Implement meta tags for all pages (title, description, OG tags)
  - Implement schema markup (Organization, Website, Article)
  - Ensure all pages have canonical URLs
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 20.1 Write property test for SEO metadata completeness
  - **Property 17: SEO metadata completeness**
  - **Validates: Requirements 8.1**

- [ ] 20.2 Write property test for sitemap completeness
  - **Property 18: Sitemap completeness**
  - **Validates: Requirements 8.2**

- [ ] 20.3 Write property test for blog post schema markup
  - **Property 19: Blog post schema markup**
  - **Validates: Requirements 8.5**

- [ ] 21. Implement image optimization on frontend
  - Configure Next.js Image component with WebP support
  - Implement lazy loading for below-the-fold images
  - Generate responsive srcset for all images
  - Implement blur-up placeholder technique
  - Add fallback for browsers without WebP support
  - _Requirements: 7.5, 10.5_

- [ ] 21.1 Write property test for image lazy loading and format
  - **Property 16: Image lazy loading and format**
  - **Validates: Requirements 7.5**

- [ ] 21.2 Write property test for WebP delivery with fallback
  - **Property 22: WebP delivery with fallback**
  - **Validates: Requirements 10.5**

- [ ] 22. Implement analytics tracking
  - Setup Google Analytics 4 with Next.js
  - Implement event tracking for WhatsApp clicks
  - Implement event tracking for contact form submissions
  - Implement event tracking for portfolio views
  - Implement event tracking for blog CTA clicks
  - Track Core Web Vitals metrics
  - Add privacy-friendly analytics option (Cloudflare Web Analytics)
  - _Requirements: 1.5, 2.5, 3.5, 13.2_

- [ ] 22.1 Write property test for analytics tracking
  - **Property 31: Analytics tracking**
  - **Validates: Requirements 1.5, 2.5, 3.5, 13.2**

- [ ] 23. Implement error monitoring
  - Setup Sentry or LogRocket for error tracking
  - Implement global error handler for JavaScript errors
  - Add error boundaries for React components
  - Log errors with context (page URL, user agent, stack trace)
  - Configure error alerts for administrators
  - _Requirements: 13.3_

- [ ] 23.1 Write property test for JavaScript error logging
  - **Property 32: JavaScript error logging**
  - **Validates: Requirements 13.3**

- [ ] 24. Implement accessibility features
  - Ensure all interactive elements have visible focus states
  - Add alt text to all images (enforce in WordPress)
  - Verify color contrast ratios meet WCAG AA standards
  - Ensure logical tab order on all pages
  - Test with keyboard navigation
  - Add ARIA labels where needed
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 24.1 Write property test for keyboard focus visibility
  - **Property 26: Keyboard focus visibility**
  - **Validates: Requirements 12.1**

- [ ] 24.2 Write property test for image alt text presence
  - **Property 27: Image alt text presence**
  - **Validates: Requirements 12.2**

- [ ] 24.3 Write property test for color contrast compliance
  - **Property 28: Color contrast compliance**
  - **Validates: Requirements 12.3**

- [ ] 24.4 Write property test for logical tab order
  - **Property 29: Logical tab order**
  - **Validates: Requirements 12.4**

- [ ] 25. Setup CI/CD pipeline with GitHub Actions
  - Create GitHub Actions workflow for build and deploy
  - Configure webhook receiver for WordPress publish events
  - Implement build process (npm ci, npm run build, npm run export)
  - Add test execution in pipeline (unit tests and property tests)
  - Configure deployment to Cloudflare Pages/Netlify/Vercel
  - Implement preview environment deployment
  - Add Lighthouse CI for performance testing
  - _Requirements: 11.1, 11.5_

- [ ] 25.1 Write property test for preview before production
  - **Property 25: Preview before production**
  - **Validates: Requirements 11.5**

- [ ] 26. Implement deployment versioning and rollback
  - Configure deployment artifact storage
  - Implement versioning for each deploy (timestamp or commit hash)
  - Add deployment logging with status, timestamp, and duration
  - Create rollback mechanism via dashboard or CLI
  - Test rollback procedure
  - _Requirements: 11.2, 11.4_

- [ ] 26.1 Write property test for deploy versioning
  - **Property 23: Deploy versioning**
  - **Validates: Requirements 11.2**

- [ ] 26.2 Write property test for deploy logging
  - **Property 30: Deploy logging**
  - **Validates: Requirements 13.1**

- [ ] 27. Implement deploy error handling
  - Add error logging for build failures
  - Add error logging for deployment failures
  - Implement notification system for administrators (email or Slack)
  - Add retry logic for failed deployments
  - Implement automatic rollback on deployment failure
  - _Requirements: 11.3_

- [ ] 27.1 Write property test for deploy failure logging
  - **Property 24: Deploy failure logging**
  - **Validates: Requirements 11.3**

- [ ] 28. Optimize frontend performance
  - Implement code splitting by route
  - Minify HTML, CSS, and JavaScript
  - Implement critical CSS extraction
  - Configure Brotli/Gzip compression
  - Setup CDN caching headers (long cache for assets, smart cache for HTML)
  - Preload critical fonts
  - Optimize font loading (font-display: swap, subsetting)
  - Remove unused CSS with PurgeCSS
  - _Requirements: 7.1, 7.2, 7.3_

- [ ] 29. Configure CDN and hosting
  - Setup Cloudflare Pages/Netlify/Vercel account
  - Configure custom domain (fikzstudio.com)
  - Setup SSL/TLS certificates
  - Configure caching rules
  - Enable HTTP/2 and HTTP/3
  - Setup CDN for image delivery
  - Configure security headers (CSP, X-Frame-Options, etc.)
  - _Requirements: 7.1, 7.2, 7.3_

- [ ] 30. Setup monitoring and alerts
  - Configure uptime monitoring (ping every 1 minute)
  - Setup error rate monitoring and alerts
  - Configure Core Web Vitals monitoring in production
  - Setup build failure alerts
  - Configure webhook delivery monitoring
  - Create monitoring dashboard
  - _Requirements: 13.1, 13.2, 13.5_

- [ ] 31. Checkpoint - Ensure all tests pass
  - Run all unit tests and verify they pass
  - Run all property-based tests and verify they pass
  - Run Lighthouse CI and verify Performance ≥ 90
  - Check for console errors on all main pages
  - Verify responsive layout on mobile, tablet, and desktop
  - Test contact form submission
  - Test WhatsApp CTA
  - Test blog and portfolio content display
  - Ask the user if questions arise

- [ ] 32. Final QA and launch preparation
  - Verify all acceptance criteria are met
  - Test end-to-end workflows (content publish → deploy → live site)
  - Verify SEO metadata on all pages
  - Test sitemap.xml and robots.txt
  - Verify schema markup with Google Rich Results Test
  - Test accessibility with screen reader
  - Verify analytics tracking works
  - Test error monitoring
  - Verify rollback procedure works
  - Create launch checklist documentation
  - _Requirements: All_

- [ ] 32.1 Write integration tests for end-to-end workflows
  - Test WordPress publish → webhook → build → deploy flow
  - Test image upload → optimization → frontend delivery flow
  - Test form submission → API → email flow
  - _Requirements: 4.3, 10.1, 1.4_
