import { ReactNode } from "react"
import styled, { css } from "styled-components"

export type ButtonProps = {
    children: ReactNode
    disabled?: boolean
    variant?: "primary" | "outline" | "inverse" // removing purple and flat types
    size?: "small" | "regular" | "large"
    fillWidth?: true
    spacingTop?: true
}

export const Button = styled.button<ButtonProps>`
    font-family: Lato, sans-serif;
    font-size: 18px; // keep constant
    line-height: 1.2;

    border-radius: 5px;
    display: block;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); // move to palette eventually

    ${({ variant }) =>
        variant === "primary" &&
        css`
            transition: 0.5s;
            color: ${({ theme }) => theme.colors.buttonMainTextColor};
            background: linear-gradient(90deg, ${({ theme }) =>
                theme.colors.buttonMainGradientLeft} 0%, ${({ theme }) =>
            theme.colors.buttonMainGradientMid} 50%, ${({ theme }) =>
            theme.colors.buttonMainGradientRight} 100%)
            background-size: 200% auto;

            &:hover {
                background-position: right center;
            }
        `}

    ${({ variant }) =>
        variant === "outline" &&
        css`
            transition: 0.2s;
            border: 1px solid;
            color: ${({ theme }) => theme.colors.buttonOutlineTextColor};
            border-color: ${({ theme }) =>
                theme.colors.buttonOutlineBorderColor};
            &:hover {
                border-color: ${({ theme }) =>
                    theme.colors.buttonOutlineHoverBorderColor};
                color: ${({ theme }) =>
                    theme.colors.buttonOutlineTextHoverColor};
            }
        `}

  ${({ variant }) =>
        variant === "inverse" &&
        css`
            transition: 0.2s;
            border: 1px solid;
            background: ${({ theme }) =>
                theme.colors.buttonInverseBackgroundColor};
            color: ${({ theme }) => theme.colors.buttonInverseTextColor};
            border-color: ${({ theme }) =>
                theme.colors.buttonInverseBorderColor};
            &:hover {
                border-color: ${({ theme }) =>
                    theme.colors.buttonInverseHoverBorderColor};
                color: ${({ theme }) =>
                    theme.colors.buttonInverseTextHoverColor};
            }
        `}

    ${({ size }) =>
        size === "large" &&
        css`
            padding: 1rem 3rem;
            margin-top: 1.3rem;
        `}
    ${({ size }) =>
        (!size || size === "regular") &&
        css`
            padding: 0.5em 1em;
            margin-top: 0rem;
        `}
    ${({ size }) =>
        size === "small" &&
        css`
            padding: 0.25em 0.5em;
            margin-top: 0rem;
            font-size: 14px; // override
            line-height: 1.2;
        `}

  ${({ fillWidth }) =>
        fillWidth &&
        css`
            width: 100%;
        `}

    ${({ disabled, variant }) =>
        disabled &&
        css`
            cursor: not-allowed;
            position: relative;

            &:before,
            &:after {
                content: "";
                position: absolute;
                width: 0%;
                height: 1px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin-top: -0.5px;
                background: ${variant === "primary"
                    ? ({ theme }) => theme.colors.buttonMainTextColor
                    : ({ theme }) => theme.colors.buttonOutlineTextColor};
            }

            &:before {
                left: -2.5px;
            }
            &:after {
                right: 2.5px;
                background: ${variant === "primary"
                    ? ({ theme }) => theme.colors.buttonMainTextColor
                    : ({ theme }) => theme.colors.buttonOutlineTextColor};
                transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
            }

            &:hover {
                &:before {
                    background: ${variant === "primary"
                        ? ({ theme }) => theme.colors.buttonMainTextColor
                        : ({ theme }) => theme.colors.buttonOutlineTextColor};
                    width: 80%;
                    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                &:after {
                    background: transparent;
                    width: 80%;
                    transition: 0s;
                }
            }
        `}
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: 15px;
    margin: 15px 0px;
`
