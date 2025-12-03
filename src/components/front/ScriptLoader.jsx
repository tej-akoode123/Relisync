'use client'

import { useEffect } from 'react'

export default function ScriptLoader() {
  useEffect(() => {
    // Load scripts in proper order after DOM is ready
    const loadScripts = async () => {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        await new Promise((resolve) => {
          document.addEventListener('DOMContentLoaded', resolve)
        })
      }

      // Initialize images visibility first (before other scripts)
      await loadScript('/front-pages/js/init-images.js')
      
      // Load Swiper first
      await loadScript('/front-pages/js/swiper.js')
      
      // Then load front-page-landing.js which depends on Swiper
      await loadScript('/front-pages/js/front-page-landing.js')
    }

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    loadScripts().catch((err) => {
      console.warn('Script loading error:', err)
    })
  }, [])

  return null
}
