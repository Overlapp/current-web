import React from "react"
import { useRouter } from "next/router"

function Footer() {
    const router = useRouter()
    return (
        <div className="w-full bg-neutral-10 dark:bg-primary-pressed md:pt-1 md:-mb-10 pt-10">
            <div className="socials__fixed-container">
                <a className="socials__fixed-link" href="https://www.instagram.com/letsoverlapp/" role="button">
                    <i className="fab fa-instagram socials__fixed-icon" />
                </a>
                <a className="socials__fixed-link" href="https://x.com/letsoverlapp" role="button">
                    <i className="fab fa-twitter socials__fixed-icon"></i>
                </a>
                <a className="socials__fixed-link" href="https://www.tiktok.com/@letsoverlapp" role="button">
                    <i className="fab fa-tiktok socials__fixed-icon" />
                </a>
                <a className="socials__fixed-link" href="https://www.linkedin.com/company/letsoverlapp" role="button">
                    <i className="fab fa-linkedin-in socials__fixed-icon" />
                </a>
                <a className="socials__fixed-link" href="https://www.snapchat.com/add/letsoverlapp" role="button">
                    <i className="fab fa-snapchat socials__fixed-icon" />
                </a>
            </div>
            <div className="footer-socials">
                <a className="social-link" href="https://www.instagram.com/letsoverlapp/" role="button">
                    <i className="fab fa-instagram social-icon" />
                </a>
                <a className="social-link" href="https://twitter.com/letsoverlapp" role="button">
                    <i className="fab fa-twitter social-icon" />
                </a>
                <a className="social-link" href="https://www.tiktok.com/@letsoverlapp" role="button">
                    <i className="fab fa-tiktok social-icon" />
                </a>
                <a className="social-link" href="https://www.linkedin.com/company/letsoverlapp" role="button">
                    <i className="fab fa-linkedin-in social-icon" />
                </a>
                <a className="social-link" href="https://www.snapchat.com/add/letsoverlapp" role="button">
                    <i className="fab fa-snapchat social-icon" />
                </a>
                <a className="social-link" onClick={() => router.push("mailto:hello@letsoverlapp.com")} role="button">
                    <i className="fa fa-envelope social-icon" />
                </a>
            </div>
            <br></br>
            <div className="bpt-links">
                <a className="social-link" href="https://app.termly.io/document/terms-of-use-for-website/38a8003a-2bb3-40f9-a150-f89f2a4fbf87" role="button">
                    TERMS OF USE
                </a>
                <a className="social-link" href="https://app.termly.io/document/privacy-policy/d1aba773-0491-446b-b739-f3af98f29836" role="button">
                    PRIVACY
                </a>
                <a className="social-link" href="https://app.termly.io/document/cookie-policy/fb2341c1-d489-4e3c-a7cc-6a733f9144c4" role="button">
                    COOKIES
                </a>
            </div>
            <div id="copyright">&copy; {new Date().getFullYear()} Overlapp</div>
        </div>
    )
}

export default Footer

