// @ts-ignore

import { Fragment } from "react"
import type { NextPage } from "next"
import VideoEmbed from "../apps/components/VideoEmbed"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import Footer from "@components/organism/Footer"

const Demo: NextPage = () => {
    return (
        <Fragment>
            <Meta title="Overlapp" />
            <PagesLayout>
                <div className="demo">
                    <VideoEmbed embedId="mtGPU6z-mCc" />
                    <iframe src="https://app.formbricks.com/s/clynoypwn000cy5gss0uhi1so" width="100%" height="500" style={{ border: "none" }} title="Contact Form"></iframe>
                </div>
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export default Demo
