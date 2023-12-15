import { createGlobalStyle } from "styled-components"
import { Theme } from "./types"

// Your themeing variables
export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.bg_high_contrast};
    color: ${({ theme }) => theme.text_med_contrast};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`
