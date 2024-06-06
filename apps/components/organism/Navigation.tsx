import Link from "next/link"

import Image from "next/image"
import { motion } from "framer-motion"
import Switcher from "@components/atoms/Button/Switcher"
import logo from "../../../public/images/logo.png"

const Navigation: React.FC = () => {
    return (
        <nav className="bg-neutral-10 dark:bg-primary-pressed w-100">
            <div className=" px-5 py-[18px] md:px-24 md:w-full ">
                <div className="navbar">
                    <div className="w-full flex items-center justify-between">
                        <Link href="/">
                            <motion.div className="hover:cursor-pointer" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4 }}>
                                <Image src={logo} alt="Overlapp logo" width="100"></Image>
                            </motion.div>
                        </Link>
                        <div className="mx-auto flex mr-10 space-between">
                            <div className="md:block">
                                <div className="ml-16 md:ml-20 flex items-center space-x-10 relative z-20">
                                    <div className="section">
                                        <div>
                                            <div className="footer__socials">
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
                                                <Link href="https://app.termly.io/document/privacy-policy/d1aba773-0491-446b-b739-f3af98f29836">
                                                    <motion.p
                                                        initial={{ opacity: 0, translateY: -40 }}
                                                        animate={{ opacity: 1, translateY: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="nav-link"
                                                        id="nav-2"
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
                                                        id="nav-3"
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
                                                        id="nav-4"
                                                    >
                                                        Cookies
                                                    </motion.p>
                                                </Link>
                                                <Link href="mailto:hello@letsoverlapp.com">
                                                    <motion.p
                                                        initial={{ opacity: 0, translateY: -40 }}
                                                        animate={{ opacity: 1, translateY: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="nav-link"
                                                        id="nav-5"
                                                    >
                                                        Contact
                                                    </motion.p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <Switcher />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:w-fit md:space-x-4 justify-between">
                            <div className="block mr-2 mt-1 md:hidden">
                                <Switcher />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

