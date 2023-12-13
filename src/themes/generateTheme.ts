import { shade } from "polished"

const generateThemeColors = (palette: ColorPalette) => {
    return {
        palette: { ...palette },
        globalBackgroundColor: palette.bg_high_contrast,

        baseHeaderColor: palette.text_med_contrast,
        baseTextColor: palette.text_high_contrast,
        brandTextColor: palette.brand_dark,

        linkDefaultColor: palette.brand_accent,
        linkHoverColor: shade(0.2, palette.brand_accent),
        linkActiveColor: shade(0.2, palette.brand_accent),

        buttonMainGradientLeft: palette.brand_gradient.bottom,
        buttonMainGradientMid: palette.brand_gradient.top,
        buttonMainGradientRight: palette.brand_gradient.bottom,
        buttonMainTextColor: palette.bg_high_contrast,

        buttonOutlineBorderColor: palette.text_med_contrast,
        buttonOutlineHoverBorderColor: palette.text_low_contrast,
        buttonOutlineTextColor: palette.text_med_contrast,
        buttonOutlineTextHoverColor: palette.text_high_contrast,

        buttonInverseBackgroundColor: palette.text_high_contrast,
        buttonInverseBorderColor: palette.text_med_contrast,
        buttonInverseHoverBorderColor: palette.text_med_contrast,
        buttonInverseTextColor: palette.text_low_contrast,
        buttonInverseTextHoverColor: palette.bg_low_contrast,

        iconHighContrastColor: palette.text_high_contrast,
        iconMedContrastColor: palette.text_med_contrast,
        iconLowContrastColor: palette.text_low_contrast,
        iconBrandColor: palette.brand_dark,

        cardLightOutline: palette.text_low_contrast,
        cardNoContrast: palette.bg_high_contrast,
        cardLowContrastBackground: palette.bg_low_contrast,
        cardMedContrast: palette.text_med_contrast,
        cardHighContrast: palette.text_med_contrast,
    }
}
