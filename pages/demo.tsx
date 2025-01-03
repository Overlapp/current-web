import { Fragment } from "react"
import type { NextPage } from "next"
import VideoEmbed from "../apps/components/VideoEmbed"
import { Meta } from "@modules/Meta"
import PagesLayout from "apps/layouts/PagesLayout"
import ShareButtons from "apps/components/ShareButtons"
// import Form from "@components/Form"
import Footer from "apps/components/organism/Footer"

const Demo: NextPage = () => {
    return (
        <Fragment>
            <Meta title="Overlapp" />
            <PagesLayout>
                <div className="bg-gradient-to-r bg-gradient-to-r from-transparent via-indigo-800 to-transparent dark:bg-slate-900 form-container">
                    <p className="text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-center text-2xl md:pt-80">Check out our demo and share your thoughts below! 👀👇</p>
                    <div className="video-container-demo">
                        <VideoEmbed embedId="D1FBlOfNBzI?feature=share" />
                    </div>
                    <div className="formbrick">
                        <iframe src="https://app.formbricks.com/s/clynoypwn000cy5gss0uhi1so" height="296" width="384" style={{ border: "#a9a9a9", paddingRight: "3rem" }} title="Contact Form"></iframe>
                    </div>
                    <p className="demo-text text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-center mr-4 pt-6 pb-6 -mt-6 text-2xl">
                        <br></br>
                        Share with a friend!
                    </p>
                    <div className="pb-6 md:text-center">
                        <ShareButtons />
                    </div>
                </div>
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export default Demo





