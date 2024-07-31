import { Fragment } from "react"
import type { NextPage } from "next"
import VideoEmbed from "../apps/components/VideoEmbed"
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

    return (
        <Fragment>
            <Meta title="Overlapp" />
            <PagesLayout>
                <div className="form-vid w-full bg-neutral-10 dark:bg-primary-pressed md:pt-8 pt-24">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-24 md:pt-28 md:pb-10 pb-48 flex flex-col md:flex-row justify-between">
                        <div className="topping">
                            <p className="text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-center md:text-left pt-56 text-3xl md:text-7xl">
                                {lang.greeting}
                                <br />
                                {lang.greeting2}
                                <br />
                                {lang.greeting3}
                                <br />
                                {lang.greeting4}
                                <br></br>
                                <span className="text-transparent rounded-lg bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 font-gilroy-bold bg-opacity-50">Genuine </span>
                                {lang.greeting5}
                            </p>
                        </div>
                    </div>
                    <div className="video-container">
                        <VideoEmbed embedId="9spO88SsPw8" />
                    </div>
                </div>
                <Form />
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export default Home

