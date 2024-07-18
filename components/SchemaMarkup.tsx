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
                    "description": "Milkyway Casino offers amazing mobile gaming experience with a variety of casino games available for Android and iOS devices. Download now for free and enjoy the winning!",
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
                        "https://example.com/path/to/app-icon.png"
                    ],
                    "url": "http://example.com/milkyway-casino-app",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "0",
                        "ratingCount": "0"
                    }
                }
            })
        }} />
    </>
  )
}

export default SchemaMarkup