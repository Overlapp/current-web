import { Fragment } from "react"
import type { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import Form from "@components/Form"
import Footer from "@components/organism/Footer"
import en from "@locales/en"

const Home: NextPage = () => {
    const router = useRouter()
    const { locale } = router

    const lang = locale === "id" ? en : en

    const emailHandler = () => {
        window.open("mailto:hello@letsoverlapp.com")
    }
    return (
        <Fragment>
            <Meta title="Overlapp" />

            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed md:pt-8 -mb-8">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-24 pt-14 md:pt-28 md:pb-10 pb-48 flex flex-col md:flex-row justify-between">
                        <div className="topping">
                            <p className="text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-center md:text-left pt-56 text-3xl md:text-7xl">
                                {lang.greeting}
                                <br></br>
                                {lang.greeting2}
                                <br></br>
                                {lang.greeting3}
                                <br></br>
                                <span className="text-transparent rounded-lg bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 font-gilroy-bold bg-opacity-50"> Genuine </span>
                                {lang.greeting4}
                            </p>
                            {/* <>
                                <button
                                    onClick={emailHandler}
                                    className="contact-btn md:mt-8 contact-button rounded-md relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-indigo-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px] mb-20"
                                >
                                    <span className="relative z-12">CONTACT</span>
                                </button>
                            </> */}
                        </div>
                        <div className="gif w-full md:w-1/2 pl-0 md:pl-16 md:mb-1">
                            <div className="w-full h-full bg-gradient-to-r bg-gradient-to-r from-transparent via-indigo-600 to-transparent relative items-center justify-center ml-12 -mt-20 md:pt-5 md:pb-5">
                                <Image src="/images/reactions.gif" className="gif-image" width={340} height={420} alt="reactions" />
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export default Home

