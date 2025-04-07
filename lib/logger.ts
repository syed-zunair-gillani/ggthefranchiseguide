type LogLevel = "info" | "warn" | "error" | "debug"

interface LogOptions {
  level?: LogLevel
  component?: string
  data?: any
  error?: Error
}

export const logger = {
  log({ level = "info", component, data, error }: LogOptions) {
    const timestamp = new Date().toISOString()
    const prefix = `[${timestamp}] [${level.toUpperCase()}] ${component ? `[${component}]` : ""}`

    if (process.env.NODE_ENV === "development") {
      switch (level) {
        case "error":
          console.error(`${prefix} Error:`, error)
          if (data) console.error(`${prefix} Context:`, data)
          break
        case "warn":
          console.warn(`${prefix}`, data)
          break
        case "debug":
          console.debug(`${prefix}`, data)
          break
        default:
          console.log(`${prefix}`, data)
      }
    }
  },

  page(pageName: string, params?: any, data?: any) {
    this.log({
      level: "info",
      component: `Page:${pageName}`,
      data: {
        params,
        data,
        url: typeof window !== "undefined" ? window.location.href : null,
      },
    })
  },

  api(functionName: string, params?: any, data?: any) {
    this.log({
      level: "debug",
      component: `API:${functionName}`,
      data: {
        params,
        response: data,
      },
    })
  },

  error(component: string, error: Error, context?: any) {
    this.log({
      level: "error",
      component,
      error,
      data: context,
    })
  },
}

