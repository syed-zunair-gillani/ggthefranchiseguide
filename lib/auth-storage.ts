// This is a basic implementation. Consider using more secure storage methods
// like HTTP-only cookies for production use.

const AUTH_TOKEN_KEY = "authToken"
const REFRESH_TOKEN_KEY = "refreshToken"

export const authStorage = {
  setTokens(authToken: string, refreshToken: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, authToken)
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY)
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },

  clearTokens() {
    localStorage.removeItem(AUTH_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  },

  isAuthenticated() {
    return !!this.getAuthToken()
  },
}

