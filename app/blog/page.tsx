import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "../../lib/api"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default async function BlogListing() {
  const posts = await getAllPosts()
  console.log("🚀 ~ BlogListing ~ posts:", posts)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GG%20%281%29-4sIGNwfc72gLXTMcgnmGGvltSFBK9C.png"
                  alt="GG The Franchise Guide Blog"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">The Franchise Freedom Blog</h1>
              <h2 className="text-xl md:text-2xl mb-6">Expert Insights from Giuseppe Grammatico</h2>
              <p className="text-lg mb-8">
                Discover valuable insights, tips, and strategies for breaking free from the corporate world through
                franchise ownership. Stay informed with the latest trends and opportunities in franchising.
              </p>
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white" asChild>
                <Link href="/right-fit">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Your Guide to Franchise Success</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              Welcome to the Franchise Freedom Blog, your trusted source for expert advice and insights on franchise
              ownership. Whether you're a corporate executive looking to break free or an entrepreneur seeking the right
              opportunity, our blog provides the guidance you need.
            </p>
            <p>
              From understanding franchise agreements to evaluating opportunities and managing successful franchises, we
              cover everything you need to know about the franchising world.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ node: post }:any) => (
              <article
                key={post.id}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* {post.featuredImage && ( */}
                  <Link href={`/blog/${post.slug}`} className="relative aspect-video">
                    <Image
                      src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
                      alt={post.featuredImage.node.altText || post.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-[250px]"
                    />
                  </Link>
                {/* )} */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-blue">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="text-sm text-gray-500 mb-4">{format(new Date(post.date), "MMMM d, yyyy")}</div>
                  <div className="text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-brand-blue hover:text-brand-orange"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Article
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Franchise Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards franchise ownership. Schedule a consultation to discuss your goals and explore
            the opportunities available to you.
          </p>
          <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white" asChild>
            <Link href="/right-fit">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

