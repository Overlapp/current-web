// @ts-nocheck

import {
       FacebookShareButton,
       FacebookIcon,
       FacebookMessengerShareButton,
       FacebookMessengerIcon,
       LinkedinShareButton,
       LinkedinIcon,
       TwitterShareButton,
       XIcon,
       WhatsappShareButton,
       WhatsappIcon,
       TelegramShareButton,
       TelegramIcon,
       RedditShareButton,
       RedditIcon,
       EmailShareButton,
       EmailIcon
} from "react-share"

export const ShareButtons = () => {
    return (
        <>
            <div className="share-buttons-mobile">
                <FacebookShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <FacebookIcon />
                </FacebookShareButton>
                <FacebookMessengerShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <FacebookMessengerIcon />
                </FacebookMessengerShareButton>
                <LinkedinShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <LinkedinIcon />
                </LinkedinShareButton>
                <TwitterShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <XIcon />
                </TwitterShareButton>
                <WhatsappShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <WhatsappIcon />
                </WhatsappShareButton>
                <TelegramShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <TelegramIcon />
                </TelegramShareButton>
                <RedditShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <RedditIcon />
                </RedditShareButton>
                <EmailShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <EmailIcon />
                </EmailShareButton>
            </div>
        </>
    )
}

export default ShareButtons
