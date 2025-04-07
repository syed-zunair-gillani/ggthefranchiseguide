import Link from "next/link"
import Image from "next/image"
import { getAllInTheMedia } from "../../lib/api"

export default async function MediaListing() {
  const mediaItems = await getAllInTheMedia()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">In The Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
            {item.featuredImage && (
              <Image
                src={item.featuredImage.node.sourceUrl || "/placeholder.svg"}
                alt={item.featuredImage.node.altText || item.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: item.excerpt }} />
              <Link href={`/media/${item.slug}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

