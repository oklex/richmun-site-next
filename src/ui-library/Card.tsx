import styled, { css } from "styled-components"
import { Div } from "./Generics"

type CardProps = {
    onClick?: () => void
    color?: "med-contrast" | "low-contrast" | "no-contrast"
}

export const Card = styled(Div)<CardProps>`
    padding: 3rem;

    ${({ color, theme }) => {
        if (color === "no-contrast")
            return `background-color: ${theme.colors.cardNoContrast};`
        if (color === "med-contrast")
            return `background-color: ${theme.colors.cardMedContrast};`

        if (color === undefined || color === "low-contrast")
            return `background-color: ${theme.colors.cardLowContrastBackground};`
        return `background-color: ${theme.colors.cardLowContrastBackground};`
    }}

    ${({ onClick }) =>
        onClick !== undefined &&
        css`
            box-shadow: 0 0 0 #fff;
            transition-duration: 0.2s;
            cursor: pointer;
            &:hover {
                box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
                    0 1px 3px rgba(0, 0, 0, 0.08); // move to palette eventually
            }
        `}
`
