'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
        <div className="w-4 h-4" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-4 h-4 text-yellow-500" />
      ) : (
        <MoonIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}
