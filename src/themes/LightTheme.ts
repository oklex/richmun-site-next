import { ColorPalette, Theme } from "./types"

const PALETTE: ColorPalette = {
    brand_main: "#4b969b",
    brand_light: "#6dbfc2",
    brand_dark: "#4b969b",
    brand_accent: "#0E638D",
    brand_warning: "#e5e5ff",
    brand_gradient: {
        top: "#0db08c",
        bottom: "#377376",
    },
    mono_gradient: {
        top: "#FFFFFF",
        bottom: "#000000",
    },

    bg_high_contrast: "#FFFFFF",
    bg_med_contrast: "#f5f5f7",
    bg_low_contrast: "#ededed",

    text_high_contrast: "#000000",
    text_med_contrast: "#404040",
    text_low_contrast: "#a8a8a8",
}

export const LightTheme: Theme = {
    ...PALETTE,
}