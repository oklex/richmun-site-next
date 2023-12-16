import React, { ReactElement } from "react"
import { DarkmodeToggle } from "@components/DarkmodeToggle"
import { InternalLink } from "@ui-library"

const Home = (): ReactElement => {
    return (
        <div>
            Hello world
            <div>
                <DarkmodeToggle />
            </div>
            <InternalLink href="/branding">
                click me to go to main page without animations
            </InternalLink>
        </div>
    )
}

export default Home
