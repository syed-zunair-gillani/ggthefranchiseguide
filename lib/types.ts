// Add these types to your existing types.ts file

export interface CategoryPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
  author?: {
    node: {
      name: string
      avatar?: {
        url: string
      }
    }
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  count?: number
  posts?: {
    nodes: CategoryPost[]
  }
}

