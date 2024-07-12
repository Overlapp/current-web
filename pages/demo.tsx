import { Fragment } from "react"
import type { NextPage } from "next"
import VideoEmbed from "../apps/components/VideoEmbed"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import Footer from "@components/organism/Footer"

const Home: NextPage = () => {


    return (
        <Fragment>
            <Meta title="Overlapp" />
            <PagesLayout>
                <div className="video-container-demo">
                    <VideoEmbed embedId="mtGPU6z-mCc" />
                </div>
                <div className="form-vid w-full bg-neutral-10 dark:bg-primary-pressed md:pt-8 -mb-8">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-24 pt-14 md:pt-28 md:pb-10 pb-48 pt-24 flex flex-col md:flex-row justify-between">
                        <div className="topping">
                            <p className="text-primary-pressed dark:text-neutral-10 font-gilroy-bold md:text-left pt-56 text-1xl md:text-2xl">
                                1. How would you describe Overlapp to a friend?
                                <br></br>
                                What features or benefits would you emphasize?
                                <br></br>
                                <br></br>
                                2. Do you think you would use Overlapp to organize your interests and fun
                                <br></br>
                                activities and connect with others? Why or why not? If not, what other apps
                                <br></br>or methods do you currently use for this purpose?<br></br>
                                <br></br>
                                3. What stood out to you the most from the demo, whether good or bad?<br></br>
                                Please provide specific details.
                                <br></br>
                                <br></br>
                                4. Anything else on your mind? Comments, suggestions, or questions?
                                <br></br>
                                **Optional:**
                                <br></br>
                                <br></br>- Gender identity:
                                <br></br>
                                Female - Male - Non-binary - Prefer not to say - Other (please specify)
                                <br></br>
                                <br></br>- Age range: - Under 18 - 18-24 - 25-29 - 30-34 - 35-39 - 40-49 - 50-59 - 60+
                                <br></br>
                                <br></br>
                                <br></br>- Add your email for early access and the latest updates!
                                <br></br>
                                <br></br>
                                **Thank you for your time and feedback!**
                            </p>
                        </div>
                    </div>
                </div>
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export default Home
