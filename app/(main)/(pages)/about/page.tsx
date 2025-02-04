import CtaSection from "@/components/CtaSection"
import { Fragment } from "react"
import AboutSection from "./AboutSection"

const Page = () => {
    return (
        <Fragment>
            <AboutSection />
            <div className="py-12">
                <CtaSection />
            </div>
        </Fragment>
    )
}

export default Page

