import { getAllPosts } from "../../lib/api"
import Link from "next/link"

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const searchQuery = searchParams.q
  const allPosts = await getAllPosts()

  const searchResults = allPosts.filter((post) => {
    const title = post.node.title.toLowerCase()
    const excerpt = post.node.excerpt.toLowerCase()
    const query = searchQuery.toLowerCase()
    return title.includes(query) || excerpt.includes(query)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{searchQuery}"</h1>
      {searchResults.length > 0 ? (
        <ul className="space-y-4">
          {searchResults.map((post) => (
            <li key={post.node.id} className="border-b pb-4">
              <Link href={`/blog/${post.node.slug}`} className="block">
                <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:underline">{post.node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} className="text-gray-600" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{searchQuery}"</p>
      )}
    </div>
  )
}

