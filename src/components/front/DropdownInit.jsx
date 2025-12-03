'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function DropdownInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Reinitialize dropdowns on route change
    const initDropdowns = () => {
      // Wait for Bootstrap
      if (typeof bootstrap === 'undefined' || !bootstrap.Dropdown) {
        setTimeout(initDropdowns, 100)
        return
      }

      // Initialize mega dropdowns
      if (typeof MegaDropdown !== 'undefined') {
        const megaDropdowns = document.querySelectorAll('.nav-link.mega-dropdown:not([data-mega-dropdown-initialized])')
        megaDropdowns.forEach((element) => {
          try {
            new MegaDropdown(element)
            element.setAttribute('data-mega-dropdown-initialized', 'true')
          } catch (e) {
            console.warn('MegaDropdown init error:', e)
          }
        })
      }

      // Re-run dropdown-hover-vanilla.js initialization
      // This will handle hover dropdowns properly
      if (typeof window !== 'undefined') {
        // Remove old script if exists and reload
        const oldScript = document.querySelector('script[src="/front-pages/js/dropdown-hover-vanilla.js"]')
        if (oldScript) {
          // Script already loaded, just reinitialize by calling the init function
          // The script uses DOMContentLoaded, so we need to manually trigger
          const hoverDropdowns = document.querySelectorAll('[data-bs-toggle="dropdown"][data-trigger="hover"]')
          hoverDropdowns.forEach((dropdown) => {
            // Check if already has listeners (by checking for data attribute)
            if (dropdown.dataset.hoverInitialized) return
            
            const menu = dropdown.nextElementSibling
            if (!menu || !menu.classList.contains('dropdown-menu')) return

            const computedStyle = window.getComputedStyle(menu, null)
            if (computedStyle.getPropertyValue('position') === 'static') return

            let timeout = null

            const mouseEnterHandler = () => {
              dropdown.dataset.hovered = 'true'
              if (timeout) {
                clearTimeout(timeout)
                timeout = null
              }
              if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
                const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(dropdown)
                bsDropdown.show()
              }
            }

            const mouseLeaveHandler = () => {
              dropdown.dataset.hovered = 'false'
              timeout = setTimeout(() => {
                if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
                  const bsDropdown = bootstrap.Dropdown.getInstance(dropdown)
                  if (bsDropdown) {
                    bsDropdown.hide()
                  }
                }
              }, 150)
            }

            dropdown.addEventListener('mouseenter', mouseEnterHandler)
            dropdown.addEventListener('mouseleave', mouseLeaveHandler)

            menu.addEventListener('mouseenter', () => {
              if (timeout) {
                clearTimeout(timeout)
                timeout = null
              }
            })

            menu.addEventListener('mouseleave', mouseLeaveHandler)

            menu.addEventListener('hide.bs.dropdown', (e) => {
              if (dropdown.dataset.hovered === 'true') {
                e.preventDefault()
              }
            })

            dropdown.dataset.hoverInitialized = 'true'
          })
        }
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initDropdowns, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [pathname]) // Re-run when route changes

  return null
}
