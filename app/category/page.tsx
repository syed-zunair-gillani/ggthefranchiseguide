import { getAllCategories } from "../../lib/api"
import Link from "next/link"
import { Folder } from "lucide-react"

export const metadata = {
  title: "Categories - GG The Franchise Guide",
  description: "Browse all article categories on GG The Franchise Guide",
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="group block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <Folder className="w-6 h-6 text-brand-blue group-hover:text-brand-orange transition-colors" />
              <h2 className="text-xl font-semibold ml-2 group-hover:text-brand-orange transition-colors">
                {category.name}
              </h2>
            </div>
            {category.description && <p className="text-gray-600 mb-3 line-clamp-2">{category.description}</p>}
            <p className="text-sm text-gray-500">
              {category.count} {category.count === 1 ? "post" : "posts"}
            </p>
          </Link>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600">No categories found</h2>
          <p className="mt-2 text-gray-500">Check back later for new content!</p>
        </div>
      )}
    </div>
  )
}

