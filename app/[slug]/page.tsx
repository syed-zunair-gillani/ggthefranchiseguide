import { getPageBySlug } from "../../lib/api"
import ElementorContent from "../../components/elementor/ElementorContent"

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug)

  if (!page) {
    return null
  }

  return <ElementorContent content={page.content} />
}

