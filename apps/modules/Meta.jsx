import { useRouter } from "next/router"
import Script from "next/script"

const defaultMeta = {
    url: "https://letsoverlapp.com",
    title: "Overlapp",
    siteName: "letsoverlapp.com",
    description: "Overlapp",
    robots: "overlapp social media",
    type: "social media app",
}

export const Meta = ({ title }) => {
    const router = useRouter()

    const meta = {
        ...defaultMeta,
    }

    return (
        <head>
            <title>{title}</title>
            <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="description" content="Overlapp" />
            <meta name="keywords" content="Overlapp" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`${meta.url}${router.asPath}`} />
            <link rel="canonical" href={`${meta.url}${router.asPath}`} />
            <meta name="robots" content={meta.robots} />
            {/* Open Graph */}
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content={meta.siteName} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            {/* <meta name="image" property="og:image" content={meta.image} /> */}
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@letsoverlapp" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            {/* <meta name="twitter:image" content={meta.image} /> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
            <Script src="https://kit.fontawesome.com/86237f722d.js" crossorigin="anonymous"></Script>
        </head>
    )
}

