import { Fragment } from "react"
import Navigation from "apps/components/organism/Navigation"
import { CrispProvider } from "apps/components/Crisp-Provider"

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

