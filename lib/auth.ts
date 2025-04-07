import { client } from "./apollo-client"
import { gql } from "@apollo/client"

export interface LoginResponse {
  login: {
    authToken: string
    refreshToken: string
    user: {
      id: string
      name: string
      email: string
    }
  }
}

export interface RefreshResponse {
  refreshJwtAuthToken: {
    authToken: string
  }
}

export async function loginUser(username: string, password: string) {
  const { data } = await client.mutate<LoginResponse>({
    mutation: gql`
      mutation LoginUser($username: String!, $password: String!) {
        login(input: { username: $username, password: $password }) {
          authToken
          refreshToken
          user {
            id
            name
            email
          }
        }
      }
    `,
    variables: {
      username,
      password,
    },
  })

  if (!data?.login) {
    throw new Error("Login failed")
  }

  return data.login
}

export async function refreshAuthToken(refreshToken: string) {
  const { data } = await client.mutate<RefreshResponse>({
    mutation: gql`
      mutation RefreshAuthToken($refreshToken: String!) {
        refreshJwtAuthToken(input: { jwtRefreshToken: $refreshToken }) {
          authToken
        }
      }
    `,
    variables: {
      refreshToken,
    },
  })

  if (!data?.refreshJwtAuthToken) {
    throw new Error("Token refresh failed")
  }

  return data.refreshJwtAuthToken.authToken
}

