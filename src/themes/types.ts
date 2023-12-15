type HexColor = `#${string}`
type Gradient = {
    top: HexColor
    bottom: HexColor
}
export type ColorPalette = {
    brand_main: HexColor
    brand_light: HexColor
    brand_dark: HexColor
    brand_accent: HexColor
    brand_warning: HexColor
    brand_gradient: Gradient
    mono_gradient: Gradient

    bg_high_contrast: HexColor
    bg_med_contrast: HexColor
    bg_low_contrast: HexColor

    text_high_contrast: HexColor
    text_med_contrast: HexColor
    text_low_contrast: HexColor
}

export interface Theme extends ColorPalette {}
