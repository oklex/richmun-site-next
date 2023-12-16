import styled, { css } from "styled-components"

const sizes = {
    small: {
        font: "1.5rem",
        tabletFont: "1.5rem",
        line: "2.1rem",
    },
    regular: {
        font: "1.8rem",
        tabletFont: "2.0rem",
        line: "2.6rem",
    },
}

type TextProps = {
    align?: "left" | "center" | "right"
    size?: "small" | "regular"
}

export const Text = styled.p<TextProps>`
    color: ${({ theme }) => theme.colors.baseTextColor};
    font-family: "Lato", sans-serif;
    font-weight: 300;

    ${({ size = "regular" }) => css`
        font-size: ${sizes[size].font};
        line-height: ${sizes[size].line};

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${sizes[size].tabletFont};
        }
    `}

    margin: 0;
    text-align: ${({ align = "inherit" }) => align};
`

export const TextGroup = styled.div`
    p + p {
        margin-top: 2.1rem;
    }
`
