export const htmlDefaultInputTypes = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
] as const;

export const htmlExtraInputTypes = ['textarea', 'select'] as const;

export type HTMLDefaultInputType = (typeof htmlDefaultInputTypes)[number];

export type HTMLExtraInputType = (typeof htmlExtraInputTypes)[number];

export type HTMLInputType = HTMLDefaultInputType | HTMLExtraInputType;

export const isDefaultHtmlInputType = (
    variable: HTMLInputType
): variable is HTMLDefaultInputType =>
    htmlDefaultInputTypes.includes(variable as HTMLDefaultInputType);

export const isExtraHtmlInputType = (
    variable: HTMLInputType
): variable is HTMLExtraInputType =>
    htmlExtraInputTypes.includes(variable as HTMLExtraInputType);
