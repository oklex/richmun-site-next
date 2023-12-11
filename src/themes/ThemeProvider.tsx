import { ReactElement, ReactNode, useState, useEffect } from "react"
import { ThemeProvider as StyledComponentsThemes } from "styled-components"
import { useTheme } from "next-themes"

import { LightTheme } from "./LightTheme"
import { DarkTheme } from "./DarkTheme"

export const LOCAL_STORAGE_THEME_KEY = "theme"
export type Themes = "system" | "light" | "dark" | "mono" | undefined

export const ThemeProvider = ({
    children,
}: {
    children: ReactNode
}): ReactElement => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme:dark)"
        ).matches
        if (savedTheme) setTheme(savedTheme)
        else
            localStorage.setItem(
                LOCAL_STORAGE_THEME_KEY,
                prefersDark ? "dark" : "light"
            )
        setMounted(true)
    }, [])

    const CustomTheme = ((): Record<string, unknown> => {
        if (theme === "light" || theme === "undefined") return LightTheme
        else return DarkTheme
    })()

    return (
        <StyledComponentsThemes theme={CustomTheme}>
            {children}
        </StyledComponentsThemes>
    )
}
