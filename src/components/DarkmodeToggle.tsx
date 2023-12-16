import React, { ReactElement, useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { LOCAL_STORAGE_THEME_KEY, Themes } from "@src/themes/ThemeProvider"

export const DarkmodeToggle = (): ReactElement => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    const onChangeTheme = (theme: Exclude<Themes, undefined>): void => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
        setTheme(theme)
    }

    if (!mounted) {
        return <></>
    }

    return (
        <select
            value={theme}
            onChange={(e) =>
                onChangeTheme(e.target.value as Exclude<Themes, undefined>)
            }
        >
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    )
}
