import { createGlobalStyle } from "styled-components"
import { Theme } from "./types"

// Your themeing variables
export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.palette.bg_high_contrast};
    color: ${({ theme }) => theme.palette.text_med_contrast};
  }
`
