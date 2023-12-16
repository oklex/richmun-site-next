import React, { ReactElement } from "react"
import { DarkmodeToggle } from "@components/DarkmodeToggle"

const Home = (): ReactElement => {
    return (
        <div>
            Hello world
            <div>
                <DarkmodeToggle />
            </div>
        </div>
    )
}

export default Home
