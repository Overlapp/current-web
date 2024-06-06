import React from "react"
import { Trans } from "react-i18next"
import VideoEmbed from "./VideoEmbed"

import { AnimationOnScroll } from "react-animation-on-scroll"

function Welcome() {
    return (
        <>
            <div id="welcome" className="section-container dark__accent">
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <section className="welcome section">
                        <div className="section-header">
                            <h2 className="section-title accent-title">
                                <Trans i18nKey="welcome.title" />
                                <br></br>
                                <br></br>
                                <div className="App">
                                    <VideoEmbed embedId="lazl-tsQ9v4" />
                                </div>
                            </h2>
                        </div>
                        <br></br>
                        <br></br>
                        <h4>
                            <strong>
                                <Trans i18nKey="welcome.paragraph1" />
                            </strong>
                            <br></br>
                            <Trans i18nKey="welcome.paragraph2" />
                        </h4>
                    </section>
                </AnimationOnScroll>
            </div>
        </>
    )
}

export default Welcome

