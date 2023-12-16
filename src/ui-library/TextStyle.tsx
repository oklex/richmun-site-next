import styled, { css } from "styled-components"

type TextStyleProps = {
    gradient?: true | "brand" | "mono" // gradient overrides color
    color?: "blue" | "brand" | "med-contrast" | "low-contrast"
    fancyFont?: boolean

    bold?: boolean
    italic?: boolean
    forceSingleLine?: boolean
    thinFont?: boolean
    spaceLetters?: boolean
    padding?: string
    fontSizeOverride?: number
}

export const TextStyle = styled.span<TextStyleProps>`
    font-weight: ${({ bold }) => (bold ? "700" : "inherit")};
    font-style: ${({ italic }) => (italic ? "italic" : "inherit")};
    padding: ${({ padding }) => (padding ? padding : "0px")};

    ${({ thinFont }) => thinFont && `font-weight: 300 !important;`}
    ${({ spaceLetters }) =>
        spaceLetters && `letter-spacing: 0.11em !important;`}
   ${({ fancyFont }) =>
        fancyFont &&
        css`
            font-family: "Brygada 1918", serif !important;
        `}
   ${({ fontSizeOverride }) =>
        fontSizeOverride &&
        css`
            font-size: ${fontSizeOverride}px !important;
        `}
  ${({ forceSingleLine }) =>
        forceSingleLine &&
        css`
            overflow: hidden;
            white-space: nowrap;
        `}

  
  ${({ color, gradient }) =>
        color === "brand" &&
        !gradient &&
        css`
            color: ${({ theme }) => theme.colors.brandTextColor} !important;
        `}
  ${({ color, gradient, theme }) =>
        color === "blue" &&
        !gradient &&
        `color: ${theme.colors.blueTextColor};`}
  ${({ color, gradient, theme }) =>
        color === "med-contrast" &&
        !gradient &&
        `color: ${theme.colors.medContrastTextColor};`}
  ${({ color, gradient, theme }) =>
        color === "low-contrast" &&
        !gradient &&
        `color: ${theme.colors.lowContrastTextColor};`}


${({ gradient }) =>
        gradient &&
        gradient === "mono" &&
        css`
            background: ${({ theme }) => `-webkit-linear-gradient(
                    -90deg,
                    ${theme.colors.brandMonoTop},
                    ${theme.colors.brandMonoBottom}
                )`};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `}
    ${({ gradient }) =>
        gradient &&
        gradient === "brand" &&
        css`
            background: ${({ theme }) => `-webkit-linear-gradient(
                    -90deg,
                    ${theme.colors.brandGradientTop} 0%,
                    ${theme.colors.brandGradientBottom} 100%
                )`};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `}
`
