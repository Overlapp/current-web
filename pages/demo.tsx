import { Fragment } from "react"
import type { NextPage } from "next"
import VideoEmbed from "../apps/components/VideoEmbed"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import ShareButtons from "@components/ShareButtons"
import Footer from "@components/organism/Footer"

const Demo: NextPage = () => {
    return (
        <Fragment>
            <Meta title="Overlapp" />
            <PagesLayout>
                <div className="bg-gradient-to-r bg-gradient-to-r from-transparent via-indigo-800 to-transparent dark:bg-slate-900 form-container">
                    <div className="video-container-demo">
                        <VideoEmbed embedId="S7ryxFtkyww" />
                    </div>
                    <p className="demo-text md:pt-60  text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-center mr-4 pt-6 pb-6 text-2xl">
                        Thanks for watching our demo!<br></br>
                        We'd love to hear your thoughts and feedback to make Overlapp even better.
                        <br></br><br></br><br></br>
                        Feel free to share!
                    </p>
                    <div className="md:text-center">
                        <ShareButtons />
                    </div>
                    <div className="formbrick">
                        <iframe src="https://app.formbricks.com/s/clynoypwn000cy5gss0uhi1so" width="100%" height="500" style={{ border: "none" }} title="Contact Form"></iframe>
                    </div>
                </div>
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export default Demo
