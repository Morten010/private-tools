"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider 
      {...props}
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  )
}
