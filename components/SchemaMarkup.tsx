const SchemaMarkup = () => {
  return (
    <>
     <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntity": {
                    "@type": "MobileApplication",
                    "name": "Milkyway Casino App",
                    "description": "Find the improved Milky Way V. 3. 0 - Download the gaming app for IOS and Android or play games online.",
                    "applicationCategory": "GameApplication",
                    "operatingSystem": ["Android", "iOS"],
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD",
                        "availability": "http://schema.org/InStock",
                        "seller": {
                            "@type": "Organization",
                            "name": "Milkyway Casino"
                        }
                    },
                    "image": [
                        "https://milkywayonline.net/og-cover.webp"
                    ],
                    "url": "https://milkywayonline.net"
                }
            })
        }} />
    </>
  )
}

export default SchemaMarkup