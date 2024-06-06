import { Fragment } from "react"
import Navigation from "@components/organism/Navigation"
import { CrispProvider } from "@components/Crisp-Provider"

const PagesLayout = ({ children }: any) => {
    return (
        <Fragment>
            <Navigation />
            {children}
            <CrispProvider />
        </Fragment>
    )
}

export default PagesLayout

