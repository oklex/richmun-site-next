import { ThemeProvider as NextThemeProvider } from "next-themes"

import { GlobalStyle, ThemeProvider } from "@src/themes"

function MyApp({ Component, pageProps }) {
    return (
        <NextThemeProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </NextThemeProvider>
    )
}

export default MyApp
