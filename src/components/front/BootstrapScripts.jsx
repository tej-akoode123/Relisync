'use client'

import Script from 'next/script'

export default function BootstrapScripts() {
  const handleBootstrapLoad = () => {
    // Load vanilla dropdown hover (no jQuery needed)
    if (typeof window === 'undefined') return
    
    // Check if already loaded
    if (document.querySelector('script[src="/front-pages/js/dropdown-hover-vanilla.js"]')) return
    
    const hoverScript = document.createElement('script')
    hoverScript.src = '/front-pages/js/dropdown-hover-vanilla.js'
    hoverScript.onload = () => {
      // Then initialize dropdowns
      if (!document.querySelector('script[src="/front-pages/js/init-dropdowns.js"]')) {
        const initScript = document.createElement('script')
        initScript.src = '/front-pages/js/init-dropdowns.js'
        document.body.appendChild(initScript)
      }
    }
    document.body.appendChild(hoverScript)
  }

  return (
    <Script 
      src="/front-pages/js/bootstrap.js" 
      strategy="lazyOnload"
      onLoad={handleBootstrapLoad}
    />
  )
}
