'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import AOS from 'aos'

export const useAOSInitialization = () => {
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    // Pequeno delay para garantir que o DOM está pronto
    const timer = setTimeout(() => {
      AOS.refresh()
    }, 100)

    return () => clearTimeout(timer)
  }, [theme, resolvedTheme])
}
