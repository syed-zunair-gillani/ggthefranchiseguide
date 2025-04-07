import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { onError } from "@apollo/client/link/error"

const httpLink = createHttpLink({
  uri: process.env.WORDPRESS_API_URL,
})

// Function to get the auth token - implement this based on your storage method
const getAuthToken = () => {
  // If running on server, use the environment variable
  if (typeof window === "undefined") {
    return process.env.WP_AUTH_SECRET
  }

  // If in browser, get from localStorage or cookie
  return localStorage.getItem("authToken")
}

const authLink = setContext((_, { headers }) => {
  // During build time, we might not have authentication
  // so we'll skip adding the authorization header
  if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production") {
    return { headers }
  }

  const token = getAuthToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

// Handle authentication errors
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.message.includes("jwt")) {
        console.warn("JWT Error:", err.message)
        // During build, continue without auth
        if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production") {
          const oldHeaders = operation.getContext().headers
          operation.setContext({
            headers: {
              ...oldHeaders,
              authorization: "", // Remove auth header
            },
          })
          return forward(operation) // Retry the request without auth
        }
      }
    }
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
})

