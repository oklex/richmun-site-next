import React, { ReactNode, ReactElement, useEffect } from "react"
import styled from "styled-components"

// import { Navigation, Footer } from '@components';
import { BaseContainer } from "./containers"

type Props = {
    location: Location
    children: ReactNode
}
export const PageLayout = ({ location, children }: Props): ReactElement => {
    const { pathname } = location

    useEffect(() => {
        console.log("viewing page: ", pathname)
    }, [])

    // add background image support
    return (
        <AppBackground>
            <PageBackground id={pathname}>
                {/* <Navigation pathname={pathname} /> */}
                <PageContainer>{children}</PageContainer>
                {/* <Footer /> */}
            </PageBackground>
        </AppBackground>
    )
}

const AppBackground = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.cardLowContrastBackground};
`

const PageBackground = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.globalBackgroundColor};
`

const PageContainer = styled(BaseContainer)`
    margin-top: 1rem;
`
