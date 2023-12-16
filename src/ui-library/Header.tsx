import styled, { css } from "styled-components"

type HeadingProps = {
    level: 1 | 2 | 3 | 4
    isTitle?: true
    align?: "left" | "center" | "right" | "justify"

    spaceAfter?: true
    capitalize?: true
    uppercase?: true
    spaceLetter?: true
}

export const Header = styled.h3.attrs<HeadingProps>(({ level }) => ({
    as: `h${level}`,
}))<HeadingProps>`
    color: ${({ theme }) => theme.colors.baseHeaderColor};
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    line-height: 1.2;
    ${({ spaceAfter }) => spaceAfter && "margin-bottom: 0.75rem;"}
    ${({ align }) => align && `text-align: ${align}`};
    ${({ capitalize, uppercase }) => {
        if (uppercase) return `text-transform: uppercase;`
        if (capitalize) return `text-transform: capitalize;`
        return null
    }}
    ${({ spaceLetter }) => spaceLetter && `letter-spacing: 0.11em;`}

  ${({ level, isTitle }) =>
        level === 1 &&
        (isTitle
            ? css`
                  font-size: 5rem;
              `
            : css`
                  font-size: 3.8rem;
              `)}

  ${({ level, isTitle: pageTitle }) =>
        level === 2 &&
        (pageTitle
            ? css`
                  font-size: 3.3rem;
              `
            : css`
                  font-size: 2.8rem;
              `)}

        
${({ level, isTitle: pageTitle }) =>
        (level === 3 || level === 4) &&
        (pageTitle
            ? css`
                  font-size: 2.2rem;
              `
            : css`
                  font-size: 1.8rem;
              `)}
`

export const Label = styled.label<{
    align?: "left" | "center" | "right" | "justify"
}>`
    ${({ align }) => align && `text-align: ${align}`};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: inherit;
`
