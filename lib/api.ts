import { gql } from "@apollo/client"
import { client } from "./apollo-client"
import { logger } from "./logger"

export async function getAllPosts() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPosts {
          posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
            edges {
              node {
                id
                date
                title
                slug
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        }
      `,
    })

    logger.api("getAllPosts", null, data?.posts?.edges)
    return data?.posts?.edges || []
  } catch (error) {
    logger.error("getAllPosts", error as Error)
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    logger.api("getPostBySlug", { slug })
    const { data } = await client.query({
      query: gql`
        query PostBySlug($id: ID!) {
          post(id: $id, idType: SLUG) {
            id
            date
            title
            slug
            content
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            seo {
              title
              metaDesc
              focuskw
              metaKeywords
              metaRobotsNoindex
              metaRobotsNofollow
              opengraphTitle
              opengraphDescription
              opengraphImage {
                sourceUrl
              }
              twitterTitle
              twitterDescription
              twitterImage {
                sourceUrl
              }
            }
          }
        }
      `,
      variables: { id: slug },
    })

    logger.api("getPostBySlug", { slug }, data?.post)
    return data?.post || null
  } catch (error) {
    logger.error("getPostBySlug", error as Error, { slug })
    return null
  }
}

export async function getAllPages() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPages {
          pages(first: 1000) {
            nodes {
              id
              date
              title
              slug
              content
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      `,
    })
    logger.api("getAllPages", null, data?.pages?.nodes)
    return data?.pages?.nodes || []
  } catch (error) {
    logger.error("getAllPages", error as Error)
    return []
  }
}

export async function getPageBySlug(slug: string) {
  try {
    logger.api("getPageBySlug", { slug })
    const { data } = await client.query({
      query: gql`
        query PageBySlug($id: ID!) {
          page(id: $id, idType: URI) {
            id
            date
            title
            slug
            content
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            seo {
              title
              metaDesc
              focuskw
              metaKeywords
              metaRobotsNoindex
              metaRobotsNofollow
              opengraphTitle
              opengraphDescription
              opengraphImage {
                sourceUrl
              }
              twitterTitle
              twitterDescription
              twitterImage {
                sourceUrl
              }
            }
          }
        }
      `,
      variables: { id: slug },
    })

    if (!data || !data.page) {
      console.error(`No page found for slug: ${slug}`)
      return null
    }
    logger.api("getPageBySlug", { slug }, data?.page)
    return data.page
  } catch (error) {
    logger.error("getPageBySlug", error as Error, { slug })
    if (error.networkError && error.networkError.result && error.networkError.result.errors) {
      console.error("GraphQL Errors:", error.networkError.result.errors)
    }
    return null
  }
}

export async function getMenuItems(location: string) {
  try {
    logger.api("getMenuItems", { location })
    const { data } = await client.query({
      query: gql`
        query MenuItems($location: MenuLocationEnum) {
          menuItems(where: { location: $location }) {
            nodes {
              id
              label
              path
            }
          }
        }
      `,
      variables: { location },
    })
    logger.api("getMenuItems", { location }, data?.menuItems?.nodes)
    return data?.menuItems?.nodes || []
  } catch (error) {
    logger.error("getMenuItems", error as Error, { location })
    return []
  }
}

export async function getSiteInfo() {
  try {
    const { data } = await client.query({
      query: gql`
        query SiteInfo {
          generalSettings {
            title
            description
          }
        }
      `,
    })
    logger.api("getSiteInfo", null, data?.generalSettings)
    return data?.generalSettings || null
  } catch (error) {
    logger.error("getSiteInfo", error as Error)
    return null
  }
}

export async function getMenus() {
  try {
    const { data } = await client.query({
      query: gql`
        query GetMenus {
          menus {
            nodes {
              id
              name
              slug
              locations
              menuItems {
                nodes {
                  id
                  label
                  path
                  target
                  cssClasses
                  parentId
                }
              }
            }
          }
        }
      `,
    })

    console.log("Menus data:", JSON.stringify(data?.menus?.nodes, null, 2))
    logger.api("getMenus", null, data?.menus?.nodes)
    return data?.menus?.nodes || []
  } catch (error) {
    logger.error("getMenus", error as Error)
    return []
  }
}

export async function getAllPodcasts() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPodcasts {
          podcasts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
            nodes {
              id
              date
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      `,
    })
    logger.api("getAllPodcasts", null, data?.podcasts?.nodes)
    return data?.podcasts?.nodes || []
  } catch (error) {
    logger.error("getAllPodcasts", error as Error)
    return []
  }
}

export async function getPodcastBySlug(slug: string) {
  try {
    logger.api("getPodcastBySlug", { slug })
    const { data } = await client.query({
      query: gql`
        query PodcastBySlug($id: ID!) {
          podcast(id: $id, idType: SLUG) {
            id
            date
            title
            slug
            content
            excerpt
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            status
            template {
              templateName
            }
          }
        }
      `,
      variables: { id: slug },
    })

    // Log the full response to inspect the data structure
    console.log("Full podcast data:", JSON.stringify(data?.podcast, null, 2))
    logger.api("getPodcastBySlug", { slug }, data?.podcast)
    return data?.podcast || null
  } catch (error) {
    logger.error("getPodcastBySlug", error as Error, { slug })
    if (error.networkError?.result?.errors) {
      console.error("GraphQL Errors:", error.networkError.result.errors)
    }
    return null
  }
}

export async function getAllInTheMedia() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllInTheMedia {
          allInTheMedia(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
            edges {
              node {
                id
                date
                title
                slug
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        }
      `,
    })
    logger.api(
      "getAllInTheMedia",
      null,
      data?.allInTheMedia?.edges.map((edge) => edge.node),
    )
    return data?.allInTheMedia?.edges.map((edge) => edge.node) || []
  } catch (error) {
    logger.error("getAllInTheMedia", error as Error)
    return []
  }
}

export async function getInTheMediaBySlug(slug: string) {
  try {
    logger.api("getInTheMediaBySlug", { slug })
    const { data } = await client.query({
      query: gql`
        query InTheMediaBySlug($id: ID!) {
          inTheMedia(id: $id, idType: SLUG) {
            id
            date
            title
            slug
            content
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            seo {
              title
              metaDesc
              focuskw
              metaKeywords
              metaRobotsNoindex
              metaRobotsNofollow
              opengraphTitle
              opengraphDescription
              opengraphImage {
                sourceUrl
              }
              twitterTitle
              twitterDescription
              twitterImage {
                sourceUrl
              }
            }
          }
        }
      `,
      variables: { id: slug },
    })

    logger.api("getInTheMediaBySlug", { slug }, data?.inTheMedia)
    return data?.inTheMedia || null
  } catch (error) {
    logger.error("getInTheMediaBySlug", error as Error, { slug })
    return null
  }
}

export async function getRecentPodcasts(count = 3, excludeSlug?: string) {
  try {
    logger.api("getRecentPodcasts", { count, excludeSlug })
    const { data } = await client.query({
      query: gql`
        query RecentPodcasts($count: Int!) {
          podcasts(
            first: $count, 
            where: { 
              orderby: { field: DATE, order: DESC }
            }
          ) {
            nodes {
              id
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              date
            }
          }
        }
      `,
      variables: {
        count,
      },
    })

    // Filter out the excluded slug after fetching
    const nodes = data?.podcasts?.nodes || []
    const filteredNodes = excludeSlug ? nodes.filter((podcast) => podcast.slug !== excludeSlug) : nodes
    logger.api("getRecentPodcasts", { count, excludeSlug }, filteredNodes)
    return filteredNodes
  } catch (error) {
    logger.error("getRecentPodcasts", error as Error, { count, excludeSlug })
    return []
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const { data } = await client.query({
      query: gql`
        query CategoryBySlug($id: ID!) {
          category(id: $id, idType: SLUG) {
            id
            name
            slug
            description
            posts(first: 12) {
              nodes {
                id
                title
                slug
                excerpt
                date
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
                author {
                  node {
                    name
                    avatar {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { id: slug },
    })

    return data?.category || null
  } catch (error) {
    logger.error("getCategoryBySlug", error as Error, { slug })
    return null
  }
}

export async function getAllCategories() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllCategories {
          categories(first: 100) {
            nodes {
              id
              name
              slug
              description
              count
            }
          }
        }
      `,
    })

    return data?.categories?.nodes || []
  } catch (error) {
    logger.error("getAllCategories", error as Error)
    return []
  }
}

export async function getRecentPosts(count = 3, excludeSlug?: string) {
  try {
    logger.api("getRecentPosts", { count, excludeSlug })
    const { data } = await client.query({
      query: gql`
        query RecentPosts($count: Int!) {
          posts(
            first: $count, 
            where: { 
              orderby: { field: DATE, order: DESC }
            }
          ) {
            nodes {
              id
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              date
            }
          }
        }
      `,
      variables: {
        count,
      },
    })

    // Filter out the excluded slug after fetching
    const nodes = data?.posts?.nodes || []
    const filteredNodes = excludeSlug ? nodes.filter((post) => post.slug !== excludeSlug) : nodes
    logger.api("getRecentPosts", { count, excludeSlug }, filteredNodes)
    return filteredNodes
  } catch (error) {
    logger.error("getRecentPosts", error as Error, { count, excludeSlug })
    return []
  }
}

