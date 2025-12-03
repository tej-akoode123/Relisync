import Script from 'next/script'

export default function PricingLayout({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/front-pages/css/front-page-pricing.css" />
      {children}
      <Script src="/front-pages/js/front-page-pricing.js" strategy="lazyOnload" />
    </>
  )
}
