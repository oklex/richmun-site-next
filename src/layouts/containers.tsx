import styled from "styled-components"

export const BaseContainer = styled.div`
    max-width: 110rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 3rem;
    padding-right: 2.5rem;
`

export const NarrowContainer = styled.div`
    margin: 3rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 3rem 10rem 5rem;
    }
`
