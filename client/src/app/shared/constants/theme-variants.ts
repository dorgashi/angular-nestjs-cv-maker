export const themeVariants = ['primary', 'secondary', 'clear', 'icon'] as const;
export type ThemeVariant = (typeof themeVariants)[number];

export type ThemeVariantMapping = {
    [key in ThemeVariant]: string;
};
