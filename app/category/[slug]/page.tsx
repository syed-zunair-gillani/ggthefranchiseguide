import { getCategoryBySlug } from "../../../lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { format } from "date-fns"
import { logger } from "../../../lib/logger"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    return {}
  }

  const title = `${category.name} - GG The Franchise Guide`
  const description = category.description || `Explore articles about ${category.name} from GG The Franchise Guide`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  logger.page("Category", params)

  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    logger.warn("Category", { message: "Category not found", slug: params.slug })
    notFound()
  }

  const posts = category.posts?.nodes || []

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        {category.description && (
          <div
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: category.description }}
          />
        )}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
          >
            {post.featuredImage && (
              <Link href={`/blog/${post.slug}`} className="block aspect-video relative overflow-hidden">
                <Image
                  src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  className="object-cover"
                />
              </Link>
            )}
            <div className="p-6">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-3 hover:text-brand-blue transition-colors">{post.title}</h2>
              </Link>

              {/* Author and Date */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                {post.author?.node && (
                  <div className="flex items-center mr-4">
                    {post.author.node.avatar?.url && (
                      <Image
                        src={post.author.node.avatar.url || "/placeholder.svg"}
                        alt={post.author.node.name}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                    )}
                    <span>{post.author.node.name}</span>
                  </div>
                )}
                <time dateTime={post.date}>{format(new Date(post.date), "MMM d, yyyy")}</time>
              </div>

              {/* Excerpt */}
              <div className="text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-brand-blue hover:text-brand-orange transition-colors"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* No Posts Message */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600">No posts found in this category</h2>
          <p className="mt-2 text-gray-500">Check back later for new content!</p>
        </div>
      )}
    </div>
  )
}

