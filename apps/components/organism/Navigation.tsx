import React, { useEffect, useState } from "react"

import Link from "next/link"

import Image from "next/image"
import { motion } from "framer-motion"
import Switcher from "@components/atoms/Button/Switcher"
import logo from "../../../public/images/logo.png"

import toggleNavigation from "apps/helpers/toggleNavigation"

function Navigation() {

    const [navIsOpen, setNavIsOpen] = useState(false)

    return (
        <>
            <nav className="bg-neutral-10 dark:bg-primary-pressed w-100">
                <div className="md:px-24 md:w-full">
                    <div className="navbar">
                        <div className="w-full flex items-center justify-between">
                            <Link href="/">
                                <motion.div className="hover:cursor-pointer pt-6" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4 }}>
                                    <Image src={logo} alt="Overlapp logo" width="100"></Image>
                                </motion.div>
                            </Link>
                            <div className="mx-auto flex space-between">
                                <div className="md:block">
                                    <div className="ml-16 md:ml-20 flex items-center space-x-10 relative z-20">
                                        <div className="section">
                                            <div>
                                                <div className="footer__socials">
                                                    <div className="main-links">
                                                        <Link id="blog-link" href="/posts">
                                                            <motion.p
                                                                initial={{ opacity: 0, translateY: -40 }}
                                                                animate={{ opacity: 1, translateY: 0 }}
                                                                transition={{ duration: 0.4 }}
                                                                className="nav-link"
                                                                id="nav-1"
                                                            >
                                                                Blog
                                                            </motion.p>
                                                        </Link>
                                                        <Link id="demo-link" href="/demo">
                                                            <motion.p
                                                                initial={{ opacity: 0, translateY: -40 }}
                                                                animate={{ opacity: 1, translateY: 0 }}
                                                                transition={{ duration: 0.4 }}
                                                                className="nav-link"
                                                                id="nav-1"
                                                            >
                                                                Demo
                                                            </motion.p>
                                                        </Link>
                                                    </div>
                                                    <Link href="https://app.termly.io/document/privacy-policy/d1aba773-0491-446b-b739-f3af98f29836">
                                                        <motion.p
                                                            initial={{ opacity: 0, translateY: -40 }}
                                                            animate={{ opacity: 1, translateY: 0 }}
                                                            transition={{ duration: 0.4 }}
                                                            className="nav-link"
                                                            id="nav-3"
                                                        >
                                                            Privacy
                                                        </motion.p>
                                                    </Link>
                                                    <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=38a8003a-2bb3-40f9-a150-f89f2a4fbf87">
                                                        <motion.p
                                                            initial={{ opacity: 0, translateY: -40 }}
                                                            animate={{ opacity: 1, translateY: 0 }}
                                                            transition={{ duration: 0.4 }}
                                                            className="nav-link"
                                                            id="nav-4"
                                                        >
                                                            Terms of Use
                                                        </motion.p>
                                                    </Link>
                                                    <Link href="https://app.termly.io/document/cookie-policy/fb2341c1-d489-4e3c-a7cc-6a733f9144c4">
                                                        <motion.p
                                                            initial={{ opacity: 0, translateY: -40 }}
                                                            animate={{ opacity: 1, translateY: 0 }}
                                                            transition={{ duration: 0.4 }}
                                                            className="nav-link"
                                                            id="nav-5"
                                                        >
                                                            Cookies
                                                        </motion.p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:inline flex pr-[150px] md:pr-[20px] pt-10 py-[18px] ">
                                <Switcher />
                            </div>
                            <div className="navigation-content">
                                <div className="toggle-container">
                                    <i
                                        onClick={() => {
                                            toggleNavigation(navIsOpen)
                                            setNavIsOpen((prevValue) => !prevValue)
                                        }}
                                        className="fa-solid fa-bars nav__toggle-btn"
                                    />
                                </div>
                                <div className="nav-container">
                                    <p className="-mt-20 font-gilroy-bold text-center italic md:text-left pt-56 text-3xl md:text-7xl">
                                        <Link href="/demo">DEMO</Link>
                                        <br></br>
                                        <br></br>
                                        <Link href="/posts">BLOG</Link>
                                        <br></br>
                                        <br></br>
                                        <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=d1aba773-0491-446b-b739-f3af98f29836">PRIVACY</Link>
                                        <br></br>
                                        <br></br>
                                        <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=38a8003a-2bb3-40f9-a150-f89f2a4fbf87">TERMS OF USE</Link>
                                        <br></br>
                                        <br></br>
                                        <Link href="https://app.termly.io/document/cookie-policy/fb2341c1-d489-4e3c-a7cc-6a733f9144c4">COOKIES</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation













































