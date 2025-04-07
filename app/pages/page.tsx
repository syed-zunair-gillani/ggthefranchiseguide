import Link from "next/link"
import { getAllPages } from "../../lib/api"

export default async function Pages() {
  const pages = await getAllPages()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Pages</h1>
      <ul className="space-y-4">
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={`/pages/${page.slug}`} className="text-blue-600 hover:underline">
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

