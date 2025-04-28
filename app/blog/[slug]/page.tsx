import { getPostBySlug, getRecentPosts } from "../../../lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import WPContent from "../../../components/wp-content"
import { format } from "date-fns"
import { logger } from "../../../lib/logger"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export const dynamic = "force-dynamic"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  logger.page("BlogPost:Metadata", params, { post })

  if (!post) {
    return {}
  }

  const { seo } = post

  return {
    title: seo?.title || post.title,
    description: post.excerpt?.replace(/<[^>]*>/g, "") || "",
    openGraph: {
      title: seo?.opengraphTitle || seo?.title || post.title,
      description: post.excerpt?.replace(/<[^>]*>/g, "") || "",
      images: post.featuredImage ? [{ url: post.featuredImage.node.sourceUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || seo?.title || post.title,
      description: post.excerpt?.replace(/<[^>]*>/g, "") || "",
      images: post.featuredImage ? [post.featuredImage.node.sourceUrl] : [],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  logger.page("BlogPost", params)

  const post = await getPostBySlug(params.slug)
  const recentPosts = await getRecentPosts(3, params.slug)

  if (!post) {
    logger.warn("BlogPost", { message: "Post not found", slug: params.slug })
    notFound()
  }

  logger.page("BlogPost", params, { post })

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          {/* Author and Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            {post.author?.node && (
              <div className="flex items-center gap-2">
                {post.author.node.avatar?.url && (
                  <Image
                    src={post.author.node.avatar.url || "/placeholder.svg"}
                    alt={post.author.node.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span>{post.author.node.name}</span>
              </div>
            )}
            <span>•</span>
            <span>{format(new Date(post.date), "MMMM dd, yyyy")}</span>
            {post.categories?.nodes?.length > 0 && (
              <>
                <span>•</span>
                <Link href={`/category/${post.categories.nodes[0].slug}`} className="text-brand-blue hover:underline">
                  {post.categories.nodes[0].name}
                </Link>
              </>
            )}
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <Image
              src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
              alt={post.featuredImage.node.altText || post.title}
              width={800}
              height={400}
              className="w-full rounded-lg mb-6"
              priority
            />
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <div
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          )}

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Share this article:</span>
            <Button variant="ghost" size="sm" className="text-brand-blue hover:text-brand-orange">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Main Content */}
          <div className="prose max-w-none">
            <WPContent content={post.content} />
          </div>

          {/* Categories */}
          {post.categories?.nodes?.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-medium mb-4">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                {post.categories.nodes.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar - Updated with scroll container */}
        <aside className="lg:w-1/3">
          <div className="sticky top-24 h-[calc(100vh-8rem)] overflow-hidden">
            <div className="space-y-6 overflow-y-auto h-full pb-6 pr-4 scrollbar-thin">
              {/* Author Box */}
              <div className="bg-gray-50 rounded-lg p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GG%20%281%29-4sIGNwfc72gLXTMcgnmGGvltSFBK9C.png"
                  alt="Giuseppe Grammatico"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">Giuseppe Grammatico</h3>
                <div className="text-gray-600 text-center">Franchise Freedom Expert</div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Helping corporate executives escape the corporate world through franchise ownership
                </p>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Recent Articles</h4>
                <div className="space-y-4">
                  {recentPosts.map((recentPost) => (
                    <Link key={recentPost.id} href={`/blog/${recentPost.slug}`} className="flex gap-4 group">
                      {recentPost.featuredImage ? (
                        <Image
                          src={recentPost.featuredImage.node.sourceUrl || "/placeholder.svg"}
                          alt={recentPost.featuredImage.node.altText || recentPost.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0" />
                      )}
                      <div>
                        <h5 className="font-medium group-hover:text-brand-blue transition-colors line-clamp-2">
                          {recentPost.title}
                        </h5>
                        <p className="text-sm text-gray-600 mt-1">{format(new Date(recentPost.date), "MMM d, yyyy")}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Ready to Start Your Journey?</h4>
                <p className="text-gray-600 mb-4">
                  Book a free consultation to discuss your goals and how franchising might be the right path for you.
                </p>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white" asChild>
                  <Link href="/right-fit">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

