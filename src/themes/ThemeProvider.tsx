import {
    ReactElement,
    ReactNode,
    useState,
    useEffect,
} from "react"
import { ThemeProvider as StyledComponentsThemes } from "styled-components"
import { useTheme } from "next-themes"

import { LightTheme } from "./LightTheme"
import { DarkTheme } from "./DarkTheme"
import { Theme } from "./types"

export const LOCAL_STORAGE_THEME_KEY = "theme"
export type Themes = "system" | "light" | "dark" | "mono" | undefined

export const ThemeProvider = ({
    children,
}: {
    children: ReactNode
}): ReactElement => {
    const { theme, setTheme } = useTheme()
    const [savedTheme, setSavedTheme] = useState<Themes>()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        const fetchedTheme = localStorage.getItem(
            LOCAL_STORAGE_THEME_KEY
        ) as Themes
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme:dark)"
        ).matches

        // start on default theme always, so as to not mess up pre-rendered styling
        setTheme("light")
        setSavedTheme(
            fetchedTheme ? fetchedTheme : prefersDark ? "dark" : "system"
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        if (savedTheme) {
            setTimeout(() => setTheme(savedTheme), 0)
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, savedTheme)
        }
    }, [savedTheme, setTheme])

    const CustomTheme = ((): Theme => {
        if (theme === "light" || theme === undefined) return LightTheme
        else return DarkTheme
    })()

    return (
        <StyledComponentsThemes theme={CustomTheme}>
            {children}
        </StyledComponentsThemes>
    )
}
