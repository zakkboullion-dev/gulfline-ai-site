import Script from 'next/script'

// Google Analytics 4 and the Meta pixel. Each loads only when its ID is set in the
// environment, so the site ships with no tracking until the IDs exist:
//   NEXT_PUBLIC_GA_ID          e.g. G-XXXXXXXXXX
//   NEXT_PUBLIC_META_PIXEL_ID  e.g. 1234567890123456
// The IDs are checked against a strict pattern before they reach an inline script.
const GA_ID = /^G-[A-Z0-9]{4,}$/.test(process.env.NEXT_PUBLIC_GA_ID ?? '')
  ? process.env.NEXT_PUBLIC_GA_ID
  : null
const PIXEL_ID = /^\d{6,}$/.test(process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '')
  ? process.env.NEXT_PUBLIC_META_PIXEL_ID
  : null

export function Tracking() {
  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  )
}
