import { getPostBySlug } from "../../../lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import WPContent from "../../../components/wp-content"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  const { seo } = post

  return {
    title: seo?.title || post.title,
    description: seo?.metaDesc || "",
    openGraph: {
      title: seo?.opengraphTitle || seo?.title || post.title,
      description: seo?.opengraphDescription || seo?.metaDesc || "",
      images: seo?.opengraphImage ? [{ url: seo.opengraphImage.sourceUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || seo?.title || post.title,
      description: seo?.twitterDescription || seo?.metaDesc || "",
      images: seo?.twitterImage ? [seo.twitterImage.sourceUrl] : [],
    },
    robots: {
      index: !seo?.metaRobotsNoindex,
      follow: !seo?.metaRobotsNofollow,
    },
  }
}

export default async function Post({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  if (!post.content) {
    console.error("Post content is empty:", post)
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-red-600">Error: The post content could not be loaded. Please try again later.</p>
      </div>
    )
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.featuredImage && (
        <Image
          src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
          alt={post.featuredImage.node.altText || post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
      )}
      <WPContent content={post.content} />
    </article>
  )
}

