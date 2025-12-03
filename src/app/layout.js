import Script from 'next/script'
import { Inter } from 'next/font/google'
import ScriptLoader from '@/components/front/ScriptLoader'
import BootstrapScripts from '@/components/front/BootstrapScripts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Relisync UI',
  description: 'Relisync Admin Dashboard',
  viewport: 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-bs-theme="light" data-skin="default" data-template="front-pages-no-customizer" className="layout-navbar-fixed layout-wide">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/front-pages/images/favicon/favicon.ico" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        
        {/* Core CSS - Import in exact order from HTML */}
        <link rel="stylesheet" href="/front-pages/css/iconify-icons.css" />
        <link rel="stylesheet" href="/front-pages/css/node-waves.css" />
        <link rel="stylesheet" href="/front-pages/css/core.css" />
        <link rel="stylesheet" href="/front-pages/css/demo.css" />
        <link rel="stylesheet" href="/front-pages/css/front-page.css" />
        
        {/* Vendors CSS */}
        <link rel="stylesheet" href="/front-pages/css/nouislider.css" />
        <link rel="stylesheet" href="/front-pages/css/swiper.css" />
        
        {/* Page CSS */}
        <link rel="stylesheet" href="/front-pages/css/front-page-landing.css" />
        
        {/* Image visibility fix */}
        <link rel="stylesheet" href="/front-pages/css/image-fix.css" />
      </head>
      <body className={inter.className}>
        {/* Head Scripts - loaded before interactive (exact order from HTML) */}
        <Script src="/front-pages/js/autocomplete-js.js" strategy="beforeInteractive" />
        <Script src="/front-pages/js/helpers.js" strategy="beforeInteractive" />
        <Script src="/front-pages/js/front-config.js" strategy="beforeInteractive" />
        
        {/* Body Scripts - loaded before render */}
        <Script src="/front-pages/js/mega-dropdown.js" strategy="lazyOnload" />
        
        {children}
        
        {/* Script Loader - handles Swiper and front-page-landing.js dependencies */}
        <ScriptLoader />
        
        {/* Core JS - loaded after page load (exact order from HTML) */}
        <Script src="/front-pages/js/popper.js" strategy="lazyOnload" />
        <BootstrapScripts />
        <Script src="/front-pages/js/node-waves.js" strategy="lazyOnload" />
        
        {/* Vendors JS */}
        <Script src="/front-pages/js/nouislider.js" strategy="lazyOnload" />
        
        {/* Main JS - patched version with null checks */}
        <Script 
          src="/front-pages/js/front-main.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
