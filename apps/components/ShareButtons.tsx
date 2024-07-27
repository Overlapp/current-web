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
                <WhatsappShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <WhatsappIcon />
                </WhatsappShareButton>
                <EmailShareButton size={30} round={true} url={"https://letsoverlapp.com/demo"}>
                    <EmailIcon />
                </EmailShareButton>
            </div>
        </>
    )
}

export default ShareButtons
